// Exports GitBook spaces to Markdown with their images.
// Usage: node --env-file=<path to .env with GITBOOK_TOKEN> scripts/export.mjs <spaceId> [<spaceId> ...]
// Output: spaces/<slug>/ with one .md per page, SUMMARY.md, space.json and .gitbook/assets/.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const TOKEN = process.env.GITBOOK_TOKEN;
if (!TOKEN) throw new Error('GITBOOK_TOKEN missing');
const API = 'https://api.gitbook.com/v1';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'spaces');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function request(url, asJson = true) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const res = await fetch(url.startsWith('http') ? url : API + url, {
      headers: url.startsWith('http') && !url.startsWith(API) ? {} : { Authorization: `Bearer ${TOKEN}` },
    });
    if (res.status === 429 || res.status >= 500) {
      await sleep(1500 * (attempt + 1));
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return asJson ? res.json() : Buffer.from(await res.arrayBuffer());
  }
  throw new Error(`Gave up on ${url}`);
}

async function list(path) {
  const items = [];
  let page = null;
  do {
    const sep = path.includes('?') ? '&' : '?';
    const data = await request(path + sep + 'limit=100' + (page ? `&page=${page}` : ''));
    items.push(...(data.items ?? []));
    page = data.next?.page ?? null;
  } while (page);
  return items;
}

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

async function pool(items, size, fn) {
  const queue = [...items];
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (queue.length) await fn(queue.shift());
    }),
  );
}

async function exportSpace(spaceId) {
  const space = await request(`/spaces/${spaceId}`);
  const publishedSlug = space.urls?.published?.replace(/\/$/, '').split('/').pop();
  const slug = slugify(publishedSlug || space.title) || spaceId;
  const dir = join(ROOT, slug);
  const content = await request(`/spaces/${spaceId}/content`);

  // Files first, so page links to them can be rewritten to local paths.
  const files = await list(`/spaces/${spaceId}/content/files`);
  const fileMap = [];
  const usedNames = new Set();
  await pool(files, 4, async (f) => {
    let name = posix.basename(f.git?.path || f.name || f.id).replace(/[<>:"\\|?*]/g, '-');
    while (usedNames.has(name.toLowerCase())) name = `${f.id}-${name}`;
    usedNames.add(name.toLowerCase());
    const target = join(dir, '.gitbook', 'assets', name);
    try {
      const buf = await request(f.downloadURL, false);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, buf);
      fileMap.push({ f, target });
    } catch (err) {
      console.error(`  file failed: ${f.name}: ${err.message}`);
    }
  });

  const pages = [];
  const walk = (list, depth) => {
    for (const p of list) {
      pages.push({ ...p, depth });
      walk(p.pages ?? [], depth + 1);
    }
  };
  walk(content.pages ?? [], 0);
  // Same layout as GitBook Git Sync: a page with sub-pages becomes <path>/README.md, a leaf page <path>.md.
  const docs = new Map(
    pages
      .filter((p) => p.type === 'document')
      .map((p) => [p.path || p.id, (p.pages ?? []).some((c) => c.type === 'document')]),
  );
  const fileFor = (path) => (docs.get(path) ? `${path}/README.md` : `${path}.md`);
  const linkPath = (path) => path.split('/').map(encodeURIComponent).join('/');

  const summary = [`# ${space.title}`, ''];
  let written = 0;
  await pool(
    pages.filter((p) => p.type === 'document'),
    4,
    async (p) => {
      const data = await request(`/spaces/${spaceId}/content/page/${p.id}?format=markdown`);
      const path = p.path || p.id;
      const target = join(dir, fileFor(path));
      let md = data.markdown ?? '';
      for (const { f, target: fileTarget } of fileMap) {
        const rel = relative(dirname(target), fileTarget).split('\\').map(encodeURIComponent).join('/');
        const variants = [f.downloadURL, f.downloadURL.replace(/&/g, '&amp;')];
        for (const v of variants) md = md.split(v).join(rel);
      }
      // GitBook links between pages omit the file name; point them at the exported file so they work on GitHub.
      // Links resolve like URLs (against the page's parent path); fall back to the page's own folder.
      const base = posix.dirname(fileFor(path));
      const re = /\]\((?!https?:|mailto:|#|\.\.?\/\.gitbook)([^)\s#]+)(#[^)\s]*)?(\s+"[^"]*")?\)/g;
      md = md.replace(re, (all, link, hash = '', title = '') => {
        const clean = link.replace(/\/$/, '');
        const resolved = [posix.dirname(path), base]
          .map((b) => posix.normalize(posix.join(b, clean)))
          .find((r) => docs.has(r));
        if (!resolved) return all;
        return `](${linkPath(posix.relative(base, fileFor(resolved)))}${hash}${title})`;
      });
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, md);
      written++;
    },
  );

  for (const p of pages) {
    const indent = '  '.repeat(p.depth);
    if (p.type === 'document') summary.push(`${indent}* [${p.title}](${linkPath(fileFor(p.path || p.id))})`);
    else if (p.type === 'link') summary.push(`${indent}* [${p.title}](${p.target?.url ?? ''})`);
    else summary.push(`${indent}* ${p.title}`);
  }
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'SUMMARY.md'), summary.join('\n') + '\n');
  await writeFile(
    join(dir, 'space.json'),
    JSON.stringify(
      {
        id: space.id,
        title: space.title,
        visibility: space.visibility,
        published: space.urls?.published ?? null,
        createdAt: space.createdAt,
        updatedAt: space.updatedAt,
        exportedAt: new Date().toISOString(),
        pages: written,
        files: fileMap.length,
      },
      null,
      2,
    ) + '\n',
  );
  console.log(`${space.title} -> spaces/${slug}: ${written} pages, ${fileMap.length}/${files.length} files`);
  return { id: space.id, title: space.title, slug, visibility: space.visibility, published: space.urls?.published ?? null, createdAt: space.createdAt, updatedAt: space.updatedAt, pages: written, files: fileMap.length };
}

const ids = process.argv.slice(2);
if (!ids.length) throw new Error('Pass one or more space ids');
const results = [];
for (const id of ids) {
  try {
    results.push(await exportSpace(id));
  } catch (err) {
    console.error(`FAILED ${id}: ${err.message}`);
  }
}
await writeFile(join(ROOT, '..', 'export-result.json'), JSON.stringify(results, null, 2) + '\n');

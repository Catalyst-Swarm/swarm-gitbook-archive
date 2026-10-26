---
description: November 24, 2023
---

# Community Workshop #1

## Attendees:

* **Workgroup**: Juana Attieh, NewMindflow (Anamaria & Rares), Felix Weber
* **Community**: Kenric, Abdallah, Dominik, Rojo, Peter Elfrink, Vanessa, Robert Oschler, Guillermo

{% embed url="https://youtu.be/EM_EoXcsFQs" %}

## **Meeting Summary**

{% hint style="info" %}
Interpretation and précis produced by [QADAO](https://qadao.io)
{% endhint %}

## Introduction

Introduction - Felix - [00:02](https://youtu.be/EM_EoXcsFQs?t=2)

The purpose of these workshops is to ideate on the requirements for a Deep Funding Contribution Token. This is the first of two workshops. Documentation of the second workshop can be found [here](community-workshop-2.md).

{% hint style="info" %}
Deep Funding Proposal - [Requirements For A Deep Funding Contribution Token](https://deepfunding.ai/proposal/requirements-for-a-deep-funding-contribution-token/)
{% endhint %}

The result of these workshops will be a recommendation paper which will be sent out to everybody. The hope is that this recommendation paper will translate into a more serious development and implemention proposal in the next funding round.

## Background

As Felix mentioned this is an ideation session to establish what a Deep Funding Contribution Token could look like - Juana - [02:01](https://youtu.be/EM_EoXcsFQs?t=121)

Within the Singularity Net Deep Funding programme contribution and engagement is incorporated in each community member's voting power. A lot of complex data is currently only captured off-chain.

So we want to ideate around how do we capture contributions and engagements on-chain, what that would look like and how do we represent them in a token.

We have a couple of questions we would like to ask and then we open up the room for any questions or comments - Juana - [02:34](https://youtu.be/EM_EoXcsFQs?t=154)

## Questions

### **1) Will the tokens be represented as fungible or non fungible (NFTs) ?**

In a previous [Expert Workshop](../expert-workshops/expert-workshop-1.md) we considered whether contribution tokens shoud be represented in a fungible or non-fungible form or a mixture of both. We also had a presentation about solutions built on [Andamio](https://www.andamio.io) and [Mesh.js ](https://meshjs.dev)which have parallels with our contribution token requirements. Andamio uses some form of an Identity token linked to a smart contract that captures all contributions in metadata.

On uses of fungible versus non fungible (NFTs) tokens - Rares - [03:45](https://youtu.be/EM_EoXcsFQs?t=225)

As mentioned, in a previous session we looked at a solution that used Non Fungible Tokens (NFTs) as an identity token. In this scenarion a token would be updated with contributions after each Deep Funding round. We concuded that a Non Fungible Token (NFT) would not offer the same flexibity as a Fungible Token. Although a NFT coud still be implemented as an identity token as an alternative to login credentials for a SWAE account.

In contrast a Fungible Token would more easily incorporate the off-chain contribution data of Deep Funding. This would offer the flexibity to introduce such features as conviction voting (where tokens are burnt or spent upon voting to avoid excessive accumulation) or achievement badges that could be traded.

A Fungible Token solution lends itself to capturing contributions in the wider Singularity Net ecosystem - Rares - [05:51](https://youtu.be/EM_EoXcsFQs?t=351)

So Deep Funding voting weight could be infuenced by contributions in other areas.

Any initial questions ? - Juana - [06:43](https://youtu.be/EM_EoXcsFQs?t=403)

### **2) Should historical contribution data be retroactively added or should everyone start from a clean slate ?** - Juana - [10:25](https://youtu.be/EM_EoXcsFQs?t=625)

What would be the benefits and limitations for not representing historical data ?

I would think that historical data would be used for building a proof of concept in a pre-production network - Robert

I am two minds (undecided) on this issue - Vanessa - [12:17](https://youtu.be/EM_EoXcsFQs?t=737)

Because it may be negative to wipe out people's previous contributions. But I think there is a lot to be said for starting from scratch and people knowing what elements of contribution will matter. There is also something to be said for starting afresh each fund so people do not get a chance to accumulate too much.

In my mind it would be good to include historical data as much as we can - Peter - [13:04](https://youtu.be/EM_EoXcsFQs?t=784)

Maybe we can reduce an emphasis on historica data by having two different varieties of contribution data. One that looks at all contributions  and another that looks at current contributions. I assume you can play around with this ?

If a CIP-68 Non Fungible Token (NFT) model were followed historical contributions coud be recorded on one NFT and current contributions on a newer NFT - Robert - [13:43 ](https://youtu.be/EM_EoXcsFQs?t=823)

I agree with Robert that it makes sense to take historical data and apply it to a test version and then manipulate parameters - Curtis - [14:10](https://youtu.be/EM_EoXcsFQs?t=850)

Are we approaching this just from a Cardano perspective ? As Deep Funding and Singularity Net also has token holders on [Ethereum](https://ethereum.org) - Peter - [14:57](https://youtu.be/EM_EoXcsFQs?t=897)

We do have some tooling available thqt connects wallet balances in Cardano and Etherium.

I think that is really good point Peter - Felix - [15:33](https://youtu.be/EM_EoXcsFQs?t=934)

Because a contribution token relates to reputation systems. And reputation should be translatable across different ecosystems. So I do not have seperate reputations to manage on Cardano and Etherium. Although this could present practical issues such as high transaction fees on Etherium compared with low fees on Cardano.

You can build an underlying platform that authenticates with different chains such as Etherium - Curtis - [16:34](https://youtu.be/EM_EoXcsFQs?t=994)

But your assets need to be managed on Cardano.

Not convinced low transaction fees are compelling reason to use Cardano as Etherium bridge to Binance might offer low transaction fees in the future - Rojo - [17:26](https://youtu.be/EM_EoXcsFQs?t=1046)

I am in favour of using existing technology solutions for cross-chain tokens such as wrapping and un-wrapping - Robert - [18:34](https://youtu.be/EM_EoXcsFQs?t=1114)

Where tokens are wrapped on a destination chain and burnt on their source chain.

We do have at least one multi-chain wallet - Rares - [20:09](https://youtu.be/EM_EoXcsFQs?t=1209)

That can be used to see token assets on different chains.

### **3) What data should be off chain and what should be on chain ?**

This leads us to another question of what data should be off chain or on chain - Felix - [20:59](https://youtu.be/EM_EoXcsFQs?t=1252)

Off-chain data may be important to facilitate communication across multiple protocols.&#x20;

So in considering contribution tokens specifically, what parts should be on chain and what parts off chain ?

That level of detail feels like something you would expand on once you got into the detail of the project - Curtis - [21:46](https://youtu.be/EM_EoXcsFQs?t=1306)

Using the [Midnight DevNe](https://iohk.io/en/blog/posts/2023/10/05/calling-trailblazers-to-midnight/)t sandbox (a data protection blockchain) seems like a good option that securely stores your off-chain data and serves multiple block chain ecosystems.

We should consider what should be on-chain versus off-chain as early as possible - Felix

Thinking about what goes on-cain or off-chain gives you an insight into the architecture you would like to use - Rojo - [23:09](https://youtu.be/EM_EoXcsFQs?t=1389)

[IPFS](https://ipfs.tech) (Interplanetary File System) as an off-chain storage solution has not worked well for me - Robert - [23:41](https://youtu.be/EM_EoXcsFQs?t=1423)

Why not store off-chain data on standard servers and the hash of document on-chain ? So people would know whether or not it has been tampered with.

How would you deal with fault tolerance with that solution ? - Rojo - [24:56](https://youtu.be/EM_EoXcsFQs?t=1496)

How do you source the authentic version ?

You could use Oracle technology which has built-in mechanisms for doing that kind of thing - Robert

This has the added advantage of enabling smart contracts to execute conditionally on what data is found in an oracle.

In this case I am wondering what oracle service we would use (given that we are not building our own) - Rojo - [26:03](https://youtu.be/EM_EoXcsFQs?t=1563)

There is [NeoFS](https://neo.org/technology#neo-fs) ("a distributed, decentralised object storage network") on the [Neo](https://neo.org) blockchain - Robert

NeoFS has automatic data replication but so do standard (Cloud) services such as [AWS](https://aws.amazon.com/) (Amazon Web Services).

Oracles on the Cardano infrastructure include [Charli3](https://charli3.io) and [Orcfax](https://orcfax.io) - Curtis - [27:01](https://youtu.be/EM_EoXcsFQs?t=1621)

To cross check or validate data someone would need to be an information provider to an Oracle.

Another consideration is what is the cost of storing data off-chain or on-chain ? - Curtis - [28:10](https://youtu.be/EM_EoXcsFQs?t=1690)

The maintenance and updating costs of using data services such as Midnight, IPFS etc.

We are capturing contribution or reputation ... - Juana - [28:41](https://youtu.be/EM_EoXcsFQs?t=1721)

The aim is to capture data informing this to come from multple sources such as interactions on Discord, participation in meetings or your Wallet history. The broader question is what makes sense to capture on or off chain theoretically.

I see two different states of that data to collect - Curtis - [29:30](https://youtu.be/EM_EoXcsFQs?t=1770)

That is, after an initial state of data retrieval or collection from different sources there is a second state of processing through some kind of algorithm that determines a contribution or reputation score.

It makes sense for that score to be on-chain.

As previously mentioned, by having access to these different metrics and parameters we can experiment with different algorithms on a test net.

So independent access to the relevant data parameters is important.

Given the scale it would make sense to track these different data sources off chain - Rojo - [30:46](https://youtu.be/EM_EoXcsFQs?t=1846)

And only scores or intermediary data would be on-chain.

I agree that there are restrictions to on-chain data given the number of bytes it is possible to record in a single on-chain metadata transaction - Felix

Additionally once something is on-chain it is public and accessible to everyone. So there are privacy concerns. A balance needs to be made between encouraging and rewarding contributions and safeguarding (no exploiting) an individual's data. So what is off-chain may not be accessible to everyone.

### Purpose of a reputation score

Purpose of a reputation score - Kenric - [33:17](https://youtu.be/EM_EoXcsFQs?t=1997)

[Ben Goertzel](https://en.wikipedia.org/wiki/Ben_Goertzel) suggested that the purpose of a reputation score is to define the probability of future performance. The context being the likely use case of a reputation score. For example whether the future vote of someone will reflect community values.&#x20;

As mentioned previously it is likely that many scores defined by many algorithms will be needed to process a range of data inputs. You need a different score for each use case. Probabilities expressed as percentages may ground the data better and be more intelligible.

How to evaluate an accurate reputation score ? - Kenric - [35:09](https://youtu.be/EM_EoXcsFQs?t=2109)

Whats missing in this discussion is how are you going to evaluate an accurate score ? We may have an intution about what we want but translating that to a mathematical algorithm that can measure correctly is extremely difficult.

### Managing Privacy Issues

There may be a need for some knd of Watchman role with elevated access who would assure data privacy - Robert - [36:06](https://youtu.be/EM_EoXcsFQs?t=2166)

If a contributor does not like their reputation score they can appeal to one of the Watchmen. The Watchmen would check the context and text of the critique. \`So there is a mechnism to mark down scores. This process can be implemented using a [ZK Snark](https://z.cash/learn/what-are-zk-snarks/) (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) mechanism.

### Contribution and verification of contribution.

In this regard there is always the problem of the contribution and the verification of the contribution - Felix - [40:04](https://youtu.be/EM_EoXcsFQs?t=2404)

Who contributes and who verfies that contribution. Just as on Andamio different roles have access to and engage with different data. For example a contributor may submit content and a verifier can accept or deny content.

The role is reflected through the token itself.

Can we apply a version of Cardano's minimum viable governance in this context ? - Rojo - [41:40](https://youtu.be/EM_EoXcsFQs?t=2500)

Can we try to apply what is minimally viable here ? What would a minimally viable contribute include ? Maybe with one attribute and how can we make that one attribute work ?

The outcome of this ideation session is for us to decide next steps and create a proof of concept or MVP (minimum viable product) of what a contribution token would look like - Juana

What is being discussed about different roles or credentials people may have - Curtis - [43:14](https://youtu.be/EM_EoXcsFQs?t=2594)

Different permission to allow them to correct, view or amend data does exist in SSI (Self Sovereign Identity) solutions. Does a contributor or verifier role have to go on chain ? Because anything on chain has to involve a smart contract, a wallet address or a hash (encyrpted data). So if roles or membership changes a whole new smart contract has to be created.

Whereas with SSI (Self Sovereign Identity) credentials may be passed onto other people.

Using an NFT (Non Fungible Token) for credentials would also require additional protections and verifications to deter abuse.

With reference to what Rojo was suggesting about a minimum viable product - Rares - [46:36](https://youtu.be/EM_EoXcsFQs?t=2796)

We proceeded on the assumption that the current Deep funding algorithm for calculating contribution would be the first model implemented. So we would start from an already existing algorithm developed by Photrek previously. Then move that into a state were it could be independently verified by any interested party. To a more open database than Swae were it currently resides.

### Wrapping up

Early in 2023 in the Deep Funding project it was decided to submit a proposal that would create a contribution score - Felix - [49:41](https://youtu.be/EM_EoXcsFQs?t=2981)

At present it is very simple and measures engagement on the Swae proposal platform itself. Such as thumbs up or down on proposals, any comments you submit and the age of your wallet. The longer you hold a token the higher the score you have.

This basic contribution system is coupled with quadratic voting.

The overall objective is how we can arrive at a fairer decision making process. To consider how we can enhance what has already been built and build a bridge to blockchain technology. A contribution token is not a monetised token.

On the subject of what a minimum viable product would look like - Vanessa - [52:20](https://youtu.be/EM_EoXcsFQs?t=3140)

From what I am hearing in different communities in the ecosystem is that whatever system token is used should draw data from lots of different kinds of contribution. People feel that they contribute in lots of different ways and they want that captured in some way.

Also retrospective assessment. By looking at the kinds of contributions at the end of the fund.

The more inputs you have then each different situation can call for different inputs - Curtis - [54:05](https://youtu.be/EM_EoXcsFQs?t=3245)

That is how we intend to build the tool. So different platforms can configure different scores based on relevant data sources - Juana - [54:49](https://youtu.be/EM_EoXcsFQs?t=3289)

In respect of what Vanessa was saying we considered the need to access your token throughout a fund not just in a single transaction at the end - Rares - [55:14](https://youtu.be/EM_EoXcsFQs?t=3314)

## **GPT Summary**

* **Participants and Structure**: The workshop brought together community members and the workgroup, including NewMindflow, Anamaria & Rares, Juana Attieh, Felix Weber, and others. The agenda covered introducing the proposal, discussing key points, and addressing open questions and suggestions.
* **Fungible Tokens vs. NFTs**: A significant debate centered around whether to use fungible tokens (FTs) or non-fungible tokens (NFTs) for representing contributions. FTs might face challenges in accurate record-keeping and distribution, while NFTs, with their unique identification capabilities, could offer a solution but raised questions about transferability and escrow systems.
* **Historical Contribution Data**: The group discussed whether to include historical contribution data or start from scratch for all members. This topic involved complex considerations about fairness and the technical feasibility of quantifying past contributions.
* **On-chain vs. Off-chain Data**: The balance between on-chain and off-chain data storage was a focal point. Off-chain data could reside on platforms like Midnight and serve multiple chains, while on-chain data would include processed information like scores. Privacy and transparency were key considerations.

{% hint style="info" %}
Learn more about Midnight at: [https://midnight.network/](https://midnight.network/)
{% endhint %}

* **Use of Oracles**: The potential role of oracles in coordinating data streams and processes between off-chain and on-chain data was explored.

{% hint style="info" %}
Learn more about Oracles at: [https://chain.link/education/blockchain-oracles](https://chain.link/education/blockchain-oracles)
{% endhint %}

* **Cardano and Multi-chain Considerations**: Strategic decisions included assessing Cardano's capabilities for the project and contemplating the benefits of a multi-chain approach.
* **Roles and Privileges Management**: Suggestions were made to manage roles and privileges either on-chain or through a self-sovereign identity system, possibly involving an escrow system for NFT transfers for governance.
* **Use Cases of Scores and Token Distribution**: The workshop discussed how contribution scores might be used in decision-making processes like voting, and the possibility of token expiration or burning. The concept of a hybrid token distribution system was also mentioned.
* **Privacy vs. Transparency**: The need to maintain individual privacy while ensuring score transparency was highlighted, with proposals for anonymizing data while allowing individuals to understand their score calculations.


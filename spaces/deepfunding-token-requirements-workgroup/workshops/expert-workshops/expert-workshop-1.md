---
description: November 20, 2023
---

# Expert Workshop #1

## Attendees:

* **Workgroup**: Juana Attieh, NewMindflow (Anamaria & Rares), Felix Weber
* **Experts**: CENT, Jingles

{% embed url="https://youtu.be/SQSLZWzCllc" %}

## **Meeting Summary**

{% hint style="info" %}
Interpretation and précis produced by [QADAO](https://qadao.io)
{% endhint %}

### Introduction

Introduction - Felix - [00:03](https://youtu.be/SQSLZWzCllc?t=3)

Deep Funding Background - Juana - [01:03](https://youtu.be/SQSLZWzCllc?t=63)

### **Incorporation of community contribution into Deep Funding voting weight.**

Role of contribution or engagement scores. Contribution scores combine with Square Root of AGIX holdings to arrive at voting weight. How do we shift representation of these currently off-chain contribution scores on-chain ?

Are contribution tokens meant to be used by whole community ? - Jingles - [02:30](https://youtu.be/SQSLZWzCllc?t=150)

Yes. For clarity, Singuarity Net (AGIX) will focus on use of the Cardano blockchain for this functionality. - Felix - [02:44](https://youtu.be/SQSLZWzCllc?t=164)

Despite a lack of contribution token development on the Cardano blockchain there are no technical issues preventing this - Jingles - [03:40](https://youtu.be/SQSLZWzCllc?t=220)

### **Creation of recent Cardano Improvement Proposals (CIPs)**

Recent CIPs created are relevant to this functionality - Jingles - [03:48](https://youtu.be/SQSLZWzCllc?t=228)

See reference to relevant CIPs [below here](#cardano-improvement-proposals-cips).

Brief recap on purpose of this workshop - Felix - [05:25](https://youtu.be/SQSLZWzCllc?t=325)

We need to consider whether Tokens or other solutions such as DIDs (Digital Identies) or SSI (Self Sovereign Identies) are more appropriate.

### **Use of Mesh.js**

Jingles use of Mesh.js to mint tokens for Treasury Guild - Felix - [06:21](https://youtu.be/SQSLZWzCllc?t=381)

How can contribution tokens work ? -  Juana - [06:30](https://youtu.be/SQSLZWzCllc?t=395)

How are changing contribution scores handled.&#x20;

Use of Mesh JS toolkit - Jingles - [06:55](https://youtu.be/SQSLZWzCllc?t=415)

Many different ways to measure contribution. But likely to look at contribution score as a single number. Score will need to be updated with contributions as a blockchain transaction. A verifier would independently confirm that the work has been completed.

Many ways to determine what is the reputation - Jingles - [08:04](https://youtu.be/SQSLZWzCllc?t=484)

At present repution simply measured by quanity (number) of contributions. This could be extended to generate a partial NFT (Non Fungible Token). More complexity brings additional costs. For example locking minimum ADA values into NFTs.&#x20;

In this context measuring reputation or contribution is more appropriate for larger contributions ("bigger ticket items"). The scale of the contribution must be worth the cost of the blockchain transaction.

How is a final contribution represented or minted ? - Juana - [09.41](https://youtu.be/SQSLZWzCllc?t=581)

On-chain a contribution is just represented as metadata. Metadata could represent many numbers (for example scores of intelligence, strength, GDP) . A small set of information we can keep track of. - Jingles - [09:54](https://youtu.be/SQSLZWzCllc?t=594)

In practice would every community member have a reputation score on-chain that is updated by transactions ? - Juana - [10:30](https://youtu.be/SQSLZWzCllc?t=630)

In this context reputations are only sets of parameters that will inform what they are - Felix - [11:30](https://youtu.be/SQSLZWzCllc?t=690)

Each project or community defines its own parameters appropraite to its use case. The basic data used to define reputation is usually contribution or engagement.

### **Screen share of Mesh PBL Learner Tokens**

In this example assignment values are assigned by a teacher who verfies their completion - Jingles - [12:41](https://youtu.be/SQSLZWzCllc?t=761)

The values of 'Completed Assignments' (eg 1) and 'Most Recent Module' (eg 100) are just strings you want to store in the metadata of a transaction in that Smart Contract.

### **Comments on the Ideation Phase**

We need to establish 1) the requirements of the token specfication and 2) determine who is going to be responsible for this token distribution and integration solution - Rares - [13:53](https://youtu.be/SQSLZWzCllc?t=833)

Ultimately the outputs of this will be a request for a proposal that is open to anyone to implement - Juana - [14:48](https://youtu.be/SQSLZWzCllc?t=888)

That's right. Depending on the outcome of this ideation phase of the Deep Funding Token requirement will be a recommendation of the basic technical feasibility - Felix - [15:01](https://youtu.be/SQSLZWzCllc?t=901)

This recommendation could serve to iniate further steps. The proposal was submitted in the Deep Funding Ideation pool which is intended for projects such as these where a full framework or architecture needs to be developed or ideated. In preparation for submission of a development and deployment proposal in a later funding round

So the Ideation phase could look at options for deployment - Felix - [15:51](https://youtu.be/SQSLZWzCllc?t=951)

To address who could run the minting process and it's maintainance. To consider whether Singularity Net or it's community can do this.

How any Token will be used and by whom will inform the technical work flow requirements - Jingles - [16:29](https://youtu.be/SQSLZWzCllc?t=989) &#x20;

### **Screen share of Learner Token**

**Screen share of Learner Token on the Andamio Platform** - Jingles - [17:01](https://youtu.be/SQSLZWzCllc?t=1021)

Here can be seen different roles such as Learners, Course Creators and Course Facilitators. Looking at the Course Facilitator Assignment commitments is an example of a workflow requirement mentioned previously. After a Wallet is connected the Course Facilitator is able to Accept or Deny an Assignment Commitment.

These are the kind of user workflows or stories ([user story](https://en.wikipedia.org/wiki/User_story)) that need to be defined.

Andamio provides an example of a specific role, the Course Creator, of who has the authority to submit information on-chain - Felix - [18:11](https://youtu.be/SQSLZWzCllc?t=1091)

Each of the roles on the Andamio platform (Course Creator, Learner and Course Facilitator) has its own token with specific permissions and actions.

### **Discussion of Token on-chain functionality**&#x20;

In a reputation scenario a numeric score of some kind would be appended to some kind of reputation or contribution definition - Jingles - [19:48](https://youtu.be/SQSLZWzCllc?t=1188)

This is representative of a Token a user can hold in their Wallet ? - Juana - [20:26](https://youtu.be/SQSLZWzCllc?t=1226)

Yes, the user is holding a Token that is also represented on-chain - Jingles

The Token the user holds is analgous to a key to the data held on-chain. Consquently a specific role (such as the Course Facilator mentioned above) can have sole authority to update the data or state of  a Wallet Token.

When you create a Token you can name yourself however you want - Felix - [22:23](https://youtu.be/SQSLZWzCllc?t=1343)

So there are two parts to this. One the one side there is identity and on the other side any contribution data. So the identity of a Token can be referenced as a User Profile with all it's associated data (such as User Assignments etc).

Is the Token just tied to one Wallet or can it be sent to another Wallet ? - Juana - [23:17](https://youtu.be/SQSLZWzCllc?t=1397)

Yes it is transferable as a Token. - Jingles

Identity can be part of the metadata of the Token - Cent - [23:30](https://youtu.be/SQSLZWzCllc?t=1410)

If you transfer the Token to someone else it can still be the original person's property.

I do not think we should make it possible for people to transfer their knowledge to someone else.

So whilst a Token can be sent to someone else measures or rules need to be in place to prevent use of the Token by someone else.&#x20;

### T**okens for identification**

**Do we need to use a Token for identification ?** - Rares - [24:48](https://youtu.be/SQSLZWzCllc?t=1488)

We can make identification wallet based so we do not need a transferable NFT. What you are describing is minting a [CIP 68](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0068) NFT and using it to store reputation information. Identity can be tied to a Wallet address instead.

So create a repution system based around the actual contributions of individuals tied to a Wallet Address. Represented through a Fungible Token distributed once per Deep Funding round.

There is already a reputation and contribution system in place in Deep Funding even though it is off-chain. So some kind of fungible Token that can change values and accrue data over time is most appropriate. Fungible Tokens would be more flexible as they could be redeemed for NFTs (Non Fungible Tokens) as required.

If we tie ourselves to one NFT (Non Fungible Token) that represents a user journey in advance then we limit our options.

Unlike the Andamio example, in the Deep Funding use case we do not have set roles. In Deep Funding roles are more flexible. I could be contributing comments on a proposal or be a proposer myself. As mentioned by Felix, in time such a generic design could be used by the wider Singuarity Net ecosystem, not just Deep Funding.

### **Problems with using Wallets as an identifier**

People tend to change their Wallet address over time - Felix - [29:00](https://youtu.be/SQSLZWzCllc?t=1740)

In contrast, with some kind of Token identification a user can simply transfer it from one Wallet to another.

Transferring a Token may not be issue in the Deep Funding context where the reward is in terms of accumulating voting weight - Rares - [29:36](https://youtu.be/SQSLZWzCllc?t=1776)

If I wish I should be able to transfer the "skin in the game" or reputation I have accumulated in voting weight over time. I may want to transfer this to someone else who I trust in order to delegate my voting weight.

The option to transfer your voting weight could present problems by unfairly increasing an individual's contribution score in Deep Funding rounds - Felix - [30:46](https://youtu.be/SQSLZWzCllc?t=1846)

Voting coalitions could emerge where reputation contribution scores are exchanged to amplify AGIX voting weight.&#x20;

### **Data Process Considerations**

The solution being discussed would be one Token with all the seperate contribution represented in (transactional) metadata ? - Juana - [32:55](https://youtu.be/SQSLZWzCllc?t=1975)

How can we represent this differently to incorporate a range of contribution scores (0 to 500 for example) ?

In this regard you have to consider the relation (workflow) between reputation and engagement (contribution) - Felix - [33:37](https://youtu.be/SQSLZWzCllc?t=2017)

Between reputation and engagement there is a whole data process that needs to happen. At present there is very little access to data on [Swae](https://proposals.deepfunding.ai/feed) (the Deep Funding platform). No API (Application Programming Interface) but only a CSV (Comma Seperated Values) export. There Deep Funding intends to build it's own platform.

This speaks to broader questions of technical feasibility. Notabily which data sets can be streamed from different parts of the ecosystem. For example how to capture engagement on Discord or Town Halls.

I imagine a [knowlege grap](https://en.wikipedia.org/wiki/Knowledge_graph)h that would represent all sorts of data inputs that would allow an end user to configure contribution for their use-case - Juana - [34:36 ](https://youtu.be/SQSLZWzCllc?t=2076)

So weights can be added to accomodate different variables such as Discord or their Wallet history. These different data points would be represented in Token's (transactional) metadata.

### **Token metadata**

Is the Token just capturing the information or representing the voting weight ? - Juana - [35:29](https://youtu.be/SQSLZWzCllc?t=2129)

Ideally it would do both - Felix

A Token's metadata would provide information about contributions transacted through that Token. This contribution data would be used to generate reputation scores or voter weighting.

That makes a lot of sense because then each user would have an on-chain representation of their contribution in the form of a Token - Juana - [37:02](https://youtu.be/SQSLZWzCllc?t=2222)

And the Token's metadata would used to configure the score (voting weight) relevant to each Deep Funding round.

The immutable nature of DLT (Distributed Ledger Technology) provides a reliable public source of data from which reputation can be calculated - Felix - [37:21](https://youtu.be/SQSLZWzCllc?t=2241)

Other APIs (Application Programming Interfaces) such as from Discord would need to be transformed into metadata and transacted on-chain. So reputation only consumes (references) information from the blockchain.

Smart contracts need to be designed to interact with on-chain metadata to pull back utilities and functions to your Token.

### **Utility of fungible Tokens**

This kind of thinking makes more sense than the plutocratic direction of Catalyst with 1 ADA, 1 Vote (1 coin, 1 vote) - Jingles - [38:26](https://youtu.be/SQSLZWzCllc?t=2306)

In the future it would be preferable to accrue reputation in a Token that is then consumed by voting. So the measure of commitment or support for a project in a funding round is the extent to which you are prepared to spend from your Token. Any stake I have in a Token would be amplified by the amount of reputation I hold.

The necessity to burn your stake (of reputation) will act as an disincentive to vote blindly - Jingles - [39:55](https://youtu.be/SQSLZWzCllc?t=2395)

This is analgous to holding Air Miles where an upgrade to Business class on a flight would consume some Air Miles previously accrued.

This flexible utility is one of the advantages of fungible Tokens - Rares - [40:44](https://youtu.be/SQSLZWzCllc?t=2444)

Fungibility opens up possibilities for using the Token in other areas of the Singularity Net ecosystem besides Deep Funding. So that contribution and reputation may be accrued elsewhere.

Also, as mentioned by Felix and Jingles, burning part of the stake or value of a Token allows for conviction voting. When you vote a voting transaction is created that extracts a cost from your Wallet.

### **Minimising transaction costs**

If all voting Tokens were burnt in a single transaction after the close of voting this would cost less in transaction fees - Rares - [41:54](https://youtu.be/SQSLZWzCllc?t=2514)

As Jingles mentioned previously it makes economic sense to limit the amount of transactions to significant updates only. Hopefully the cost of distributing Tokens can be kept to a minimum by parcelling them together with voting reward transactions.

Swarm Treasury follows the same principle of bundling as many transactions as possible to minimize fees - Felix - [43:23](https://youtu.be/SQSLZWzCllc?t=2603)

Unfortunately in Cardano there is something like a 60 Mb limit on data in a single transaction. So large transactions have to be chunked down to consumable sizes. Consequently there may be a need to develop some algorithms that can chunk down data in the Singuarity Net Token use case. That can encode and decode compressed information into a Token's metadata.

### **Managing Microtransactions**

There are currently two options to manage micro transactions - Jingles - [44:45](https://youtu.be/SQSLZWzCllc?t=2685)

One way is to use a database which is a solution commonly used in DEFI (Distributed Finance) applications.

The other is to use [Hydra](https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/) (a layer 2 blockchain) for some long-term hosted solution. To get [Emurgo](https://www.emurgo.io) and [IOHK](https://iohk.io) to be the first set of L2 (Layer 2) SPOs (Stakepool Operators). Hopefully this will happen in the second Quarter of 2024.

Some things need to be in place before a production version is viable. For example, some kind of Layer 1 & 2 marketplace and Wallets that have incorporated Layer 2 connectivity.

### Current Deep Funding Solution

There is already a system in place for capturing interactions ? - Rares - [46:01](https://youtu.be/SQSLZWzCllc?t=2761)

The current Deep Funding reward / contribution system is very minimalistic - Felix

It only covers simple Deep Funding proposal engagements such as submission, comments and likes/dislikes combined with the age of your Wallet.

It's basic now but you can add to it - Rares - [46:52](https://youtu.be/SQSLZWzCllc?t=2812)

Until Hydra comes along (as Jungles mentioned) there is this off-chain database that records interactions and could be amended to include more interactions. This can be the basis for the creation of a bridge from off-chain to on-chain data executed each funding round. Possibly updating identity tokens and distributing fungible tokens.

Ideally this would be a standalone solution - Juana - [48:17](https://youtu.be/SQSLZWzCllc?t=2897)

The existing solution just captures data from [Swae](https://swae.io/blog/dao-decentralized-governance/swae-chosen-as-singularity-net-dao-grant-funding-platform-helping-distribute-1m-in-grants-for-newly-launched-deep-funding-program/) and the voting portal specific to Deep Funding. Ideally the next step would be to have data captured from many different pipelines. For example capturing partiaption on social media networks. Otherwise we would just be replicating data already used on the existing platform.

A whole reputation would takes a long time to specify - Felix - [49:04](https://youtu.be/SQSLZWzCllc?t=2944)

So a first step is to identify what is already in place and then build a bridge to translate this data in an on-chain format. Once we have a clear distinction between on and off-chain data and understand how this process works we can begin to level up or scale.

Once we have a minimal set of data translated we can apply this to a wider range of applications - Felix - [50:01](https://youtu.be/SQSLZWzCllc?t=3001)

So each Deep Funding comminity member would be minted a token that represents their contribution on-chain - Juana -[ 50:17](https://youtu.be/SQSLZWzCllc?t=3017)

Additionally each community member will be able to mint their own token - Felix - [50:43](https://youtu.be/SQSLZWzCllc?t=3043)

This may lead to the creation of muliple tokens in different wallets but the [Sybil resistance](https://en.wikipedia.org/wiki/Sybil_attack) is this regard will be the overhead it would take for a user to manage the complexity of this over the long-term.

It is important to emphasise that off-chain data is not simply being migrated on-chain - Rares - [51:33](https://youtu.be/SQSLZWzCllc?t=3093)

Having the data represented on-chain opens up a lot of different possibiities.

### Key Learnings

Some key learnings at end of the call - Felix - [52:38](https://youtu.be/SQSLZWzCllc?t=3158)

* We should definitely go with Fungible Tokens and not NFTs (Non Fungible Tokens).
* We should look on the Tokens as having an open policy (no prescribed quanity of minted tokens). So with a by demand minting where nothing is pre-minted. Instead contributers opt to mint their own token instances.
* The cost of minting transactions in such an open policy is borne by the contributor. But this is only dependent on how frequent a contributor wishes to mint token.
* It would be good to create a user journey that outlines the scope of each role. Also to identify what roles exist such as contributors and verifiers of contribution. So different roles can be matched with different tokens and their distinct utilities. And progression from one role to another enabled to incentivise engagement.
* We need to consider whether tokens will be backwards compatible and capture what is already in the SWAE database.

## **GPT Summary**

### **Focus:**

The workshop gathered seasoned developers skilled in the Cardano Tech Stack. The primary focus was on exploring the technical implementation of tokens and on-chain data on the Cardano blockchain, relevant to the DeepFunding Contribution Token.

### **Cardano Improvement Proposals (CIPs):**

Key CIPs were considered for their potential application in this project. \
These included:&#x20;

\- [CIP68](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0068) (Datum Metadata Standard), \
\- [CIP88](https://github.com/cardano-foundation/CIPs/pull/467) (In Progress)\
\- [CIP86](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0068) (NFT Metadata Update Oracles), and \
\- [CIP30 ](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0030)(Cardano dApp-Wallet Web Bridge).

{% hint style="info" %}
Learn More About CIPs at: [https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0001)
{% endhint %}

### **Token Implementation and Viability:**

The discussion leaned towards recommending fungible tokens over non-fungible tokens for this use case. It was noted that tokens can be transferred unless locked in a smart contract. The feasibility of an identity token (held in user wallets) with updateable metadata in a smart contract was explored.

### Community Engagement and Contribution Tracking:

The workshop proposed minting identity tokens linked to wallet addresses for every community member. These tokens would represent contributions on-chain, allowing retrieval and calculation of contribution scores. It was suggested that contributions could be compressed through algorithms and decoded for use.

### Development and Standardization Strategy:

The approach recommended starting small with existing data and possibly developing standards for future solutions and integrations. The minting fees could be covered by contributors or by the DeepFunding project at regular intervals.

### Role Dynamics and System Evolution:

The system was envisioned to include roles like contributors and verifiers, with the potential for automatic transitions and the addition of specialized roles. It was emphasized that the system should be designed to adapt and adjust over time.

### Open Questions and Suggestions:

Various points were raised for future consideration, such as the need for an API for reputation scores, the challenges with record-keeping for fungible tokens, and the mechanics of token transferability and expendability.

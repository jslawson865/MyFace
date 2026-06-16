# Reputation System

## Rule one

Popularity is not trust.

MyFace tracks separate reputation dimensions:

| Dimension | Meaning |
|---|---|
| Karma | visible social contribution |
| Trust | reliability and positive history |
| Risk | abuse/spam/scam/moderation concern |
| Renown | high-value contribution and positive experience creation |
| InviteScore | quality of invited users/nodes |

## Ledger-first design

All meaningful reputation changes are recorded as append-only ledger events. Aggregates are derived from the ledger.

## Reactions

Thumbs up and thumbs down are lightweight signals. They should not directly ban, bankrupt, or destroy an account.

Downvote impact should be:

- weighted by actor trust,
- capped per day,
- dampened across invite-tree clusters,
- reversible after moderation.

## Olympus social circle

Olympus is a high-renown layer for visible positive contributors. Membership should require more than popularity.

Candidate requirements:

- sustained positive interactions,
- low risk score,
- useful contributions,
- good report history,
- no recent severe moderation action,
- manual or semi-manual approval.

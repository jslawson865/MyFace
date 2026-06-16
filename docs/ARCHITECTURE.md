# MyFace Architecture

## Project identity

MyFace is an invite-gated social platform designed as a trust graph first and a social feed second.

The MVP begins as a single node, but every important object is modeled as node-owned so future federation does not require a rewrite.

## Primary domains

```txt
Identity      users, profiles, auth identities, sessions
Admission     invites, invite claims, sponsor edges
Social        friends, bulletins, statuses, comments, photos
Messenger     private communication, blocks, reports
Reputation    ledger events, karma, trust, risk, renown
Patronage     sponsor lineage, disavowal, invite quality
Permissions   roles, capabilities, tiers, overrides
Nodes         node identity, node owner, node flavor, node health
Federation    signed manifests, public discovery, remote objects
Moderation    reports, actions, reversals, review queues
```

## User 0

User 0 is a platform identity, default friend, public guide, founder account, and seed member of the Olympus social circle.

User 0 must not be treated as the sponsor of every user. Default friendship and patronage are separate concepts.

## Trust model

Separate these dimensions:

```txt
Karma       visible social contribution score
Trust       reliability / low-abuse signal
Risk        spam, scam, abuse, unresolved report signal
Renown      high-quality long-term contribution and positive experience creation
InviteScore quality of users/nodes introduced by a sponsor
```

## Federation posture

Initial releases are single-node only. Federation is designed but disabled by default.

When enabled, federation should begin with signed public metadata only:

- node manifests,
- public profile cards,
- public groups/projects,
- public bulletin summaries,
- reputation summaries,
- moderation notices,
- block/defederation notices.

Private messages, auth identities, emails, raw reports, and hidden risk metrics must not federate by default.

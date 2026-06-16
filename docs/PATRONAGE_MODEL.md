# Patronage Model

## Concept

MyFace uses patronage to make invitations meaningful. A user or node that brings in positive contributors gains standing. A user or node that repeatedly introduces harmful actors loses invite quality and discoverability.

## User patronage

When User A invites User B:

```txt
A becomes B's sponsor.
B's conduct influences B's own standing.
B's conduct lightly influences A's invite quality.
A may disavow B later, stopping future sponsor liability but preserving history.
```

## Node patronage

When Node A sponsors Node B:

```txt
Node A vouches for Node B.
Node B begins with limited discovery.
Node B earns federation and discoverability through healthy activity.
Node A receives bounded sponsor effects from Node B's monthly health.
```

## Bounded liability

Sponsor effects must be capped. One bad invitee should not destroy a good sponsor, but repeated bad invitations should matter.

## Disavowal

Disavowal is a signed severance event.

Possible results:

- healthy invitee/node: loses sponsor boost only,
- neutral invitee/node: enters probation,
- risky invitee/node: loses privileges/discovery,
- severe invitee/node: review, quarantine, or ban.

## Monthly rollup

At the end of each month, the system calculates:

- user contribution,
- reactions and reviews,
- reports and upheld reports,
- invitee outcomes,
- sponsor quality,
- node health,
- discovery tier changes.

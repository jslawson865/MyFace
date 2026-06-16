# Contributing to MyFace

MyFace is a small-community social platform with trust, patronage, and moderation built into the core. Contributions should preserve that design.

## Branch flow

- `main`: stable and deployable
- `dev`: integration branch
- `feature/*`: individual work
- `hotfix/*`: urgent fixes

## Pull request expectations

A useful PR should include:

- clear summary,
- linked issue or design note when applicable,
- tests for enforcement logic,
- no silent weakening of invite, auth, permission, or reputation rules.

## Security-sensitive areas

Extra review is required for:

- auth/session changes,
- invite admission,
- role and capability checks,
- moderation tools,
- reputation scoring,
- federation and signed node events,
- private messaging.

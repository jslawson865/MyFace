# Import Status

## Source package

The current rebuild began from the uploaded project archive:

```txt
OKComputer_MyFace_Invite-Only_Social_Media(1).zip
```

That archive is the prototype reference for the earlier MyFace implementation direction: React/Vite frontend, Hono/tRPC backend direction, Drizzle/MySQL data model, OAuth assumptions, invite-only UI, profiles, friends, bulletins, comments, messages, photos, and retro MySpace-inspired design goals.

## Current repository posture

The GitHub repository is **not yet a full direct import of the prior generated application code**.

Instead, the repo has been rebuilt as a cleaner baseline scaffold that keeps the useful direction while avoiding the previously identified problems:

- frontend-only invite gate,
- unsafe OAuth state,
- delete mutations without ownership checks,
- unenforced profile visibility,
- invite use not bound to account creation,
- weak invite code generation,
- public user search leakage.

## Attribution posture

The original archive is treated as the migration source and prototype reference. The current GitHub baseline is the cleaned rebuild path.

The next import phase should selectively bring forward working UI components, profile pages, retro styling, and social feature layouts only after each imported feature is wrapped in the new enforcement model.

## Import rule

A feature may be imported only when it satisfies:

```txt
server-side auth
ownership checks
visibility checks
permission/capability checks
reputation-event hooks where relevant
moderation/reporting path where relevant
```

## Current import score

| Area | Status | Score |
|---|---|---:|
| Concept alignment | retained | 5/5 |
| Repo structure | rebuilt cleanly | 4/5 |
| Old UI imported | not yet | 1/5 |
| Old API imported | intentionally not yet | 1/5 |
| Security fixes represented | documented/scaffolded | 3/5 |
| Minimum runnable baseline | in progress | 3/5 |

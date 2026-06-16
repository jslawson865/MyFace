# MyFace Project Schema

## Current baseline status

This document describes the minimum operating baseline as reflected in the repository scaffold.

Status scale:

```txt
0 = absent
1 = concept only
2 = documented
3 = scaffolded in code
4 = partially runnable
5 = implemented and tested
```

## Top-level architecture

| Component | Path | Identifier roots | Status | Notes |
|---|---|---:|---:|---|
| Web app | `apps/web` | `@myface/web` | 4 | React/Vite landing scaffold renders User 0 and Olympus copy. |
| API service | `apps/api` | `@myface/api` | 4 | Hono health route, User 0 route, and node manifest route exist. |
| Admin app | `apps/admin` | `@myface/admin` | 2 | Placeholder workspace; no real admin UI yet. |
| Worker | `apps/worker` | `@myface/worker` | 3 | Placeholder monthly rollup function exists. |
| Database package | `packages/db` | `@myface/db` | 3 | Drizzle schema scaffold and seed plan exist; DB connection/upsert not wired. |
| Identity package | `packages/identity` | `@myface/identity` | 4 | User 0 and Olympus constants exist. |
| Auth package | `packages/auth` | `@myface/auth` | 3 | Provider/admission types and assertion exist. |
| Invites package | `packages/invites` | `@myface/invites` | 3 | Cryptographic invite code utility and hashing exist. |
| Permissions package | `packages/permissions` | `@myface/permissions` | 3 | Roles, permissions, and capabilities are declared. |
| Reputation package | `packages/reputation` | `@myface/reputation` | 3 | Reputation event defaults and Olympus eligibility helper exist. |
| Patronage package | `packages/patronage` | `@myface/patronage` | 3 | Bounded sponsor-impact helper exists. |
| Federation package | `packages/federation` | `@myface/federation` | 3 | Node manifest type and well-known path exist. |
| UI package | `packages/ui` | `@myface/ui` | 2 | Theme token stub only. |

## Core identifiers

| Identifier | Value / pattern | Source |
|---|---|---|
| User 0 ID | `usr_00000000000000000000000000000000` | `packages/identity/src/user-zero.ts` |
| User 0 legacy numeric ID | `0` | `packages/identity/src/user-zero.ts` |
| User 0 handle | `jake` | `packages/identity/src/user-zero.ts` |
| User 0 display name | `Jason "Jake" Lawson` | `packages/identity/src/user-zero.ts` |
| Local node default | `node_local_jakeroot` | `apps/api/src/index.ts`, `packages/db/src/seed.ts` |
| Olympus slug | `olympus` | `packages/identity/src/user-zero.ts` |
| Node manifest path | `/.well-known/myface-node.json` | `packages/federation/src/index.ts`, `apps/api/src/index.ts` |

## MVP enforcement goals

| Goal | Current status | Score | Required next work |
|---|---|---:|---|
| Backend-enforced invite admission | typed but not implemented | 2 | Add `/auth/start` and `/auth/callback` with invite validation and atomic consume. |
| OAuth state safety | documented, not implemented | 2 | Store signed/single-use state and bind to admission attempt. |
| User 0 default friend | identity + seed plan exists | 3 | Add DB insert/upsert and create friendship edge on user creation. |
| Owner/admin role baseline | permissions declared | 3 | Add session context and `requirePermission`. |
| Ownership checks | documented only | 2 | Add routers and tests before real content mutation endpoints. |
| Profile visibility enforcement | documented only | 2 | Add `canViewProfile` helper before public profile APIs. |
| Reputation ledger | schema + event defaults | 3 | Add writer/apply/reverse functions and tests. |
| Patronage graph | schema + bounded helper | 3 | Add sponsor edge creation during invite consume. |
| Node identity | manifest endpoint + schema | 4 | Replace placeholder public key with generated node keypair. |
| Federation | disabled by default | 2 | Keep disabled until single-node MVP is stable. |

## Runtime artifact map

| Artifact | Path | Purpose |
|---|---|---|
| Environment template | `.env.example` | Local config, User 0 seed values, node defaults. |
| Compose stack | `docker-compose.yml` | MySQL and Redis local services. |
| CI workflow | `.github/workflows/ci.yml` | Install, typecheck, lint, test, build. |
| Drizzle config | `packages/db/drizzle.config.ts` | Migration generation/migrate config. |
| Seed plan | `packages/db/src/seed.ts` | Generates User 0, local node, profile, reputation, Olympus seed plan. |
| Bootstrap script | `scripts/bootstrap-node.ts` | Runs the seed plan placeholder. |

## Honest current score

Overall current status: **3.1 / 5**

Meaning: the repository is now a coherent, structured, typed scaffold with the right identity, reputation, patronage, node, and CI surfaces. It is not yet a functioning social network. The next bump to `4 / 5` requires wiring the DB connection, generating migrations, implementing invite-backed auth admission, and committing a lockfile after install.

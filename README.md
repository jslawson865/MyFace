# MyFace

**MyFace** is an open-source, invite-gated social platform inspired by the chaotic personal-web energy of early social networks, rebuilt around modern trust, patronage, reputation, and self-hostable community nodes.

The goal is not to clone old social media. The goal is to build a small, fun, accountable social app where communities can run their own nodes, invite people intentionally, reward positive participation, and keep bad actors from poisoning the graph.

## Core ideas

- **Invite-gated admission**: users join through a real backend-enforced invite path.
- **User 0 / default first friend**: Jason "Jake" Lawson is seeded as the public guide account, similar to Tom from MySpace, but upgraded into a platform helper and founder identity.
- **Patronage graph**: every invite has lineage; sponsors gain or lose standing based on the people and nodes they bring in.
- **Reputation ledger**: karma, trust, risk, invite quality, and renown are tracked through auditable events.
- **Olympus social circle**: the highest-renown users may become discoverable as guides, builders, moderators, patrons, or positive-experience leaders.
- **Node sovereignty**: every self-hosted instance is a node with its own owner, local rules, theme, groups, and moderation.
- **Federation later**: the single-node app is structured now so it can federate later without a rewrite.

## Repository layout

```txt
apps/
  web/          React/Vite frontend
  api/          Hono/tRPC API service
  admin/        Operator and moderation console
  worker/       Rollups, reputation jobs, federation jobs
packages/
  db/           Drizzle schema, migrations, seed data
  auth/         OAuth/session/admission abstraction
  identity/     User 0 and platform identity constants
  invites/      Invite and sponsor-edge logic
  permissions/  RBAC, capabilities, tier checks
  reputation/   Ledger, scoring, renown, rollups
  patronage/    User/node sponsorship and severance
  federation/   Node identity and future federation protocol
  ui/           Shared UI package
scripts/        Bootstrap and maintenance scripts
docs/           Architecture, roadmap, moderation, protocol docs
```

## User 0

The platform seeds a public account:

```txt
Account: User 0
Name: Jason "Jake" Lawson
Handle: @jake
Role: owner / founder / platform guide
Default friend: yes
Public guide profile: yes
Olympus founder: yes
```

Every new user receives Jake as their first friend automatically. This is not the same as sponsorship. Their true patron/sponsor is still the inviter or node that admitted them.

## Development branches

Recommended branch model:

```txt
main    stable, deployable baseline
dev     active integration branch
feature/* isolated work
hotfix/* urgent fixes
release/* release candidates
```

## Quick start

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm db:migrate
pnpm db:seed
pnpm dev
```

## License

Draft default: **AGPL-3.0-or-later** for the platform/server code because MyFace is a networked social platform. If the project goal shifts toward maximum commercial adoption with fewer reciprocity requirements, switch to MIT or Apache-2.0 before the first public release.

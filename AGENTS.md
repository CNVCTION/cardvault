# CardVault — AI Agent Context

P2P sports card marketplace. Medusa.js v2 backend + Next.js 16 storefront. pnpm monorepo.

## Layout

```
/                       # monorepo root (pnpm-workspace.yaml, opencode.json)
├── backend/            # @cardvault/backend — Medusa v2.15.5
├── storefront/         # storefront — Next.js 16.2.7 + Tailwind v4
├── deploy/             # PM2 ecosystem + nginx + deploy.sh
├── img/                # static card photos + brand assets
├── DESIGN-ferrari.md   # active design spec (Ferrari red theme)
├── MASTER-PROMPT.md    # original project brief
└── .opencode/          # opencode/ralph-loop state (don't edit by hand)
```

**Stale directory:** `cardvault/` exists at repo root (contains `storefront/`) — a stray build artifact, not a deploy target. Production deploys to `/var/www/cardvault` on the VPS (`deploy/scripts/deploy.sh`). The local PM2 config uses old project names (`rkies-brnd`) — ignore these; they predate the rename to CardVault.

## Quick Start

```bash
# Infra (Docker)
docker start cardvault-postgres cardvault-redis

# Both apps (repo root)
pnpm dev                  # runs backend on :9000 + storefront in parallel
# or individually:
pnpm dev:backend          # cd backend && medusa develop
pnpm dev:storefront       # cd storefront && next dev

# Verify
pnpm build                # builds both packages
cd storefront && pnpm build && npx tsc --noEmit   # storefront typecheck
cd backend && pnpm test                            # jest, see Test Matrix below
```

Admin: `http://localhost:9000/app` — `admin@cardvault.com / AdminPassword123!`

**Ports:** backend always `:9000`. Storefront dev binds whatever Next picks (often `:3000`). The PM2 local config pins it to `:4000`. Production binds `:3000` (`deploy/ecosystem.config.js`). If CORS errors appear, check `STORE_CORS` / `AUTH_CORS` in `backend/.env` match the actual storefront port.

## Repo-specific commands

| Task | Command | Notes |
|---|---|---|
| Backend dev | `cd backend && NODE_OPTIONS="--max-old-space-size=4096" npx medusa develop` | 4GB heap avoids Medusa OOM in dev |
| Backend build | `cd backend && pnpm build` | `medusa build` |
| DB migrate | `cd backend && npx medusa db:migrate` | Required after schema changes |
| Storefront build | `cd storefront && pnpm build` | Type-checks + builds |
| Storefront lint | `cd storefront && pnpm lint` | eslint flat config; backend has **no** lint script |
| Type-check only | `cd storefront && npx tsc --noEmit` | No equivalent for backend |

## Gotchas

1. **No `tailwind.config.ts`.** Theme tokens are CSS vars in `storefront/src/app/globals.css` exposed via `@theme inline {}`. Adding a token means editing that file, not a JS config.
2. **shadcn v4 components are `@base-ui/react`-based, not Radix.** Button has **no `asChild` prop** — use `buttonVariants({...})` directly on `<Link>`. Accordion has no `type`/`collapsible` props.
3. **`tw-animate-css` is a dep but NOT imported in `globals.css`.** Classes like `animate-accordion-down` referenced in `ui/accordion.tsx` are therefore inert — accordion panels will snap open/closed. If you need accordion animation, add the import or define keyframes.
4. **Two `pnpm-workspace.yaml` files** (repo root + `storefront/`). pnpm warns about this every build. The storefront one is leftover from a pnpm upgrade; safe to delete.
5. **Medusa uses MikroORM, not TypeORM.** Custom models go in `backend/src/modules/<name>/models/` and use `model.define()`.
6. **JWT auth on the SDK.** `storefront/src/lib/medusa.ts` is configured for `jwt` + `localStorage`. `useAuth()` in `lib/auth-context.tsx` wraps `medusa.auth.login/register/logout` + `store.customer.retrieve()`. Already wrapped in `app/providers.tsx` (use `useAuth()` from any client component).
7. **Mobile menu** lives in `storefront/src/components/mobile-drawer.tsx` (Base UI Dialog, full-screen overlay). Don't re-implement inline in `navbar.tsx` — the drawer handles close-on-link-click, focus trap, escape, and the auth-aware account section.
8. **`@medusajs/types` must be a direct dep** if you import `HttpTypes.*` in storefront code — JS SDK uses it internally but doesn't re-export it.
9. **Backend tests need a test DB.** `backend/jest.config.js` loads `.env` for `NODE_ENV=test` and skips `dist/` and `.medusa/`. Pick a subset with `TEST_TYPE=unit|integration:http|integration:modules`. Note: the jest config references `./integration-tests/setup.js` which doesn't exist yet — some tests may fail without it.
10. **No CI workflows** in `.github/workflows/`. All verification is manual.

## Key files

- `backend/medusa-config.ts` — modules: file-local, payment-stripe, cache/event/workflow-redis, plus local `./src/modules/seller`
- `backend/src/modules/seller/` — custom seller module (MikroORM model + service)
- `backend/src/api/{store,admin}/` — custom REST routes
- `backend/src/admin/routes/` — custom admin UI routes (Vite + React)
- `backend/.env` / `.env.template` — DB, Redis, CORS, JWT/cookie secrets, Stripe key
- `storefront/src/app/{layout,providers,page}.tsx` — root layout + provider chain
- `storefront/src/app/globals.css` — design tokens (Ferrari red `#da291c`, canvas `#181818`, radius `0px`, font `Inter`) + custom animation keyframes (`.animate-fade-in`, `.animate-scale-in`, etc.)
- `storefront/src/lib/medusa.ts` — Medusa JS SDK singleton (publishable key, JWT auth)
- `storefront/src/lib/{auth,cart}-context.tsx` — auth + cart React contexts
- `storefront/src/components/mobile-drawer.tsx` — full-screen mobile nav (Base UI Dialog)
- `storefront/AGENTS.md` — Next.js 16 breaking-change warnings (auto-loaded by OpenCode)
- `DESIGN-ferrari.md` — current design spec; storefront is mid-migration from the older cyan theme to Ferrari red

## Conventions

- Files in `kebab-case.tsx`; React components in `PascalCase` exports.
- Storefront imports: `@/components/*`, `@/lib/*`, `@/types/*`.
- `"use client"` only on interactive components; server components by default.
- No `any`; strict TS.
- Colors: direct hex from `globals.css` CSS vars, not Tailwind color names (except `primary`/`destructive` utilities).

## Git

- Branch: `master` · Remote: `https://github.com/CNVCTION/cardvault.git`
- Don't commit secrets; `backend/.env` and `storefront/.env.local` are gitignored.

## Not done (needs user)

- Real Stripe API key in `backend/.env` (`STRIPE_API_KEY`)
- Real product/card data seeded
- VPS deploy (`deploy/scripts/deploy.sh` is ready; needs SSH access)

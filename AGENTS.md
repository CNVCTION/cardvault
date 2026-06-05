# CardVault — AI Agent Context

## What This Is
CardVault is a **P2P sports card marketplace** built on Medusa.js v2 + Next.js 16.
Monorepo at `/home/alex/projects/cardstore/cardvault/`.

## Quick Start
```bash
# PostgreSQL (Docker)
docker start cardvault-postgres

# Backend
cd /home/alex/projects/cardstore/cardvault/backend
npx medusa develop          # :9000

# Storefront
cd /home/alex/projects/cardstore/cardvault/storefront
pnpm dev                    # :3000

# Build check
cd /home/alex/projects/cardstore/cardvault/storefront && pnpm build

# Admin panel
http://localhost:9000/app   # admin@cardvault.com / AdminPassword123!
```

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Backend | Medusa.js v2.15.5 |
| Frontend | Next.js 16 (App Router, Turbopack) |
| UI | shadcn/ui v4 (@base-ui/react, NOT Radix) |
| Styling | Tailwind CSS v4 (@theme inline in globals.css) |
| DB | PostgreSQL 16 (Docker, port 5432) |
| Payments | Stripe (plugin configured, keys needed) |
| Fonts | Geist Sans + Geist Mono (next/font/google) |
| Package mgr | pnpm v11 |

## Key Files
- `backend/medusa-config.ts` — module registration (seller, file, payment)
- `backend/src/modules/seller/` — custom seller module (MikroORM model)
- `backend/src/api/` — custom API routes (store & admin)
- `backend/src/admin/routes/sellers/page.tsx` — admin seller management
- `storefront/src/app/layout.tsx` — root layout with navbar/footer
- `storefront/src/app/globals.css` — design system colors & theme
- `storefront/src/lib/medusa.ts` — Medusa JS SDK client

## Gotchas / Breaking Changes
1. **shadcn Button has no `asChild`** — use `buttonVariants({...})` on `<Link>` directly
2. **No tailwind.config.ts** — colors defined via CSS vars + `@theme inline` in globals.css
3. **shadcn Accordion uses @base-ui** — no `type` or `collapsible` props
4. **Medusa v2 uses MikroORM**, not TypeORM — models use `model.define()`
5. **pnpm build scripts** need approval: `pnpm approve-builds sharp unrs-resolver`
6. **Storefront .env.local**: `NEXT_PUBLIC_MEDUSA_URL=http://localhost:9000`
7. **Backend uses fake Redis** in dev — warnings are expected
8. **Node memory**: set `NODE_OPTIONS="--max-old-space-size=4096"` for Medusa CLI

## GitHub
- Repo: https://github.com/CNVCTION/cardvault
- Branch: main
- Local remote: `origin` → `https://github.com/CNVCTION/cardvault.git`

## Images
- `/home/alex/projects/cardstore/img/cards/` — sample card images (card_001-005.jpg)
- `/home/alex/projects/cardstore/img/brand/` — company logos and branding assets

## What's NOT Done (needs user)
- Real Stripe API keys in `backend/.env`
- Redis instance for production
- Actual product/card data seeded
- VPS deployment (nginx, SSL, PM2)

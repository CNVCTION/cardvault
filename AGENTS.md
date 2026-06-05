# RKIES BRND — AI Agent Context

## What This Is
RKIES BRND is a **P2P sports card marketplace** (formerly CardVault) built on Medusa.js v2 + Next.js 16.
Monorepo at `/home/alex/projects/cardstore/cardvault/`.

## Brand
- **Name:** RKIES BRND (changed from CardVault)
- **Logo:** Sparkle icon in cyan bg + "RKIES" in cyan + " BRND" in white
- **Theme:** Dark (#0a0a0a), cyan accent (#00e5ff), Geist fonts

## Quick Start
```bash
# PostgreSQL (Docker)
docker start cardvault-postgres
# Redis (Docker)
docker start cardvault-redis
# Backend
cd /home/alex/projects/cardstore/cardvault/backend && npx medusa develop
# Storefront
cd /home/alex/projects/cardstore/cardvault/storefront && pnpm dev
# Admin
http://localhost:9000/app  (admin@cardvault.com / AdminPassword123!)
```

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Backend | Medusa.js v2.15.5 |
| Frontend | Next.js 16 (App Router, Turbopack) |
| UI | shadcn/ui v4 (@base-ui/react, NOT Radix) |
| Styling | Tailwind CSS v4 (@theme inline in globals.css) |
| DB | PostgreSQL 16 (Docker, port 5432) |
| Cache | Redis 7 Alpine (Docker, port 6379) |
| Payments | Stripe (plugin configured) |
| Fonts | Geist Sans + Geist Mono (next/font/google) |
| Package mgr | pnpm v11 |

## Key Files
- `backend/medusa-config.ts` — module registration with Redis (cache + event-bus + workflow-engine)
- `backend/src/modules/seller/` — custom seller module (MikroORM model)
- `backend/src/api/` — custom API routes (store & admin)
- `backend/src/admin/routes/sellers/page.tsx` — admin seller management
- `storefront/src/app/layout.tsx` — root layout with TooltipProvider
- `storefront/src/components/navbar.tsx` — nav with Tooltip hover, search, cart
- `storefront/src/components/footer.tsx` — brand footer
- `storefront/src/lib/medusa.ts` — Medusa JS SDK client
- `deploy/nginx/` — nginx configs
- `deploy/scripts/` — deployment and SSL scripts
- `deploy/docker-compose.prod.yml` — production DB + Redis

## Gotchas / Breaking Changes
1. **shadcn Button has no `asChild`** — use `buttonVariants({...})` on `<Link>` directly
2. **No tailwind.config.ts** — colors defined via CSS vars + `@theme inline` in globals.css
3. **shadcn Accordion uses @base-ui** — no `type` or `collapsible` props
4. **shadcn HoverCard uses @base-ui/preview-card** — no `openDelay`, no `asChild`
5. **TooltipTrigger has no `asChild`** — just wrap children directly
6. **Medusa v2 uses MikroORM**, not TypeORM — models use `model.define()`
7. **pnpm build scripts** need approval: `pnpm approve-builds`
8. **Backend uses Redis** for cache, event-bus, workflow-engine
9. **Seed script**: `cd backend && npx ts-node --swc src/scripts/seed-products.ts`
10. **Lucide v1.17**: `Fire`, `Flame`, `Grid3X3` don't exist — use `Zap`, `Grid2X2` instead

## GitHub
- Repo: https://github.com/CNVICTION/cardvault
- Branch: main

## Images
- `/home/alex/projects/cardstore/img/cards/` — 5 sample card images
- `/home/alex/projects/cardstore/img/brand/` — company logos and branding assets
- Products use pollinations.ai remote URLs for filler card images

## MCP Servers Installed
- `pollinations-mcp` — free image generation (rate-limited on this IP)
- `gemini-bridge-mcp` — Nano Banana + Veo via Gemini Web (needs login)

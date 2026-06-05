<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CardVault Storefront — Project Context

## Stack
- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** (`@tailwindcss/postcss` plugin, no `tailwind.config.ts`)
- **shadcn/ui v4** (`@base-ui/react` components, NOT Radix)
- **pnpm** (v11, with pnpm-workspace.yaml at monorepo root)

## Key Breaking Changes vs Classic Next.js
- No `tailwind.config.ts` — config is in `globals.css` via `@theme inline {}`
- shadcn Button has NO `asChild` prop — use `buttonVariants()` with `<Link>` instead
- shadcn Accordion uses `@base-ui/react/accordion` — no `type`/`collapsible` props
- Geist fonts via `next/font/google`, not `geist` package (both are installed)

## Design System (do not deviate)
- Background: `#0a0a0a`, Surface: `#111111`, Border: `#1f1f1f`
- Primary text: `#ffffff`, Muted: `#888888`
- Accent (CTAs/highlights): `#00e5ff` (electric cyan)
- Success: `#00c950`, Destructive: `#ff4444`
- Border radius: 6px (sharp)
- Font: Geist Sans (body), Geist Mono (prices/codes)
- Max width: 1280px, centered, 24px gutters

## Project Structure
```
storefront/src/
├── app/                  # App Router pages
│   ├── page.tsx          # Homepage
│   ├── browse/           # Browse/Search with filters
│   ├── cards/[id]/       # Card detail page
│   ├── sellers/[slug]/   # Seller storefront
│   ├── dashboard/        # Seller dashboard (protected)
│   ├── auth/             # login, register, become-seller
│   ├── cart/             # Shopping cart
│   ├── checkout/         # Checkout flow
│   └── order/confirmed/  # Order confirmation
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Global navigation bar
│   ├── footer.tsx        # Global footer
│   ├── cart-drawer.tsx   # Right-side cart sheet
│   ├── card-listing-card.tsx  # Product card in grids
│   ├── sport-badge.tsx   # Colored sport pill
│   └── grade-badge.tsx   # Color-coded grade pill
├── lib/
│   ├── medusa.ts         # Medusa JS SDK client
│   └── utils.ts          # cn() utility
└── types/
    └── card.ts           # CardMetadata interface
```

## API
- Medusa backend runs on `http://localhost:9000`
- Env var: `NEXT_PUBLIC_MEDUSA_URL`
- Use `@medusajs/js-sdk` client from `@/lib/medusa`

## Conventions
- All new files in kebab-case
- Use `"use client"` only for interactive components
- Prefer server components for data fetching
- No `any` types (use strict TypeScript)
- Imports: `@/components/*`, `@/lib/*`, `@/types/*`
- Colors: direct hex values, not Tailwind color names (except accent classes)

# CardVault - P2P Sports Card Marketplace

The premier peer-to-peer marketplace for sports cards. Buy, sell, and trade graded and raw cards from trusted sellers.

## Tech Stack

- **Backend:** Medusa.js v2 (headless commerce)
- **Frontend:** Next.js 16 (App Router) with shadcn/ui v4 + Tailwind CSS
- **Database:** PostgreSQL
- **Payments:** Stripe
- **Auth:** Medusa built-in (JWT)

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm
- Docker (for PostgreSQL)

### Setup

```bash
# Start PostgreSQL
docker run -d --name cardvault-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=cardvault123 \
  -e POSTGRES_DB=cardvault_dev \
  -p 5432:5432 postgres:16-alpine

# Install dependencies
pnpm install

# Set up environment
cd backend
cp .env.template .env
# Edit .env with your settings

# Run migrations
npx medusa db:migrate

# Create admin user
npx medusa user -e admin@cardvault.com -p AdminPassword123!

# Start development
cd ..
pnpm dev:backend    # Starts Medusa on :9000
pnpm dev:storefront # Starts Next.js on :3000
```

## Project Structure

```
cardvault/
├── backend/           # Medusa.js v2 backend
│   ├── src/
│   │   ├── api/       # Custom API routes
│   │   ├── modules/   # Custom modules (seller)
│   │   └── types/     # TypeScript types
│   └── medusa-config.ts
└── storefront/        # Next.js frontend
    └── src/
        ├── app/       # App Router pages
        └── components/# Reusable components
```

## Features

- **Browse & Search:** Filter by sport, player, year, grade, and more
- **Card Listings:** Detailed card pages with images, grades, and attributes
- **Seller Storefronts:** Public profile pages for each seller
- **Seller Dashboard:** Manage listings, track orders, view analytics
- **Authentication:** Buyer and seller roles with admin approval
- **Admin Panel:** Manage seller applications
- **Cart & Checkout:** Full e-commerce flow via Medusa

## License

MIT

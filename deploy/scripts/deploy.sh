#!/bin/bash
set -e

DEPLOY_DIR="/var/www/cardvault"
REPO_URL="https://github.com/CNVCTION/cardvault.git"
BRANCH="main"

echo "=== CardVault Deployment ==="
echo "Deploy dir: $DEPLOY_DIR"
echo "Branch: $BRANCH"
echo ""

# Create deploy directory
sudo mkdir -p "$DEPLOY_DIR"
sudo mkdir -p /var/log/cardvault
sudo chown -R "$USER:$USER" "$DEPLOY_DIR" /var/log/cardvault

# Clone or pull
if [ -d "$DEPLOY_DIR/.git" ]; then
    echo "Pulling latest changes..."
    cd "$DEPLOY_DIR"
    git pull origin "$BRANCH"
else
    echo "Cloning repository..."
    git clone -b "$BRANCH" "$REPO_URL" "$DEPLOY_DIR"
    cd "$DEPLOY_DIR"
fi

# Install dependencies
echo ""
echo "Installing dependencies..."
if [ -f "$DEPLOY_DIR/pnpm-lock.yaml" ]; then
    pnpm install --frozen-lockfile
else
    echo "No lockfile found, running fresh install..."
    pnpm install
fi

# Build backend
echo ""
echo "Building backend..."
cd "$DEPLOY_DIR/backend"
pnpm build

# Build storefront
echo ""
echo "Building storefront..."
cd "$DEPLOY_DIR/storefront"
pnpm build

# Run migrations
echo ""
echo "Running database migrations..."
cd "$DEPLOY_DIR/backend"
npx medusa db:migrate

# Setup nginx
echo ""
echo "Configuring nginx..."
sudo cp "$DEPLOY_DIR/deploy/nginx/cardvault.conf" /etc/nginx/sites-available/cardvault
sudo ln -sf /etc/nginx/sites-available/cardvault /etc/nginx/sites-enabled/cardvault
sudo nginx -t && sudo systemctl reload nginx

# Restart PM2 processes
echo ""
echo "Restarting services..."
pm2 delete all 2>/dev/null || true
pm2 start "$DEPLOY_DIR/deploy/ecosystem.config.js"
pm2 save

echo ""
echo "=== Deployment complete ==="
echo ""
echo "Backend:  http://localhost:9000"
echo "Storefront: http://localhost:3000"
echo "Admin:    http://localhost:9000/app"
echo ""
echo "Run deploy/scripts/setup-ssl.sh to enable HTTPS"

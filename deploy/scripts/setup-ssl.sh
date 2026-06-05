#!/bin/bash
set -e

DOMAIN="cardvault.com"
EMAIL="admin@cardvault.com"

echo "=== CardVault SSL Setup ==="
echo "Domain: $DOMAIN"
echo ""

if ! command -v certbot &> /dev/null; then
    echo "Installing Certbot..."
    sudo apt-get update
    sudo apt-get install -y certbot python3-certbot-nginx
fi

echo "Requesting SSL certificate..."
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" \
    --non-interactive \
    --agree-tos \
    --email "$EMAIL" \
    --redirect

echo ""
echo "Setting up auto-renewal cron job..."
sudo crontab -l 2>/dev/null | grep -q certbot || \
    (sudo crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet --post-hook 'systemctl reload nginx'") | sudo crontab -

echo ""
echo "SSL setup complete!"
echo "Certificate files:"
echo "  /etc/letsencrypt/live/$DOMAIN/fullchain.pem"
echo "  /etc/letsencrypt/live/$DOMAIN/privkey.pem"

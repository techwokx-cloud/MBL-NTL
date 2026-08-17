#!/bin/bash

# MBL–NTL SulNOxEco Ghana — Production Deployment Script
# Usage: ./scripts/deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
APP_NAME="sulnoxeco"
APP_DIR="/home/app/mbl-ntl-sulnox"

echo "🚀 Deploying $APP_NAME to $ENVIRONMENT..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Validate environment
if [ "$ENVIRONMENT" != "production" ] && [ "$ENVIRONMENT" != "staging" ]; then
  echo -e "${RED}Error: Invalid environment. Use 'production' or 'staging'${NC}"
  exit 1
fi

# Pre-deployment checks
echo -e "${YELLOW}✓ Running pre-deployment checks...${NC}"

if [ ! -f ".env.$ENVIRONMENT" ]; then
  echo -e "${RED}Error: .env.$ENVIRONMENT not found${NC}"
  exit 1
fi

# Stop current application
echo -e "${YELLOW}✓ Stopping application...${NC}"
pm2 stop $APP_NAME 2>/dev/null || true

# Update code
echo -e "${YELLOW}✓ Updating code...${NC}"
cd $APP_DIR
git fetch origin
git checkout main
git pull origin main

# Install dependencies
echo -e "${YELLOW}✓ Installing dependencies...${NC}"
npm ci --only=production

# Build application
echo -e "${YELLOW}✓ Building application...${NC}"
npm run build

# Copy environment file
echo -e "${YELLOW}✓ Configuring environment...${NC}"
cp .env.$ENVIRONMENT .env.production

# Start application
echo -e "${YELLOW}✓ Starting application...${NC}"
pm2 start npm --name $APP_NAME -- start
pm2 save

# Wait for application to be ready
echo -e "${YELLOW}✓ Waiting for application to start...${NC}"
sleep 5

# Health check
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
  echo -e "${GREEN}✓ Application health check passed${NC}"
else
  echo -e "${RED}✗ Application health check failed${NC}"
  pm2 stop $APP_NAME
  exit 1
fi

# Reload Nginx
echo -e "${YELLOW}✓ Reloading Nginx...${NC}"
sudo systemctl reload nginx

echo -e "${GREEN}✅ Deployment to $ENVIRONMENT completed successfully!${NC}"
echo -e "${GREEN}Application: https://www.mbl-ntlsulnox.com${NC}"

# Post-deployment
echo -e "${YELLOW}✓ Post-deployment checks...${NC}"
pm2 logs $APP_NAME --lines 20

exit 0

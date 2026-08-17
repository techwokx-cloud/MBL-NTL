#!/bin/bash

# MBL–NTL SulNOxEco Ghana — GitHub Push Script
# This script initializes git and pushes to GitHub using a personal access token

set -e

echo "════════════════════════════════════════════════════════════════"
echo "  MBL–NTL SulNOxEco Ghana — GitHub Setup & Push"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if git is installed
echo -e "${BLUE}[1/5]${NC} Checking git installation..."
if ! command -v git &> /dev/null; then
    echo -e "${RED}✗ Git is not installed${NC}"
    echo "Please install Git from: https://git-scm.com/"
    exit 1
fi
echo -e "${GREEN}✓ Git is installed${NC}"
echo ""

# Step 2: Configure git user (if not already configured)
echo -e "${BLUE}[2/5]${NC} Configuring git user..."
GIT_USER=$(git config --global user.name 2>/dev/null || echo "")
GIT_EMAIL=$(git config --global user.email 2>/dev/null || echo "")

if [ -z "$GIT_USER" ] || [ -z "$GIT_EMAIL" ]; then
    echo -e "${YELLOW}Git user not configured. Please provide:${NC}"
    read -p "Your Name: " GIT_USER
    read -p "Your Email: " GIT_EMAIL
    
    git config --global user.name "$GIT_USER"
    git config --global user.email "$GIT_EMAIL"
    echo -e "${GREEN}✓ Git user configured: $GIT_USER <$GIT_EMAIL>${NC}"
else
    echo -e "${GREEN}✓ Git user already configured: $GIT_USER <$GIT_EMAIL>${NC}"
fi
echo ""

# Step 3: Get GitHub repository details
echo -e "${BLUE}[3/5]${NC} Setting up GitHub repository..."
read -p "GitHub Username: " GITHUB_USER
read -p "Repository Name (mbl-ntl-sulnox): " REPO_NAME
REPO_NAME=${REPO_NAME:-mbl-ntl-sulnox}

REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
echo -e "${YELLOW}Repository URL: $REPO_URL${NC}"
echo ""

# Step 4: Initialize git repository
echo -e "${BLUE}[4/5]${NC} Initializing git repository..."
if [ -d ".git" ]; then
    echo -e "${YELLOW}⚠ Repository already initialized${NC}"
else
    git init
    echo -e "${GREEN}✓ Git repository initialized${NC}"
fi

# Add all files
git add .
echo -e "${GREEN}✓ All files staged${NC}"

# Create initial commit
git commit -m "🚀 Initial commit: MBL-NTL SulNOxEco Ghana website scaffold" || echo "No changes to commit"
echo -e "${GREEN}✓ Initial commit created${NC}"
echo ""

# Step 5: Push to GitHub with token
echo -e "${BLUE}[5/5]${NC} Pushing to GitHub..."
echo ""
echo -e "${YELLOW}You need a GitHub Personal Access Token to proceed.${NC}"
echo ""
echo "📖 HOW TO CREATE A PERSONAL ACCESS TOKEN:"
echo "  1. Go to: https://github.com/settings/tokens"
echo "  2. Click 'Generate new token (classic)'"
echo "  3. Give it a name: 'MBL-NTL Deployment'"
echo "  4. Select scopes: ✓ repo, ✓ gist, ✓ workflow"
echo "  5. Click 'Generate token'"
echo "  6. Copy the token (save it securely)"
echo ""
read -sp "Paste your GitHub Personal Access Token: " GITHUB_TOKEN
echo ""
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}✗ Token not provided${NC}"
    exit 1
fi

# Set remote
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

# Create main branch if needed
git branch -M main 2>/dev/null || true

# Push to GitHub
echo -e "${YELLOW}Pushing to GitHub...${NC}"
git push -u "https://$GITHUB_USER:$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git" main

echo ""
echo -e "${GREEN}════════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════════════${NC}"
echo ""
echo "📍 Repository URL: $REPO_URL"
echo ""
echo "Next steps:"
echo "  1. Visit: $REPO_URL"
echo "  2. Verify all files are there"
echo "  3. Add collaborators if needed"
echo "  4. Enable GitHub Pages (if desired)"
echo ""
echo "⚠️  SECURITY REMINDER:"
echo "  • Keep your personal access token secret"
echo "  • Never commit it to the repository"
echo "  • Store it in a password manager"
echo "  • Regenerate it periodically"
echo ""

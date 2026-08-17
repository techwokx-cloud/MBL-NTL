# Push to GitHub — Personal Access Token Method

Quick guide to push the MBL–NTL SulNOxEco project to GitHub using a personal access token.

---

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `mbl-ntl-sulnox`
3. **Description**: "Customer-facing website for MBL-NTL SulNOxEco Ghana"
4. **Visibility**: Private (recommended)
5. **DO NOT** initialize with README (we have one)
6. Click **Create repository**

---

## Step 2: Generate Personal Access Token

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. **Token name**: `mbl-ntl-deployment`
4. **Expiration**: 90 days (or longer if needed)
5. **Select scopes**:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `gist` (Create gists)
   - ✅ `workflow` (Update GitHub Actions)
6. Click **Generate token**
7. **COPY THE TOKEN** (you won't see it again!)
8. **SAVE IT SECURELY** (password manager, etc.)

⚠️ **Never commit this token to Git!**

---

## Step 3: Configure Git User (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

**Verify:**
```bash
git config --global --list | grep user
```

---

## Step 4: Initialize Repository

```bash
cd mbl-ntl-sulnox

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "🚀 Initial commit: MBL-NTL SulNOxEco Ghana website scaffold"
```

---

## Step 5: Push to GitHub Using Token

Replace `YOUR_USERNAME` and `YOUR_TOKEN` with your actual values:

```bash
git remote add origin https://github.com/YOUR_USERNAME/mbl-ntl-sulnox.git
git branch -M main
git push -u https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mbl-ntl-sulnox.git main
```

**Example** (with fake credentials):
```bash
git remote add origin https://github.com/georgejabley/mbl-ntl-sulnox.git
git branch -M main
git push -u https://georgejabley:ghp_abc123xyz@github.com/georgejabley/mbl-ntl-sulnox.git main
```

---

## Step 6: Verify Push

1. Go to your repository: `https://github.com/YOUR_USERNAME/mbl-ntl-sulnox`
2. ✅ Verify all files are there
3. ✅ Verify commit message appears
4. ✅ Check `README.md` loads

---

## Automated Script (Optional)

If you prefer, run the automated script:

```bash
chmod +x scripts/github-push.sh
./scripts/github-push.sh
```

The script will:
- ✅ Check git is installed
- ✅ Configure git user
- ✅ Ask for GitHub credentials
- ✅ Initialize repository
- ✅ Create initial commit
- ✅ Push to GitHub

---

## After First Push: Using Token for Future Pushes

### Option 1: Store Token Locally (Recommended)

**macOS/Linux:**
```bash
# Create ~/.netrc file
cat > ~/.netrc << EOF
machine github.com
login YOUR_USERNAME
password YOUR_TOKEN
EOF

# Set permissions
chmod 600 ~/.netrc
```

**Windows:**
```
Create file: C:\Users\YourName\_netrc
Content:
machine github.com
login YOUR_USERNAME
password YOUR_TOKEN

(No line breaks, single space between fields)
```

Then push normally:
```bash
git push origin main
```

### Option 2: Use GitHub CLI (Easiest)

Install GitHub CLI:
```bash
# macOS
brew install gh

# Windows
choco install gh

# Linux
sudo apt install gh
```

Authenticate:
```bash
gh auth login
# Follow prompts
```

Then push normally:
```bash
git push origin main
```

### Option 3: Use SSH Keys (Most Secure)

[GitHub SSH Setup Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

## Daily Workflow (After First Push)

Once set up, daily development is simple:

```bash
# Make changes...

# Stage and commit
git add .
git commit -m "Fix: Update WhatsApp number"

# Push to GitHub
git push origin main
```

---

## 🚀 One-Liner Commands

**Quick push:**
```bash
git add . && git commit -m "Update: $(date '+%Y-%m-%d')" && git push origin main
```

**Create new branch:**
```bash
git checkout -b feature/update-dosing
```

**Merge back to main:**
```bash
git checkout main
git pull origin main
git merge feature/update-dosing
git push origin main
```

---

## Troubleshooting

### Token Not Working
- ✅ Verify token is correct (copy again from settings)
- ✅ Check token hasn't expired (90 days)
- ✅ Verify repository name matches

### "Repository not found"
- ✅ Check username is correct (case-sensitive)
- ✅ Verify repository was created on GitHub
- ✅ Check visibility (private vs public)

### "Permission denied"
- ✅ Regenerate token (might be expired or revoked)
- ✅ Verify token has `repo` scope
- ✅ Check username/password are correct

### Clear credentials (if token leaks)
```bash
# macOS/Linux
git credential-cache exit
rm ~/.netrc

# Windows
# Delete _netrc file manually
```

---

## Security Best Practices

✅ **DO:**
- Store token in password manager
- Use short expiration (30-90 days)
- Regenerate periodically
- Use environment variables in CI/CD
- Limit scope to necessary permissions

❌ **DON'T:**
- Commit token to repository
- Share token via email/chat
- Use same token for multiple projects
- Leave token in shell history
- Post token in issues/PRs

---

## GitHub Actions (Optional)

To automate deployment, you can set up GitHub Actions:

1. Create `.github/workflows/deploy.yml`
2. Add deployment job
3. Store token as repository secret
4. Push trigger will auto-deploy

See GitHub Actions documentation for details.

---

## Need Help?

### GitHub Documentation
- [Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub CLI](https://cli.github.com/)
- [SSH Authentication](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Contact Support
- **Email**: george.jabley@gmail.com
- **LinkedIn**: linkedin.com/in/georgejabley

---

**Status**: ✅ Ready to push!

**Next Step**: Run the push command or script above, then verify on GitHub.

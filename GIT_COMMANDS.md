# Quick Git Commands — Push to GitHub

Copy and paste these commands in order. Replace placeholders with your values.

---

## Before You Start

1. ✅ Create GitHub account: [github.com/join](https://github.com/join)
2. ✅ Create repository: [github.com/new](https://github.com/new)
   - Name: `mbl-ntl-sulnox`
   - Visibility: Private
   - Don't initialize with README
3. ✅ Create Personal Access Token: [github.com/settings/tokens](https://github.com/settings/tokens)
   - Name: `mbl-ntl-deployment`
   - Scopes: ✓ repo, ✓ workflow
   - Save the token securely

---

## Commands to Run (In Order)

### 1. Configure Git User (First Time Only)

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

**Example:**
```bash
git config --global user.name "George Jabley"
git config --global user.email "george.jabley@gmail.com"
```

### 2. Navigate to Project

```bash
cd mbl-ntl-sulnox
```

### 3. Initialize Git Repository

```bash
git init
```

### 4. Add All Files

```bash
git add .
```

### 5. Create Initial Commit

```bash
git commit -m "🚀 Initial commit: MBL-NTL SulNOxEco Ghana website scaffold"
```

### 6. Add Remote Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/mbl-ntl-sulnox.git
```

**Example:**
```bash
git remote add origin https://github.com/georgejabley/mbl-ntl-sulnox.git
```

### 7. Rename Branch to Main

```bash
git branch -M main
```

### 8. Push to GitHub with Token

```bash
git push -u https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mbl-ntl-sulnox.git main
```

**Example:**
```bash
git push -u https://georgejabley:ghp_1234567890abcdefghijklmnopqrstuvwxyz@github.com/georgejabley/mbl-ntl-sulnox.git main
```

⚠️ Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_TOKEN` with your Personal Access Token (from Step 3)
- Both should match your repository URL

---

## All Commands in One Script

Copy this entire block and paste into terminal:

```bash
# Configure git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Navigate to project
cd mbl-ntl-sulnox

# Initialize and commit
git init
git add .
git commit -m "🚀 Initial commit: MBL-NTL SulNOxEco Ghana website scaffold"

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/mbl-ntl-sulnox.git
git branch -M main
git push -u https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mbl-ntl-sulnox.git main
```

---

## Verify It Worked

1. Open: `https://github.com/YOUR_USERNAME/mbl-ntl-sulnox`
2. ✅ See all files
3. ✅ See commit message
4. ✅ See README.md

---

## Common Issues & Fixes

### "fatal: not a git repository"
**Fix:**
```bash
pwd  # Should show: /path/to/mbl-ntl-sulnox
git status  # Should show status, not error
```

### "repository not found"
**Fix:**
- Verify username is correct (case-sensitive)
- Verify repository was created on GitHub
- Check token hasn't expired

### "remote origin already exists"
**Fix:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/mbl-ntl-sulnox.git
```

### "Permission denied (publickey)"
**Fix:** Use token method (not SSH):
```bash
git push -u https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mbl-ntl-sulnox.git main
```

---

## After First Push

Store token for easier future pushes:

### macOS/Linux
```bash
cat > ~/.netrc << EOF
machine github.com
login YOUR_USERNAME
password YOUR_TOKEN
EOF

chmod 600 ~/.netrc
```

Then just use:
```bash
git push origin main
```

### Windows
Create file `C:\Users\YourName\_netrc` with:
```
machine github.com
login YOUR_USERNAME
password YOUR_TOKEN
```

---

## Daily Workflow

```bash
# Make changes...

# Stage and commit
git add .
git commit -m "Feature: Update WhatsApp integration"

# Push to GitHub
git push origin main
```

---

## Useful Git Commands

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature/dosing-update

# Switch branches
git checkout main

# Merge branch
git merge feature/dosing-update

# Push new branch
git push -u origin feature/dosing-update

# Delete local branch
git branch -d feature/dosing-update

# Delete remote branch
git push origin --delete feature/dosing-update
```

---

## Need Help?

📖 Full guide: See `GITHUB_SETUP.md`

---

**Ready? Run the commands above now!** ✅

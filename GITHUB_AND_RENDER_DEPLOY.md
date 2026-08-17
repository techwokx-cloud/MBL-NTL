# Deploy to GitHub + Render — Complete Guide

This guide covers pushing your MBL-NTL SulNOxEco project to GitHub and deploying it to Render for live demo.

---

## 📋 Prerequisites

✅ GitHub account: [github.com/join](https://github.com/join)  
✅ Render account: [render.com](https://render.com)  
✅ Git installed locally  
✅ Project files ready (all 44 files)

---

## Part 1: Push to GitHub

### Step 1A: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `mbl-ntl-sulnox`
3. **Description**: "MBL-NTL SulNOxEco Ghana — AI-powered customer website"
4. **Visibility**: Private (secure)
5. **Initialize**: Leave unchecked (we have files)
6. Click **Create repository**

### Step 1B: Create Personal Access Token

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. **Token name**: `mbl-ntl-sulnox-deploy`
4. **Expiration**: 90 days
5. **Select scopes**:
   - ✅ `repo` (full control)
   - ✅ `workflow` (actions)
6. Click **Generate token**
7. **COPY THE TOKEN** (won't show again!)
8. **SAVE in password manager**

⚠️ **Keep this token safe — never commit to Git!**

### Step 1C: Push Code to GitHub

Open terminal in your project directory and run:

```bash
# Configure git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Initialize repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "🚀 Initial commit: MBL-NTL SulNOxEco Ghana website with logo and AI sales agent"

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/mbl-ntl-sulnox.git

# Rename branch to main
git branch -M main

# Push to GitHub (use your token)
git push -u https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mbl-ntl-sulnox.git main
```

**Replace:**
- `YOUR_USERNAME` = your GitHub username
- `YOUR_TOKEN` = token from Step 1B

**Example:**
```bash
git push -u https://georgejabley:ghp_abc123def456ghi789jkl@github.com/georgejabley/mbl-ntl-sulnox.git main
```

### Step 1D: Verify Push

1. Go to `https://github.com/YOUR_USERNAME/mbl-ntl-sulnox`
2. ✅ See all 44 files
3. ✅ See commit message
4. ✅ See logo.png in public/
5. ✅ See distributors page (now AI Sales Agent)

---

## Part 2: Deploy to Render

### Step 2A: Prepare for Render

Render needs a few configuration files. Create `.env.production` in root:

```bash
cat > .env.production << EOF
NEXT_PUBLIC_SITE_URL=https://mbl-ntl-sulnox.onrender.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+233123456789
NEXT_PUBLIC_AI_PROVIDER=anthropic
NODE_ENV=production
EOF
```

### Step 2B: Create Render Web Service

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **New** → **Web Service**
3. Click **Connect GitHub Account** (if first time)
4. Select repository: `mbl-ntl-sulnox`
5. Click **Connect**
6. Configure:
   - **Name**: `mbl-ntl-sulnox`
   - **Environment**: `Node`
   - **Region**: `Frankfurt` (closest to Ghana)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free` (for demo) or `Paid` (for production)

### Step 2C: Add Environment Variables (Render)

In Render dashboard, add these environment variables:

| Key | Value | Required |
|-----|-------|----------|
| `NEXT_PUBLIC_SITE_URL` | `https://mbl-ntl-sulnox.onrender.com` | ✅ Yes |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+233XXXXXXXXX` | ✅ Yes |
| `NEXT_PUBLIC_AI_PROVIDER` | `anthropic` | ✅ Yes |
| `ANTHROPIC_API_KEY` | Your API key | If using AI |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | Optional |

**Note**: Never paste actual API keys in commits. Use Render's environment variable dashboard.

### Step 2D: Deploy

1. Click **Deploy** button
2. Wait 3-5 minutes for build
3. Check **Logs** tab for errors
4. Once deployed, copy your URL: `https://mbl-ntl-sulnox.onrender.com`

---

## Part 3: Automate Deployments

### Auto-Deploy on GitHub Push (Recommended)

Render automatically redeploys when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Feature: Update WhatsApp number"

# Push to GitHub
git push origin main

# Render automatically rebuilds and redeployso!
# Check dashboard to monitor
```

### Manual Deployment (Fallback)

If auto-deploy fails:
1. Go to Render dashboard
2. Click your service
3. Click **Manual Deploy** button
4. Select commit
5. Click **Deploy**

---

## Troubleshooting

### "Build failed"

**Check logs** in Render dashboard:
```
Error: ENOENT: no such file or directory, open 'next.config.js'
```

**Fix**: Ensure all config files are in root:
- ✅ `package.json`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.ts`
- ✅ `next.config.js`
- ✅ `.env.production`

### "Port error" or "Cannot connect"

**Fix**: Ensure `next.config.js` doesn't specify a fixed port:
```js
// ✅ GOOD: Let Render assign the port
module.exports = {
  reactStrictMode: true,
  // ...
}

// ❌ BAD: Don't hardcode ports
const server = http.createServer(app)
server.listen(3000)  // Render uses dynamic ports
```

### "Timeout during build"

**Cause**: Free Render tier has 15-minute limit  
**Fix**:
1. Upgrade to Paid tier (starts at $7/month)
2. Or optimize build time:
   ```bash
   npm run build  # Test locally first
   npm install --production  # Remove devDependencies
   ```

### Environment variables not loading

1. Verify in Render dashboard → Environment
2. Redeploy after adding variables
3. Check that variable names are exact (case-sensitive)

---

## Post-Deployment Checklist

- ✅ Website loads at `https://mbl-ntl-sulnox.onrender.com`
- ✅ All pages work (home, products, support, etc.)
- ✅ Logo displays correctly
- ✅ AI Sales Agent page loads (`/distributors`)
- ✅ WhatsApp button works
- ✅ Responsive design works on mobile
- ✅ No console errors
- ✅ Analytics tracking (if configured)

---

## Access Render Dashboard

Dashboard: [render.com/dashboard](https://render.com/dashboard)

Monitor:
- Logs (build & runtime)
- Metrics (CPU, memory, requests)
- Deployments (history)
- Environment variables

---

## Update After First Push

### Make changes locally:
```bash
cd mbl-ntl-sulnox

# Edit files...

# Commit and push
git add .
git commit -m "Fix: Update dosing specifications"
git push origin main

# Render automatically redeploys!
```

### View live site:
```
https://mbl-ntl-sulnox.onrender.com
```

---

## Free vs Paid Render Plans

| Feature | Free | Pro |
|---------|------|-----|
| **Build time** | 15 min | Unlimited |
| **Requests/month** | 750 hrs | Unlimited |
| **Auto-sleep** | Yes | No |
| **Cost** | $0 | $7+/month |

**For production**: Use **Pro** tier (avoids sleep/timeouts)

---

## Next: Use Custom Domain (Optional)

Once tested on Render:

1. Buy domain: [namecheap.com](https://www.namecheap.com) or [domains.google.com](https://domains.google.com)
   - Example: `sulnoxeco.com`

2. In Render dashboard:
   - Service → Settings
   - Add Custom Domain
   - Follow DNS setup

3. Update GitHub `.env.production`:
   ```
   NEXT_PUBLIC_SITE_URL=https://sulnoxeco.com
   ```

---

## Security Reminders

✅ **DO:**
- Store tokens in password manager
- Use environment variables for secrets
- Enable 2FA on GitHub & Render
- Rotate tokens every 90 days
- Monitor deploy logs for errors

❌ **DON'T:**
- Commit `.env` files to Git
- Share API keys via email/chat
- Reuse tokens across projects
- Store secrets in config files

---

## Live Demo URL

Once deployed on Render:

```
🌐 https://mbl-ntl-sulnox.onrender.com

📱 Mobile: Fully responsive
💬 WhatsApp: Working
🤖 AI Sales Agent: /distributors page
📊 Analytics: Ready (add GA ID)
```

---

## Support & Questions

**GitHub Issues**: [Create issue](https://github.com/YOUR_USERNAME/mbl-ntl-sulnox/issues)  
**Render Docs**: [render.com/docs](https://render.com/docs)  
**Contact**: george.jabley@gmail.com

---

## Summary

✅ **Step 1**: Push to GitHub with access token  
✅ **Step 2**: Create Render service  
✅ **Step 3**: Add environment variables  
✅ **Step 4**: Deploy & test  
✅ **Step 5**: Share live URL with client  

**Time to live**: ~10 minutes

---

**Status**: Ready for deployment!

**Next**: Execute the commands above, then share the live URL with your team.

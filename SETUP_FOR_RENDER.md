# 🚀 Setup & Deploy to Render — Complete Guide

This guide shows you how to use these files to deploy on Render immediately.

---

## 📂 Folder Structure (Correct Layout)

```
mbl-ntl-sulnox/                    # Project root
├── app/                           # Next.js pages & API
│   ├── api/
│   │   ├── chat/route.ts
│   │   └── health/route.ts
│   ├── about/page.tsx
│   ├── branches/page.tsx
│   ├── distributors/page.tsx      # AI Sales Agent
│   ├── dosing-ratio/page.tsx
│   ├── how-it-works/page.tsx
│   ├── privacy/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   ├── 250ml/page.tsx
│   │   └── 4-5l/page.tsx
│   ├── resources/page.tsx
│   ├── shop/page.tsx
│   ├── support/page.tsx
│   ├── terms/page.tsx
│   ├── error.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx                  # Home page
│   ├── globals.css
│   └── sitemap.ts
├── components/                    # React components
│   ├── AIAssistant.tsx
│   ├── EngineExperience.tsx
│   ├── ProductCard.tsx
│   ├── SiteFooter.tsx
│   └── SiteHeader.tsx             # Has logo!
├── lib/                           # Utilities
│   ├── constants.ts
│   └── utils.ts
├── public/                        # Static assets
│   ├── logo.png                  # NTL SulNOx logo
│   └── robots.txt
├── scripts/                       # Deployment
│   └── deploy.sh
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── Dockerfile
├── nginx.conf
├── .env.example
├── .env.production.example
├── .gitignore
├── .dockerignore
└── [Documentation files]
    ├── START_HERE.md
    ├── QUICK_DEPLOY.md
    ├── README.md
    └── ...
```

✅ **All folders and files are already organized correctly above!**

---

## ⚡ Quick Setup (3 Steps)

### Step 1: Download & Extract

1. Download `/mnt/user-data/outputs/` contents
2. Extract to your local machine
3. Open terminal in the project root

### Step 2: Verify Files Exist

```bash
# Verify structure
ls -la
# Should show: app, components, lib, public, scripts, package.json, etc.

# Verify app router
ls app/
# Should show: page.tsx, layout.tsx, error.tsx, etc.

# Verify components
ls components/
# Should show: SiteHeader.tsx, SiteFooter.tsx, etc.

# Verify logo
ls public/
# Should show: logo.png, robots.txt
```

### Step 3: Deploy to Render

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MBL-NTL SulNOxEco Ghana website"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/mbl-ntl-sulnox.git

# Push (use personal access token)
git push -u https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mbl-ntl-sulnox.git main
```

---

## 🔌 Render Deployment Steps

### 1. Create Render Account
- Go to [render.com](https://render.com)
- Sign up (free)

### 2. Create Web Service
- Click **New** → **Web Service**
- Connect your GitHub account
- Select repository: `mbl-ntl-sulnox`

### 3. Configure Service

| Setting | Value |
|---------|-------|
| **Name** | mbl-ntl-sulnox |
| **Environment** | Node |
| **Region** | Frankfurt |
| **Branch** | main |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | Free (demo) or Starter (production) |

### 4. Add Environment Variables

In Render Dashboard, add these:

```
NEXT_PUBLIC_SITE_URL = https://mbl-ntl-sulnox.onrender.com
NEXT_PUBLIC_WHATSAPP_NUMBER = +233123456789
NEXT_PUBLIC_AI_PROVIDER = anthropic
NODE_ENV = production
```

### 5. Deploy

Click **Create Web Service** and wait 3-5 minutes.

Once you see a green checkmark, your site is live at:
```
https://mbl-ntl-sulnox.onrender.com
```

---

## ✅ Verify Deployment Works

After Render finishes building:

1. **Visit your site**: `https://mbl-ntl-sulnox.onrender.com`
2. **Check pages load**:
   - Homepage `/`
   - About `/about`
   - Products `/products`
   - AI Sales Agent `/distributors` ← **NEW!**
   - Support `/support`
3. **Verify logo displays** on header
4. **Test navigation** works
5. **Check console** for errors (F12)
6. **Test on mobile** (responsive)

---

## 📋 File Checklist

Before deploying, verify these files exist:

### Root Files (Must Have)
- ✅ `package.json`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.ts`
- ✅ `next.config.js`
- ✅ `.gitignore`
- ✅ `Dockerfile`
- ✅ `nginx.conf`

### App Files (Must Have)
- ✅ `app/layout.tsx` (root layout)
- ✅ `app/page.tsx` (home page)
- ✅ `app/globals.css` (styles)

### Components (Must Have)
- ✅ `components/SiteHeader.tsx` (with logo)
- ✅ `components/SiteFooter.tsx`

### Public Assets (Must Have)
- ✅ `public/logo.png` (1.6 MB)
- ✅ `public/robots.txt`

### If Missing Any Files

The files are all at: `/mnt/user-data/outputs/`

Copy the entire `mbl-ntl-sulnox` folder to your machine.

---

## 🔧 Troubleshooting

### Build Failed: "ENOENT: no such file"
**Problem**: Missing configuration files  
**Solution**: Ensure `package.json`, `tsconfig.json`, `tailwind.config.ts`, and `next.config.js` are in root

### Build Failed: "Module not found"
**Problem**: Missing folder or import path  
**Solution**: Check all folders exist: `app/`, `components/`, `lib/`, `public/`

### Build Timeout (15 min limit)
**Problem**: Free tier has build time limit  
**Solution**: Upgrade to Starter plan (paid, ~$7/month)

### Website Shows "Application Error"
**Problem**: Runtime error  
**Solution**: Check Render logs → Deployments → View Logs

### Logo not displaying
**Problem**: Logo path incorrect  
**Solution**: Verify `public/logo.png` exists and `SiteHeader.tsx` references it

---

## 📝 Important Notes

### Environment Variables
- `NEXT_PUBLIC_*` variables are exposed in browser (safe for config)
- Store API keys in Render environment (not in .env files)
- Never commit `.env` files to Git

### Auto-Deploy
Once connected, Render automatically rebuilds when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update: Feature"
git push origin main

# Render automatically redeploys! ✨
```

### Free vs Paid
- **Free**: Spins down after 15 min of no traffic
- **Starter** (~$7/month): Always running, faster builds
- For production: Use **Starter** or higher

---

## 🎯 After First Deploy

### Update Content (Optional)
1. Update client info in files
2. Add WhatsApp number
3. Add branch locations
4. Connect API keys
5. Push to GitHub (auto-redeploys)

### Monitor Performance
- Render Dashboard → Metrics
- Check CPU, memory, response times
- View logs for errors

### Custom Domain (Optional)
1. Buy domain
2. Add to Render Dashboard
3. Follow DNS setup
4. Update `NEXT_PUBLIC_SITE_URL` in .env

---

## 📚 Quick Reference

| Task | Command |
|------|---------|
| Initialize git | `git init` |
| Add all files | `git add .` |
| Commit | `git commit -m "message"` |
| Push to GitHub | `git push origin main` |
| Test locally | `npm install && npm run dev` |
| Build locally | `npm run build` |
| View live site | `https://mbl-ntl-sulnox.onrender.com` |

---

## 🆘 Need Help?

**Files not organizing correctly?**
→ All files are already in correct folders. Just download `/mnt/user-data/outputs/`

**Render deployment stuck?**
→ Check Logs in Render Dashboard

**GitHub push failing?**
→ Verify personal access token is valid and has `repo` scope

**Questions about setup?**
→ See: START_HERE.md or QUICK_DEPLOY.md

---

## ✨ Success Criteria

Once deployed, you should have:
- ✅ Website loads at `https://mbl-ntl-sulnox.onrender.com`
- ✅ All 15 pages accessible
- ✅ Logo displays on every page
- ✅ Responsive design works (mobile + desktop)
- ✅ No console errors
- ✅ Navigation working
- ✅ AI Sales Agent page (`/distributors`) showing

---

**You're all set!** 🚀

Download the files from `/mnt/user-data/outputs/` and follow the 3 steps above.

Your website will be live in ~15 minutes!

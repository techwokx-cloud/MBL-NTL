# 🚀 Quick Deploy Commands

Copy and paste these commands in order. Takes ~10 minutes total.

---

## 1️⃣ Configure Git (First Time Only)

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your@email.com"
```

**Verify:**
```bash
git config --global --list | grep user
```

---

## 2️⃣ Navigate to Project

```bash
cd mbl-ntl-sulnox
```

---

## 3️⃣ Initialize & Commit

```bash
git init
git add .
git commit -m "🚀 Initial commit: MBL-NTL SulNOxEco Ghana website with logo and AI sales agent"
```

---

## 4️⃣ Add Remote & Push to GitHub

**Get your token first**: [github.com/settings/tokens](https://github.com/settings/tokens)

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/mbl-ntl-sulnox.git

# Rename to main
git branch -M main

# Push (replace USERNAME and TOKEN)
git push -u https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mbl-ntl-sulnox.git main
```

**Real example:**
```bash
git remote add origin https://github.com/georgejabley/mbl-ntl-sulnox.git
git branch -M main
git push -u https://georgejabley:ghp_1234567890abcdefghijklmnopqrstuvwxyz@github.com/georgejabley/mbl-ntl-sulnox.git main
```

---

## ✅ Verify GitHub Push

1. Open: `https://github.com/YOUR_USERNAME/mbl-ntl-sulnox`
2. ✅ See all 44 files
3. ✅ See `public/logo.png`
4. ✅ See commit message
5. ✅ See updated `/distributors` page

---

## 5️⃣ Create `.env.production` (For Render)

```bash
cat > .env.production << EOF
NEXT_PUBLIC_SITE_URL=https://mbl-ntl-sulnox.onrender.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+233123456789
NEXT_PUBLIC_AI_PROVIDER=anthropic
NODE_ENV=production
EOF
```

Then push it:
```bash
git add .env.production
git commit -m "Add: Production environment configuration"
git push origin main
```

---

## 6️⃣ Deploy to Render

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **New** → **Web Service**
3. Select GitHub repository: `mbl-ntl-sulnox`
4. Configure:
   - **Name**: `mbl-ntl-sulnox`
   - **Environment**: `Node`
   - **Region**: `Frankfurt`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add environment variables (copy from `.env.production`)
6. Click **Create Web Service**
7. Wait 3-5 minutes for deployment

---

## ✅ Verify Render Deployment

1. Check logs in Render dashboard
2. Once green checkmark appears, visit:
   ```
   https://mbl-ntl-sulnox.onrender.com
   ```
3. ✅ Website loads
4. ✅ Logo displays
5. ✅ All pages work
6. ✅ Mobile responsive
7. ✅ No errors in console

---

## 📝 Daily Workflow (After First Deploy)

```bash
# Make changes locally...

# Commit and push
git add .
git commit -m "Feature: Update WhatsApp number"
git push origin main

# Render automatically redeploys! ✨
# (Check dashboard for build status)
```

---

## 🔗 Important Links

| Item | URL |
|------|-----|
| GitHub Repo | `https://github.com/YOUR_USERNAME/mbl-ntl-sulnox` |
| Live Site | `https://mbl-ntl-sulnox.onrender.com` |
| Render Dashboard | [render.com/dashboard](https://render.com/dashboard) |
| GitHub Settings | [github.com/settings/tokens](https://github.com/settings/tokens) |

---

## ⚠️ Important Reminders

- ✅ Save your GitHub token in password manager
- ✅ Never commit tokens or secrets to Git
- ✅ Use environment variables for sensitive data
- ✅ Keep `.env` files in `.gitignore`
- ✅ Regenerate tokens every 90 days

---

## 🆘 Common Issues

### "Repository not found"
- [ ] Verify username is correct (case-sensitive)
- [ ] Check repository was created on GitHub
- [ ] Verify token is correct

### "Build failed on Render"
- [ ] Check logs in Render dashboard
- [ ] Verify `package.json` exists
- [ ] Test locally: `npm run build`
- [ ] Free tier has 15-min build limit (upgrade if needed)

### "Website not loading"
- [ ] Wait for green checkmark in Render
- [ ] Check Render logs
- [ ] Verify environment variables are set
- [ ] Clear browser cache (Ctrl+Shift+R)

---

## 📞 Need Help?

- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Support Email**: george.jabley@gmail.com

---

**Everything set? You're done!** 🎉

Your website is now live at: `https://mbl-ntl-sulnox.onrender.com`

Share this link with your team and clients for feedback!

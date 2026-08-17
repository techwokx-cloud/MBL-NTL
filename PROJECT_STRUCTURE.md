# MBL–NTL SulNOxEco Ghana — Project Structure

Complete folder layout with descriptions.

## 📁 Directory Tree

```
mbl-ntl-sulnox/
│
├── 📂 app/                                    # Next.js App Router
│   ├── layout.tsx                            # Root layout + SEO metadata
│   ├── page.tsx                              # Home page (hero + products)
│   ├── globals.css                           # Global styles + Tailwind
│   │
│   ├── 📂 api/                               # API Routes
│   │   ├── 📂 chat/
│   │   │   └── route.ts                      # AI Assistant endpoint
│   │   └── 📂 health/
│   │       └── route.ts                      # Health check endpoint
│   │
│   ├── 📂 about/
│   │   └── page.tsx                          # About Us page
│   │
│   ├── 📂 how-it-works/
│   │   └── page.tsx                          # Process explanation + FAQs
│   │
│   ├── 📂 products/
│   │   ├── page.tsx                          # Products overview
│   │   ├── 📂 250ml/
│   │   │   └── page.tsx                      # 250ml product detail
│   │   └── 📂 4-5l/
│   │       └── page.tsx                      # 4.5L container detail
│   │
│   ├── 📂 shop/
│   │   └── page.tsx                          # eCommerce listing
│   │
│   ├── 📂 branches/
│   │   └── page.tsx                          # Locations/branches
│   │
│   ├── 📂 distributors/
│   │   └── page.tsx                          # Partnership program
│   │
│   ├── 📂 dosing-ratio/
│   │   └── page.tsx                          # Calculator + guide
│   │
│   ├── 📂 support/
│   │   └── page.tsx                          # Contact + FAQs
│   │
│   └── 📂 resources/
│       └── page.tsx                          # Docs + training materials
│
├── 📂 components/                            # Reusable React Components
│   ├── SiteHeader.tsx                        # Navigation + WhatsApp CTA
│   ├── SiteFooter.tsx                        # Footer + links
│   ├── AIAssistant.tsx                       # Chat widget (Phase 1)
│   ├── ProductCard.tsx                       # Product display card
│   └── EngineExperience.tsx                  # How it works section
│
├── 📂 public/                                # Static assets (add here)
│   ├── og-image.png                          # Open Graph image (add)
│   ├── favicon.ico                           # Favicon (add)
│   ├── logo.png                              # NTL logo (add)
│   └── pattern.png                           # Background pattern (add)
│
├── 📂 scripts/
│   └── deploy.sh                             # Automated deployment script
│
├── 📄 Configuration Files
│   ├── package.json                          # Dependencies + scripts
│   ├── tsconfig.json                         # TypeScript config
│   ├── tailwind.config.ts                    # Tailwind brand colors
│   ├── next.config.js                        # Next.js optimization
│   └── .env.example                          # Environment template
│
├── 📄 Deployment & Infrastructure
│   ├── Dockerfile                            # Production container
│   ├── nginx.conf                            # Reverse proxy + SSL
│   └── .gitignore                            # Git exclusions
│
├── 📄 Documentation
│   ├── README.md                             # Setup + deployment guide
│   └── PROJECT_STRUCTURE.md                  # This file
```

---

## 📊 File Count Summary

| Folder | Files | Purpose |
|--------|-------|---------|
| `app/` | 14 | Pages + layouts + API routes |
| `components/` | 5 | Reusable React components |
| `public/` | 0 | Static assets (add logos, images) |
| `scripts/` | 1 | Deployment automation |
| Root config | 7 | TypeScript, Tailwind, Next.js, env |

**Total: 30 files** (production-ready scaffold)

---

## 🚀 Quick Navigation

### Pages (Routes)
- **Home**: `/app/page.tsx`
- **About**: `/app/about/page.tsx`
- **How It Works**: `/app/how-it-works/page.tsx`
- **Products**: `/app/products/page.tsx` + detail pages
- **Shop**: `/app/shop/page.tsx`
- **Branches**: `/app/branches/page.tsx`
- **Support**: `/app/support/page.tsx`
- **Resources**: `/app/resources/page.tsx`
- **Distributors**: `/app/distributors/page.tsx`
- **Dosing Ratio**: `/app/dosing-ratio/page.tsx`

### Components
- **Header Navigation**: `/components/SiteHeader.tsx`
- **Footer**: `/components/SiteFooter.tsx`
- **AI Chat**: `/components/AIAssistant.tsx`
- **Product Display**: `/components/ProductCard.tsx`
- **Process Section**: `/components/EngineExperience.tsx`

### APIs
- **AI Chat API**: `/app/api/chat/route.ts`
- **Health Check**: `/app/api/health/route.ts`

### Configuration
- **Brand Colors**: `/tailwind.config.ts`
- **Dependencies**: `/package.json`
- **TypeScript**: `/tsconfig.json`
- **Next.js**: `/next.config.js`
- **Environment**: `.env.example`

### Deployment
- **Docker**: `Dockerfile`
- **Nginx Proxy**: `nginx.conf`
- **Auto Deploy**: `scripts/deploy.sh`

---

## ✅ What's Included

✅ All 11 routes with SEO metadata  
✅ 5 reusable components  
✅ 2 API endpoints (chat + health)  
✅ Brand styling (Tailwind v4 + custom colors)  
✅ Production Dockerfile  
✅ Nginx reverse proxy config  
✅ Deployment automation script  
✅ Comprehensive README  

---

## ⏳ What's Waiting for Client Input

1. **WhatsApp Number** → Update `SiteHeader.tsx` + `SiteFooter.tsx`
2. **Branch Locations** → Update `app/branches/page.tsx`
3. **Payment Gateway** → Configure `app/shop/page.tsx`
4. **Dosing Specs** → Finalize `app/dosing-ratio/page.tsx`
5. **AI LLM Choice** → Connect `app/api/chat/route.ts`
6. **NTL Logo** → Add to `public/` folder
7. **Google Analytics ID** → Add to `app/layout.tsx`
8. **Email Service (optional)** → Setup in `.env`

---

## 📋 How to Use This Project

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
npm start

# 4. Deploy to VPS
chmod +x scripts/deploy.sh
./scripts/deploy.sh production
```

See `README.md` for full deployment instructions.

---

**Status**: ✅ Production-ready scaffold with complete folder structure

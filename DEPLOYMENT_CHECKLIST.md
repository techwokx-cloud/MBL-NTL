# MBL–NTL SulNOxEco Ghana — Pre-Deployment Checklist

**Project**: Next.js Website for MBL-NTL SulNOxEco  
**Domain**: https://www.mbl-ntlsulnox.com  
**Status**: Production Deployment  
**Date**: ______________________

---

## ✅ Pre-Production Tasks (Must Complete Before Launch)

### 1. **WhatsApp Integration** ⏳
- [ ] Obtain approved WhatsApp Business Number from SulNOxEco Ghana
- [ ] Test WhatsApp link functionality
- [ ] Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.production`
- [ ] Update WhatsApp URL in:
  - `components/SiteHeader.tsx` (line ~25)
  - `components/SiteFooter.tsx` (line ~38)
  - `app/support/page.tsx` contact section
- [ ] Test WhatsApp link from multiple browsers
- [ ] **Priority**: 🔴 Critical

### 2. **Branch/Location Data** ⏳
- [ ] Collect approved branch locations from SulNOxEco Ghana
- [ ] Verify addresses, phone numbers, and hours
- [ ] Update `app/branches/page.tsx`:
  - Head office (Accra)
  - Regional branches
  - Contact information
- [ ] Add coordinates for map integration (future)
- [ ] Test branch page display
- [ ] **Priority**: 🔴 Critical

### 3. **eCommerce Integration** ⏳
- [ ] Select payment gateway (Stripe, PayPal, MTN Mobile Money)
- [ ] Set up merchant account and API keys
- [ ] Configure product database/inventory system
- [ ] Implement shopping cart functionality
- [ ] Set up order management system
- [ ] Test complete purchase flow
- [ ] Implement SSL/TLS for payment processing
- [ ] Update `.env.production` with payment keys
- [ ] **Priority**: 🔴 Critical

### 4. **Dosing Specifications** ⏳
- [ ] Get approved dosing ratio specifications from client
- [ ] Update `app/dosing-ratio/page.tsx`:
  - Standard dosing percentages (3–8%)
  - Vehicle-specific recommendations
  - Refill intervals
- [ ] Add approved dosing table/calculator logic
- [ ] Test calculator with sample data
- [ ] **Priority**: 🟠 High

### 5. **AI Sales Agent** ⏳
- [ ] Confirm LLM provider (Anthropic Claude, OpenAI, other)
- [ ] Get approved knowledge base/context
- [ ] Set up API keys in `.env.production`
- [ ] Connect `app/api/chat/route.ts` to LLM API
- [ ] Uncomment API integration code (lines ~30–45)
- [ ] Test chat functionality with sample queries
- [ ] Add rate limiting and error handling
- [ ] **Priority**: 🟠 High (Phase 1)

### 6. **NTL Logo & Branding** ⏳
- [ ] Request final NTL logo files (PNG + SVG)
- [ ] Add logo to `public/` directory
- [ ] Update `components/SiteHeader.tsx` with actual logo
- [ ] Test logo display on all pages
- [ ] Verify sizing and responsiveness
- [ ] **Priority**: 🟠 High

### 7. **Analytics & SEO** ⏳
- [ ] Set up Google Analytics 4 account
- [ ] Get GA tracking ID (G-XXXXXXXXXX)
- [ ] Add tracking ID to `app/layout.tsx` metadata
- [ ] Set up Google Search Console
- [ ] Get Search Console verification token
- [ ] Add verification token to `app/layout.tsx`
- [ ] Submit sitemap to Search Console
- [ ] Test analytics data collection
- [ ] **Priority**: 🟠 High

### 8. **Email Service (Optional)** ⏳
- [ ] Decide: Use email service or manual only?
- [ ] If yes:
  - [ ] Choose provider (SendGrid, AWS SES, Gmail)
  - [ ] Configure SMTP settings
  - [ ] Create email templates
  - [ ] Add email API route (`app/api/email/route.ts`)
  - [ ] Update contact form with email functionality
  - [ ] Test email delivery
- [ ] Update `.env.production` with email keys
- [ ] **Priority**: 🟢 Optional

### 9. **SSL/TLS Certificate** ⏳
- [ ] Purchase domain (if not done)
- [ ] Request Let's Encrypt certificate for www.mbl-ntlsulnox.com
- [ ] Configure certificate in Nginx
- [ ] Test HTTPS connectivity
- [ ] Enable HSTS header
- [ ] Set up auto-renewal (certbot)
- [ ] **Priority**: 🔴 Critical

### 10. **VPS & Deployment** ⏳
- [ ] Provision VPS (2–4 GB RAM / 50 GB SSD)
- [ ] SSH key setup
- [ ] Install Node.js (v20+)
- [ ] Install Nginx
- [ ] Copy Nginx config to `/etc/nginx/sites-available/`
- [ ] Install PM2 (process manager)
- [ ] Clone repository to VPS
- [ ] Install dependencies: `npm install --production`
- [ ] Build application: `npm run build`
- [ ] Start with PM2: `pm2 start npm --name sulnoxeco -- start`
- [ ] Test application accessibility
- [ ] **Priority**: 🔴 Critical

---

## ✅ Security Checklist

- [ ] All secrets in `.env.production` (not committed to git)
- [ ] Remove demo/placeholder data
- [ ] Enable HTTPS everywhere
- [ ] Configure security headers (HSTS, CSP, X-Frame-Options)
- [ ] Set up rate limiting on API endpoints
- [ ] Validate all user inputs
- [ ] Sanitize database queries
- [ ] Enable CORS restrictions
- [ ] Test SQL injection vulnerability
- [ ] Test XSS vulnerability
- [ ] Update dependencies to latest secure versions
- [ ] Review Nginx config for security best practices
- [ ] **Priority**: 🔴 Critical

---

## ✅ Performance Checklist

- [ ] Enable gzip compression in Nginx
- [ ] Optimize images (use WebP format)
- [ ] Enable caching for static assets
- [ ] Test Core Web Vitals (LCP, FID, CLS)
- [ ] Minify CSS and JavaScript
- [ ] Lazy load images
- [ ] Enable CDN (optional: Cloudflare)
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Monitor VPS memory/CPU usage
- [ ] **Priority**: 🟠 High

---

## ✅ Testing Checklist

- [ ] Test all routes work correctly
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test contact forms (email, WhatsApp)
- [ ] Test product pages load correctly
- [ ] Test dosing calculator
- [ ] Test AI chat assistant
- [ ] Test 404 and error pages
- [ ] Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile browsers
- [ ] Test WhatsApp link on mobile
- [ ] **Priority**: 🔴 Critical

---

## ✅ Content Checklist

- [ ] All text content is final and approved
- [ ] No placeholder text remaining
- [ ] No test/demo data on production
- [ ] Product descriptions are accurate
- [ ] Dosing information is correct
- [ ] Branch information is current
- [ ] Support contact info is correct
- [ ] Privacy Policy is complete and accurate
- [ ] Terms of Service are complete and accurate
- [ ] **Priority**: 🔴 Critical

---

## ✅ Monitoring & Logging

- [ ] Set up error logging (Sentry, LogRocket, or similar)
- [ ] Configure access logs in Nginx
- [ ] Set up uptime monitoring
- [ ] Configure alerts for errors
- [ ] Monitor VPS resources (RAM, CPU, disk)
- [ ] Set up automated backups
- [ ] **Priority**: 🟠 High

---

## 📋 Tasks Assigned & Status

| Task | Assigned To | Status | Due Date |
|------|------------|--------|----------|
| WhatsApp number | [Client] | ⏳ Pending | _______ |
| Branch data | [Client] | ⏳ Pending | _______ |
| Payment gateway | [Client] | ⏳ Pending | _______ |
| Dosing specs | [Client] | ⏳ Pending | _______ |
| AI LLM setup | [Client/Dev] | ⏳ Pending | _______ |
| NTL logo | [Client] | ⏳ Pending | _______ |
| Google Analytics | [Dev] | ⏳ Pending | _______ |
| VPS setup | [Dev] | ⏳ Pending | _______ |
| Deployment | [Dev] | ⏳ Pending | _______ |
| Final testing | [QA] | ⏳ Pending | _______ |

---

## 🚀 Launch Day Checklist

**48 Hours Before Launch**
- [ ] Final code review
- [ ] Run all tests
- [ ] Verify all environment variables
- [ ] Backup current DNS settings

**24 Hours Before Launch**
- [ ] Final security audit
- [ ] Performance testing
- [ ] Load testing (optional)
- [ ] Notify team of launch time

**Launch Time**
- [ ] Update DNS to point to new VPS
- [ ] Verify HTTPS works
- [ ] Test all routes
- [ ] Monitor error logs
- [ ] Monitor VPS resources

**Post-Launch (First 24 hours)**
- [ ] Monitor error rates
- [ ] Check Google Search Console for errors
- [ ] Verify analytics tracking
- [ ] Monitor user feedback
- [ ] Check page load speeds

---

## 📞 Emergency Contacts

| Role | Name | Phone | Email |
|------|------|-------|-------|
| Client Lead | [Name] | [Phone] | [Email] |
| Developer | George Jabley | +233... | george.jabley@gmail.com |
| DevOps | [Name] | [Phone] | [Email] |
| Support | [Name] | [Phone] | [Email] |

---

## 📝 Notes & Comments

```
[Space for additional notes]
```

---

**Checklist Completed By**: ________________________  
**Date**: ________________________  
**Approved By**: ________________________  
**Launch Date**: ________________________

---

**Status**: 🟡 In Progress — Awaiting client input for critical items

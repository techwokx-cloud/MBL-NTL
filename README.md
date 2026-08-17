# MBL–NTL SulNOxEco Ghana — Next.js Website

Premium emission control solutions for automotive and industrial applications across West Africa.

## Project Overview

- **Domain**: https://www.mbl-ntlsulnox.com
- **Tech Stack**: Next.js 14 + TypeScript + Tailwind CSS v4
- **Hosting**: Linux VPS (2–4 GB RAM / 50 GB SSD)
- **Key Features**: 
  - Customer-facing product pages
  - AI Sales Assistant (Phase 1)
  - WhatsApp integration
  - Full SEO optimization
  - Responsive design

## File Structure

```
mbl-ntl-sulnox/
├── app/
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Home page
│   ├── about/page.tsx
│   ├── how-it-works/page.tsx
│   ├── products/
│   │   ├── page.tsx                  # Products overview
│   │   ├── 250ml/page.tsx            # 250ml product detail
│   │   └── 4-5l/page.tsx             # 4.5L product detail
│   ├── shop/page.tsx
│   ├── branches/page.tsx             # Locations (update with approved data)
│   ├── distributors/page.tsx
│   ├── support/page.tsx
│   ├── dosing-ratio/page.tsx
│   ├── resources/page.tsx
│   ├── api/
│   │   └── chat/route.ts             # AI Assistant API (placeholder)
│   └── globals.css
├── components/
│   ├── SiteHeader.tsx                # Navigation + WhatsApp CTA
│   ├── SiteFooter.tsx
│   ├── AIAssistant.tsx               # Chat widget
│   ├── ProductCard.tsx
│   └── EngineExperience.tsx          # How it works section
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── .env.example
├── Dockerfile                         # Production container
├── nginx.conf                         # Reverse proxy config
└── README.md (this file)
```

## Getting Started

### Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm, yarn, or pnpm
- Git

### Local Development

1. **Clone and install**
   ```bash
   git clone <repo-url>
   cd mbl-ntl-sulnox
   npm install
   ```

2. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open http://localhost:3000

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Important: Pre-Production Checklist

Before deploying to production, complete the following:

### 1. **Replace WhatsApp URL**
   - File: `components/SiteHeader.tsx` (line ~25)
   - File: `components/SiteFooter.tsx` (line ~38)
   - Replace `NEXT_PUBLIC_WHATSAPP_NUMBER` with approved business number

### 2. **Update Branch Data**
   - File: `app/branches/page.tsx` (lines ~20–40)
   - Replace placeholder addresses and contact info with approved SulNOxEco Ghana locations

### 3. **Connect eCommerce**
   - File: `app/shop/page.tsx`
   - Integrate with approved payment gateway (Stripe, PayPal, MTN Mobile Money)
   - Connect inventory management system

### 4. **Finalize Dosing Rules**
   - File: `app/dosing-ratio/page.tsx` (lines ~60–120)
   - Replace prototype values with approved dosing specifications

### 5. **Connect AI Sales Agent**
   - File: `app/api/chat/route.ts` (lines ~30–45)
   - Uncomment and configure Anthropic API or selected LLM provider
   - Set `ANTHROPIC_API_KEY` in environment variables
   - Add approved knowledge base/context

### 6. **Add Analytics & SEO**
   - File: `app/layout.tsx`
   - Add Google Tag Manager ID
   - Add Search Console verification token
   - Add structured data (Schema.org) for products and LocalBusiness

### 7. **Add NTL Logo**
   - Replace placeholder logo in `components/SiteHeader.tsx` (line ~21)
   - Add actual logo files to `public/` directory

### 8. **Configure Email (Optional)**
   - If approved, set up email service in `.env`
   - Configure SendGrid or alternative email provider
   - Update contact form in `app/support/page.tsx`

## Deployment

### Option 1: Docker (Recommended)

1. **Build image**
   ```bash
   docker build -t sulnoxeco-app:latest .
   ```

2. **Run container**
   ```bash
   docker run -d \
     --name sulnoxeco \
     -p 3000:3000 \
     --env-file .env.production \
     sulnoxeco-app:latest
   ```

3. **Using Docker Compose** (optional)
   ```yaml
   version: '3.9'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       env_file: .env.production
       restart: unless-stopped
   ```

### Option 2: Direct Node.js Deployment

1. **SSH into VPS**
   ```bash
   ssh user@your-vps-ip
   ```

2. **Install Node.js & npm**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

3. **Clone repository**
   ```bash
   cd /home/app
   git clone <repo-url>
   cd mbl-ntl-sulnox
   npm install --production
   npm run build
   ```

4. **Set up environment**
   ```bash
   cp .env.example .env.production
   # Edit .env.production with production values
   ```

5. **Use process manager (PM2 recommended)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "sulnoxeco" -- start
   pm2 save
   pm2 startup
   ```

### Option 3: Nginx + Let's Encrypt (Production SSL)

1. **Install Nginx**
   ```bash
   sudo apt install -y nginx
   ```

2. **Copy Nginx config**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/sulnoxeco
   sudo ln -s /etc/nginx/sites-available/sulnoxeco /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

3. **Install SSL certificate (Let's Encrypt)**
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot certonly --nginx -d www.mbl-ntlsulnox.com -d mbl-ntlsulnox.com
   ```

4. **Update Nginx config with certificate paths** (certbot does this automatically)

5. **Auto-renew certificates**
   ```bash
   sudo systemctl enable certbot.timer
   sudo systemctl start certbot.timer
   ```

## Environment Variables

Create `.env.production`:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.mbl-ntlsulnox.com
NEXT_PUBLIC_SITE_NAME=MBL-NTL SulNOxEco

# WhatsApp Integration
NEXT_PUBLIC_WHATSAPP_NUMBER=+233XXXXXXXXX
NEXT_PUBLIC_WHATSAPP_BUSINESS_PHONE_ID=your_phone_id
WHATSAPP_API_TOKEN=your_token

# AI Sales Agent
NEXT_PUBLIC_AI_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-...

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=token

# Email (optional)
EMAIL_SERVICE_ENABLED=false
SENDGRID_API_KEY=

# Node
NODE_ENV=production
```

## Performance Monitoring

Monitor your VPS resources:

```bash
# Check memory usage
free -h

# Check disk space
df -h

# Monitor processes
top

# View application logs (if using PM2)
pm2 logs
pm2 monit
```

**Recommended alerts**: 
- RAM usage > 80%
- Disk usage > 85%
- Response time > 2s

## SEO Checklist

- [ ] Google Search Console configured
- [ ] Sitemap.xml generated
- [ ] robots.txt configured
- [ ] Structured data (Schema.org) added
- [ ] Open Graph tags set
- [ ] Meta descriptions optimized
- [ ] Internal linking strategy
- [ ] Mobile optimization verified

## Support & Maintenance

- **Keep dependencies updated**: `npm update` monthly
- **Monitor error logs**: Check Nginx and application logs weekly
- **Backup data**: Automated backups (if applicable)
- **SSL renewal**: Automated via certbot
- **Performance review**: Monitor page speed and conversions

## API Routes

### POST /api/chat
AI Assistant chat endpoint (currently placeholder logic).

**Request:**
```json
{
  "message": "What's the price?",
  "conversationId": "optional-id"
}
```

**Response:**
```json
{
  "reply": "...",
  "conversationId": "conv-123456",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## Future Phases

- **Phase 2**: Enhanced AI + Marketing + Social Media integration
- **Phase 3**: Sales + Inventory + Outlet Management
- **Phase 4**: Distribution + Reconciliation + Advanced Analytics

## Support

For technical issues or deployment help:
- **Email**: george.jabley@gmail.com
- **WhatsApp**: +233...
- **LinkedIn**: linkedin.com/in/georgejabley

---

**Last Updated**: August 2024  
**Status**: Production Ready (with pre-deployment checklist completion)

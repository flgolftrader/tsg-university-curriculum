// This file contains the README content as a string for download
// Generated from README.md

export const readmeContent = `# Futures Trading Academy - Landing Page

A professional marketing and landing page for a comprehensive futures trading education ecosystem, built with Hono framework and deployed on Cloudflare Pages.

## 🌐 Live URLs

**Sandbox Development**: https://3000-ikwvuvam8zcys5iw20dib-5634da27.sandbox.novita.ai

**Production (when deployed)**: Will be at \`https://futures-trading-academy.pages.dev\`

## 📋 Project Overview

This is a **marketing and landing page** for the Futures Trading Academy platform. The actual educational content (LMS, video hosting, live trading sessions) will be delivered through external services, while this site serves as the front door for:

- Course information and curriculum showcase
- Pricing tier display
- Email waitlist capture
- Student testimonials and success stories
- About us and instructor profiles
- FAQ and support information

## ✨ Features

### Current Implementation

✅ **Home Page**
- Compelling hero section with value proposition
- Stats and social proof
- Course overview (4 campus system)
- Feature highlights
- Pricing tier preview
- Multiple CTAs for waitlist signup

✅ **Curriculum Page**
- Detailed breakdown of all 4 campuses
- Module-by-module content description
- Learning outcomes and timelines
- Visual course structure

✅ **Pricing Page (Placeholder)**
- 4 pricing tiers (Foundation, Professional, Elite, Business)
- Feature comparison table
- Stripe payment link placeholders
- FAQ section

✅ **Waitlist Page**
- Email capture form with validation
- Trading experience selection
- Tier interest tracking
- Benefits showcase
- API endpoint for form submission

✅ **About Page**
- Mission and vision statement
- Origin story
- Core values
- Instructor profiles
- Company statistics

✅ **FAQ Page**
- Comprehensive Q&A
- Categorized by topic
- Searchable content
- Contact CTA

✅ **Additional Pages**
- Contact page
- Terms of Service (placeholder)
- Privacy Policy (placeholder)
- Risk Disclaimer (placeholder)

✅ **Downloads Page**
- Downloadable documentation (README, Deployment Guide, Project Summary)
- Easy access to all project documentation

## 🏗️ Architecture

### Tech Stack

- **Framework**: Hono (lightweight, fast web framework)
- **Runtime**: Cloudflare Workers
- **Deployment**: Cloudflare Pages
- **Frontend**: TailwindCSS (via CDN)
- **Icons**: FontAwesome (via CDN)
- **Language**: TypeScript/TSX

### Project Structure

\`\`\`
webapp/
├── src/
│   ├── index.tsx          # Main application with all routes
│   ├── renderer.tsx       # Global layout with nav and footer
│   ├── docs/              # Embedded documentation content
│   └── routes/            # Individual page components
│       ├── about.tsx
│       ├── faq.tsx
│       ├── pricing.tsx
│       └── waitlist.tsx
├── public/
│   └── static/
│       └── styles.css     # Custom CSS styles
├── dist/                  # Build output directory
├── ecosystem.config.cjs   # PM2 configuration
├── wrangler.jsonc         # Cloudflare configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- PM2 for process management (pre-installed in sandbox)

### Local Development

1. **Clone and install**:
\`\`\`bash
cd /home/user/webapp
npm install
\`\`\`

2. **Build the project**:
\`\`\`bash
npm run build
\`\`\`

3. **Start development server**:
\`\`\`bash
# Using PM2 (recommended)
pm2 start ecosystem.config.cjs

# Or directly
npm run dev:sandbox
\`\`\`

4. **Test the application**:
\`\`\`bash
curl http://localhost:3000
\`\`\`

5. **View in browser**:
Open \`http://localhost:3000\` in your browser

### Available Scripts

\`\`\`bash
npm run dev           # Vite development server
npm run dev:sandbox   # Wrangler pages dev for sandbox
npm run build         # Build for production
npm run preview       # Preview production build
npm run deploy        # Build and deploy to Cloudflare
npm run clean-port    # Kill processes on port 3000
npm run test          # Test local server
\`\`\`

## 📦 Deployment to Cloudflare Pages

### Prerequisites
1. Cloudflare account
2. Wrangler CLI configured
3. Cloudflare API token

### Deployment Steps

1. **Setup Cloudflare API key**:
\`\`\`bash
# In sandbox, call setup_cloudflare_api_key first
\`\`\`

2. **Build the project**:
\`\`\`bash
npm run build
\`\`\`

3. **Create Cloudflare Pages project**:
\`\`\`bash
npx wrangler pages project create futures-trading-academy \\
  --production-branch main \\
  --compatibility-date 2024-01-01
\`\`\`

4. **Deploy**:
\`\`\`bash
npm run deploy
# Or specifically:
npx wrangler pages deploy dist --project-name futures-trading-academy
\`\`\`

5. **Access your site**:
- Production: \`https://futures-trading-academy.pages.dev\`
- Branch deployments: \`https://main.futures-trading-academy.pages.dev\`

## 🔌 External Service Integration

This landing page is designed to integrate with external services:

### Recommended Services

**Learning Management System (LMS)**:
- Teachable
- Thinkific
- Kajabi
- Custom solution

**Video Hosting**:
- Vimeo (for course videos)
- YouTube (for marketing content)
- Wistia (for professional hosting)

**Email Marketing**:
- ConvertKit
- Mailchimp
- ActiveCampaign

**Community**:
- Discord (for community chat)
- Circle.so (for structured community)

**Payment Processing**:
- Stripe (primary)
- PayPal (alternative)
- Crypto payments (for advanced users)

**Live Streaming**:
- StreamYard
- Restream
- Zoom (for webinars)

## 📊 Analytics & Tracking

Add tracking codes in \`src/renderer.tsx\`:
- Google Analytics
- Facebook Pixel
- LinkedIn Insight Tag
- Custom conversion tracking

## 🎯 Next Steps for Full Implementation

### Immediate (Week 1-2)
- [ ] Connect waitlist form to email service
- [ ] Set up Cloudflare D1 database for waitlist storage
- [ ] Configure real Stripe payment links
- [ ] Add Google Analytics tracking

### Short-term (Month 1)
- [ ] Create detailed curriculum pages with all content
- [ ] Add student testimonials section
- [ ] Implement blog for SEO
- [ ] Set up email drip campaigns

### Medium-term (Month 2-3)
- [ ] Choose and configure LMS platform
- [ ] Upload video content
- [ ] Set up Discord community
- [ ] Create member onboarding flow

### Long-term (Month 3-6)
- [ ] Build custom student dashboard
- [ ] Implement certification system
- [ ] Create job board functionality
- [ ] Develop mobile app

## 🔒 Security Considerations

- All forms use HTTPS
- Input validation on client and server
- CORS configured for API endpoints
- Rate limiting should be added for production
- Environment variables for sensitive data
- Content Security Policy headers

## 📈 Performance

- Cloudflare edge deployment for global speed
- Minimal bundle size with CDN resources
- Lazy loading for images (when added)
- Optimized CSS and JavaScript
- Caching strategy for static assets

## 📝 License

Proprietary - All rights reserved to Futures Trading Academy

## 📞 Support

For questions about this implementation:
- Review this README first
- Check the FAQ page content
- Examine the code comments
- Test locally before asking

---

**Built with** ❤️ **using Hono and Cloudflare Pages**

**Last Updated**: 2025-01-15
**Version**: 1.0.0
**Status**: ✅ Landing Page Complete - Ready for External Service Integration
`

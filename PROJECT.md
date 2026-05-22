# CEIIL Website Rebuild — Project Context

> **For any AI reading this:** This document is the single source of truth for the CEIIL website rebuild. Read this before touching any file.

---

## What Is This?

A full rebuild of [ceiil.ng](https://ceiil.ng) — the website of **Capital Express Indemnity Insurance Limited (CEIIL)**, a Nigerian insurance company based in Victoria Island, Lagos. The old site runs on WordPress + Elementor. The rebuild is on **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS v4**.

---

## Brand Identity

### Company Name
**Capital Express Indemnity Insurance Limited** — abbreviated **CEIIL**

### Taglines / Voice
- "We don't just insure; we innovate, advocate, and elevate."
- "Master every move — let our insurance be your winning strategy."
- "Protect the pride you've built."
- "The Small Cover That Saves Big Trouble."
- "Your Trusted Risk Advisor"

### Logo Colors (Confirmed from Source)
| Token | Hex | Usage |
|---|---|---|
| `--teal-dark` | `#00425B` | Primary brand dark teal (nav, headings) |
| `--teal-bright` | `#1BB0CE` | Accent teal (CTAs, icons, highlights) |
| `--crimson` | `#9B1C33` | Accent crimson (key words, emphasis) |
| `--white` | `#FFFFFF` | Backgrounds, reversed text |
| `--off-white` | `#F7F8FA` | Subtle section backgrounds |
| `--dark` | `#0D1B2A` | Deep dark for contrast sections |

### Typography
- **Primary Font:** Century Gothic (or `'Century Gothic', 'AppleGothic', sans-serif`) — the designer's chosen font
- **Fallback Stack:** `'Century Gothic', AppleGothic, CenturyGothic, 'URW Gothic', sans-serif`
- **Note:** Century Gothic is not available on Google Fonts; load it via @font-face or fall back gracefully.

---

## Site Architecture (Pages)

```
/                         → Home (immersive hero carousel + sections)
/about                    → Who We Are (history, philosophy, values)
  /about/board            → Our Board
  /about/management       → Our Management Team
  /about/values           → Our Core Values
/products                 → All Products Overview
  /products/motor         → Motor Insurance
  /products/marine        → Marine Insurance
  /products/property      → Property / Fire & Special Perils
  /products/liability     → Liability Insurance
  /products/engineering   → Engineering Insurance
  /products/oil-gas       → Oil & Gas Insurance
  /products/travel        → Travel Insurance
  /products/general       → General Accident
/claims                   → Make a Claim
/renew                    → Renew a Policy
/alliances                → Strategic Alliances
/blog                     → News & Insights
/contact                  → Contact Us
```

---

## Content Extracted from ceiil.ng

### Navigation (Original)
- Home
- Who We Are → Core Values, Our Board, Our Management
- Products/Services → Marine, Motor, Property, Liability, Engineering, Oil & Gas, Travel, General Accident
- Claims
- Blog
- Contact

### Hero Carousel Slides (from site imagery)
1. **"Master every move — let our insurance be your winning strategy."** — Chess imagery, dark theme
2. **"Protect the pride you've built"** — Building Insurance, luxury home visual
3. **"The Small Cover That Saves Big Trouble"** — Motor Insurance, SUV + umbrella visual
4. **Slide 4 TBD** — To be confirmed with client (likely about marine/engineering or general identity)

### What We Do (Homepage Section)
> "At Capital Express Indemnity Insurance, we are committed to providing you with comprehensive, reliable, and tailored insurance solutions that safeguard your peace of mind. Our goal is to deliver exceptional service and unparalleled coverage to meet all your insurance needs."

**Why Choose Us — 3 pillars:**
1. **Value and Optimisation** — "Imagine slashing your insurance costs while simultaneously minimising your risk profile. At CEIIL, we make that dream a reality. Our mission is to add value to your business."
2. **Client Advocacy and Confidence** — "Your needs are our number one priority. We inspire confidence through unparalleled risk advisory services and expertise."
3. **Your Trusted Risk Advisor** — "We work closely with you to tailor solutions that fit your unique needs, building a relationship based on trust and mutual respect."
4. **Experience the CEIIL Difference** — "Join us on this exciting journey and discover how our creative, sage-like approach to insurance can transform your business."

### Corporate Philosophy
- **Vision:** To be a world class financial services provider.
- **Mission:** To be in every household where we are licensed to operate, providing wealth management and risk protection services, using the most efficient technology and manpower, thereby creating value to all stakeholders.

### Core Values
| Value | Description |
|---|---|
| Customer Dedication | Exceptional service to meet and exceed client expectations |
| Respect for Individuals | Every individual treated with respect and dignity |
| Integrity | Highest standards of honesty, transparency, and ethical conduct |
| Creativity | Out-of-the-box thinking for innovative insurance solutions |
| Teamwork | Collaboration and mutual support to achieve common goals |

### Products / Lines of Business
- General Accident
- Motor Insurance
- Oil & Gas
- Marine Insurance
- Fire & Special Perils (Property)
- Engineering Insurance
- Travel Insurance
- Liability Insurance
- Building Insurance (subset of Property)

### Strategic Alliances
**International Re-Insurers:** Korean Re, The Hartford, Artrium, Thomas Miller, Markel, Gallagher, Apollo

**Regional Re-Insurers:** WAICA Re, FBS Re, Continental Re, Africa Re

**Re-Insurer Brokers:** Gallagher, Jordans Global, Lockton

### Contact
- **Address:** 17, Bishop Kale Close, Off Kasumu Ekemode Street, Off Saka Tinubu Street, Victoria Island, Lagos – Nigeria
- **Working Hours:** Monday – Friday, 08:00am – 5:00pm

---

## Media Assets in `/public/media/`

| File | Description |
|---|---|
| `CEIIL-Wallpaper1-scaled.jpg` | Chess strategy banner — "Master every move" |
| `protect-the-pride-you-built-scaled.jpg` | Building insurance banner — man in agbada before luxury home |
| `The-small-cover-scaled.jpg` | Motor insurance banner — SUV with CEIIL umbrella |
| `WhatsApp-Image-2025-09-12-at-10.00.30-AM.jpeg` | Team/event photo |
| `WhatsApp-Image-2025-09-12-at-10.01.28-AM.jpeg` | Team/event photo 2 |
| `WhatsApp-Image-2025-09-12-at-9.57.59-AM.jpeg` | Team/event photo 3 |
| `deardocblogimg-01.png` through `09.jpg` | Blog imagery |
| `placeholder.png` | Generic placeholder |

---

## Design Philosophy

**Inspiration:** Apple, Google, and minimal luxury insurance brands.
**Style:** Immersive, clean, whitespace-generous, typographically bold.
**Font:** Century Gothic — geometric, modern, premium.
**Design language:** Large hero areas, smooth carousel transitions, subtle micro-animations, glassmorphism where applicable.
**Reference:** The JGL portfolio screenshot — clean split layout, large typography, photo bleed, minimal nav, prominent CTAs.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Century Gothic (self-hosted @font-face) |
| Icons | Lucide React (or SVG inline) |
| Animations | CSS transitions + subtle JS scroll triggers |
| Images | Next.js `<Image>` component |

---

## Build Approach

1. **Design system first** — tokens, font, colors, spacing in `globals.css`
2. **Shared components** — Navbar, Footer, Button, Section wrappers
3. **Home page** — immersive hero carousel (4 slides) + all homepage sections
4. **Page by page** — waiting for client approval at each major section
5. **Polish** — animations, mobile responsiveness, SEO metadata

---

## Progress Log

- [x] Project initialized (Next.js 16 + Tailwind v4 + TypeScript)
- [x] Content extracted from ceiil.ng
- [x] Brand colors confirmed from source: Teal `#00425B`, Bright `#1BB0CE`, Crimson `#9B1C33`
- [x] Media assets catalogued — 349 files in /public/media
- [x] Logo confirmed: `ceiil-litt.png` — real CEIIL logo with correct brand colors
- [x] Design system — `globals.css` with brand tokens, Nunito font, animations
- [x] `Navbar.tsx` — transparent on hero, solid on scroll, real logo, "Buy a Policy" dropdown
- [x] `Footer.tsx` — 4-column dark teal footer with NAICOM badge
- [x] `layout.tsx` — Nunito font, SEO metadata, Navbar + Footer wired
- [x] `PagePreloader.tsx` & `Skeleton.tsx` — CEIIL-logo preloader & shimmer-animated skeletons on mount
- [x] `page.tsx` — Full home page:
  - [x] Hero carousel (3 slides, cross-fade, dots, arrows, progress bar)
  - [x] Quick actions bar (Buy/Claim/Renew cards with skeleton state)
  - [x] What We Do section (4 pillars)
  - [x] Products grid (8 products, 4-col with skeleton state)
  - [x] Corporate Philosophy (Vision + Mission flip cards)
  - [x] Core Values (5 values)
  - [x] Strategic Alliances (real partner logos)
  - [x] Contact CTA gradient section
- [ ] User review of home page — **PENDING**
- [ ] Inner pages (About, Products, Claims, Contact, Blog)


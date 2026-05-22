# CEIIL Rebuild Handoff

Last updated: 2026-05-22

This file is the working handoff for design, PM, and future AI contributors. Read `docs/CONTENT_INVENTORY.md` first for live-site sourced content, then read `docs/PRESENTATION_CONTENT_UPDATE.md` for the newer client-supplied presentation content.

## Current Status

The first-pass homepage has been rebuilt after the earlier Gemini output proved unstable and visually off-direction.

What changed in the current pass:

- The site now builds cleanly on Next.js 16.
- Local development now defaults to webpack via `npm run dev` because Turbopack was repeatedly crashing HMR on this Windows setup with stale `registry.tsx` references.
- Turbopack remains available through `npm run dev:turbo` and `npm run build:turbo` for later testing, but it should not be the default workflow right now.
- The homepage hero now mixes two content modes: plain-photo slides with CEIIL-led overlay copy, and campaign-art slides with no redundant overlay text.
- The first hero slide now starts with the ship image, per client preference.
- Favicon and Apple icon assets now point at the CEIIL logo mark in the app router.
- Footer and contact touchpoints have been updated toward the client-supplied email and social details.
- The global font setup now uses a cleaner geometric substitute through `next/font` instead of the previous Nunito direction.
- The navbar now uses a cleaner floating shell and only points to working section anchors or verified live CEIIL action URLs.
- The homepage hero has been rebuilt around the real CEIIL campaign images in `public/media`.
- Fake route links such as `/buy`, `/claims`, and unfinished `/products/*` pages have been removed from the main experience for now.
- A logo preloader remains, but the fake forced page skeleton delay has been removed from the homepage render path.
- `src/app/loading.tsx` now provides a proper branded loading state using the existing skeleton components.

## Client Direction

The client wants the rebuild to feel like:

- Apple-level restraint and polish.
- Google-level clarity and motion discipline.
- Minimal luxury insurance brand, not noisy corporate brochure.
- Century Gothic as the main typeface.
- Brand colors from the real logo: teal `#004058`, crimson `#B02038`.
- Immersive landing page with about four carousel moments.
- Page-by-page, section-by-section build with approval as we go.
- Markdown notes for decisions and content so another AI can continue safely.

## Current Skeleton Audit

The current code appears to be an earlier Gemini pass. Observed issues:

- `globals.css` imports Nunito and calls it a Century Gothic substitute, but the client explicitly requested Century Gothic.
- Brand tokens use `#00425B`, `#1BB0CE`, and `#9B1C33`; the actual logo extraction gives `#004058` and `#B02038`.
- Several files contain mojibake/encoding artifacts in comments and UI strings.
- The homepage has emoji icons embedded in content data. This does not fit the minimal luxury direction.
- Product data includes Oil & Gas, Travel, and General Accident even though the live main product navigation only confirms Motor, Liability, Engineering, Marine, and Property.
- Many internal links point to routes that do not exist yet, such as `/products/motor`, `/buy`, `/claims`, `/renew`, `/about`.
- The hero currently has three slides. The client requested about four and wants to discuss after sending a sample landing screen.
- There is simulated loading/skeleton behavior on the homepage. This may make the site feel broken or slow if not purposeful.
- Current cards are rounded at `1rem` or more in several places; the design guidance for this project should be tighter and more premium.
- Footer uses generic/manual social links instead of verified CEIIL social URLs.

## Design North Star

The first screen should feel immersive, editorial, and controlled:

- Full-bleed image carousel using real CEIIL campaign imagery.
- Text placed directly over or beside image space, not inside heavy cards.
- Calm, precise motion: slow fade/slide, no gimmicks.
- Large but disciplined Century Gothic typography.
- Strong brand signal in first viewport: logo, company name, product/campaign promise.
- Teal and crimson should act as accents on a mostly neutral, premium surface.
- Avoid generic gradients, emoji iconography, oversized rounded cards, and stock-feeling composition.

## Proposed Home Structure

Do not implement this as final until client approves the sample direction.

1. Immersive Hero Carousel
   - Four campaign slides.
   - Use verified image assets from `public/media`.
   - Primary CTA: Buy a Policy or Get Covered.
   - Secondary CTA: Make a Claim or Explore Products.

2. Quick Actions
   - Buy a Policy.
   - Make a Claim.
   - Renew a Policy.
   - Use compact luxury controls, not large decorative cards.

3. Product Navigation
   - Marine.
   - Motor.
   - Property.
   - Liability.
   - Engineering.
   - Add Oil & Gas, Travel, General Accident only after client confirmation.

4. What We Do / Why CEIIL
   - Use verified "What We Do" and "Why Choose Us" themes.
   - Rewrite with client approval if needed, but keep the meaning sourced.

5. Corporate Philosophy
   - Vision and mission.
   - Remove duplicated blocks from live site.

6. Core Values
   - Customer Dedication.
   - Respect for Individuals.
   - Integrity.
   - Creativity.
   - Teamwork.

7. Strategic Alliances
   - Use partner logos from local media.
   - Keep layout quiet and credible.

8. Contact / Location CTA
   - Address, phone, email, hours.
   - Clear path to speak with CEIIL.

## Candidate Hero Slides

Source-confirmed assets and themes:

- Motor: `The-small-cover-scaled.jpg`, campaign title "The Small Cover That Saves Big Trouble."
- Property / building: `protect-the-pride-you-built-scaled.jpg`, campaign title "Protect the pride you've built."
- Strategy / corporate: `CEIIL-Wallpaper1-scaled.jpg`, campaign title "Master every move - let our insurance be your winning strategy." This phrase is present in existing project notes and media naming supports the campaign, but final copy should be reviewed against the actual artwork.
- Fourth slide candidate: choose from `CEIIL-banner-scaled.jpg`, `CEIIL-Screensaver1-scaled.jpg`, `Marine-scaled.jpg`, or `Fire-SpecialPerils-scaled.jpg` after visual inspection and client preference.

## Content Rules

- Do not invent services, products, awards, locations, or claims.
- Use `docs/CONTENT_INVENTORY.md` for source-backed facts.
- Use `docs/PRESENTATION_CONTENT_UPDATE.md` for client-supplied deck content that may be newer or broader than the live site.
- If copy is rewritten for polish, mark it as proposed copy until the client accepts it.
- Preserve regulatory/legal meaning, but fix obvious typos only when moving into polished UI.
- Time-sensitive details, especially prices and laws, must be reconfirmed before publishing.

## Build Rules

- Before code changes, read relevant Next.js 16 docs under `node_modules/next/dist/docs/`, per `AGENTS.md`.
- Keep the site in App Router and TypeScript.
- Prefer webpack for local work on this machine until the Turbopack HMR issue is fully understood.
- Use Century Gothic first in CSS font stacks.
- If no licensed Century Gothic webfont is supplied, fall back gracefully to local system Century Gothic and document that limitation.
- Use real media assets from `public/media`.
- Keep controls familiar and restrained. Prefer icon buttons with labels/tooltips where useful.
- No emoji as UI icons.
- No nested card layouts.
- No generic one-note teal page.
- Verify desktop and mobile layouts before calling a section finished.

## Immediate Next Steps

1. Wait for the client's landing reference image or confirm it was not attached.
2. Inspect the strongest four hero assets visually and choose a first-pass carousel direction.
3. Replace the broken design system tokens and font stack.
4. Rebuild the homepage hero and quick actions first.
5. Review with the client before building the rest of the homepage.
6. Proceed page by page: About, Products overview, product details, Claims, Blog, Contact.

## Open Questions

- Should the rebuilt IA expose only five product categories from the live nav, or also Oil & Gas, Travel, and General Accident?
- Should the 2024 financial statement PDF be published?
- What are the verified Facebook, Instagram, LinkedIn, and X URLs?
- Should `customercare@ceiil.ng` be shown?
- Should Buy a Policy go to the contact page, external `ceiil.com.ng`, WhatsApp, or a future purchase flow?
- Should Renew a Policy remain external to `https://www.ceiil.com.ng/`?
- Should Claims be an online form flow, downloadable PDFs, or both?

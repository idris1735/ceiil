'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SkeletonHeroSlide, SkeletonQuickActions, SkeletonProductsGrid } from '@/components/Skeleton';

/* ── Hero Carousel Data ──────────────────────────────────── */
const slides = [
  {
    id: 1,
    eyebrow: 'Motor Insurance',
    headlinePart1: 'The Small',
    headlineAccent: 'Cover',
    headlinePart2: 'That Saves Big Trouble',
    body: 'Every journey carries risk. Our motor insurance keeps you moving — with comprehensive coverage that pays when it counts most.',
    ctaPrimary: { label: 'Get Motor Cover', href: '/products/motor' },
    ctaSecondary: { label: 'View All Products', href: '/products' },
    image: '/media/The-small-cover-scaled.jpg',
    theme: 'light',
  },
  {
    id: 2,
    eyebrow: 'Property Insurance',
    headlinePart1: 'Protect the',
    headlineAccent: 'Pride',
    headlinePart2: "You've Built",
    body: "Your home is your greatest asset. Our building and property insurance shields everything you've worked hard to own.",
    ctaPrimary: { label: 'Protect My Property', href: '/products/property' },
    ctaSecondary: { label: 'Learn More', href: '/about' },
    image: '/media/protect-the-pride-you-built-scaled.jpg',
    theme: 'light',
  },
  {
    id: 3,
    eyebrow: 'Business Strategy',
    headlinePart1: 'Master Every',
    headlineAccent: 'Move',
    headlinePart2: '— Let Insurance Be Your Winning Strategy',
    body: "In business, every decision is a calculated risk. We turn that risk into your competitive advantage with expert indemnity solutions.",
    ctaPrimary: { label: 'Get Covered Today', href: '/buy' },
    ctaSecondary: { label: 'Who We Are', href: '/about' },
    image: '/media/CEIIL-Wallpaper1-scaled.jpg',
    theme: 'dark',
  },
];

/* ── Products ────────────────────────────────────────────── */
const products = [
  { icon: '🚗', name: 'Motor Insurance', desc: 'Comprehensive cover for every vehicle on every road.', href: '/products/motor', color: '#1BB0CE' },
  { icon: '⚓', name: 'Marine Insurance', desc: 'Protecting cargo and vessels across international waters.', href: '/products/marine', color: '#00425B' },
  { icon: '🏢', name: 'Property Insurance', desc: 'Safeguarding your buildings and business premises.', href: '/products/property', color: '#9B1C33' },
  { icon: '⚖️', name: 'Liability Insurance', desc: 'Shield your business from third-party claims and suits.', href: '/products/liability', color: '#1BB0CE' },
  { icon: '⚙️', name: 'Engineering Insurance', desc: 'Coverage for construction, plant, and machinery risks.', href: '/products/engineering', color: '#00425B' },
  { icon: '🛢️', name: 'Oil & Gas Insurance', desc: 'Specialist cover for Nigeria\'s energy sector.', href: '/products/oil-gas', color: '#9B1C33' },
  { icon: '✈️', name: 'Travel Insurance', desc: 'Peace of mind for every journey, near or far.', href: '/products/travel', color: '#1BB0CE' },
  { icon: '🛡️', name: 'General Accident', desc: 'Broad accidental damage and personal injury coverage.', href: '/products/general', color: '#00425B' },
];

/* ── Why Choose Us ───────────────────────────────────────── */
const pillars = [
  {
    icon: '💎',
    title: 'Value & Optimisation',
    body: 'We slash your insurance costs while minimising your risk profile. At CEIIL, protecting you is not a cost — it\'s an investment in your growth.',
  },
  {
    icon: '🤝',
    title: 'Client Advocacy',
    body: 'Your needs are our number one priority. We inspire confidence through unparalleled risk advisory services and unwavering expertise.',
  },
  {
    icon: '🔮',
    title: 'Trusted Risk Advisor',
    body: 'We work closely with you to tailor solutions that fit your unique needs, building a relationship based on trust and mutual respect.',
  },
  {
    icon: '🚀',
    title: 'The CEIIL Difference',
    body: 'We don\'t just insure — we innovate, advocate, and elevate. Our creative, sage-like approach transforms how businesses perceive risk.',
  },
];

/* ── Core Values ─────────────────────────────────────────── */
const values = [
  { icon: '👥', title: 'Customer Dedication', body: 'Exceptional service to meet and exceed our clients\' needs and expectations.' },
  { icon: '🫱', title: 'Respect for Individuals', body: 'Every individual treated with respect and dignity, fostering an inclusive environment.' },
  { icon: '⚖️', title: 'Integrity', body: 'The highest standards of honesty, transparency, and ethical conduct in all our dealings.' },
  { icon: '💡', title: 'Creativity', body: 'Out-of-the-box thinking to develop innovative insurance solutions for evolving customer needs.' },
  { icon: '🤜', title: 'Teamwork', body: 'Collaboration and mutual support, leveraging each member\'s strengths to achieve common goals.' },
];

/* ── Strategic Alliances ──────────────────────────────────── */
const alliances = {
  international: [
    { name: 'Korean Re', logo: '/media/koreanpr-1.png' },
    { name: 'The Hartford', logo: '/media/thehartford-1.png' },
    { name: 'Artrium', logo: '/media/artrium-1.png' },
    { name: 'Thomas Miller', logo: '/media/thomasmiller-1.png' },
    { name: 'Markel', logo: '/media/markel-1.png' },
    { name: 'Gallagher Re', logo: '/media/gallagherre-2.png' },
    { name: 'Apollo', logo: '/media/apollo-1.png' },
  ],
  regional: [
    { name: 'WAICA Re', logo: '/media/waica-1.png' },
    { name: 'FBS Re', logo: '/media/fbs-re-1.png' },
    { name: 'Continental Re', logo: '/media/continental-1.png' },
    { name: 'Africa Re', logo: '/media/africa-re-1.png' },
  ],
  brokers: [
    { name: 'Gallagher', logo: '/media/gallagherre-3.png' },
    { name: 'Jordans Global', logo: '/media/jordansglobal-1.png' },
    { name: 'Lockton', logo: '/media/lockton-1.png' },
  ],
};

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Smooth 1-second loading simulation to showcase skeletons
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || loading) {
    return (
      <div className="skeleton-loading-container" role="status" aria-label="Loading page content">
        <SkeletonHeroSlide />
        <SkeletonQuickActions />
        <SkeletonProductsGrid />
        <style jsx>{`
          .skeleton-loading-container {
            min-height: 100vh;
            background: #F7F8FA;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fade-in-content">
      <HeroCarousel />
      <QuickActionsBar />
      <WhatWeDoSection />
      <ProductsSection />
      <PhilosophySection />
      <ValuesSection />
      <AlliancesSection />
      <ContactCTASection />

      <style jsx global>{`
        /* Ensure no white gap above hero */
        #main-content {
          display: block;
        }
      `}</style>
      <style jsx>{`
        .fade-in-content {
          animation: fadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/* ── Hero Carousel ───────────────────────────────────────── */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev');
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const pause = () => { if (timerRef.current) clearInterval(timerRef.current); };
  const resume = () => { timerRef.current = setInterval(next, 6000); };

  const slide = slides[current];

  return (
    <section
      className="hero-section"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label={`Hero carousel, slide ${current + 1} of ${slides.length}`}
    >
      {/* Background Image */}
      <div className={`hero-bg ${animating ? `hero-bg-out-${direction}` : 'hero-bg-in'}`}>
        <Image
          src={slide.image}
          alt=""
          fill
          priority={current === 0}
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
          sizes="100vw"
        />
        {/* Gradient overlay — stronger on left for text legibility */}
        <div className={`hero-overlay hero-overlay-${slide.theme}`} />
      </div>

      {/* Content */}
      <div className={`container hero-content ${animating ? 'hero-content-out' : 'hero-content-in'}`}>
        <div className="hero-text">
          <span className="hero-eyebrow" key={`eyebrow-${current}`}>{slide.eyebrow}</span>
          <h1 className="hero-headline" key={`headline-${current}`}>
            {slide.headlinePart1}{' '}
            <span className="hero-accent">{slide.headlineAccent}</span>{' '}
            {slide.headlinePart2}
          </h1>
          <p className="hero-body" key={`body-${current}`}>{slide.body}</p>
          <div className="hero-actions" key={`actions-${current}`}>
            <Link href={slide.ctaPrimary.href} className="btn btn-primary hero-btn-primary">
              {slide.ctaPrimary.label}
              <ArrowRight />
            </Link>
            <Link href={slide.ctaSecondary.href} className="btn btn-ghost-white">
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="hero-controls">
        {/* Dot indicators */}
        <div className="hero-dots" role="tablist" aria-label="Carousel slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={prev} aria-label="Previous slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hero-arrow" onClick={next} aria-label="Next slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Slide progress bar */}
      <div className="hero-progress">
        <div className="hero-progress-bar" key={`progress-${current}`} />
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 640px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        /* BG */
        .hero-bg {
          position: absolute;
          inset: 0;
          transition: opacity 0.6s ease;
        }
        .hero-bg-in { opacity: 1; }
        .hero-bg-out-next { opacity: 0; }
        .hero-bg-out-prev { opacity: 0; }

        /* Overlays */
        .hero-overlay {
          position: absolute;
          inset: 0;
        }
        .hero-overlay-light {
          background: linear-gradient(
            105deg,
            rgba(255,255,255,0.92) 0%,
            rgba(255,255,255,0.7) 45%,
            rgba(255,255,255,0.1) 75%,
            transparent 100%
          );
        }
        .hero-overlay-dark {
          background: linear-gradient(
            105deg,
            rgba(0, 22, 35, 0.88) 0%,
            rgba(0, 22, 35, 0.6) 45%,
            rgba(0, 22, 35, 0.1) 75%,
            transparent 100%
          );
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 5rem;
          transition: opacity 0.4s ease, transform 0.5s ease;
        }
        .hero-content-in { opacity: 1; transform: translateY(0); }
        .hero-content-out { opacity: 0; transform: translateY(12px); }

        .hero-text {
          max-width: 580px;
        }

        .hero-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal-bright);
          margin-bottom: 1rem;
          padding: 0.3rem 0.875rem;
          background: rgba(27, 176, 206, 0.1);
          border: 1px solid rgba(27, 176, 206, 0.25);
          border-radius: 9999px;
          animation: fadeInLeft 0.6s ease both;
        }

        .hero-headline {
          font-size: clamp(2.25rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--teal-dark);
          margin-bottom: 1.25rem;
          animation: fadeInLeft 0.6s 0.1s ease both;
        }

        /* When overlay is dark, headline and body flip to white */
        .hero-overlay-dark ~ * .hero-headline,
        .hero-section:has(.hero-overlay-dark) .hero-headline {
          color: white;
        }

        .hero-accent {
          color: var(--crimson);
        }

        .hero-body {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: var(--gray-600);
          margin-bottom: 2rem;
          animation: fadeInLeft 0.6s 0.2s ease both;
          max-width: 480px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeInLeft 0.6s 0.3s ease both;
        }

        .hero-btn-primary {
          box-shadow: 0 8px 24px rgba(155,28,51,0.35);
        }

        /* Controls */
        .hero-controls {
          position: absolute;
          bottom: 2.5rem;
          left: 0;
          right: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 0 2rem;
        }
        .hero-dots {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .hero-arrows {
          display: flex;
          gap: 0.5rem;
        }
        .hero-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .hero-arrow:hover {
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.6);
        }

        /* Progress bar */
        .hero-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255,255,255,0.15);
          z-index: 10;
        }
        .hero-progress-bar {
          height: 100%;
          background: var(--teal-bright);
          animation: progress 6s linear forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .hero-text { max-width: 100%; }
          .hero-overlay-light {
            background: linear-gradient(
              180deg,
              rgba(255,255,255,0.9) 0%,
              rgba(255,255,255,0.75) 60%,
              rgba(255,255,255,0.3) 100%
            );
          }
          .hero-controls { bottom: 2rem; }
        }
      `}</style>
    </section>
  );
}

/* ── Quick Actions Bar ───────────────────────────────────── */
function QuickActionsBar() {
  return (
    <section className="qab-section" aria-label="Quick policy actions">
      <div className="container">
        <div className="qab-grid">
          <Link href="/buy" id="qab-buy" className="qab-card qab-primary">
            <div className="qab-icon">🛡️</div>
            <div>
              <div className="qab-label">Buy a Policy</div>
              <div className="qab-sub">Start your coverage today</div>
            </div>
            <ArrowRight />
          </Link>
          <Link href="/claims" id="qab-claims" className="qab-card qab-secondary">
            <div className="qab-icon">📋</div>
            <div>
              <div className="qab-label">Make a Claim</div>
              <div className="qab-sub">Fast and hassle-free claims</div>
            </div>
            <ArrowRight />
          </Link>
          <Link href="/renew" id="qab-renew" className="qab-card qab-tertiary">
            <div className="qab-icon">🔄</div>
            <div>
              <div className="qab-label">Renew a Policy</div>
              <div className="qab-sub">Keep your cover active</div>
            </div>
            <ArrowRight />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .qab-section {
          padding: 0;
          margin-top: -2.5rem;
          position: relative;
          z-index: 10;
        }
        .qab-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .qab-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.375rem 1.5rem;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
        .qab-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.18);
        }
        .qab-primary { background: var(--crimson); color: white; }
        .qab-secondary { background: var(--teal-dark); color: white; }
        .qab-tertiary { background: white; color: var(--teal-dark); border: 2px solid var(--gray-100); }
        .qab-icon { font-size: 1.5rem; flex-shrink: 0; }
        .qab-label {
          font-size: 0.9375rem;
          font-weight: 800;
        }
        .qab-sub {
          font-size: 0.75rem;
          opacity: 0.75;
          margin-top: 0.125rem;
        }
        .qab-card :global(svg) {
          margin-left: auto;
          flex-shrink: 0;
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .qab-section { margin-top: 0; padding: 1.5rem 0 0; }
          .qab-grid { grid-template-columns: 1fr; gap: 0.75rem; }
        }
      `}</style>
    </section>
  );
}

/* ── What We Do ──────────────────────────────────────────── */
function WhatWeDoSection() {
  return (
    <section className="section wwd-section" id="what-we-do" aria-labelledby="wwd-title">
      <div className="container">
        <div className="wwd-grid">
          {/* Left — text */}
          <div className="wwd-text">
            <span className="section-eyebrow">What We Do</span>
            <div className="brand-divider" />
            <h2 className="section-title" id="wwd-title">
              We turn your dreams<br/>into <span className="accent">reality</span>
            </h2>
            <p className="section-body">
              At Capital Express Indemnity Insurance, we are committed to providing you with
              comprehensive, reliable, and tailored insurance solutions that safeguard your
              peace of mind. Our goal is to deliver exceptional service and unparalleled
              coverage to meet all your insurance needs.
            </p>
            <Link href="/about" className="btn btn-teal" style={{ marginTop: '1.75rem' }}>
              Discover Our Story <ArrowRight />
            </Link>
          </div>

          {/* Right — pillars */}
          <div className="wwd-pillars">
            {pillars.map((p, i) => (
              <div key={p.title} className="pillar-card card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="pillar-icon">{p.icon}</div>
                <div>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .wwd-section { background: var(--off-white); }
        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
        }
        .wwd-text {}
        .wwd-pillars {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pillar-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
        }
        .pillar-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--teal-light);
          border-radius: 10px;
        }
        .pillar-title {
          font-size: 0.9375rem;
          font-weight: 800;
          color: var(--teal-dark);
          margin-bottom: 0.25rem;
        }
        .pillar-body {
          font-size: 0.8125rem;
          color: var(--gray-600);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .wwd-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </section>
  );
}

/* ── Products Section ────────────────────────────────────── */
function ProductsSection() {
  return (
    <section className="section" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="products-header">
          <span className="section-eyebrow">Our Solutions</span>
          <div className="brand-divider" />
          <h2 className="section-title" id="products-title">
            Comprehensive <span className="accent">Coverage</span> for Every Need
          </h2>
          <p className="section-body">
            From motor to marine, property to engineering — we have a tailored insurance
            solution designed precisely for your life, your assets, and your business.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="product-card card" id={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="product-icon" style={{ background: `${product.color}15`, color: product.color }}>
                {product.icon}
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-arrow" style={{ color: product.color }}>
                Learn more <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .products-header .section-body {
          margin: 0 auto;
        }
        .products-header .brand-divider {
          margin: 1rem auto 1.5rem;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .product-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-decoration: none;
          cursor: pointer;
        }
        .product-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.375rem;
        }
        .product-name {
          font-size: 1rem;
          font-weight: 800;
          color: var(--teal-dark);
        }
        .product-desc {
          font-size: 0.8125rem;
          color: var(--gray-600);
          line-height: 1.6;
          flex: 1;
        }
        .product-arrow {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 700;
          margin-top: 0.25rem;
        }
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/* ── Philosophy Section ──────────────────────────────────── */
function PhilosophySection() {
  return (
    <section className="section philosophy-section" id="philosophy" aria-labelledby="philosophy-title">
      <div className="container">
        <div className="philosophy-header">
          <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Corporate Philosophy</span>
          <div className="brand-divider" style={{ margin: '1rem auto 0' }} />
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-card" id="vision-card">
            <div className="philosophy-card-icon">👁️</div>
            <div className="philosophy-tag">Vision</div>
            <h2 className="philosophy-card-title" id="philosophy-title">
              World Class Financial Services
            </h2>
            <p className="philosophy-card-body">
              To be a world class financial services provider — setting the benchmark for
              excellence, innovation, and reliability in every market we serve.
            </p>
          </div>

          <div className="philosophy-divider" aria-hidden="true">
            <div className="philosophy-divider-line" />
            <div className="philosophy-divider-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" opacity="0.6"/>
              </svg>
            </div>
            <div className="philosophy-divider-line" />
          </div>

          <div className="philosophy-card" id="mission-card">
            <div className="philosophy-card-icon">🎯</div>
            <div className="philosophy-tag">Mission</div>
            <h3 className="philosophy-card-title">In Every Household</h3>
            <p className="philosophy-card-body">
              To be in every household where we are licensed to operate, providing wealth
              management and risk protection services, using the most efficient technology
              and manpower — creating value to all stakeholders.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .philosophy-section {
          background: var(--teal-dark);
          color: white;
        }
        .philosophy-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
        }
        .philosophy-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1.25rem;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }
        .philosophy-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(27,176,206,0.4);
          transform: translateY(-3px);
        }
        .philosophy-card-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .philosophy-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--teal-bright);
          margin-bottom: 0.75rem;
        }
        .philosophy-card-title {
          font-size: 1.375rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .philosophy-card-body {
          font-size: 0.875rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.65);
        }
        /* Divider */
        .philosophy-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          width: 2rem;
        }
        .philosophy-divider-line {
          width: 1px;
          flex: 1;
          min-height: 40px;
          background: rgba(255,255,255,0.15);
        }
        .philosophy-divider-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .philosophy-grid { grid-template-columns: 1fr; }
          .philosophy-divider { flex-direction: row; width: 100%; }
          .philosophy-divider-line { height: 1px; min-height: auto; flex: 1; }
        }
      `}</style>
    </section>
  );
}

/* ── Core Values ─────────────────────────────────────────── */
function ValuesSection() {
  return (
    <section className="section" id="values" aria-labelledby="values-title">
      <div className="container">
        <div className="values-header">
          <span className="section-eyebrow">Core Values</span>
          <div className="brand-divider" style={{ margin: '1rem auto 1.5rem' }} />
          <h2 className="section-title" id="values-title">
            The Principles We Live <span className="accent">By</span>
          </h2>
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={v.title} className="value-card card" id={`value-${i + 1}`}>
              <div className="value-icon">{v.icon}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .values-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }
        .value-card {
          padding: 2rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.875rem;
        }
        .value-icon {
          font-size: 2rem;
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--teal-light);
          border-radius: 50%;
        }
        .value-title {
          font-size: 0.9375rem;
          font-weight: 800;
          color: var(--teal-dark);
        }
        .value-body {
          font-size: 0.8125rem;
          color: var(--gray-600);
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}

/* ── Strategic Alliances ──────────────────────────────────── */
function AlliancesSection() {
  return (
    <section className="section alliances-section" id="alliances" aria-labelledby="alliances-title">
      <div className="container">
        <div className="alliances-header">
          <span className="section-eyebrow">Strategic Alliances</span>
          <div className="brand-divider" style={{ margin: '1rem auto 1.5rem' }} />
          <h2 className="section-title" id="alliances-title">
            Backed by the World's <span className="accent">Best</span>
          </h2>
          <p className="section-body" style={{ margin: '0 auto' }}>
            Our partnerships with leading global and regional re-insurers ensure your
            claims are always supported — wherever you are.
          </p>
        </div>

        {Object.entries(alliances).map(([category, partners]) => (
          <div key={category} className="alliance-group">
            <h3 className="alliance-category">
              {category === 'international' ? '🌍 International Re-Insurers' :
               category === 'regional' ? '🌍 Regional Re-Insurers' : '🤝 Re-Insurer Brokers'}
            </h3>
            <div className="alliance-partners">
              {(partners as { name: string; logo: string }[]).map((p) => (
                <div key={p.name} className="alliance-logo-card" title={p.name}>
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={140}
                    height={60}
                    style={{ objectFit: 'contain', maxHeight: '48px', width: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .alliances-section { background: var(--off-white); }
        .alliances-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .alliance-group {
          margin-bottom: 2.5rem;
        }
        .alliance-category {
          font-size: 0.8125rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gray-600);
          margin-bottom: 1rem;
        }
        .alliance-partners {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        .alliance-logo-card {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 1.5rem;
          background: white;
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          transition: all 0.2s ease;
          cursor: default;
          min-width: 100px;
        }
        .alliance-logo-card:hover {
          border-color: var(--teal-bright);
          box-shadow: 0 4px 16px rgba(0,66,91,0.08);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}

/* ── Contact CTA Section ─────────────────────────────────── */
function ContactCTASection() {
  return (
    <section className="section cta-section" id="contact-cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2 className="cta-title" id="cta-title">
              Ready to Protect What Matters?
            </h2>
            <p className="cta-body">
              Talk to our team of risk advisors today. We're available Monday to Friday,
              8:00am – 5:00pm. Victoria Island, Lagos.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" id="cta-contact-btn" className="btn btn-primary" style={{ fontSize: '0.9375rem' }}>
              Get In Touch <ArrowRight />
            </Link>
            <Link href="/buy" id="cta-buy-btn" className="btn btn-ghost-white" style={{ fontSize: '0.9375rem' }}>
              Buy a Policy
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, var(--teal-dark) 0%, #005F82 60%, #1BB0CE 100%);
          color: white;
          padding: 5rem 0;
        }
        .cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .cta-text { max-width: 560px; }
        .cta-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 900;
          color: white;
          margin-bottom: 0.875rem;
        }
        .cta-body {
          font-size: 1rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
        }
        .cta-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}

/* ── Shared Icon ─────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

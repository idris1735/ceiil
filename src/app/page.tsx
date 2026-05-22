'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    id: 'marine-photo',
    theme: 'photo',
    eyebrow: 'Capital Express Indemnity Insurance',
    title: 'Protecting What Matters Most',
    body: 'Insurance solutions designed to protect your assets, business, family, and future.',
    image: '/media/Marine-scaled.jpg',
    imagePosition: 'center center',
    primaryCta: { label: 'Get a Quote', href: 'https://ceiil.ng/index.php/contact-us/' },
    secondaryCta: { label: 'Report a Claim', href: 'https://ceiil.ng/index.php/motor-insurance-claim-2/' },
  },
  {
    id: 'family-photo',
    theme: 'photo',
    eyebrow: 'Customer-Focused Service',
    title: 'Creating lasting value for every stakeholder.',
    body: 'Our values guide how we serve our customers, work with one another, and create lasting value for every stakeholder.',
    image: '/media/family-7257182-scaled.jpg',
    imagePosition: 'center center',
    primaryCta: { label: 'Contact Us', href: 'https://ceiil.ng/index.php/contact-us/' },
    secondaryCta: { label: 'Explore Products', href: '#products' },
  },
  {
    id: 'motor-photo',
    theme: 'photo',
    eyebrow: 'Trusted Risk Protection Partner',
    title: 'Reliable cover for life on the move.',
    body: 'Delivering value through efficient technology, professional manpower, and customer-focused service.',
    image: '/media/afroamerican-man-waving-medium-shot-scaled.jpg',
    imagePosition: 'center center',
    primaryCta: { label: 'Buy a Policy', href: 'https://ceiil.ng/index.php/contact-us/' },
    secondaryCta: { label: 'Contact Us', href: '#contact' },
  },
  {
    id: 'motor-campaign',
    theme: 'art',
    title: 'The small cover that saves big trouble.',
    image: '/media/The-small-cover-scaled.jpg',
    imagePosition: 'center center',
  },
  {
    id: 'property-campaign',
    theme: 'art',
    title: "Protect the pride you've built.",
    image: '/media/protect-the-pride-you-built-scaled.jpg',
    imagePosition: '22% center',
  },
];

const quickActions = [
  {
    label: 'Buy a Policy',
    href: 'https://ceiil.ng/index.php/contact-us/',
    detail: 'Start a conversation with CEIIL',
  },
  {
    label: 'Make a Claim',
    href: 'https://ceiil.ng/index.php/motor-insurance-claim-2/',
    detail: 'Go straight to the claim forms page',
  },
  {
    label: 'Renew a Policy',
    href: 'https://www.ceiil.com.ng/',
    detail: 'Continue to the renewal portal',
  },
];

const products = [
  {
    name: 'Marine Insurance',
    summary: 'Cargo, hull, freight, and transport risk protection across sea, air, and land movements.',
    href: 'https://ceiil.ng/index.php/marine-insurance/',
  },
  {
    name: 'Motor Insurance',
    summary: 'Third-party, fire and theft, comprehensive, extended comprehensive, and goods in transit cover.',
    href: 'https://ceiil.ng/index.php/motor-insurance/',
  },
  {
    name: 'Property Insurance',
    summary: 'Fire and special perils, burglary, and protection for buildings, contents, and operating continuity.',
    href: 'https://ceiil.ng/index.php/property-insurance/',
  },
  {
    name: 'Liability Insurance',
    summary: 'Fidelity guarantee and professional indemnity solutions for legal and operational exposure.',
    href: 'https://ceiil.ng/index.php/liability-insurance/',
  },
  {
    name: 'Engineering Insurance',
    summary: 'Plant all risks, erection all risks, machinery breakdown, and contractor all-risk cover.',
    href: 'https://ceiil.ng/index.php/engineering-insurance/',
  },
];

function HeartShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="value-card-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 14.5s-1.5-1.5-1.5-2.5a1.5 1.5 0 0 1 3 0c0 1-1.5 2.5-1.5 2.5z" />
    </svg>
  );
}

function RespectIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="value-card-icon">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="value-card-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CreativityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="value-card-icon">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function TeamworkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="value-card-icon">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const coreValuesData = [
  {
    name: 'Customer Dedication',
    desc: "We put our customers first and remain committed to meeting their needs.",
    num: '01',
    color: 'linear-gradient(135deg, #004058 0%, #00bcd4 100%)',
    ribbonText: 'DEDICATION / SERVICE / TRUST / CARE / ',
    icon: HeartShieldIcon,
  },
  {
    name: 'Respect for Individuals',
    desc: "We value people, diversity, dignity, and mutual respect.",
    num: '02',
    color: 'linear-gradient(135deg, #b02038 0%, #e91e63 100%)',
    ribbonText: 'RESPECT / EQUITY / DIGNITY / INCLUSION / ',
    icon: RespectIcon,
  },
  {
    name: 'Integrity',
    desc: "We uphold trust, transparency, and accountability in all we do.",
    num: '03',
    color: 'linear-gradient(135deg, #003247 0%, #ffb300 100%)',
    ribbonText: 'INTEGRITY / TRUTH / HONESTY / ETHICS / ',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Creativity',
    desc: "We embrace innovation and practical ideas that improve service delivery.",
    num: '04',
    color: 'linear-gradient(135deg, #3b0764 0%, #a855f7 100%)',
    ribbonText: 'CREATIVITY / IDEA / VISION / FUTURE / ',
    icon: CreativityIcon,
  },
  {
    name: 'Teamwork',
    desc: "We work together to deliver better outcomes for customers and stakeholders.",
    num: '05',
    color: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
    ribbonText: 'TEAMWORK / UNITY / SYNERGY / COLLABORATE / ',
    icon: TeamworkIcon,
  },
];


const alliances = [
  '/media/koreanpr-1.png',
  '/media/thehartford-1.png',
  '/media/artrium-1.png',
  '/media/thomasmiller-1.png',
  '/media/markel-1.png',
  '/media/gallagherre-2.png',
  '/media/apollo-1.png',
  '/media/waica-1.png',
  '/media/fbs-re-1.png',
  '/media/continental-1.png',
  '/media/africa-re-1.png',
  '/media/jordansglobal-1.png',
  '/media/lockton-1.png',
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredPhil, setHoveredPhil] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const activeSlide = slides[currentSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((value) => (value + 1) % slides.length);
    }, 9200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.02,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-reveal-id');
          if (id) {
            setRevealed((prev) => {
              if (prev[id]) return prev;
              return { ...prev, [id]: true };
            });
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-reveal-id]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero-stage">
        <div className={`hero-shell ${activeSlide.theme === 'photo' ? 'hero-shell-text-slide' : 'hero-shell-art-slide'}`}>
          <div className="hero-backdrop">
            {slides.map((item, index) => (
              <div key={item.id} className={`hero-image-frame ${index === currentSlide ? 'hero-image-frame-active' : ''}`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: item.imagePosition }}
                />
              </div>
            ))}
            <div className="hero-backdrop-wash" />
            <div className="hero-backdrop-glow" />
          </div>

          {activeSlide.theme === 'photo' ? (
            <div className="hero-overlay-content">
              <div key={activeSlide.id} className="hero-text-container">
                <div className="hero-brand-lockup">
                  <Image
                    src="/media/cropped-ceiil-litt.png"
                    alt="CEIIL"
                    width={120}
                    height={36}
                    className="hero-brand-mark"
                  />
                  <span className="hero-eyebrow">{activeSlide.eyebrow}</span>
                </div>
                <h1 className="hero-title">{activeSlide.title}</h1>
                <p className="hero-subtitle">{activeSlide.body}</p>
                <div className="hero-cta-buttons">
                  <a href={activeSlide.primaryCta?.href} className="button-primary hero-btn">
                    <span>{activeSlide.primaryCta?.label}</span>
                    <ArrowIcon />
                  </a>
                  <a href={activeSlide.secondaryCta?.href} className="button-secondary hero-btn">
                    <span>{activeSlide.secondaryCta?.label}</span>
                  </a>
                </div>
              </div>
            </div>
          ) : null}

          <div className="hero-content-shell">
            <div className="hero-controls">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`hero-dot ${index === currentSlide ? 'hero-dot-active' : ''}`}
                  aria-label={`Show ${item.title}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="actions-shell info-card">
          {quickActions.map((action, index) => (
            <a
              key={action.label}
              href={action.href}
              data-reveal-id={`action-${index}`}
              className={`action-card ${
                index === 0 ? 'reveal-left' : index === 1 ? 'reveal-up' : 'reveal-right'
              } ${revealed[`action-${index}`] ? 'reveal-in-view' : ''}`}
            >
              <div className="action-index">0{index + 1}</div>
              <div className="action-text">
                <h2>{action.label}</h2>
                <p>{action.detail}</p>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="solutions-section" id="products">
        <div className="section-shell solutions-layout">
          <div 
            data-reveal-id="solutions-intro" 
            className={`solutions-intro reveal-left ${revealed['solutions-intro'] ? 'reveal-in-view' : ''}`}
          >
            <p className="section-kicker">Solutions for You</p>
            <h2 className="section-title">Get Your Kind Of Solution.</h2>
            <p className="section-copy">
              Explore our comprehensive portfolio of general insurance plans designed to protect your assets, mitigate risks, and safeguard your peace of mind.
            </p>
            <div className="button-row" style={{ marginTop: '32px' }}>
              <a href="https://ceiil.ng/index.php/contact-us/" className="button-primary">
                <span>Talk to an Advisor</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="solutions-list">
            {products.map((product, index) => {
              const Icon = productIcons[index];
              return (
                <a
                  key={product.name}
                  href={product.href}
                  data-reveal-id={`solution-${index}`}
                  className={`solution-item ${
                    index % 2 === 0 ? 'reveal-right' : 'reveal-left'
                  } reveal-delay-${(index % 5) + 1} ${revealed[`solution-${index}`] ? 'reveal-in-view' : ''}`}
                >
                  <div className="solution-icon-wrapper">
                    <Icon />
                  </div>
                  <div className="solution-details">
                    <h3>{product.name}</h3>
                    <p>{product.summary}</p>
                  </div>
                  <div className="solution-arrow">
                    <ArrowIcon />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block" id="about">
        <div className="section-shell about-grid">
          <div 
            data-reveal-id="about-text" 
            className={`about-text-block reveal-left ${revealed['about-text'] ? 'reveal-in-view' : ''}`}
          >
            <p className="section-kicker">WHAT WE DO</p>
            <h2 className="section-title">We turn your dreams into reality</h2>
            <div className="title-divider" />
            <p className="section-copy">
              Capital Express Indemnity Insurance is positioned as a trusted risk protection partner focused on delivering value through efficient technology, professional manpower, and customer-focused service.
            </p>
          </div>

          <div className="claims-grid">
            <div 
              data-reveal-id="claims-0" 
              className={`claims-card reveal-left reveal-delay-1 ${revealed['claims-0'] ? 'reveal-in-view' : ''}`}
            >
              <Image 
                src="/media/car-crash-6243099-scaled.jpg" 
                alt="Motor Accident Claim" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="claims-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div 
              data-reveal-id="claims-1" 
              className={`claims-card reveal-right reveal-delay-2 ${revealed['claims-1'] ? 'reveal-in-view' : ''}`}
            >
              <Image 
                src="/media/Fire-SpecialPerils-scaled.jpg" 
                alt="Property Fire Peril Claim" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="claims-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div 
              data-reveal-id="claims-2" 
              className={`claims-card reveal-left reveal-delay-3 ${revealed['claims-2'] ? 'reveal-in-view' : ''}`}
            >
              <Image 
                src="/media/Thirdparty-Police-scaled.jpg" 
                alt="General Accident Claim" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="claims-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div 
              data-reveal-id="claims-3" 
              className={`claims-card reveal-right reveal-delay-4 ${revealed['claims-3'] ? 'reveal-in-view' : ''}`}
            >
              <Image 
                src="/media/Marine-scaled.jpg" 
                alt="Marine Transit Peril Claim" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="claims-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section" id="philosophy">
        <div className="section-shell philosophy-layout">
          <div 
            data-reveal-id="philosophy-intro" 
            className={`philosophy-intro reveal-left ${revealed['philosophy-intro'] ? 'reveal-in-view' : ''}`}
          >
            <p className="section-kicker">Corporate Philosophy</p>
            <h2 className="section-title">Architects of Trust & Value.</h2>
            <p className="section-copy">
              We operate with a clear service posture built around value optimization, client advocacy, and long-term trust.
            </p>

            <div className="philosophy-visual-wrapper">
              <svg className="philosophy-compass" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid */}
                <circle cx="100" cy="100" r="90" stroke="rgba(22, 32, 43, 0.04)" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(22, 32, 43, 0.04)" strokeWidth="1" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(22, 32, 43, 0.04)" strokeWidth="1" />

                {/* Ring 1 - Vision (Teal) */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  className={`compass-ring ring-vision ${hoveredPhil === 0 ? 'active' : hoveredPhil !== null ? 'dim' : ''}`}
                  stroke={hoveredPhil === 0 ? 'var(--accent-teal)' : 'rgba(22, 32, 43, 0.08)'}
                  strokeWidth={hoveredPhil === 0 ? '2' : '1.2'}
                  strokeDasharray="4 8"
                />
                <circle
                  cx="100"
                  cy="15"
                  r={hoveredPhil === 0 ? '6' : '3.5'}
                  className={`compass-dot dot-vision ${hoveredPhil === 0 ? 'active' : ''}`}
                  fill={hoveredPhil === 0 ? 'var(--accent-teal)' : 'rgba(22, 32, 43, 0.2)'}
                />

                {/* Ring 2 - Mission (Crimson) */}
                <circle
                  cx="100"
                  cy="100"
                  r="65"
                  className={`compass-ring ring-mission ${hoveredPhil === 1 ? 'active' : hoveredPhil !== null ? 'dim' : ''}`}
                  stroke={hoveredPhil === 1 ? 'var(--brand-crimson)' : 'rgba(22, 32, 43, 0.1)'}
                  strokeWidth={hoveredPhil === 1 ? '2.2' : '1.2'}
                  strokeDasharray="12 6"
                />
                <circle
                  cx="165"
                  cy="100"
                  r={hoveredPhil === 1 ? '6' : '3.5'}
                  className={`compass-dot dot-mission ${hoveredPhil === 1 ? 'active' : ''}`}
                  fill={hoveredPhil === 1 ? 'var(--brand-crimson)' : 'rgba(22, 32, 43, 0.25)'}
                />

                {/* Ring 3 - Positioning (Gold) */}
                <circle
                  cx="100"
                  cy="100"
                  r="45"
                  className={`compass-ring ring-position ${hoveredPhil === 2 ? 'active' : hoveredPhil !== null ? 'dim' : ''}`}
                  stroke={hoveredPhil === 2 ? 'var(--accent-gold)' : 'rgba(22, 32, 43, 0.12)'}
                  strokeWidth={hoveredPhil === 2 ? '2.5' : '1.2'}
                  strokeDasharray="2 4"
                />
                <circle
                  cx="100"
                  cy="145"
                  r={hoveredPhil === 2 ? '6' : '3.5'}
                  className={`compass-dot dot-position ${hoveredPhil === 2 ? 'active' : ''}`}
                  fill={hoveredPhil === 2 ? 'var(--accent-gold)' : 'rgba(22, 32, 43, 0.3)'}
                />

                {/* Ring 4 - Technology (Emerald) */}
                <circle
                  cx="100"
                  cy="100"
                  r="25"
                  className={`compass-ring ring-technology ${hoveredPhil === 3 ? 'active' : hoveredPhil !== null ? 'dim' : ''}`}
                  stroke={hoveredPhil === 3 ? '#10b981' : 'rgba(22, 32, 43, 0.14)'}
                  strokeWidth={hoveredPhil === 3 ? '2.8' : '1.2'}
                  strokeDasharray="3 3"
                />
                <circle
                  cx="75"
                  cy="100"
                  r={hoveredPhil === 3 ? '6' : '3.5'}
                  className={`compass-dot dot-technology ${hoveredPhil === 3 ? 'active' : ''}`}
                  fill={hoveredPhil === 3 ? '#10b981' : 'rgba(22, 32, 43, 0.35)'}
                />

                {/* Center Glow / Core */}
                <circle
                  cx="100"
                  cy="100"
                  r="10"
                  className={`compass-core ${hoveredPhil !== null ? 'active-' + hoveredPhil : ''}`}
                  fill="rgba(22, 32, 43, 0.15)"
                />
              </svg>
            </div>
          </div>

          <div className="philosophy-stack">
            <article
              data-reveal-id="philosophy-0"
              className={`philosophy-item card-vision reveal-right reveal-delay-1 ${
                hoveredPhil === 0 ? 'active' : ''
              } ${revealed['philosophy-0'] ? 'reveal-in-view' : ''}`}
              onMouseEnter={() => setHoveredPhil(0)}
              onMouseLeave={() => setHoveredPhil(null)}
            >
              <div className="philosophy-card-bg" />
              <div className="philosophy-header-row">
                <span className="philosophy-index-huge">01</span>
                <div className="philosophy-title-wrapper">
                  <span className="philosophy-badge badge-vision">VISION</span>
                  <h3>Vision</h3>
                </div>
              </div>
              <p>To be a leading world-class financial services and risk protection provider.</p>
            </article>

            <article
              data-reveal-id="philosophy-1"
              className={`philosophy-item card-mission reveal-left reveal-delay-2 ${
                hoveredPhil === 1 ? 'active' : ''
              } ${revealed['philosophy-1'] ? 'reveal-in-view' : ''}`}
              onMouseEnter={() => setHoveredPhil(1)}
              onMouseLeave={() => setHoveredPhil(null)}
            >
              <div className="philosophy-card-bg" />
              <div className="philosophy-header-row">
                <span className="philosophy-index-huge">02</span>
                <div className="philosophy-title-wrapper">
                  <span className="philosophy-badge badge-mission">MISSION</span>
                  <h3>Mission</h3>
                </div>
              </div>
              <p>To deliver innovative wealth management and risk protection solutions through efficient technology, exceptional people, and customer-focused service, while creating sustainable value for all stakeholders.</p>
            </article>

            <article
              data-reveal-id="philosophy-2"
              className={`philosophy-item card-positioning reveal-right reveal-delay-3 ${
                hoveredPhil === 2 ? 'active' : ''
              } ${revealed['philosophy-2'] ? 'reveal-in-view' : ''}`}
              onMouseEnter={() => setHoveredPhil(2)}
              onMouseLeave={() => setHoveredPhil(null)}
            >
              <div className="philosophy-card-bg" />
              <div className="philosophy-header-row">
                <span className="philosophy-index-huge">03</span>
                <div className="philosophy-title-wrapper">
                  <span className="philosophy-badge badge-positioning">POSITIONING</span>
                  <h3>Positioning</h3>
                </div>
              </div>
              <p>Capital Express Indemnity Insurance is positioned as a trusted risk protection partner focused on delivering value through efficient technology, professional manpower, and customer-focused service.</p>
            </article>

            <article
              data-reveal-id="philosophy-3"
              className={`philosophy-item card-technology reveal-left reveal-delay-4 ${
                hoveredPhil === 3 ? 'active' : ''
              } ${revealed['philosophy-3'] ? 'reveal-in-view' : ''}`}
              onMouseEnter={() => setHoveredPhil(3)}
              onMouseLeave={() => setHoveredPhil(null)}
            >
              <div className="philosophy-card-bg" />
              <div className="philosophy-header-row">
                <span className="philosophy-index-huge">04</span>
                <div className="philosophy-title-wrapper">
                  <span className="philosophy-badge badge-technology" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>TECHNOLOGY</span>
                  <h3>Technology</h3>
                </div>
              </div>
              <p>Our competitive advantage is driven by continuous investment in modern technology. We operate advanced digital platforms, including our self-service portal, core business systems, and customer engagement tools, to ensure efficient, secure, dependable, and responsive operations.</p>
            </article>
          </div>
        </div>
      </section>


      <section className="section-block" id="values">
        <div className="section-shell values-shell" style={{ display: 'block' }}>
          <div 
            data-reveal-id="values-intro" 
            className={`reveal-left ${revealed['values-intro'] ? 'reveal-in-view' : ''}`}
            style={{ marginBottom: '48px' }}
          >
            <p className="section-kicker">Core Values</p>
            <h2 className="section-title" style={{ maxWidth: '24ch' }}>The part that should feel human, not corporate.</h2>
            <p className="section-copy">
              Our values guide how we serve our customers, work with one another, and create lasting value for every stakeholder.
            </p>
          </div>

          <div className="values-grid">
            {coreValuesData.map((value, index) => {
              const IconComp = value.icon;
              return (
                <div
                  key={value.name}
                  data-reveal-id={`value-${index}`}
                  className={`value-card ${
                    index % 2 === 0 ? 'reveal-right' : 'reveal-left'
                  } reveal-delay-${index + 1} ${revealed[`value-${index}`] ? 'reveal-in-view' : ''}`}
                  style={{ background: value.color }}
                >
                  <div className="value-card-cutout" style={{ color: 'var(--brand-teal)' }}>
                    <IconComp />
                  </div>
                  
                  <svg className="value-card-ribbon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      id={`circlePath-${index}`}
                      d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                      fill="none"
                    />
                    <text fill="currentColor" fontSize="10.5" fontWeight="700" letterSpacing="2px">
                      <textPath href={`#circlePath-${index}`}>
                        {value.ribbonText}
                      </textPath>
                    </text>
                  </svg>

                  <div className="value-card-number">{value.num}</div>
                  <div className="value-card-content">
                    <h3 className="value-card-title">{value.name}</h3>
                    <p className="value-card-desc">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block" id="alliances" style={{ overflow: 'hidden', padding: '80px 0' }}>
        <div className="section-shell" style={{ maxWidth: '100%', padding: 0 }}>
          <div 
            data-reveal-id="alliances-intro" 
            className={`reveal-up ${revealed['alliances-intro'] ? 'reveal-in-view' : ''}`}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <h2 className="alliances-title">Strategic Alliances</h2>
          </div>

          <div className="ticker-container">
            <div className="ticker-track">
              {alliances.map((logo, index) => (
                <div key={`logo-1-${index}`} className="ticker-item">
                  <Image src={logo} alt="Partner Logo" width={180} height={68} className="ticker-logo" />
                </div>
              ))}
              {alliances.map((logo, index) => (
                <div key={`logo-2-${index}`} className="ticker-item">
                  <Image src={logo} alt="Partner Logo" width={180} height={68} className="ticker-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block contact-section" id="contact-form-sec">
        <div className="section-shell contact-layout">
          <div 
            data-reveal-id="contact-form-reveal" 
            className={`contact-intro reveal-left ${revealed['contact-form-reveal'] ? 'reveal-in-view' : ''}`}
          >
            <p className="section-kicker">GET IN TOUCH</p>
            <h2 className="section-title" style={{ maxWidth: '20ch' }}>Let's secure your future together.</h2>
            <p className="section-copy">
              Have questions about our insurance policies, claims, or coverage options? Reach out to our dedicated advisory team today for personalized guidance.
            </p>

            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>

          <div 
            data-reveal-id="contact-info-reveal" 
            className={`contact-info-panel reveal-right ${revealed['contact-info-reveal'] ? 'reveal-in-view' : ''}`}
          >
            <div className="contact-info-bg-wrap">
              <Image 
                src="/media/business-7304257-scaled.jpg" 
                alt="Contact Us Background" 
                fill 
                sizes="(max-width: 768px) 100vw, 40vw"
                className="contact-info-bg-image"
              />
              <div className="contact-info-overlay" />
            </div>

            <div className="contact-info-content">
              <h3>Contact Info</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <LocationIcon />
                  </div>
                  <div>
                    <h4>Head Office</h4>
                    <p>No. 17, Bishop Kale Close, Off Kasumu Ekemode Street, Victoria Island, Lagos.</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h4>Call Center</h4>
                    <p>
                      <a href="tel:02013302950">020-1330-2950</a>
                      <span className="contact-info-divider">|</span>
                      <a href="tel:07059770508">070-5977-0508</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <EmailIcon />
                  </div>
                  <div>
                    <h4>Email Address</h4>
                    <p>
                      <a href="mailto:info@ceiil.ng">info@ceiil.ng</a>
                      <span className="contact-info-divider">|</span>
                      <a href="mailto:customercare@ceiil.ng">customercare@ceiil.ng</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrapper">
                    <ClockIcon />
                  </div>
                  <div>
                    <h4>Office Hours</h4>
                    <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const productIcons = [
  MarineIcon,
  MotorIcon,
  PropertyIcon,
  LiabilityIcon,
  EngineeringIcon,
];

function MarineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13h18l-2 5H5l-2-5z" />
      <path d="M8 13V9h8v4" />
      <path d="M10 9V6h4v3" />
      <path d="M12 6V3" />
      <path d="M1 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0 4 1 6 0" />
    </svg>
  );
}

function MotorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8v13z" />
      <path d="M14 9h4l4 3v4a2 2 0 0 1-2 2h-6V9z" />
      <circle cx="7.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function PropertyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <path d="M12 3v6l-2 2h4l-2 4" />
    </svg>
  );
}

function LiabilityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      <circle cx="19" cy="19" r="1.5" />
      <path d="M19 16v1M19 21v1M16.88 16.88l.7.7M20.42 20.42l.7.7M16 19h1M21 19h1M17 21l-.7-.7M20.3 16.88l-.7.7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate submission API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="contact-success-state">
        <div className="success-icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Message Sent!</h3>
        <p>Thank you for getting in touch. An advisor will contact you shortly.</p>
        <button 
          onClick={() => setStatus('idle')} 
          className="button-primary"
          style={{ minHeight: '44px', fontSize: '0.9rem' }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="form-name">Full Name</label>
          <input
            id="form-name"
            type="text"
            required
            placeholder="John Doe"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-email">Email Address</label>
          <input
            id="form-email"
            type="email"
            required
            placeholder="john@example.com"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="form-phone">Phone Number</label>
          <input
            id="form-phone"
            type="tel"
            placeholder="e.g. +234 800 000 0000"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-subject">Subject</label>
          <input
            id="form-subject"
            type="text"
            required
            placeholder="Policy Inquiry, Claims, etc."
            value={formState.subject}
            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="form-message">Message</label>
        <textarea
          id="form-message"
          rows={4}
          required
          placeholder="Write your message here..."
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
        />
      </div>

      <button 
        type="submit" 
        className="button-primary" 
        disabled={status === 'loading'}
        style={{ marginTop: '10px' }}
      >
        <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
        {status !== 'loading' && <ArrowIcon />}
      </button>
    </form>
  );
}

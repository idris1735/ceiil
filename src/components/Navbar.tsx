'use client';

import Image from 'next/image';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Who We Are',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Core Values', href: '/about/values' },
      { label: 'Our Board', href: '/about/board' },
      { label: 'Our Management', href: '/about/management' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Motor Insurance', href: '/products/motor' },
      { label: 'Marine Insurance', href: '/products/marine' },
      { label: 'Property Insurance', href: '/products/property' },
      { label: 'Liability Insurance', href: '/products/liability' },
      { label: 'Engineering Insurance', href: '/products/engineering' },
      { label: 'Oil & Gas', href: '/products/oil-gas' },
      { label: 'Travel Insurance', href: '/products/travel' },
      { label: 'General Accident', href: '/products/general' },
    ],
  },
  { label: 'Claims', href: '/claims' },
  { label: 'Alliances', href: '/alliances' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const policyActions = [
  { label: 'Buy a Policy', href: '/buy', icon: '🛡️' },
  { label: 'Make a Claim', href: '/claims', icon: '📋' },
  { label: 'Renew a Policy', href: '/renew', icon: '🔄' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const policyRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close policy dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (policyRef.current && !policyRef.current.contains(e.target as Node)) {
        setPolicyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`navbar-root ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        role="banner"
      >
        <div className="navbar-inner container">
          {/* ── Logo ── */}
          <Link href="/" className="navbar-logo" aria-label="CEIIL Home">
            <CeiilLogo scrolled={scrolled} />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav className="navbar-links" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="nav-item-group"
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`nav-link nav-link-btn ${scrolled ? 'nav-link-scrolled' : 'nav-link-hero'}`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === link.label}
                    id={`nav-${link.label.replace(/\s/g, '-').toLowerCase()}`}
                  >
                    {link.label}
                    <ChevronIcon />
                  </button>
                  <div
                    className={`nav-dropdown ${activeDropdown === link.label ? 'nav-dropdown-open' : ''}`}
                    role="menu"
                    aria-labelledby={`nav-${link.label.replace(/\s/g, '-').toLowerCase()}`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-dropdown-item"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${scrolled ? 'nav-link-scrolled' : 'nav-link-hero'}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Policy CTA ── */}
          <div className="navbar-cta" ref={policyRef}>
            <button
              id="policy-btn"
              className={`btn ${scrolled ? 'btn-primary' : 'btn-ghost-white'} navbar-policy-btn`}
              onClick={() => setPolicyOpen(!policyOpen)}
              aria-haspopup="true"
              aria-expanded={policyOpen}
              aria-controls="policy-dropdown"
            >
              Buy a Policy
              <ChevronIcon rotated={policyOpen} />
            </button>

            <div
              id="policy-dropdown"
              className={`policy-dropdown ${policyOpen ? 'policy-dropdown-open' : ''}`}
              role="menu"
              aria-labelledby="policy-btn"
            >
              {policyActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="policy-dropdown-item"
                  role="menuitem"
                  onClick={() => setPolicyOpen(false)}
                >
                  <span className="policy-dropdown-icon">{action.icon}</span>
                  <span>{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`hamburger ${scrolled ? 'hamburger-scrolled' : 'hamburger-hero'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`ham-line ${mobileOpen ? 'ham-open-1' : ''}`} />
            <span className={`ham-line ${mobileOpen ? 'ham-open-2' : ''}`} />
            <span className={`ham-line ${mobileOpen ? 'ham-open-3' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'mobile-overlay-open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-drawer ${mobileOpen ? 'mobile-drawer-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-header">
          <CeiilLogo scrolled={true} />
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mobile-sub-links">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="mobile-sub-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mobile-drawer-actions">
          {policyActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="mobile-action-btn"
              onClick={() => setMobileOpen(false)}
            >
              {action.icon} {action.label}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ── Root ── */
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar-transparent {
          background: transparent;
          box-shadow: none;
          padding: 1.5rem 0;
        }
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.06);
          padding: 0.85rem 0;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        /* ── Logo ── */
        .navbar-logo {
          flex-shrink: 0;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        /* ── Desktop Links ── */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
          background: none;
          cursor: pointer;
        }
        .nav-link-btn {
          border: none;
          font-family: inherit;
        }
        .nav-link-hero {
          color: rgba(255,255,255,0.92);
        }
        .nav-link-hero:hover {
          color: #fff;
          background: rgba(255,255,255,0.12);
        }
        .nav-link-scrolled {
          color: #00425B;
        }
        .nav-link-scrolled:hover {
          color: #00425B;
          background: #E8F7FB;
        }

        /* ── Dropdown ── */
        .nav-item-group {
          position: relative;
        }
        .nav-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
          min-width: 200px;
          padding: 0.5rem;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-dropdown-open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .nav-dropdown-item {
          display: block;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .nav-dropdown-item:hover {
          background: #E8F7FB;
          color: #00425B;
        }

        /* ── Policy CTA ── */
        .navbar-cta {
          position: relative;
          flex-shrink: 0;
        }
        .navbar-policy-btn {
          font-size: 0.8rem;
          padding: 0.6rem 1.25rem;
        }
        .policy-dropdown {
          position: absolute;
          top: calc(100% + 0.75rem);
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 12px 48px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04);
          min-width: 220px;
          padding: 0.75rem;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .policy-dropdown-open {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .policy-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 700;
          color: #1F2937;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .policy-dropdown-item:hover {
          background: #E8F7FB;
          color: #00425B;
        }
        .policy-dropdown-icon {
          font-size: 1.1rem;
          width: 1.5rem;
          text-align: center;
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
        }
        .ham-line {
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger-hero .ham-line { background: white; }
        .hamburger-scrolled .ham-line { background: #00425B; }
        .ham-open-1 { transform: rotate(45deg) translate(5px, 5px); }
        .ham-open-2 { opacity: 0; transform: scaleX(0); }
        .ham-open-3 { transform: rotate(-45deg) translate(5px, -5px); }

        /* ── Mobile Overlay ── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-overlay-open {
          opacity: 1;
          pointer-events: all;
        }

        /* ── Mobile Drawer ── */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          background: white;
          z-index: 300;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }
        .mobile-drawer-open {
          transform: translateX(0);
        }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid #E5E7EB;
        }
        .mobile-close {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          color: #6B7280;
          padding: 4px 8px;
          border-radius: 6px;
        }
        .mobile-nav {
          flex: 1;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }
        .mobile-nav-link {
          display: block;
          padding: 0.75rem 0.875rem;
          border-radius: 10px;
          font-size: 0.9375rem;
          font-weight: 700;
          color: #1F2937;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .mobile-nav-link:hover {
          background: #E8F7FB;
          color: #00425B;
        }
        .mobile-sub-links {
          padding-left: 1.25rem;
          margin-top: -0.25rem;
          margin-bottom: 0.25rem;
        }
        .mobile-sub-link {
          display: block;
          padding: 0.5rem 0.875rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #6B7280;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.15s ease;
        }
        .mobile-sub-link:hover {
          color: #00425B;
          background: #E8F7FB;
        }
        .mobile-drawer-actions {
          padding: 1rem 1.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          border-top: 1px solid #E5E7EB;
        }
        .mobile-action-btn {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 700;
          color: white;
          background: #00425B;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .mobile-action-btn:hover {
          background: #005F82;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .navbar-links { display: none; }
          .navbar-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </>
  );
}

/* ── Real CEIIL Logo ─────────────────────────────────────── */
function CeiilLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src="/media/ceiil-litt.png"
        alt="Capital Express Indemnity Insurance Limited"
        width={160}
        height={52}
        priority
        style={{
          objectFit: 'contain',
          filter: scrolled ? 'none' : 'brightness(0) invert(1)',
          transition: 'filter 0.35s ease',
          height: '42px',
          width: 'auto',
        }}
      />
    </div>
  );
}

/* ── Chevron Icon ─────────────────────────────────────────── */
function ChevronIcon({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      style={{
        transition: 'transform 0.2s ease',
        transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
        opacity: 0.7,
        flexShrink: 0,
      }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

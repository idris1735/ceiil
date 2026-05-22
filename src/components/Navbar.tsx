'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const whoWeAreLinks = [
  { label: 'Our Core Values', href: '#values' },
  { label: 'Our Board', href: 'https://ceiil.ng/index.php/our-management-team/' },
  { label: 'Our Management', href: 'https://ceiil.ng/index.php/our-leadership/' },
  { label: 'Investor Portal', href: 'https://ceiil.ng/index.php/investor-portal/' },
];

const productLinks = [
  { label: 'Motor Insurance', href: 'https://ceiil.ng/index.php/motor-insurance/' },
  { label: 'Liability Insurance', href: 'https://ceiil.ng/index.php/liability-insurance/' },
  { label: 'Engineering Insurance', href: 'https://ceiil.ng/index.php/engineering-insurance/' },
  { label: 'Marine Insurance', href: 'https://ceiil.ng/index.php/marine-insurance/' },
  { label: 'Property Insurance', href: 'https://ceiil.ng/index.php/property-insurance/' },
];

const actionLinks = [
  { label: 'Buy a Policy', href: 'https://ceiil.ng/index.php/contact-us/' },
  { label: 'Make a Claim', href: 'https://ceiil.ng/index.php/motor-insurance-claim-2/' },
  { label: 'Renew a Policy', href: 'https://www.ceiil.com.ng/' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActionOpen, setIsActionOpen] = useState(false);
  
  // Mobile accordion expand states
  const [isMobileWhoOpen, setIsMobileWhoOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const actionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (actionRef.current && !actionRef.current.contains(event.target as Node)) {
        setIsActionOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  return (
    <header className={`nav-wrap ${isScrolled ? 'nav-wrap-scrolled' : ''}`}>
      <div className={`nav-shell glass-panel ${isScrolled ? 'nav-shell-scrolled' : ''}`}>
        <Link href="/" className="brand-lockup" aria-label="Capital Express Indemnity Insurance Limited">
          <Image
            src="/media/ceiil-litt.png"
            alt="Capital Express Indemnity Insurance Limited"
            width={216}
            height={70}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Primary navigation">
          {/* HOME */}
          <Link href="/" className="nav-link nav-link-crimson">
            <HomeIcon />
            <span>HOME</span>
          </Link>
          
          <span className="nav-dot">•</span>

          {/* WHO WE ARE DROPDOWN */}
          <div className="nav-item-dropdown">
            <button className="nav-link nav-link-teal">
              <WhoWeAreIcon />
              <span>WHO WE ARE</span>
              <DropdownArrow />
            </button>
            <div className="nav-dropdown-menu">
              {whoWeAreLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-dropdown-item">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <span className="nav-dot">•</span>

          {/* PRODUCTS DROPDOWN */}
          <div className="nav-item-dropdown">
            <button className="nav-link nav-link-teal">
              <ProductsIcon />
              <span>PRODUCTS</span>
              <DropdownArrow />
            </button>
            <div className="nav-dropdown-menu">
              {productLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-dropdown-item">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <span className="nav-dot">•</span>

          {/* NEWS */}
          <a href="https://ceiil.ng/index.php/blog/" className="nav-link nav-link-teal">
            <NewsIcon />
            <span>NEWS</span>
          </a>

          <span className="nav-dot">•</span>

          {/* FINANCIALS */}
          <a href="https://ceiil.ng/index.php/our-financials/" className="nav-link nav-link-teal">
            <span>FINANCIALS</span>
          </a>

          <span className="nav-dot">•</span>

          {/* CONTACT US */}
          <a href="#contact" className="nav-link nav-link-teal">
            <ContactIcon />
            <span>CONTACT US</span>
          </a>

        </nav>

        {/* Right CTA Actions & Toggle */}
        <div className="nav-actions" ref={actionRef}>
          <button
            type="button"
            className="nav-cta"
            aria-expanded={isActionOpen}
            aria-haspopup="menu"
            onClick={() => setIsActionOpen((open) => !open)}
          >
            <span>Buy a Policy</span>
            <ChevronIcon open={isActionOpen} />
          </button>

          <div className={`action-menu ${isActionOpen ? 'action-menu-open' : ''}`} role="menu">
            {actionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="action-link"
                role="menuitem"
                onClick={() => setIsActionOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-panel glass-panel ${isMenuOpen ? 'mobile-panel-open' : ''}`}>
        <nav className="mobile-links" aria-label="Mobile navigation">
          {/* HOME */}
          <Link href="/" className="mobile-link text-crimson" onClick={() => setIsMenuOpen(false)}>
            <div className="mobile-link-header">
              <HomeIcon />
              <span>HOME</span>
            </div>
          </Link>

          {/* WHO WE ARE ACCORDION */}
          <div className="mobile-accordion">
            <button
              type="button"
              className="mobile-accordion-trigger"
              onClick={() => setIsMobileWhoOpen((open) => !open)}
            >
              <div className="mobile-link-header">
                <WhoWeAreIcon />
                <span>WHO WE ARE</span>
              </div>
              <ChevronIcon open={isMobileWhoOpen} />
            </button>
            <div className={`mobile-accordion-content ${isMobileWhoOpen ? 'mobile-accordion-content-open' : ''}`}>
              {whoWeAreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-sublink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* PRODUCTS ACCORDION */}
          <div className="mobile-accordion">
            <button
              type="button"
              className="mobile-accordion-trigger"
              onClick={() => setIsMobileProductsOpen((open) => !open)}
            >
              <div className="mobile-link-header">
                <ProductsIcon />
                <span>PRODUCTS</span>
              </div>
              <ChevronIcon open={isMobileProductsOpen} />
            </button>
            <div className={`mobile-accordion-content ${isMobileProductsOpen ? 'mobile-accordion-content-open' : ''}`}>
              {productLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-sublink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* NEWS */}
          <a
            href="https://ceiil.ng/index.php/blog/"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="mobile-link-header">
              <NewsIcon />
              <span>NEWS</span>
            </div>
          </a>

          {/* FINANCIALS */}
          <a
            href="https://ceiil.ng/index.php/our-financials/"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="mobile-link-header">
              <span className="mobile-no-icon-spacing">FINANCIALS</span>
            </div>
          </a>

          {/* CONTACT US */}
          <a
            href="#contact"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="mobile-link-header">
              <ContactIcon />
              <span>CONTACT US</span>
            </div>
          </a>

        </nav>

        <div className="mobile-action-list">
          {actionLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-action-link" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

// Sub-icons and arrows
function HomeIcon() {
  return (
    <svg className="nav-icon-svg text-crimson" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function WhoWeAreIcon() {
  return (
    <svg className="nav-icon-svg text-teal" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ProductsIcon() {
  return (
    <svg className="nav-icon-svg text-teal" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg className="nav-icon-svg text-teal" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg className="nav-icon-svg text-teal" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function DropdownArrow() {
  return (
    <svg className="dropdown-arrow-svg" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 180ms ease',
      }}
    >
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

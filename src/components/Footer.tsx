'use client';

import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Our Board', href: '/about/board' },
  { label: 'Our Management', href: '/about/management' },
  { label: 'Strategic Alliances', href: '/alliances' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const products = [
  { label: 'Motor Insurance', href: '/products/motor' },
  { label: 'Marine Insurance', href: '/products/marine' },
  { label: 'Property Insurance', href: '/products/property' },
  { label: 'Liability Insurance', href: '/products/liability' },
  { label: 'Engineering Insurance', href: '/products/engineering' },
  { label: 'Oil & Gas Insurance', href: '/products/oil-gas' },
  { label: 'Travel Insurance', href: '/products/travel' },
  { label: 'General Accident', href: '/products/general' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* ── Brand Column ── */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="18" cy="18" r="7" fill="#9B1C33" opacity="0.9"/>
                  <text x="18" y="22.5" textAnchor="middle" fontFamily="Nunito, sans-serif" fontWeight="900" fontSize="9" fill="white" letterSpacing="-0.5">C</text>
                </svg>
              </div>
              <div>
                <div className="footer-logo-name">
                  Capital <span style={{ color: '#9B1C33' }}>Express</span>
                </div>
                <div className="footer-logo-sub">Indemnity Insurance</div>
              </div>
            </div>

            <p className="footer-tagline">
              We don't just insure — we innovate, advocate, and elevate.
              Your trusted risk advisor, protecting what matters most.
            </p>

            <div className="footer-actions">
              <Link href="/buy" className="footer-action-btn footer-action-primary">Buy a Policy</Link>
              <Link href="/claims" className="footer-action-btn footer-action-secondary">Make a Claim</Link>
            </div>

            {/* Social */}
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter/X">
                <XIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Products ── */}
          <div className="footer-col">
            <h3 className="footer-col-title">Our Products</h3>
            <ul className="footer-links-list">
              {products.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="footer-link">{product.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer-col">
            <h3 className="footer-col-title">Get In Touch</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">📍</div>
                <p>17, Bishop Kale Close,<br/>Off Kasumu Ekemode Street,<br/>Off Saka Tinubu Street,<br/>Victoria Island, Lagos — Nigeria</p>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">🕐</div>
                <p>Monday – Friday<br/>08:00am – 5:00pm</p>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">✉️</div>
                <a href="mailto:info@ceiil.ng" className="footer-link">info@ceiil.ng</a>
              </div>
            </div>

            {/* NAICOM Regulated Badge */}
            <div className="footer-regulated">
              <div className="regulated-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#1BB0CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Regulated by NAICOM
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Capital Express Indemnity Insurance Limited. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-bottom-link">Terms of Use</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #00425B;
          color: rgba(255,255,255,0.75);
          padding: 5rem 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 3rem;
          padding-bottom: 4rem;
        }
        /* Brand */
        .footer-brand {}
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .footer-logo-mark {
          flex-shrink: 0;
        }
        .footer-logo-name {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 1.1rem;
          color: white;
          letter-spacing: -0.02em;
        }
        .footer-logo-sub {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .footer-tagline {
          font-size: 0.875rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.5rem;
          max-width: 280px;
        }
        .footer-actions {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-action-btn {
          display: inline-block;
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-action-primary {
          background: #9B1C33;
          color: white;
        }
        .footer-action-primary:hover {
          background: #7A1428;
          transform: translateY(-1px);
        }
        .footer-action-secondary {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .footer-action-secondary:hover {
          background: rgba(255,255,255,0.18);
          transform: translateY(-1px);
        }
        .footer-social {
          display: flex;
          gap: 0.75rem;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .social-link:hover {
          background: #1BB0CE;
          color: white;
          transform: translateY(-2px);
        }
        /* Columns */
        .footer-col-title {
          font-family: 'Nunito', sans-serif;
          font-size: 0.8125rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: white;
          margin-bottom: 1.25rem;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .footer-link {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: #1BB0CE;
        }
        /* Contact */
        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .footer-contact-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 0.8125rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
        }
        .footer-contact-icon {
          flex-shrink: 0;
          font-size: 0.875rem;
          margin-top: 0.1rem;
        }
        .footer-regulated {
          margin-top: 0.75rem;
        }
        .regulated-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.875rem;
          background: rgba(27, 176, 206, 0.12);
          border: 1px solid rgba(27, 176, 206, 0.25);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #1BB0CE;
        }
        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1.5rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.4);
        }
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-bottom-link {
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-bottom-link:hover {
          color: rgba(255,255,255,0.8);
        }
        /* Responsive */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

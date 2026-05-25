import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Products', href: '/products' },
  { label: 'Core Values', href: '/our-core-values' },
  { label: 'Board', href: '/our-board' },
  { label: 'Management', href: '/our-management' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Motor Insurance', href: '/products/motor' },
  { label: 'Marine Insurance', href: '/products/marine' },
  { label: 'Property Insurance', href: '/products/property' },
  { label: 'Liability Insurance', href: '/products/liability' },
  { label: 'Engineering Insurance', href: '/products/engineering' },
];

export default function Footer() {
  return (
    <footer className="footer-shell" id="contact">
      <div className="section-shell">
        <div className="footer-panel">
          <div className="footer-brand">
            <div className="footer-logos-container" style={{ marginBottom: '24px' }}>
              <Image
                src="/media/Official-Capital-Express-Indemnity-Logo-Colored.png"
                alt="Capital Express Indemnity Insurance Limited"
                width={360}
                height={110}
                className="footer-logo"
                style={{ objectFit: 'contain', height: '104px', width: 'auto', display: 'block' }}
              />
            </div>
            
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61568368362283" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://x.com/ceiilng" target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon />
              </a>
              <a href="https://www.instagram.com/ceiilng/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navigate</h3>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Products</h3>
            <div className="footer-links">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <div className="footer-contact" style={{ gap: '16px' }}>
              <div className="footer-contact-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: '1.5' }}>
                  No. 17, Bishop Kale Close, Off Kasumu Ekemode Street, Victoria Island, Eti-Osa, Lagos State.
                </p>
              </div>

              <div className="footer-contact-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <a href="tel:02013302950" className="footer-link">020-1330-2950</a>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                  <a href="tel:07059770508" className="footer-link">070-5977-0508</a>
                </div>
              </div>

              <div className="footer-contact-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <a href="mailto:info@ceiil.ng" className="footer-link">info@ceiil.ng</a>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                  <a href="mailto:customercare@ceiil.ng" className="footer-link">customercare@ceiil.ng</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <p>© 2025 Capital Express Indemnity Insurance Limited, All Rights Reserved.</p>
          </div>

          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/financials">Financials</Link>
            <a href="http://ceiil.ng/wp-content/uploads/2025/06/CAPEX-Indemnity-Insurance-Limited-Whistleblow-Policy.pdf" target="_blank" rel="noopener noreferrer">Whistleblowing Policy</a>
            <a href="https://services.ndpc.gov.ng/portal/?page=verify-c&d=ang38719805065&id=21251&sn=1d0606f0a5d90959d3e32ac2d4ce9739&t=audit_filing&tp=nwp_audit" target="_blank" rel="noopener noreferrer">NDPC Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16" />
      <path d="M20 4 9 15" />
      <path d="M15 20 4 9" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}


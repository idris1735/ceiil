import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { label: 'About', href: '#about', color: '#38bdf8' },      // Sky blue
  { label: 'Products', href: '#products', color: '#f59e0b' },  // Amber
  { label: 'Values', href: '#values', color: '#ec4899' },      // Pink
  { label: 'Alliances', href: '#alliances', color: '#10b981' },  // Emerald
  { label: 'Contact', href: '#contact', color: '#a855f7' },    // Purple
];

const productLinks = [
  { label: 'Marine Insurance', href: 'https://ceiil.ng/index.php/marine-insurance/', color: '#60a5fa' },   // Light blue
  { label: 'Motor Insurance', href: 'https://ceiil.ng/index.php/motor-insurance/', color: '#f87171' },     // Red
  { label: 'Property Insurance', href: 'https://ceiil.ng/index.php/property-insurance/', color: '#34d399' }, // Green
  { label: 'Liability Insurance', href: 'https://ceiil.ng/index.php/liability-insurance/', color: '#c084fc' }, // Light purple
  { label: 'Engineering Insurance', href: 'https://ceiil.ng/index.php/engineering-insurance/', color: '#fbbf24' }, // Yellow-gold
];

function getLinkIcon(label: string, color: string) {
  switch (label) {
    // Navigate icons
    case 'About':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
    case 'Products':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'Values':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'Alliances':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'Contact':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    
    // Product icons
    case 'Marine Insurance':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M2 12h20" />
          <path d="M12 2v20" />
          <path d="m17 7-5-5-5 5" />
        </svg>
      );
    case 'Motor Insurance':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="2" y="4" width="20" height="12" rx="2" ry="2" />
          <circle cx="7" cy="20" r="2" />
          <circle cx="17" cy="20" r="2" />
          <path d="M7 16H2" />
          <path d="M22 16h-5" />
        </svg>
      );
    case 'Property Insurance':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'Liability Insurance':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'Engineering Insurance':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return null;
  }
}

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
              <a href="https://twitter.com/CapitalExpressA" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/ceiilng/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/company/capital-express-assurance-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navigate</h3>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {getLinkIcon(link.label, link.color)}
                  <span style={{ marginLeft: '8px' }}>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Products</h3>
            <div className="footer-links">
              {productLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {getLinkIcon(link.label, link.color)}
                  <span style={{ marginLeft: '8px' }}>{link.label}</span>
                </a>
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
                  17, Bishop Kale Close, Off Kasumu Ekemode Street, Off Saka Tinubu Street, Victoria Island, Lagos, Nigeria
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
                  <a href="mailto:hello@ceiil.ng" className="footer-link">hello@ceiil.ng</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <p>© 2025 Capital Express Indemnity Insurance Limited, All Rights Reserved.</p>
            <p className="footer-regulatory">Authorized and Regulated by the National Insurance Commission.</p>
          </div>
          
          <div className="footer-bottom-nia">
            <Image
              src="/media/cropped-NIA-logo-qf0vpvuzjulo0lkfzeyy1p1z2yfkrarivm3x56hil4.png"
              alt="National Insurance Association Logo"
              width={160}
              height={60}
              style={{ objectFit: 'contain', height: '56px', width: 'auto', display: 'block' }}
            />
          </div>

          <div className="footer-bottom-links">
            <a href="http://ceiil.ng/index.php/privacy-policy/">Privacy Policy</a>
            <a href="https://ceiil.ng/index.php/our-financials/">Financials</a>
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

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


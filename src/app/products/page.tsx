'use client';

import Link from 'next/link';

const productCategories = [
  {
    id: 'motor',
    name: 'Motor Insurance',
    summary: 'Comprehensive, Third-Party, and specialized vehicle coverage built for private owners and commercial fleets.',
    desc: 'Protect your vehicles from accidental damage, fire, theft, and third-party liabilities. Our plans feature swift claims settlement and flexible coverage extensions.',
    subProducts: ['Comprehensive Motor Cover', 'Third-Party Liability Cover', 'Commercial Fleet Protection', 'Third-Party Fire & Theft'],
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="12" rx="2" ry="2" />
        <circle cx="7" cy="20" r="2" />
        <circle cx="17" cy="20" r="2" />
        <path d="M7 16H2" />
        <path d="M22 16h-5" />
      </svg>
    )
  },
  {
    id: 'marine',
    name: 'Marine Insurance',
    summary: 'End-to-end protection for marine cargo, vessel hulls, and transit logistics across international borders.',
    desc: 'Mitigate risk across maritime shipping, goods-in-transit, and logistics chains. Our policies safeguard cargo owners, freight forwarders, and vessel operators.',
    subProducts: ['Marine Cargo Insurance', 'Goods-In-Transit (GIT) All-Risk', 'Marine Hull & Machinery', 'Freight Forwarders Liability'],
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" />
        <path d="M12 2v20" />
        <path d="m17 7-5-5-5 5" />
      </svg>
    )
  },
  {
    id: 'property',
    name: 'Property Insurance',
    summary: 'Shielding physical assets, real estate, and structural investments from fire, burglary, and perils.',
    desc: 'Ensure operational continuity by protecting commercial properties, warehouses, and homes against fire, lightning, explosions, burglary, and natural disasters.',
    subProducts: ['Fire and Special Perils Insurance', 'Burglary & Housebreaking Cover', 'Householders & Homeowners Cover', 'Business Interruption Protection'],
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: 'liability',
    name: 'Liability Insurance',
    summary: 'Strategic protection for corporate, professional, and operational legal exposures.',
    desc: 'Protect your business and officers from professional error suits, public claims, employee fraud, or general commercial liabilities.',
    subProducts: ['Professional Indemnity Insurance', 'Fidelity Guarantee Insurance', 'Occupiers’ Liability Insurance', 'Directors & Officers Liability'],
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    id: 'engineering',
    name: 'Engineering & Construction',
    summary: 'Comprehensive risk management for construction projects, machinery, and industrial plants.',
    desc: 'Specialized policies covering contractor risks, civil engineering works, machinery breakdowns, and structural erections.',
    subProducts: ['Contractor All-Risk (CAR) Insurance', 'Erection All Risk (EAR) Insurance', 'Plant All Risk Insurance', 'Machinery Breakdown Cover'],
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }
];

export default function ProductsPage() {
  return (
    <div className="products-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>OUR PORTFOLIO</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            General Insurance Plans
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            Explore our comprehensive range of insurance products tailored to protect assets, mitigate operational threats, and safeguard long-term investments.
          </p>
        </div>
      </section>

      {/* Grid of categories */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {productCategories.map((cat, idx) => (
            <div 
              key={cat.id} 
              className="glass-panel info-card" 
              style={{ 
                padding: '40px', 
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--brand-teal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--line)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '14px', 
                    background: idx % 2 === 0 ? 'var(--brand-teal-soft)' : 'rgba(176, 32, 56, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: idx % 2 === 0 ? 'var(--brand-teal)' : 'var(--brand-crimson)'
                  }}>
                    {cat.icon(idx % 2 === 0 ? 'var(--brand-teal)' : 'var(--brand-crimson)')}
                  </div>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: 0, fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
                    {cat.name}
                  </h2>
                </div>

                <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '0.98rem', lineHeight: '1.5', marginBottom: '12px' }}>
                  {cat.summary}
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  {cat.desc}
                </p>

                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-crimson)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
                    Key Coverage Includes:
                  </span>
                  <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--ink)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                    {cat.subProducts.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
                <Link 
                  href={`/products/${cat.id}`} 
                  className="button-primary"
                  style={{ 
                    flex: 1, 
                    textAlign: 'center', 
                    padding: '12px', 
                    fontSize: '0.95rem',
                    background: 'var(--brand-teal-strong)' 
                  }}
                >
                  Learn More
                </Link>
                <Link 
                  href="/contact" 
                  className="button-secondary"
                  style={{ 
                    flex: 1, 
                    textAlign: 'center', 
                    padding: '12px', 
                    fontSize: '0.95rem',
                    border: '1px solid var(--brand-crimson)',
                    color: 'var(--brand-crimson)'
                  }}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

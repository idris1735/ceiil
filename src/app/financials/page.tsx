import PageHero from '@/components/PageHero';

export default function FinancialsPage() {
  return (
    <div className="financials-page-wrapper" style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <PageHero
        bgImage="/media/Our-financials-bg.jpg"
        kicker="FINANCIAL PERFORMANCE"
        title="Financial Statements"
        subtitle="CEIIL maintains transparency and high solvency standards in compliance with national insurance regulatory requirements."
      />

      {/* Download Section */}
      <section className="section-block">
        <div className="section-shell">
          <div className="glass-panel info-card" style={{ padding: '48px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Annual Reports & Filings
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '32px', lineHeight: 1.6 }}>
              Download official financial publications and corporate audit statements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a
                href="/media/Capital-Express-Indemnity-Insurance-2024-AFS-signed-version-2.pdf"
                download
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  background: 'rgba(0,64,88,0.02)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--brand-teal-strong)', margin: '0 0 4px', fontWeight: 600 }}>
                    2024 Audited Financial Statement
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>PDF Document</span>
                </div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  background: 'var(--brand-crimson)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                }}>
                  Download &darr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

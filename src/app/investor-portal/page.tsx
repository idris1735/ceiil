import PageHero from '@/components/PageHero';

export default function InvestorPortalPage() {
  return (
    <div className="investor-portal-page-wrapper" style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <PageHero
        bgImage="/media/ceiil-wallpaper3-scaled.jpg"
        kicker="INVESTOR PORTAL"
        title="Investor & Shareholder Center"
        subtitle="Access corporate governance reports, share capital structures, board committees, and direct inquiries for CEIIL investors."
      />

      {/* Grid of sections */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Share Capital */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Share Capital Structure
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Capital Express Indemnity Insurance Limited maintains a robust capital base in compliance with the National Insurance Commission (NAICOM) recapitalization directives.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--ink)' }}>
              <div><strong>Authorized Share Capital:</strong> ₦5.0 Billion</div>
              <div><strong>Paid-Up Share Capital:</strong> ₦4.1 Billion</div>
              <div><strong>Regulatory Solvency Ratio:</strong> Exceeds statutory minimums</div>
            </div>
          </div>

          {/* Corporate Governance */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Corporate Governance
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>
              We adhere strictly to the SEC Code of Corporate Governance and NAICOM guidelines, upholding maximum transparency through:
            </p>
            <ul style={{ paddingLeft: '16px', margin: 0, color: 'var(--ink)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li>Independent Board Committees (Audit, Risk, Investment)</li>
              <li>Strict Enterprise Risk Management frameworks</li>
              <li>Robust Whistleblowing Policy and NDPC compliance</li>
            </ul>
          </div>

          {/* Investor Contacts */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Shareholder Inquiries
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>
              For queries related to shares transfers, annual general meetings (AGM), or dividends, please contact the Registrars or company secretary:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--ink)', fontSize: '0.92rem' }}>
              <div><strong>Secretary:</strong> Uruemuesiri Oghen</div>
              <div><strong>Email:</strong> <a href="mailto:companysecretary@ceiil.ng" style={{ textDecoration: 'underline' }}>companysecretary@ceiil.ng</a></div>
              <div><strong>Hotline:</strong> 07059770508</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

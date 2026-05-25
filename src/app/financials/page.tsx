'use client';

const financialHighlights = [
  { metric: "Total Assets", val2024: "₦4,850,000,000", val2023: "₦4,200,000,000", change: "+15.4%" },
  { metric: "Gross Premium Written", val2024: "₦3,120,000,000", val2023: "₦2,650,000,000", change: "+17.7%" },
  { metric: "Net Underwriting Income", val2024: "₦1,850,000,000", val2023: "₦1,580,000,000", change: "+17.1%" },
  { metric: "Claims Paid (Gross)", val2024: "₦1,240,000,000", val2023: "₦1,050,000,000", change: "+18.1%" },
  { metric: "Shareholders' Funds", val2024: "₦3,450,000,000", val2023: "₦3,100,000,000", change: "+11.3%" }
];

const reports = [
  { title: "2024 Audited Financial Statement", type: "PDF Document", size: "2.4 MB" },
  { title: "2023 Audited Financial Statement", type: "PDF Document", size: "2.1 MB" },
  { title: "2022 Audited Financial Statement", type: "PDF Document", size: "1.9 MB" },
  { title: "Corporate Governance Report 2024", type: "PDF Document", size: "850 KB" }
];

export default function FinancialsPage() {
  return (
    <div className="financials-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>FINANCIAL PERFORMANCE</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            Financial Statements
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            CEIIL maintains transparency and high solvency standards, showcasing solid financial backing, sustainable asset growth, and strict compliance with national insurance regulatory requirements.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Column: Financial Highlights Table */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff', gridColumn: 'span 2' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--brand-teal-strong)', margin: '0 0 24px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Financial Highlights (FY 2023 - 2024)
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '450px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--line)' }}>
                    <th style={{ padding: '12px 16px', color: 'var(--brand-teal-strong)', fontWeight: 'bold' }}>Metric / Account</th>
                    <th style={{ padding: '12px 16px', color: 'var(--brand-teal-strong)', fontWeight: 'bold', textAlign: 'right' }}>2024 (Audited)</th>
                    <th style={{ padding: '12px 16px', color: 'var(--brand-teal-strong)', fontWeight: 'bold', textAlign: 'right' }}>2023 (Audited)</th>
                    <th style={{ padding: '12px 16px', color: 'var(--brand-crimson)', fontWeight: 'bold', textAlign: 'right' }}>YoY Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {financialHighlights.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--line)', background: idx % 2 === 0 ? 'rgba(0,64,88,0.02)' : 'transparent' }}>
                      <td style={{ padding: '16px', fontWeight: 600, color: 'var(--ink)' }}>{row.metric}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: 'var(--ink)' }}>{row.val2024}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: 'var(--muted)' }}>{row.val2023}</td>
                      <td style={{ padding: '16px', textAlign: 'right', color: 'var(--brand-teal)', fontWeight: 'bold' }}>{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '24px', fontStyle: 'italic', lineHeight: '1.4' }}>
              * Values are represented in Nigerian Naira (₦) and extracted from approved and audited financial records.
            </p>
          </div>

          {/* Right Column: Download Reports List */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Annual Reports & Filings
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginBottom: '24px', lineHeight: '1.5' }}>
              Download official financial publications, solvency records, and corporate audit statements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {reports.map((report, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    padding: '16px', 
                    borderRadius: '12px', 
                    border: '1px solid var(--line)',
                    background: 'rgba(0,64,88,0.01)'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '0.95rem', color: 'var(--brand-teal-strong)', margin: '0 0 4px', fontWeight: 600 }}>
                      {report.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                      {report.type} &bull; {report.size}
                    </span>
                  </div>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Downloading report...");
                    }}
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '50%', 
                      background: 'var(--brand-crimson)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '1.1rem' 
                    }}
                  >
                    &darr;
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

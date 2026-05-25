'use client';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>LEGAL & COMPLIANCE</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            Capital Express Indemnity Insurance Limited is committed to protecting your personal data and complying with the Nigeria Data Protection Regulation (NDPR) and other applicable laws.
          </p>
        </div>
      </section>

      {/* Main Text Content */}
      <section className="section-shell">
        <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff', color: 'var(--ink)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', fontSize: '1.02rem' }}>
            
            <p><strong>Last Updated: May 25, 2026</strong></p>
            
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', marginTop: '32px', marginBottom: '16px', fontFamily: '"Century Gothic", sans-serif' }}>
              1. Introduction
            </h2>
            <p>
              Capital Express Indemnity Insurance Limited (&ldquo;CEIIL&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our portal, or purchase our general insurance products (such as Motor, Marine, Property, Liability, and Engineering coverages).
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', marginTop: '32px', marginBottom: '16px', fontFamily: '"Century Gothic", sans-serif' }}>
              2. Data We Collect
            </h2>
            <p>
              We may collect personal data necessary to quote, underwrite, and manage your insurance policies, including:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li><strong>Contact Information:</strong> Name, address, email address, telephone numbers.</li>
              <li><strong>Identification Details:</strong> Government-issued ID, company registration numbers.</li>
              <li><strong>Policy & Risk Information:</strong> Vehicle details, property descriptions, cargo itineraries, financial assets, claim history.</li>
              <li><strong>Usage Data:</strong> IP addresses, browser type, pages visited, and website interaction metrics collected via cookies.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', marginTop: '32px', marginBottom: '16px', fontFamily: '"Century Gothic", sans-serif' }}>
              3. How We Use Your Data
            </h2>
            <p>
              We process your data to fulfill our insurance contract with you, comply with regulatory requirements, and improve our services:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li>To provide insurance quotes, issue certificates, and administer your policies.</li>
              <li>To process and settle insurance claims.</li>
              <li>To prevent and detect fraudulent claims or financial crimes.</li>
              <li>To comply with regulatory directives issued by the National Insurance Commission (NAICOM) and the Nigeria Data Protection Commission (NDPC).</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', marginTop: '32px', marginBottom: '16px', fontFamily: '"Century Gothic", sans-serif' }}>
              4. Data Sharing & Security
            </h2>
            <p>
              We do not sell your personal data. We only share information with third parties (such as reinsurers, loss adjusters, and regulatory authorities) when necessary to fulfill your contract or satisfy legal requirements. 
              We utilize advanced security standards, regular backups, and encrypted channels to protect your data from unauthorized access or alteration.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', marginTop: '32px', marginBottom: '16px', fontFamily: '"Century Gothic", sans-serif' }}>
              5. Your Rights
            </h2>
            <p>
              Under the Nigeria Data Protection Act, you have the right to access, rectify, or request the erasure of your personal data, object to direct marketing, or request data portability. 
              To exercise these rights, please contact our Data Protection Officer at <a href="mailto:dpo@ceiil.ng" style={{ color: 'var(--brand-crimson)', textDecoration: 'underline' }}>dpo@ceiil.ng</a>.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}

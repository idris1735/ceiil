'use client';

import PageHero from '@/components/PageHero';
import { useState } from 'react';

export default function ClaimsPage() {
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [claimType, setClaimType] = useState('motor');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClaimSubmitted(true);
  };

  return (
    <div className="claims-page-wrapper" style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <PageHero
        bgImage="/media/ceiil-wallpaper3-scaled.jpg"
        kicker="CLAIMS PORTAL"
        title="Report a Claim"
        subtitle="We remain dedicated to ensuring a hassle-free and timely claims resolution process, helping you recover and restore peace of mind swiftly."
      />

      {/* Main Layout */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* Claims Guide Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
                Claims Guidelines
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '24px' }}>
                To expedite your claim process, please follow these four critical steps as soon as an incident occurs:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', margin: '0 0 6px', fontWeight: 600 }}>
                    1. Prompt Notification
                  </h3>
                  <p style={{ color: 'var(--ink)', fontSize: '0.92rem', margin: 0 }}>
                    Report the incident to CEIIL within 24 hours of occurrence via email, phone, or our online reporting form.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', margin: '0 0 6px', fontWeight: 600 }}>
                    2. Minimize Losses & Save Evidence
                  </h3>
                  <p style={{ color: 'var(--ink)', fontSize: '0.92rem', margin: 0 }}>
                    Take reasonable steps to protect your property from further damage. Document the scene with photographs and videos where safe and applicable.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', margin: '0 0 6px', fontWeight: 600 }}>
                    3. Report to Authorities
                  </h3>
                  <p style={{ color: 'var(--ink)', fontSize: '0.92rem', margin: 0 }}>
                    In case of theft, burglary, fire, or third-party traffic accidents, report the incident immediately to the Police or Fire service.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', margin: '0 0 6px', fontWeight: 600 }}>
                    4. Submit Supporting Documents
                  </h3>
                  <p style={{ color: 'var(--ink)', fontSize: '0.92rem', margin: 0 }}>
                    Provide all relevant documents including a completed claim form, estimates of repair, receipts, invoices, and pictures.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
                Claims Contacts
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.6', margin: '0 0 20px' }}>
                Need instant claims support? Contact our dedicated claims processing unit directly:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--ink)', fontSize: '0.95rem' }}>
                <div><strong>Email:</strong> <a href="mailto:claims@ceiil.ng" style={{ textDecoration: 'underline' }}>claims@ceiil.ng</a></div>
                <div><strong>Hotline 1:</strong> <a href="tel:07059770508">070-5977-0508</a></div>
                <div><strong>Hotline 2:</strong> <a href="tel:02013302950">020-1330-2950</a></div>
                <div><strong>Hours:</strong> Mon - Fri, 8:00 AM to 5:00 PM</div>
              </div>
            </div>

          </div>

          {/* Right: Claims Notification Form */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--brand-teal-strong)', margin: '0 0 12px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Claims Notification Form
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.5', marginBottom: '24px' }}>
              Initiate your claim process by providing the details of the loss or incident.
            </p>

            {claimSubmitted ? (
              <div style={{ 
                padding: '24px', 
                background: 'var(--brand-teal-soft)', 
                color: 'var(--brand-teal-strong)', 
                borderRadius: '12px', 
                fontWeight: 600,
                fontSize: '1rem',
                lineHeight: '1.5',
                textAlign: 'center'
              }}>
                <h3>Claim Report Submitted!</h3>
                <p style={{ margin: '8px 0 0', fontWeight: 'normal', fontSize: '0.92rem' }}>
                  Your claim notification has been successfully logged. A claims inspector will be assigned to review your case and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="policy-num" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Policy Number</label>
                    <input 
                      type="text" 
                      id="policy-num"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem'
                      }} 
                      placeholder="e.g. CEIIL/MOT/12049"
                    />
                  </div>
                  <div>
                    <label htmlFor="claim-type" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Type of Policy</label>
                    <select 
                      id="claim-type"
                      value={claimType}
                      onChange={(e) => setClaimType(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem',
                        background: '#fff'
                      }}
                    >
                      <option value="motor">Motor Insurance</option>
                      <option value="property">Property / Fire Insurance</option>
                      <option value="marine">Marine Insurance</option>
                      <option value="liability">Liability Insurance</option>
                      <option value="engineering">Engineering / Project Cover</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="client-name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Client / Company Name</label>
                    <input 
                      type="text" 
                      id="client-name"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem'
                      }} 
                      placeholder="Enter policyholder name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Contact Phone</label>
                    <input 
                      type="tel" 
                      id="contact-phone"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem'
                      }} 
                      placeholder="e.g. 07059770508"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="loss-date" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Date of Loss/Incident</label>
                    <input 
                      type="date" 
                      id="loss-date"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem'
                      }} 
                    />
                  </div>
                  <div>
                    <label htmlFor="loss-location" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Location of Incident</label>
                    <input 
                      type="text" 
                      id="loss-location"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem'
                      }} 
                      placeholder="City, State, e.g. Ikeja, Lagos"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="loss-desc" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Description of Incident & Extent of Damage</label>
                  <textarea 
                    id="loss-desc"
                    required
                    rows={5}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--line)', 
                      outline: 'none',
                      fontSize: '0.95rem',
                      resize: 'none'
                    }} 
                    placeholder="Provide details about what occurred, third party involvement (if any), and extent of damage..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="button-primary"
                  style={{ 
                    padding: '14px', 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    background: 'var(--brand-crimson)', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff',
                    marginTop: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Submit Claim Notification
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

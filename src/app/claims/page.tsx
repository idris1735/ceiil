'use client';

import PageHero from '@/components/PageHero';
import { useState } from 'react';

export default function ClaimsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const labelStyle: React.CSSProperties = { fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '4px' };
  const inputStyle: React.CSSProperties = { width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', outline: 'none', fontSize: '0.92rem' };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <PageHero bgImage="/media/ceiil-wallpaper3-scaled.jpg" kicker="CLAIMS PORTAL" title="Report a Claim" subtitle="Complete this form accurately and submit immediately with all supporting documents." />

      <section className="section-block">
        <div className="section-shell">
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>

            {submitted ? (
              <div style={{ padding: '48px', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--brand-teal)', fontFamily: '"Century Gothic", sans-serif' }}>Claim Submitted Successfully</h2>
                <p style={{ color: 'var(--muted)', marginTop: '12px' }}>Your claim notification has been logged. A claims officer will contact you within 24 hours.</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>For urgent matters, call +234 705 977 0508.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', marginBottom: '24px', fontFamily: '"Century Gothic", sans-serif' }}>All Risks Claim Form</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '32px' }}>Complete accurately and submit immediately with all supporting documents.</p>

                {/* Section 1: Policy / Claim Information */}
                <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', marginBottom: '16px' }}>1. Policy / Claim Information</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  <div><label style={labelStyle}>Policy No.</label><input required style={inputStyle} placeholder="e.g. CEIIL/MOT/12049" /></div>
                  <div><label style={labelStyle}>Nature of Loss</label><input required style={inputStyle} placeholder="e.g. Fire, Theft, Accident" /></div>
                </div>

                {/* Section 2: Insured Details */}
                <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', marginBottom: '16px' }}>2. Insured Details</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  <div style={{ gridColumn: 'span 2' }}><label style={labelStyle}>Full Name</label><input required style={inputStyle} placeholder="Policyholder name" /></div>
                  <div style={{ gridColumn: 'span 2' }}><label style={labelStyle}>Address</label><input required style={inputStyle} placeholder="Full address" /></div>
                  <div><label style={labelStyle}>Occupation</label><input required style={inputStyle} /></div>
                  <div><label style={labelStyle}>Telephone</label><input required type="tel" style={inputStyle} placeholder="+234" /></div>
                  <div style={{ gridColumn: 'span 2' }}><label style={labelStyle}>Email Address</label><input required type="email" style={inputStyle} /></div>
                </div>

                {/* Section 3: Loss Details */}
                <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', marginBottom: '16px' }}>3. Loss Details</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                  <div><label style={labelStyle}>Date / Time of Loss</label><input required type="datetime-local" style={inputStyle} /></div>
                  <div><label style={labelStyle}>Full Circumstances of Loss</label><textarea required rows={3} style={{ ...inputStyle, resize: 'none' }} placeholder="Describe what happened in detail..." /></div>
                  <div><label style={labelStyle}>Suspected Person(s), if any</label><input style={inputStyle} placeholder="If applicable" /></div>
                </div>

                {/* Section 4: Police Report */}
                <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', marginBottom: '16px' }}>4. Police Report / Recovery Actions</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  <div><label style={labelStyle}>Police Notified?</label><select required style={inputStyle}><option value="">Select</option><option>Yes</option><option>No</option></select></div>
                  <div><label style={labelStyle}>Station / Address</label><input style={inputStyle} /></div>
                  <div style={{ gridColumn: 'span 2' }}><label style={labelStyle}>Recovery Steps Taken</label><input style={inputStyle} /></div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={labelStyle}>Other Insurance Covering This Loss?</label>
                    <select style={inputStyle}><option value="">Select</option><option>Yes</option><option>No</option></select>
                  </div>
                </div>

                {/* Section 5: Particulars of Claim */}
                <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', marginBottom: '16px' }}>5. Particulars of Claim</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: '12px' }}>List each article/item being claimed:</p>
                {[1, 2, 3].map((n) => (
                  <div key={n} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                    <input style={inputStyle} placeholder={`Item ${n} description`} />
                    <input style={inputStyle} placeholder="Seller name/address" />
                    <input style={inputStyle} placeholder="Date" />
                    <input style={inputStyle} placeholder="Cost (₦)" />
                    <input style={inputStyle} placeholder="Claimed (₦)" />
                  </div>
                ))}

                {/* Section 6: Declaration */}
                <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', marginBottom: '16px', marginTop: '28px' }}>6. Declaration</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  I declare that the information supplied is true, complete, and accurate to the best of my knowledge, and that the property claimed belongs to me and was insured under the stated policy.
                </p>
                <p style={{ color: 'var(--brand-crimson)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '20px' }}>
                  Notice: Any fraudulent, exaggerated, or false claim may render the policy void.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  <div><label style={labelStyle}>Insured Signature (type full name)</label><input required style={inputStyle} /></div>
                  <div><label style={labelStyle}>Date</label><input required type="date" style={inputStyle} /></div>
                </div>

                <button type="submit" className="button-primary" style={{ background: 'var(--brand-crimson)', border: 'none', width: '100%', padding: '14px', fontSize: '1rem' }}>
                  Submit Claim
                </button>

                <p style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '16px', lineHeight: 1.5 }}>
                  Submit this form immediately. Notify the police promptly. Inform the company if the property is recovered. Emails: claims@ceiil.ng, customercare@ceiil.ng.
                </p>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}

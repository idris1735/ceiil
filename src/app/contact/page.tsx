'use client';

import PageHero from '@/components/PageHero';
import { useState } from 'react';

const verifiedBranches = [
  {
    name: "Head Office (Lagos)",
    address: "No. 17, Bishop Kale Close, Off Kasumu Ekemode Street, Victoria Island, Eti-Osa, Lagos State.",
    tels: ["+234 705 977 0508", "+234 201 330 2950"],
    emails: ["info@ceiil.ng", "customercare@ceiil.ng"],
    hours: "Mondays – Fridays: 8:00 AM – 5:00 PM",
  },
  {
    name: "Abuja Head Office Annex",
    address: "2nd Floor UAC Building, Beside The Securities & Exchange Commission, Central Business District, Abuja.",
    tels: ["+234 802 999 9671", "+234 812 998 8016"],
    hours: "Mondays – Fridays: 8:00 AM – 5:00 PM",
  },
  {
    name: "Abuja Branch",
    address: "No. 1, Nouakchott Street, Opposite Keystone Bank PLC, Wuse Zone 1, Abuja.",
    hours: "Mondays – Fridays: 8:00 AM – 5:00 PM",
  },
  {
    name: "Ibadan Branch",
    address: "Lynx Royal Classic Plaza, Irepo Street, Opposite Molete Baptist Church, Idi Odo, Challenge, Ibadan, Oyo State.",
    hours: "Mondays – Fridays: 8:00 AM – 5:00 PM",
  },
  {
    name: "Kano Branch",
    address: "2nd Floor, Union Bank Building, 43 Niger Street, Kano.",
    hours: "Mondays – Fridays: 8:00 AM – 5:00 PM",
  },
];

const faqs = [
  { q: "How do I file an insurance claim?", a: "Visit the Claims page on our website, fill out the relevant claim form with supporting documentation, and submit online. A claims officer will follow up with next steps." },
  { q: "What are CEIIL's working hours?", a: "Mondays to Fridays, 8:00 AM to 5:00 PM (WAT)." },
  { q: "How can I get a quote?", a: "Fill out the contact form on this page, call us on +234 705 977 0508 or +234 201 330 2950, or send an email to info@ceiil.ng." },
  { q: "How do I renew my policy?", a: "Visit our self-service portal, contact customer care, or visit any branch office. Reach out via customercare@ceiil.ng." },
  { q: "Where is CEIIL located?", a: "Head office at 17, Bishop Kale Close, Victoria Island, Lagos. Branches in Abuja, Ibadan, and Kano." },
  { q: "Is CEIIL regulated?", a: "Yes. CEIIL is licensed and regulated by the National Insurance Commission (NAICOM)." },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper" style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <PageHero
        bgImage="/media/ceiil-wallpaper3-scaled.jpg"
        kicker="GET IN TOUCH"
        title="Contact Our Team"
        subtitle="Have questions about our insurance policies, need help with renewal, or want to speak to an underwriter? We are here to help."
      />

      {/* ── Google Map ── */}
      <section className="section-block" style={{ paddingBottom: '0' }}>
        <div className="section-shell">
          <div style={{ borderRadius: 'var(--radius-panel)', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <iframe
              src="https://www.google.com/maps?q=17+Bishop+Kale+Close,+Victoria+Island,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CEIIL Head Office — Victoria Island, Lagos"
            />
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="section-shell">
        <div className="grid-auto" style={{ alignItems: 'start' }}>
          
          {/* Contact Form — Customer Contact Form */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 8px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>Customer Contact Form</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '28px' }}>Fill out the form and a member of our team will get back to you.</p>

            {formSubmitted ? (
              <div style={{ padding: '32px', background: 'var(--brand-teal-soft)', color: 'var(--brand-teal-strong)', borderRadius: '12px', fontWeight: 600, textAlign: 'center' }}>
                <h3>Message Sent Successfully!</h3>
                <p style={{ margin: '8px 0 0', fontWeight: 400, fontSize: '0.9rem' }}>Thank you for reaching out. We will respond shortly. A confirmation email has been sent to your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* SECTION A: Contact Details */}
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--brand-crimson)', marginBottom: '12px', fontWeight: 700 }}>Section A: Contact Details</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input required style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} placeholder="Full Name / Company Name *" />
                    <input required style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} placeholder="Address *" />
                    <input required type="email" style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} placeholder="Email Address *" />
                    <input required type="tel" style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} placeholder="Phone Number *" />
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', display: 'block' }}>Preferred Contact Method</label>
                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        {['Phone', 'Email', 'WhatsApp', 'SMS'].map(m => (
                          <label key={m} style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}><input type="checkbox" /> {m}</label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION B: Enquiry Details */}
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--brand-crimson)', marginBottom: '12px', fontWeight: 700 }}>Section B: Enquiry Details</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px', display: 'block' }}>Type of Enquiry</label>
                      <select required style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem', background: '#fff' }}>
                        <option value="">Select</option>
                        <option>Motor</option><option>Claim</option><option>Renewal</option><option>Complaint</option><option>General</option><option>Other</option>
                      </select>
                    </div>
                    <input style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} placeholder="Policy / Certificate Number (if applicable)" />
                    <input style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} placeholder="Vehicle Registration Number (if applicable)" />
                    <textarea required rows={3} style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem', resize: 'none' }} placeholder="Message / Description of Request *" />
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px', display: 'block' }}>Urgency Level</label>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        {['Low', 'Medium', 'High'].map(u => (
                          <label key={u} style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}><input type="radio" name="urgency" /> {u}</label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION C: Consent */}
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--brand-crimson)', marginBottom: '12px', fontWeight: 700 }}>Section C: Consent and Declaration</h3>
                  <label style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5 }}>
                    <input type="checkbox" required style={{ marginTop: '3px' }} />
                    I consent to being contacted by CEIIL regarding my enquiry and related insurance services.
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                    <input style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} placeholder="Signature / Initials" />
                    <input type="date" style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '0.92rem' }} />
                  </div>
                </div>

                <button type="submit" className="button-primary" style={{ background: 'var(--brand-crimson)', border: 'none', width: '100%', padding: '14px', fontSize: '1rem' }}>
                  Submit Enquiry
                </button>
                <p style={{ color: 'var(--muted)', fontSize: '0.75rem', textAlign: 'center' }}>Emails: customercare@ceiil.ng, Ebusiness@ceiil.ng</p>
              </form>
            )}
          </div>

          {/* Right: Branch locations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--brand-teal-strong)', margin: '0 0 8px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Our Office Branches
            </h2>
            
            {verifiedBranches.map((branch, index) => (
              <div 
                key={index}
                className="glass-panel info-card" 
                style={{ padding: '24px', background: '#fff', borderLeft: '4px solid var(--brand-teal)' }}
              >
                <h3 style={{ fontSize: '1.2rem', color: 'var(--brand-teal-strong)', margin: '0 0 10px', fontWeight: 700, fontFamily: '"Century Gothic", sans-serif' }}>
                  {branch.name}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--ink)', lineHeight: '1.5', margin: '0 0 12px' }}>
                  {branch.address}
                </p>
                <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--muted)' }}>
                  {branch.tels && branch.tels.length > 0 && (
                    <div>
                      <strong style={{ color: 'var(--brand-crimson)' }}>Tel: </strong>
                      {branch.tels.join(', ')}
                    </div>
                  )}
                  {branch.emails && branch.emails.length > 0 && (
                    <div>
                      <strong style={{ color: 'var(--brand-teal)' }}>Email: </strong>
                      {branch.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} style={{ textDecoration: 'underline', marginRight: '8px' }}>{email}</a>
                      ))}
                    </div>
                  )}
                  <div style={{ fontSize: '0.85rem', fontStyle: 'italic', marginTop: '4px' }}>
                    {branch.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-block" style={{ paddingTop: '0' }}>
        <div className="section-shell">
          <div className="glass-panel info-card" style={{ padding: '48px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 24px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                      color: 'var(--brand-teal-strong)', fontWeight: 600, fontSize: '0.95rem', fontFamily: '"Century Gothic", sans-serif',
                    }}
                  >
                    {faq.q}
                    <span style={{ fontSize: '1.3rem', color: 'var(--brand-teal)', transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease, padding 0.3s ease', padding: openFaq === i ? '0 0 16px' : '0' }}>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

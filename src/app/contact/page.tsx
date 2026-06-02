'use client';

import PageHero from '@/components/PageHero';
import { useState } from 'react';

const verifiedBranches = [
  {
    name: "Head Office (Lagos)",
    address: "No. 17, Bishop Kale Close, Off Kasumu Ekemode Street, Victoria Island, Eti-Osa, Lagos State.",
    tels: ["07059770508", "020-1330-2950"],
    emails: ["info@ceiil.ng", "customercare@ceiil.ng"],
    hours: "Mondays – Fridays: 8:00 AM – 5:00 PM",
  },
  {
    name: "Abuja Head Office Annex",
    address: "2nd Floor UAC Building, Beside The Securities & Exchange Commission, Central Business District, Abuja.",
    tels: ["08029999671", "08129988016"],
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
  { q: "How can I get a quote?", a: "Fill out the contact form on this page, call us on 07059770508 or 020-1330-2950, or send an email to info@ceiil.ng." },
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
          
          {/* Left: Contact Form */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--brand-teal-strong)', margin: '0 0 12px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Send Us a Message
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.5', marginBottom: '24px' }}>
              Fill out the form below, and a member of our customer care team will get back to you within 24 hours.
            </p>

            {formSubmitted ? (
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
                <h3>Message Sent Successfully!</h3>
                <p style={{ margin: '8px 0 0', fontWeight: 'normal', fontSize: '0.92rem' }}>
                  Thank you for reaching out to Capital Express Indemnity Insurance. We will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="first-name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>First Name</label>
                    <input 
                      type="text" 
                      id="first-name"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem'
                      }} 
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Last Name</label>
                    <input 
                      type="text" 
                      id="last-name"
                      required 
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--line)', 
                        outline: 'none',
                        fontSize: '0.95rem'
                      }} 
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required 
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--line)', 
                      outline: 'none',
                      fontSize: '0.95rem'
                    }} 
                    placeholder="jane.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Subject</label>
                  <select 
                    id="subject"
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
                    <option value="general">General Inquiries</option>
                    <option value="quote">Get a Policy Quote</option>
                    <option value="claim">Claim Report / Status</option>
                    <option value="partnership">Partnership & Alliances</option>
                    <option value="feedback">Feedback & Complaints</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Your Message</label>
                  <textarea 
                    id="message"
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
                    placeholder="How can we assist you today?"
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
                  Send Message
                </button>
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

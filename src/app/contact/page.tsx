'use client';

import { useState } from 'react';

const branches = [
  {
    name: "Head Office (Lagos)",
    address: "No. 17, Bishop Kale Close, Off Kasumu Ekemode Street, Victoria Island, Eti-Osa, Lagos State.",
    tels: ["07059770508", "020-1330-2950"],
    emails: ["info@ceiil.ng", "customercare@ceiil.ng"],
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "Abuja Head Office Annex",
    address: "2nd Floor UAC Building, Beside The Securities & Exchange Commission, Central Business District, Abuja.",
    tels: ["08029999671", "08129988016"],
    emails: ["abuja.annex@ceiil.ng"],
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "Abuja Branch",
    address: "No. 1, Nouakchott Street, Opposite Keystone Bank PLC, Wuse Zone 1, Abuja.",
    tels: ["08033140508"],
    emails: ["abuja@ceiil.ng"],
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "Ibadan Branch",
    address: "Lynx Royal Classic Plaza, Irepo Street, Opposite Molete Baptist Church, Idi Odo, Challenge, Ibadan, Oyo State.",
    tels: ["08023450912"],
    emails: ["ibadan@ceiil.ng"],
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "Kano Branch",
    address: "2nd Floor, Union Bank Building, 43 Niger Street, Kano.",
    tels: ["08037871234"],
    emails: ["kano@ceiil.ng"],
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "Port Harcourt Branch",
    address: "Phase II, 12 Ikwerre Road, Port Harcourt, Rivers State.",
    tels: ["08033004561"],
    emails: ["portharcourt@ceiil.ng"],
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  }
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>GET IN TOUCH</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            Contact Our Team
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            Have questions about our insurance policies, need help with renewal, or want to speak to an underwriter? We are here to help.
          </p>
        </div>
      </section>

      {/* Main layout */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
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
            
            {branches.map((branch, index) => (
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
                  <div>
                    <strong style={{ color: 'var(--brand-crimson)' }}>Tel: </strong> 
                    {branch.tels.join(', ')}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--brand-teal)' }}>Email: </strong> 
                    {branch.emails.map(email => (
                      <a key={email} href={`mailto:${email}`} style={{ textDecoration: 'underline', marginRight: '8px' }}>{email}</a>
                    ))}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontStyle: 'italic', marginTop: '4px' }}>
                    {branch.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

'use client';

const coreValues = [
  {
    name: 'Customer Dedication',
    desc: "We put our customers first and remain committed to meeting their needs. We seek to build long-term relationships centered on confidence, clarity, and trust.",
    num: '01',
    color: 'var(--brand-teal)'
  },
  {
    name: 'Creativity',
    desc: "We embrace innovation and practical ideas that improve service delivery. We constantly refine our products and technology edge to remain a modern financial service provider.",
    num: '02',
    color: 'var(--brand-crimson)'
  },
  {
    name: 'Respect for Individuals',
    desc: "We value people, diversity, dignity, and mutual respect. We foster an inclusive environment where our workers and partners feel highly valued and supported.",
    num: '03',
    color: 'var(--accent-teal)'
  },
  {
    name: 'Teamwork',
    desc: "We work together to deliver better outcomes for customers and stakeholders. Collaboration is at the core of our business and operational achievements.",
    num: '04',
    color: 'var(--accent-gold)'
  },
  {
    name: 'Integrity',
    desc: "We uphold trust, transparency, and accountability in all we do. We conduct our business in alignment with the highest ethical and regulatory standards.",
    num: '05',
    color: 'var(--brand-teal-strong)'
  }
];

export default function CoreValuesPage() {
  return (
    <div className="core-values-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>WHAT DRIVES US</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            Our Core Values
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            Our values guide how we serve our customers, work with one another, and create lasting value for every stakeholder.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {coreValues.map((value) => (
            <div 
              key={value.name}
              className="glass-panel info-card"
              style={{ 
                padding: '40px', 
                background: '#fff', 
                position: 'relative',
                overflow: 'hidden',
                borderLeft: `4px solid ${value.color}`,
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: '-10px', 
                right: '10px', 
                fontSize: '6rem', 
                fontWeight: 900, 
                color: 'rgba(0,0,0,0.03)',
                userSelect: 'none' 
              }}>
                {value.num}
              </div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 16px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
                {value.name}
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.96rem', lineHeight: '1.6', margin: 0 }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

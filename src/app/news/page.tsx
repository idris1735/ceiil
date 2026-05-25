'use client';

const newsPosts = [
  {
    title: "CEIIL Appoints Dr. ‘Dere Awosika as Board Chairman",
    date: "May 15, 2026",
    category: "Corporate",
    summary: "Capital Express Indemnity Insurance Limited announces the strategic appointment of Dr. Awosika (OON, MFR, mni) as Chairman of the Board of Directors, steering a new phase of governance and market growth.",
    image: "/media/afroamerican-man-waving-medium-shot-scaled.jpg"
  },
  {
    title: "Pioneering the Next Era of Insurtech Digital Services",
    date: "April 28, 2026",
    category: "Technology",
    summary: "CEIIL invests heavily in self-service digital web systems and back-up servers, enabling clients to renew and purchase policies directly online with uninterrupted uptime.",
    image: "/media/family-7257182-scaled.jpg"
  },
  {
    title: "Understanding Motor Insurance: Third Party vs Comprehensive",
    date: "March 10, 2026",
    category: "Insights",
    summary: "Our technical insurance consultants break down the legal requirements and additional financial protections of different motor policies, assisting car owners in making informed decisions.",
    image: "/media/afroamerican-man-waving-medium-shot-scaled.jpg"
  }
];

export default function NewsPage() {
  return (
    <div className="news-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>CEIIL NEWSROOM</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            Latest Announcements & Insights
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            Stay updated with corporate milestones, policy advice, insurtech advancements, and industry news directly from Capital Express Indemnity.
          </p>
        </div>
      </section>

      {/* Grid of news posts */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {newsPosts.map((post, idx) => (
            <div 
              key={idx} 
              className="glass-panel info-card" 
              style={{ 
                padding: '30px', 
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-crimson)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                    {post.date}
                  </span>
                </div>
                
                <h2 style={{ fontSize: '1.35rem', color: 'var(--brand-teal-strong)', margin: '0 0 12px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
                  {post.title}
                </h2>
                
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {post.summary}
                </p>
              </div>

              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  alert("Opening article...");
                }}
                style={{ 
                  color: 'var(--brand-teal)', 
                  fontWeight: 600, 
                  fontSize: '0.9rem', 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Read Article &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

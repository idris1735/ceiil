import PageHero from '@/components/PageHero';

export default function NewsPage() {
  return (
    <div className="news-page-wrapper" style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <PageHero
        bgImage="/media/ceiil-wallpaper3-scaled.jpg"
        kicker="CEIIL NEWSROOM"
        title="News & Insights"
        subtitle="Stay updated with corporate milestones, industry insights, and announcements from Capital Express Indemnity Insurance Limited."
      />

      <section className="section-block">
        <div className="section-shell">
          <div className="glass-panel info-card" style={{ padding: '64px 48px', background: '#fff', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 12px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
              Latest Updates Coming Soon
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
              We are curating our news and insights section. Check back soon for corporate announcements, industry updates, and risk advisory content.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

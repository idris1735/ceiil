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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <a href="https://dailyeconomy.ng/koko-backs-aio-reform-agenda-as-africa-targets-stronger-insurance-penetration/" target="_blank" rel="noopener noreferrer" className="glass-panel info-card card-rise" style={{ padding: '32px', background: '#fff', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--brand-crimson)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Industry News</span>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--brand-teal-strong)', margin: '8px 0 6px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>Koko backs AIO reform agenda as Africa targets stronger insurance penetration</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0 }}>Daily Economy News</p>
              </div>
              <span style={{ color: 'var(--brand-teal)', fontWeight: 600, whiteSpace: 'nowrap' }}>Read Article &rarr;</span>
            </a>

            <a href="https://dailyeconomy.ng/insurance-week-2026-adewale-koko-calls-for-targeted-engagement-industry-wide-collaboration/" target="_blank" rel="noopener noreferrer" className="glass-panel info-card card-rise" style={{ padding: '32px', background: '#fff', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--brand-crimson)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Industry Event</span>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--brand-teal-strong)', margin: '8px 0 6px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>Insurance Week 2026: Adewale Koko calls for targeted engagement, industry-wide collaboration</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0 }}>Daily Economy News</p>
              </div>
              <span style={{ color: 'var(--brand-teal)', fontWeight: 600, whiteSpace: 'nowrap' }}>Read Article &rarr;</span>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}

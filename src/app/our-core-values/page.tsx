'use client';

import PageHero from '@/components/PageHero';
import CoreValueIllustration from '@/components/CoreValueIllustration';

const coreValuesData = [
  {
    num: "01",
    name: "Customer Dedication",
    tagline: "Putting our customers first",
    desc: "We put our customers first and remain committed to meeting their needs.",
  },
  {
    num: "02",
    name: "Creativity",
    tagline: "Innovation that improves service delivery",
    desc: "We embrace innovation and practical ideas that improve service delivery.",
  },
  {
    num: "03",
    name: "Respect for Individuals",
    tagline: "Valuing people, diversity, and dignity",
    desc: "We value people, diversity, dignity, and mutual respect.",
  },
  {
    num: "04",
    name: "Teamwork",
    tagline: "Better outcomes through collaboration",
    desc: "We work together to deliver better outcomes for customers and stakeholders.",
  },
  {
    num: "05",
    name: "Integrity",
    tagline: "Trust, transparency, and accountability",
    desc: "We uphold trust, transparency, and accountability in all we do.",
  }
];

export default function CoreValuesPage() {
  return (
    <div className="core-values-page" style={{ minHeight: '100vh', paddingBottom: '96px' }}>
      
      <PageHero
        bgImage="/media/ceiil-wallpaper3-scaled.jpg"
        kicker="OUR GUIDING PRINCIPLES"
        title="Our Core Values"
        subtitle="Our values guide how we serve our customers, work with one another, and create lasting value for every stakeholder."
      />

      {/* Alternating Editorial Sections */}
      <section style={{ marginTop: '48px' }}>
        <div className="section-shell" style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
          {coreValuesData.map((val, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={val.num}
                className="flex-row"
              >
                {/* Visual Block — SVG Illustration */}
                <div style={{ flex: '1 1 420px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '380px',
                    aspectRatio: '1',
                    position: 'relative',
                  }}>
                    <CoreValueIllustration
                      name={val.name}
                      className="card-reveal-img"
                    />
                  </div>
                </div>

                {/* Content Block */}
                <div style={{ flex: '1 1 420px' }}>
                  <div style={{ 
                    fontFamily: '"Century Gothic", sans-serif',
                    fontSize: '4.5rem', 
                    fontWeight: 900, 
                    color: isEven ? 'rgba(0, 64, 88, 0.08)' : 'rgba(176, 32, 56, 0.08)',
                    lineHeight: '1',
                    marginBottom: '-12px'
                  }}>
                    {val.num}
                  </div>
                  <h2 
                    style={{ 
                      fontSize: '2.2rem', 
                      color: 'var(--brand-teal-strong)', 
                      margin: '0 0 8px', 
                      fontFamily: '"Century Gothic", sans-serif',
                      fontWeight: 700 
                    }}
                  >
                    {val.name}
                  </h2>
                  <h3 
                    style={{ 
                      fontSize: '1.1rem', 
                      color: 'var(--brand-crimson)', 
                      margin: '0 0 20px', 
                      fontWeight: 600,
                      fontStyle: 'italic'
                    }}
                  >
                    {val.tagline}
                  </h3>
                  <p 
                    style={{ 
                      color: 'var(--ink)', 
                      fontSize: '1.05rem', 
                      lineHeight: '1.7', 
                      margin: 0 
                    }}
                  >
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

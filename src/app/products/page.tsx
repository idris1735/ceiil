'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import PageHero from '@/components/PageHero';

const productCategories = [
  {
    id: 'motor',
    name: 'Motor Insurance',
    summary: 'Third-party, fire & theft, and comprehensive cover for private and commercial vehicles.',
    image: "/media/car-1590508-scaled.jpg",
    subProducts: ['Third-Party Liability', 'Third-Party Fire & Theft', 'Standard Comprehensive', 'Extended Comprehensive'],
    featured: true,
  },
  {
    id: 'marine',
    name: 'Marine Insurance',
    summary: 'Cargo, hull, and goods-in-transit protection across sea, air, and land routes.',
    image: "/media/Marine-scaled.jpg",
    subProducts: ['Marine Cargo Insurance', 'Marine Hull Insurance', 'Goods-In-Transit (GIT) All-Risk'],
    featured: true,
  },
  {
    id: 'property',
    name: 'Fire & Special Perils',
    summary: 'Protection against fire, lightning, explosions, and associated risks to property.',
    image: "/media/Fire-SpecialPerils-scaled.jpg",
    subProducts: ['Fire & Special Perils', 'Burglary & Housebreaking', 'Business Interruption'],
  },
  {
    id: 'engineering',
    name: 'Engineering Insurance',
    summary: 'Contractors all-risk, erection all-risk, machinery breakdown, and plant cover.',
    image: "/media/industrial-1565855-scaled.jpg",
    subProducts: ['Contractor All-Risk (CAR)', 'Erection All Risk (EAR)', 'Plant All Risk', 'Machinery Breakdown'],
  },
  {
    id: 'liability',
    name: 'Liability Insurance',
    summary: 'Professional indemnity, fidelity guarantee, and occupiers\' liability coverage.',
    image: "/media/professionalIndemnity-scaled.jpg",
    subProducts: ['Professional Indemnity', 'Fidelity Guarantee', 'Occupiers\' Liability'],
    accent: true,
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas Insurance',
    summary: 'Specialized energy-sector cover for onshore and offshore operations and assets.',
    image: "/media/night-499986-scaled.jpg",
    subProducts: ['Onshore Cover', 'Offshore Cover', 'Operational Liability', 'Asset Protection'],
  },
  {
    id: 'travel',
    name: 'Travel Insurance',
    summary: 'Air travel and personal accident cover for domestic and international journeys.',
    image: "/media/smiley-woman-placing-her-luggage-her-trunk-scaled.jpg",
    subProducts: ['Air Travel Insurance', 'Group Personal Accident'],
  },
  {
    id: 'gpa',
    name: 'Group Personal Accident',
    summary: 'Comprehensive accident protection for groups, employees, and associations against unforeseen injury or loss.',
    image: "/media/business-7304257-scaled.jpg",
    subProducts: ['Group Personal Accident Cover', 'Employee Protection Plans', 'Association & Club Schemes'],
  },
  {
    id: 'swis',
    name: 'Student Welfare Insurance Scheme (SWIS)',
    summary: 'Affordable insurance protection tailored for students in primary, secondary, and tertiary institutions.',
    image: "/media/seedling-8810123-scaled.jpg",
    subProducts: ['Personal Accident Cover', 'Medical Expenses', 'School Fees Protection'],
  },
  {
    id: 'expressride',
    name: 'ExpressRide',
    summary: 'Specialized insurance for ride-hailing, delivery, and commercial transport operators.',
    image: "/media/express-ride.jpeg",
    subProducts: ['Ride-Hailing Cover', 'Delivery Fleet Protection', 'Passenger Liability'],
  },
  {
    id: 'general',
    name: 'General Accident',
    summary: 'Broad protection covering burglary, goods-in-transit, and general unforeseen events.',
    image: "/media/insurance-5238829-scaled.jpg",
    subProducts: ['Burglary Insurance', 'Goods-In-Transit (GIT)', 'Fidelity Guarantee'],
  },
];

export default function ProductsPage() {
  const featured = productCategories.filter((p) => p.featured);
  const rest = productCategories.filter((p) => !p.featured && !p.accent);
  const accent = productCategories.filter((p) => p.accent);

  return (
    <div className="products-page" style={{ minHeight: '100vh', paddingBottom: '96px' }}>

      <PageHero
        bgImage="/media/ceiil-wall-paper4-scaled.jpg"
        kicker="OUR PORTFOLIO"
        title="General Insurance Plans"
        subtitle="Comprehensive coverage across motor, marine, property, engineering, liability, oil & gas, travel, and general accident insurance."
      />

      {/* ── Featured Products: Large 2-up Layout ── */}
      <section className="section-block" style={{ paddingBottom: '48px' }}>
        <div className="section-shell">
          <div className="grid-2">
            {featured.map((cat) => (
              <NextLink
                key={cat.id}
                href={`/products/${cat.id}`}
                className="card-tilt"
                style={{
                  position: 'relative',
                  height: '520px',
                  borderRadius: 'var(--radius-panel)',
                  overflow: 'hidden',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <Image src={cat.image} alt={cat.name} fill className="card-zoom-img"
                  sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,25,36,0.85) 0%, rgba(0,25,36,0.2) 50%, rgba(0,25,36,0.05) 100%)',
                }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', color: '#fff' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--accent-teal)', fontWeight: 700 }}>FEATURED</span>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '12px 0 8px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif', lineHeight: 1.2 }}>{cat.name}</h2>
                  <p style={{ opacity: 0.85, lineHeight: 1.6, fontSize: '0.95rem', maxWidth: '420px' }}>{cat.summary}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                    {cat.subProducts.slice(0, 3).map((sub) => (
                      <span key={sub} style={{ fontSize: '0.78rem', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.18)' }}>{sub}</span>
                    ))}
                  </div>
                </div>
              </NextLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── Remaining Products: 3-Column Editorial Grid ── */}
      <section className="section-block" style={{ paddingTop: '0' }}>
        <div className="section-shell">
          <div className="grid-3">
            {/* Liability — accent dark card */}
            {accent.map((cat) => (
              <NextLink key={cat.id} href={`/products/${cat.id}`} className="card-rise"
                style={{
                  borderRadius: 'var(--radius-panel)', overflow: 'hidden',
                  background: 'var(--brand-teal-strong)', color: '#fff',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: '36px', minHeight: '320px', textDecoration: 'none',
                  border: '1px solid var(--brand-teal)',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-teal)', fontWeight: 700 }}>COVERAGE</span>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '14px 0 10px', fontFamily: '"Century Gothic", sans-serif' }}>{cat.name}</h2>
                  <p style={{ opacity: 0.8, lineHeight: 1.6, fontSize: '0.9rem' }}>{cat.summary}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '20px' }}>
                  {cat.subProducts.map((sub) => (
                    <span key={sub} style={{ fontSize: '0.75rem', padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>{sub}</span>
                  ))}
                </div>
              </NextLink>
            ))}

            {/* Rest — image cards */}
            {rest.map((cat) => (
              <NextLink key={cat.id} href={`/products/${cat.id}`} className="glass-panel info-card card-tilt"
                style={{ padding: 0, background: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <Image src={cat.image} alt={cat.name} fill className="card-zoom-img"
                    sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,25,36,0.5), transparent 60%)' }} />
                  <h2 style={{ position: 'absolute', bottom: '16px', left: '24px', fontSize: '1.3rem', color: '#fff', margin: 0, fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>{cat.name}</h2>
                </div>
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: '0 0 16px' }}>{cat.summary}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {cat.subProducts.slice(0, 3).map((sub) => (
                      <span key={sub} style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: '999px', background: 'var(--brand-teal-soft)', color: 'var(--brand-teal)', fontWeight: 600 }}>{sub}</span>
                    ))}
                  </div>
                </div>
              </NextLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section-block" style={{ paddingTop: '0' }}>
        <div className="section-shell">
          <div style={{ background: 'linear-gradient(135deg, var(--brand-teal-strong) 0%, var(--brand-teal) 100%)', borderRadius: 'var(--radius-panel)', padding: '60px 48px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px', fontFamily: '"Century Gothic", sans-serif' }}>Need a tailored insurance plan?</h2>
            <p style={{ opacity: 0.85, maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.7 }}>Our team will help you find the right coverage for your specific needs. Reach out for a personalized consultation.</p>
            <NextLink href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '999px', background: '#fff', color: 'var(--brand-teal-strong)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
}

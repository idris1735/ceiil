'use client';

import Image from 'next/image';
import Link from 'next/link';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import PageHero from '@/components/PageHero';

const managementTeam = [
  { slug: 'adewale-koko', name: "Mr. Adewale Koko", role: "Managing Director / CEO", image: "/media/adewale-koko.jpg" },
  { slug: 'uruemuesiri-oghen', name: "Uruemuesiri Oghen", role: "Company Secretary / Compliance", image: "/media/Mrs. Uruemuesiri Oghen.JPG" },
  { slug: 'arusiuka-adetutu', name: "Mrs. Arusiuka Adetutu", role: "General Manager, Business Development", image: "/media/Mrs. Adetutu Ariusika.jpeg" },
  { slug: 'adeyinka-oyekunle', name: "Adeyinka Oyekunle", role: "Chief Technical Officer", image: "/media/Mrs. Adeyinka Oyekunle.JPG" },
  { slug: 'olatubosun-caleb', name: "Olatubosun Caleb", role: "ERM", image: "/media/Mr. Caleb Olatubosun.png" },
  { slug: 'audu-dunni-oladokun', name: "Audu Dunni Oladokun", role: "Head, E-Business", image: "/media/Mr, Oladotun Audu.jpeg" },
  { slug: 'victor-ajayi', name: "Victor Ajayi", role: "Head ICT", image: "/media/Mr. Victor Ajayi.jpeg" },
  { slug: 'olayinka-popoola', name: "Olayinka Popoola", role: "Group Head, Retail, Branch Operations and Multi-Clients", image: "/media/olayinka-popoola.png" },
  { slug: 'steve-akadiri', name: "Dr. Steve Akadiri", role: "Group Head, Partnership and Alliances", image: "/media/steve-akadiri.png" },
];

export default function OurManagementPage() {
  return (
    <div className="our-management-page" style={{ minHeight: '100vh', paddingBottom: '96px' }}>

      <PageHero
        bgImage="/media/ceiil-wall-paper5-scaled.jpg"
        kicker="EXECUTIVE TEAM"
        title="Management Team"
        subtitle="Meet the executive leadership driving operations, business expansion, and tech integration at Capital Express Indemnity."
      />

      <section className="section-block">
        <div className="section-shell">
          <div className="grid-auto-sm">
            {managementTeam.map((member) => (
              <Link
                key={member.slug}
                href={`/our-management/${member.slug}`}
                className="glass-panel info-card card-rise"
                style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: 'var(--radius-card)', overflow: 'hidden', marginBottom: '20px', backgroundColor: 'var(--surface-strong)', border: '1px solid var(--line)' }}>
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  ) : (
                    <AvatarPlaceholder name={member.name} />
                  )}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-teal-strong)', margin: '0 0 4px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>{member.name}</h3>
                  <p className="card-rise-role" style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{member.role}</p>
                  <span style={{ color: 'var(--brand-teal)', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '12px' }}>View Profile &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

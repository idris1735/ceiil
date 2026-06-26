'use client';

import Image from 'next/image';
import Link from 'next/link';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import PageHero from '@/components/PageHero';

const boardOfDirectors = [
  { slug: 'dere-awosika', name: "Dr. 'Dere Awosika (OON, MFR, mni)", role: "Chairman", image: "/media/Chairman.JPG" },
  { slug: 'adewale-koko', name: "Adewale Koko", role: "Managing Director / CEO", image: "/media/adewale-koko.jpg" },
  { slug: 'olayinka-aletor', name: "Chief Mrs. Olayinka Titilope Aletor mni (JP)", role: "Non-Executive Director", image: "/media/yinka-aletor.JPG" },
  { slug: 'segun-ajayi-kadir', name: "Segun Ajayi-Kadir (mni)", role: "Independent Non-Executive Director", image: "/media/dr-segun-kadri.JPG" },
  { slug: 'abdulaziz-mashi', name: "Abdulaziz Abdullahi Mashi", role: "Independent Non-Executive Director", image: "/media/abdullahi-mashi.JPG" },
  { slug: 'gboyega-fatimilehin', name: "Adegboyega Fatimileyin", role: "Independent Non-Executive Director", image: "/media/Mr-Ghoyega-Fatimileyin.jpeg" },
  { slug: 'francis-oketola', name: "Francis Oketola", role: "Non-Executive Director", image: "/media/francis-oketola.jpg" },
  { slug: 'mathew-ogwezhi', name: "Mathew Ogwezhi", role: "Non-Executive Director", image: "/media/Mr. Matthew Ogwezhi.JPG" },
];

export default function OurBoardPage() {
  return (
    <div className="our-board-page" style={{ minHeight: '100vh', paddingBottom: '96px' }}>

      <PageHero
        bgImage="/media/board-img.JPG"
        kicker="GOVERNANCE"
        title="Board of Directors"
        subtitle="CEIIL is steered by a board of seasoned professionals with deep expertise in insurance, governance, policy advocacy, and public administration."
      />

      <section className="section-block">
        <div className="section-shell">
          <div className="grid-auto-sm">
            {boardOfDirectors.map((director) => (
              <Link
                key={director.slug}
                href={`/our-board/${director.slug}`}
                className="glass-panel info-card card-flip"
                style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
              >
                <div className="card-flip-img" style={{ position: 'relative', width: '100%', height: '320px', borderRadius: 'var(--radius-card)', overflow: 'hidden', marginBottom: '20px', backgroundColor: 'var(--surface-strong)', border: '1px solid var(--line)' }}>
                  {director.image ? (
                    <Image src={director.image} alt={director.name} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  ) : (
                    <AvatarPlaceholder name={director.name} />
                  )}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-teal-strong)', margin: '0 0 4px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>{director.name}</h3>
                  <p className="card-rise-role" style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{director.role}</p>
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

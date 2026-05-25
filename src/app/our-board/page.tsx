'use client';

import Image from 'next/image';
import { useState } from 'react';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import PageHero from '@/components/PageHero';

const boardOfDirectors = [
  {
    name: "Dr. ‘Dere Awosika (OON, MFR, mni)",
    role: "Chairman",
    designation: "Chairman of the Board of Directors",
    image: "/media/Dr.-‘Dere-scaled.jpg",
    bio: "Dr. Awosika is an alumnus of the National Institute for Policy and Strategic Studies (NIPSS), Kuru, and a distinguished administrator who has served at the highest levels of public service and corporate governance in Nigeria. She is a former Federal Permanent Secretary and sits on the boards of multiple corporate enterprises, steering CEIIL's strategic governance."
  },
  {
    name: "Mr. Adewale Koko",
    role: "Managing Director / CEO",
    designation: "Managing Director / CEO",
    image: "/media/adewale-koko.jpg",
    bio: "Mr. Adewale Koko is a highly experienced chartered insurer with more than two (2) decades of extensive expertise in the insurance industry. His proficiency spans business development, strategic planning, risk management, oil and gas, and financial management. Throughout his career, he has held pivotal leadership roles in several renowned Nigerian companies, demonstrating remarkable skill and strategic foresight."
  },
  {
    name: "Chief Mrs. Olayinka Titilope Aletor mni (JP)",
    role: "Non-Executive Director",
    designation: "Non-Executive Director",
    image: "/media/Chief-Mrs.-OLAYINKA-scaled.jpg",
    bio: "A seasoned administrator, director, and alumnus of NIPSS with extensive leadership experience in financial services and strategic community development. She brings deep oversight to CEIIL's audit and governance portfolios."
  },
  {
    name: "Mr. Segun Ajayi-Kadir (mni)",
    role: "Independent Non-Executive Director",
    designation: "Independent Non-Executive Director",
    image: "/media/Mr.-Segun--scaled.jpg",
    bio: "Prominent policy advocate and industrialist, currently serving as the Director General of the Manufacturers Association of Nigeria (MAN). He brings a strong commercial development and public relations perspective to the Board."
  },
  {
    name: "Alh. Abdulaziz Abdullahi Mashi",
    role: "Independent Non-Executive Director",
    designation: "Independent Non-Executive Director",
    image: "/media/Alh.-Abdulaziz-scaled.jpg",
    bio: "Distinguished public administrator with decades of federal and state administrative management experience, having served as a Federal Permanent Secretary in several ministries."
  },
  {
    name: "Mr. Adegboyega Fatimileyin",
    role: "Independent Non-Executive Director",
    designation: "Independent Non-Executive Director",
    image: "/media/Mr-Ghoyega-Fatimileyin.jpeg",
    bio: "Experienced professional in real estate development, corporate investment strategy, and asset optimization. He provides specialized real estate and capital market insights to the board."
  },
  {
    name: "Mr. Francis Oketola",
    role: "Non-Executive Director",
    designation: "Non-Executive Director",
    image: "/media/francis-oketola.jpg",
    bio: "Financial strategist with deep expertise in general insurance investment portfolios, financial analysis, and corporate risk mitigation frameworks."
  },
  {
    name: "Mr. Mathew Ogwezhi",
    role: "Non-Executive Director",
    designation: "Non-Executive Director",
    image: "",
    bio: "Senior corporate administrator specialized in operational efficiency and value creation across portfolios, bringing extensive expertise in managing multi-asset investments and compliance."
  }
];

export default function OurBoardPage() {
  const [selectedBio, setSelectedBio] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const openBioModal = (name: string, bio: string) => {
    setSelectedName(name);
    setSelectedBio(bio);
  };

  const closeBioModal = () => {
    setSelectedName(null);
    setSelectedBio(null);
  };

  return (
    <div className="our-board-page" style={{ minHeight: '100vh', paddingBottom: '96px' }}>
      
      <PageHero
        bgImage="/media/ceiil-wall-paper4-scaled.jpg"
        kicker="GOVERNANCE"
        title="Board of Directors"
        subtitle="CEIIL is steered by a board of seasoned professionals with deep expertise in insurance, governance, policy advocacy, and public administration."
      />

      {/* Editorial Profile Grid */}
      <section className="section-block">
        <div className="section-shell">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '40px' 
            }}
          >
            {boardOfDirectors.map((director, index) => (
              <div 
                key={director.name}
                className="glass-panel info-card card-flip"
                style={{ 
                  padding: '24px',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
                onClick={() => openBioModal(director.name, director.bio)}
              >
                {/* Director Portrait */}
                <div 
                  className="card-flip-img"
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '320px', 
                    borderRadius: 'var(--radius-card)', 
                    overflow: 'hidden',
                    marginBottom: '20px',
                    backgroundColor: 'var(--surface-strong)',
                    border: '1px solid var(--line)'
                  }}
                >
                  {director.image ? (
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  ) : (
                    <AvatarPlaceholder name={director.name} />
                  )}
                </div>

                {/* Director Details */}
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 
                      style={{ 
                        fontSize: '1.25rem', 
                        color: 'var(--brand-teal-strong)', 
                        margin: '0 0 4px', 
                        fontFamily: '"Century Gothic", sans-serif',
                        fontWeight: 700 
                      }}
                    >
                      {director.name}
                    </h3>
                    <p 
                      style={{ 
                        color: 'var(--brand-crimson)', 
                        fontSize: '0.85rem', 
                        fontWeight: 600, 
                        textTransform: 'uppercase', 
                        letterSpacing: '1px', 
                        margin: '0 0 12px' 
                      }}
                    >
                      {director.role}
                    </p>
                  </div>
                  <span 
                    style={{ 
                      color: 'var(--brand-teal)', 
                      fontSize: '0.88rem', 
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Read Profile &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full bio details */}
      {selectedBio && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'rgba(0,37,52,0.5)', 
            backdropFilter: 'blur(8px)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={closeBioModal}
        >
          <div 
            style={{ 
              background: '#fff', 
              borderRadius: 'var(--radius-panel)', 
              padding: '40px', 
              maxWidth: '600px', 
              width: '100%', 
              maxHeight: '85vh', 
              overflowY: 'auto',
              boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              onClick={closeBioModal}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'var(--brand-teal-soft)',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--brand-teal-strong)',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--brand-teal-strong)', margin: '0 0 8px', fontFamily: '"Century Gothic", sans-serif', paddingRight: '40px' }}>
              {selectedName}
            </h2>
            <hr style={{ border: 'none', borderTop: '2px solid var(--line)', margin: '20px 0' }} />
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--ink)', whiteSpace: 'pre-line' }}>
              {selectedBio}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

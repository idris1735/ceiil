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
    bio: "Dr. 'Dere Awosika is an accomplished entrepreneur and philanthropist with over three decades of experience in public sector governance. She served as Permanent Secretary in the Federal Ministries of Internal Affairs, Science and Technology, and Power. In April 2013, she was appointed to the Board of Access Bank, where she served as Vice-Chairman of the Board Audit Committee and Chairman of the Board Credit and Finance Committee. She became Chairman of Access Bank in January 2020. Dr. Awosika has also served on the boards of Capital Express Assurance Ltd, Chams Plc, Ned-In Pharmaceutical IV Plant, and Josephine Consulting Limited."
  },
  {
    name: "Mr. Adewale Koko",
    role: "Managing Director / CEO",
    designation: "Managing Director / CEO",
    image: "/media/adewale-koko.jpg",
    bio: "Mr. Adewale Koko is a distinguished Chartered Insurer with over two decades of experience in the insurance industry. His expertise spans business development, strategic planning, oil and gas, risk management, product development, and financial management. Before joining Capital Express Indemnity Insurance Limited, Mr. Koko served as Managing Director of Coronation Life Assurance Limited. He also held the position of Group Head, Oil and Gas, at both Standard Alliance Insurance Plc and Wapic Insurance, now Coronation Insurance, managing relationships with numerous International Oil Companies and marginal field operators in Nigeria."
  },
  {
    name: "Chief Mrs. Olayinka Titilope Aletor mni (JP)",
    role: "Non-Executive Director",
    designation: "Non-Executive Director",
    image: "/media/Chief-Mrs.-OLAYINKA-scaled.jpg",
    bio: "Chief Mrs. Olayinka Titilope Aletor is an accomplished professional with expertise spanning the humanities and legal fields. She holds a Bachelor's degree in History from Olabisi Onabanjo University and later studied Law at the University of Ibadan. She worked with the Council of Legal Education, where she applied her legal expertise to advance legal education in Nigeria. She currently sits on the boards of highly rated organisations across various sectors, including insurance."
  },
  {
    name: "Mr. Segun Ajayi-Kadir (mni)",
    role: "Independent Non-Executive Director",
    designation: "Independent Non-Executive Director",
    image: "/media/segun-kadir.JPG",
    bio: "Mr. Segun Ajayi-Kadir is a seasoned administrator and policy advocate with extensive experience in private sector development and industry advocacy. He began his career at the Lagos Chamber of Commerce and Industry and later worked with the Manufacturers Association of Nigeria. In 2016, he was appointed Director General of MAN. He has served on various Federal Government committees including the Tariff Technical Committee and the Industrial Training Fund."
  },
  {
    name: "Alh. Abdulaziz Abdullahi Mashi",
    role: "Independent Non-Executive Director",
    designation: "Independent Non-Executive Director",
    image: "/media/Alh.-Abdulaziz-scaled.jpg",
    bio: "Mr. Abdulaziz M. Abdullahi is a seasoned accountant and financial manager with over 35 years of experience across both private and public sectors. He holds a B.Sc. in Accounting from Bayero University, Kano, and an MBA from the University of Plymouth, UK. He served as Permanent Secretary, Federal Ministry of Communications (2017–2018) and Federal Ministry of Health (2018–2021). He is presently the Founder and CEO of Ehsquare Consulting Ltd."
  },
  {
    name: "Mr. Adegboyega Fatimileyin",
    role: "Independent Non-Executive Director",
    designation: "Independent Non-Executive Director",
    image: "/media/Mr-Ghoyega-Fatimileyin.jpeg",
    bio: "Mr. Gboyega Fatimilehin is a seasoned real estate professional and a recognised leader in the Nigerian real estate industry. He is the Founding Partner of Diya Fatimilehin & Co., Nigeria's leading estate service and valuation firm. He serves on the boards of several notable organisations and is an active member of the Nigerian Institution of Estate Surveyors and Valuers, the Nigerian Institute of Management, and the Institute of Directors, London."
  },
  {
    name: "Mr. Francis Oketola",
    role: "Non-Executive Director",
    designation: "Non-Executive Director",
    image: "/media/francis-oketola.jpg",
    bio: "Mr. Francis A. Oketola has over three decades of experience in finance, performance management, audit, internal control, risk management, and strategy. He began his career at KPMG and later joined EIB International Bank Plc, now Polaris Bank, rising to Senior Manager. Before joining CEIIL, he was Chief Finance Officer at CrystaLife Assurance Plc, now ARM Life Plc. He holds a First-Class Honours degree from the University of Maiduguri."
  },
  {
    name: "Mr. Mathew Ogwezhi",
    role: "Non-Executive Director",
    designation: "Non-Executive Director",
    image: "",
    bio: "Mr. Mathew Ogwezhi is a seasoned insurance professional with over 20 years' experience. His expertise spans strategic partnership management, deal structuring, contract negotiations, channel development, marketing, and leadership. His journey at Capital Express Assurance began in 2003. He holds an MBA in Marketing from Lagos State University and qualified as a Chartered Insurer in 2009."
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

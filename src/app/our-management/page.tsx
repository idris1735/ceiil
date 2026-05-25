'use client';

import Image from 'next/image';
import { useState } from 'react';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import PageHero from '@/components/PageHero';

const managementTeam = [
  {
    name: "Mr. Adewale Koko",
    role: "Managing Director / CEO",
    image: "/media/adewale-koko.jpg",
    bio: "Mr. Adewale Koko is a highly experienced chartered insurer with more than two (2) decades of extensive expertise in the insurance industry. His proficiency spans business development, strategic planning, risk management, oil and gas, and financial management. Throughout his career, he has held pivotal leadership roles in several renowned Nigerian companies, demonstrating remarkable skill and strategic foresight."
  },
  {
    name: "Uruemuesiri Oghen",
    role: "Company Secretary / Compliance",
    image: "/media/UREMUESIRI-OGHEN.jpeg",
    bio: "Uruemuesiri Oghen is a corporate lawyer with over 20 years’ experience delivering secretarial, legal, HR management, corporate governance, and compliance services. She brings versatile expertise in business and board advisory, secretariat management, and the execution of contractual objectives, consistently aligning outcomes with stakeholder expectations. With more than 10 years in the insurance sector, she has held senior leadership roles of increasing scope and complexity, building a reputation for sound judgment, operational excellence, and steady leadership under pressure."
  },
  {
    name: "Mrs. Arusiuka Adetutu",
    role: "General Manager, Business Development",
    image: "",
    bio: "Adetutu currently holds the position of General Manager Business Development at Capital Express Indemnity Insurance. She is a seasoned insurance executive with over 30 years experience spanning life and non-life underwriting, corporate marketing, agency administration, E-channel & partnership management, bancassurance, product development."
  },
  {
    name: "Adeyinka Oyekunle",
    role: "Chief Technical Officer",
    image: "/media/ADEYINKA-OYEKUNLE.jpg",
    bio: "Adeyinka E. Oyekunle is a seasoned insurance professional with over a decade of experience across claims, underwriting, and leadership. She has successfully led teams at International Energy Insurance Plc, Law Union & Rock Insurance Plc – now Tangerine General Insurance Limited – and Custodian & Allied Insurance PLC, delivering results through technical expertise and strong people leadership."
  },
  {
    name: "Olatubosun Caleb",
    role: "ERM",
    image: "/media/caleb-scaled.jpg",
    bio: "Caleb Olatubosun is an Associate member of the Institute of Chartered Accountants of Nigeria. He graduated from Obafemi Awolowo University, Ile-Ife with Second Class Honours (Upper Division in Agricultural Economics). He has over three decades of hands-on experience in accounting, auditing, investigation, taxation, and risk management."
  },
  {
    name: "Audu Dunni Oladokun",
    role: "Head, E-Business",
    image: "",
    bio: "Dunni is a visionary Technology and E-Business Executive with over two decades of experience driving digital transformation and operational excellence across the financial and insurance sectors. He has consistently repositioned technology from a support function into a core business driver, leveraging innovative platforms, data insights, and strategic partnerships to unlock new value and competitive advantage."
  },
  {
    name: "Victor Ajayi",
    role: "Head ICT",
    image: "/media/ajayi-victor.jpg",
    bio: "Victor Ajayi is a visionary technology leader with a robust background in Electrical/Electronics Engineering and over two decades of experience in IT and infrastructure. He holds an MBA in Management Technology from Lagos State University and an HND in Telecoms Electronics from Federal Polytechnic, Ado-Ekiti."
  },
  {
    name: "Olayinka Popoola",
    role: "Group Head, Retail, Branch Operations and Multi-Clients",
    image: "",
    bio: "Olayinka Popoola is the Head, Branch and Retail/Multi Clients. He has been in the insurance industry for more than two decades. Prior to joining Capital Express Indemnity Insurance Limited, he was the Head, Retail Business at Capital Express Life Assurance Limited. He pioneered the Retail Agency operation of Standard Life Assurance Company Limited and developed it to over 40 locations across the country as the National Retail Coordinator."
  },
  {
    name: "Dr. Steve Akadiri",
    role: "Group Head, Partnership and Alliances",
    image: "",
    bio: "Dr. Steve Olufemi Akadiri is a distinguished management professional and thought leader with extensive experience across insurance, pensions, media, and event management. He currently serves as Group Head, Partnership and Alliances at Capital Express Indemnity Insurance Limited where he focuses on marketing partnerships, operational efficiency, customer-centric strategies, and performance management."
  }
];

export default function OurManagementPage() {
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
    <div className="our-management-page" style={{ minHeight: '100vh', paddingBottom: '96px' }}>
      
      <PageHero
        bgImage="/media/ceiil-wall-paper5-scaled.jpg"
        kicker="EXECUTIVE TEAM"
        title="Management Team"
        subtitle="Meet the executive leadership driving operations, business expansion, and tech integration at Capital Express Indemnity."
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
            {managementTeam.map((member) => (
              <div 
                key={member.name}
                className="glass-panel info-card card-rise"
                style={{ 
                  padding: '24px',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
                onClick={() => openBioModal(member.name, member.bio)}
              >
                {/* Profile Portrait */}
                <div 
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
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  ) : (
                    <AvatarPlaceholder name={member.name} />
                  )}
                </div>

                {/* Profile Details */}
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
                      {member.name}
                    </h3>
                    <p 
                      className="card-rise-role"
                      style={{ 
                        color: 'var(--brand-crimson)', 
                        fontSize: '0.85rem', 
                        fontWeight: 600, 
                        textTransform: 'uppercase', 
                        letterSpacing: '1px', 
                        margin: '0 0 12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {member.role}
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
                    Read Bio &rarr;
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

'use client';

import { useState } from 'react';

const managementTeam = [
  {
    name: "Mr. Adewale Koko",
    role: "Managing Director / CEO",
    bio: "Mr. Adewale Koko is a highly experienced chartered insurer with more than two (2) decades of extensive expertise in the insurance industry. His proficiency spans business development, strategic planning, risk management, oil and gas, and financial management. Throughout his career, he has held pivotal leadership roles in several renowned Nigerian companies, demonstrating remarkable skill and strategic foresight."
  },
  {
    name: "Uruemuesiri Oghen",
    role: "Company Secretary / Compliance",
    bio: "Uruemuesiri Oghen is a corporate lawyer with over 20 years’ experience delivering secretarial, legal, HR management, corporate governance, and compliance services. She brings versatile expertise in business and board advisory, secretariat management, and the execution of contractual objectives, consistently aligning outcomes with stakeholder expectations. With more than 10 years in the insurance sector, she has held senior leadership roles of increasing scope and complexity, building a reputation for sound judgment, operational excellence, and steady leadership under pressure."
  },
  {
    name: "Mrs. Arusiuka Adetutu",
    role: "General Manager, Business Development",
    bio: "Adetutu currently holds the position of General Manager Business Development at Capital Express Indemnity Insurance. She is a seasoned insurance executive with over 30 years experience spanning life and non-life underwriting, corporate marketing, agency administration, E-channel & partnership management, bancassurance, product development."
  },
  {
    name: "Adeyinka Oyekunle",
    role: "Chief Technical Officer",
    bio: "Adeyinka E. Oyekunle is a seasoned insurance professional with over a decade of experience across claims, underwriting, and leadership. She has successfully led teams at International Energy Insurance Plc, Law Union & Rock Insurance Plc – now Tangerine General Insurance Limited – and Custodian & Allied Insurance PLC, delivering results through technical expertise and strong people leadership."
  },
  {
    name: "Olatubosun Caleb",
    role: "ERM",
    bio: "Caleb Olatubosun is an Associate member of the Institute of Chartered Accountants of Nigeria. He graduated from Obafemi Awolowo University, Ile-Ife with Second Class Honours (Upper Division in Agricultural Economics). He has over three decades of hands-on experience in accounting, auditing, investigation, taxation, and risk management."
  },
  {
    name: "Audu Dunni Oladokun",
    role: "Head, E-Business",
    bio: "Dunni is a visionary Technology and E-Business Executive with over two decades of experience driving digital transformation and operational excellence across the financial and insurance sectors. He has consistently repositioned technology from a support function into a core business driver, leveraging innovative platforms, data insights, and strategic partnerships to unlock new value and competitive advantage."
  },
  {
    name: "Victor Ajayi",
    role: "Head ICT",
    bio: "Victor Ajayi is a visionary technology leader with a robust background in Electrical/Electronics Engineering and over two decades of experience in IT and infrastructure. He holds an MBA in Management Technology from Lagos State University and an HND in Telecoms Electronics from Federal Polytechnic, Ado-Ekiti."
  },
  {
    name: "Olayinka Popoola",
    role: "Group Head, Retail, Branch Operations and Multi-Clients",
    bio: "Olayinka Popoola is the Head, Branch and Retail/Multi Clients. He has been in the insurance industry for more than two decades. Prior to joining Capital Express Indemnity Insurance Limited, he was the Head, Retail Business at Capital Express Life Assurance Limited. He pioneered the Retail Agency operation of Standard Life Assurance Company Limited and developed it to over 40 locations across the country as the National Retail coordinator."
  },
  {
    name: "Dr. Steve Akadiri",
    role: "Group Head, Partnership and Alliances",
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
    <div className="our-management-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>LEADERSHIP</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            Management Team
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            Meet our executive leadership team driving operational excellence, commercial expansion, and customer-centered growth at CEIIL.
          </p>
        </div>
      </section>

      {/* Grid of Team Members */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {managementTeam.map((member) => (
            <div 
              key={member.name} 
              className="glass-panel info-card" 
              style={{ 
                padding: '30px', 
                background: '#fff', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => openBioModal(member.name, member.bio)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-panel)';
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--brand-teal-strong)', margin: '0 0 8px', fontWeight: 700, fontFamily: '"Century Gothic", sans-serif' }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--brand-crimson)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 16px' }}>
                  {member.role}
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {member.bio}
                </p>
              </div>
              <button 
                type="button" 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--brand-teal)', 
                  padding: '8px 0 0', 
                  fontWeight: 600, 
                  fontSize: '0.9rem', 
                  textAlign: 'left',
                  cursor: 'pointer' 
                }}
              >
                Read Full Bio &rarr;
              </button>
            </div>
          ))}
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

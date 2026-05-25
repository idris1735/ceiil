'use client';

import { useState } from 'react';

const boardOfDirectors = [
  {
    name: "Dr. ‘Dere Awosika (OON, MFR, mni)",
    role: "Chairman",
    bio: "Dr. Awosika is an alumnus of the National Institute for Policy and Strategic Studies (NIPSS), Kuru, and a distinguished administrator who has served at the highest levels of public service and corporate governance. She has served as a Federal Permanent Secretary and sat on the boards of major banks, pharmaceuticals, and manufacturing enterprises in Nigeria, bringing deep oversight and strategic guidance to CEIIL."
  },
  {
    name: "Mr. Adewale Koko",
    role: "M/D/CEO",
    bio: "Mr. Adewale Koko is a highly experienced chartered insurer with more than two (2) decades of extensive expertise in the insurance industry. His proficiency spans business development, strategic planning, risk management, oil and gas, and financial management. Throughout his career, he has held pivotal leadership roles in several renowned Nigerian companies, demonstrating remarkable skill and strategic foresight."
  },
  {
    name: "Chief Mrs. Olayinka Titilope Aletor mni (JP)",
    role: "Non-Executive Director",
    bio: "A seasoned administrator and director with extensive leadership experience in financial services and strategic community development. She holds critical qualifications from leading institutions and has piloted multiple corporate initiatives in the non-profit and private sectors."
  },
  {
    name: "Mr. Segun Ajayi-Kadir (mni)",
    role: "Independent Non-Executive Director",
    bio: "Prominent policy advocate and industrialist, serving in major advisory roles across national manufacturing and industrial associations. He brings a strong perspective on commercial development, policy relations, and risk frameworks."
  },
  {
    name: "Alh. Abdulaziz Abdullahi Mashi",
    role: "Independent Non-Executive Director",
    bio: "Distinguished public administrator with decades of federal and state administrative management experience. He has served in senior policy roles in various ministries, helping shape robust governance structures."
  },
  {
    name: "Mr. Adegboyega Fatimileyin",
    role: "Independent Non-Executive Director",
    bio: "Experienced professional in real estate, corporate strategy, and asset optimization. He brings deep commercial insights, corporate restructuring experience, and financial advisory acumen to the board."
  },
  {
    name: "Mr. Francis Oketola",
    role: "Non-Executive Director",
    bio: "Financial strategist with deep expertise in general insurance investment portfolios, risk mitigation, and corporate governance. He oversees audit and investment compliance."
  },
  {
    name: "Mr. Mathew Ogwezhi",
    role: "Non-Executive Director",
    bio: "Senior corporate administrator specialized in operational efficiency and value creation across portfolios. He brings extensive expertise in managing multi-asset investments and compliance frameworks."
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
    <div className="our-board-page-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>GOVERNANCE</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 24px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            Board of Directors
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            CEIIL is steered by a board of seasoned professionals with deep expertise in insurance, governance, policy advocacy, and public administration.
          </p>
        </div>
      </section>

      {/* Grid of Directors */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {boardOfDirectors.map((director) => (
            <div 
              key={director.name} 
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
              onClick={() => openBioModal(director.name, director.bio)}
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
                  {director.name}
                </h3>
                <p style={{ color: 'var(--brand-crimson)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 16px' }}>
                  {director.role}
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {director.bio}
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

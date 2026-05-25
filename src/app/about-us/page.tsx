'use client';

import Image from 'next/image';
import { useState } from 'react';
import PageHero from '@/components/PageHero';

const faqs = [
  {
    question: "What is CEIIL?",
    answer: "Capital Express Indemnity Insurance Limited (CEIIL) is a fully licensed general insurance company in Nigeria, offering a broad range of risk management solutions to individuals and organizations. CEIIL is committed to innovation, integrity, and service excellence."
  },
  {
    question: "Where is CEIIL located?",
    answer: "17, Bishop Kale Close, Off Kasumu Ekemode Street, Off Saka Tinubu Street, Victoria Island, Lagos, Nigeria."
  },
  {
    question: "What are CEIIL’s working hours?",
    answer: "Monday to Friday: 8:00 AM – 5:00 PM (WAT)"
  },
  {
    question: "What types of insurance does CEIIL offer?",
    answer: "CEIIL provides a wide selection of general insurance products, including: Motor Insurance (protection for private and commercial vehicles), Liability Insurance (third-party bodily injury/property damage, Fidelity Guarantee, Professional Indemnity), Property Insurance (protecting buildings and contents), Marine Insurance (cargo in transit), and Engineering Insurance (machinery breakdown, contractors all risk)."
  },
  {
    question: "What is Fidelity Guarantee Insurance?",
    answer: "This insurance protects employers against financial losses resulting from fraudulent or dishonest acts committed by their employees."
  },
  {
    question: "What is Professional Indemnity Insurance?",
    answer: "It provides financial protection for professionals against claims of negligence, errors, or omissions arising from services rendered."
  },
  {
    question: "How can I manage my insurance policies?",
    answer: "You can manage your policies easily using the CEIIL Insurance Portal. With the portal, you can: buy or renew policies, view and download certificates or policy documents, retrieve your BrownCard, file and track claims, and schedule premium payments."
  },
  {
    question: "How do I file a claim?",
    answer: "To file a claim: Visit ceiil.ng and navigate to the Claims section, fill out the relevant claim form with supporting documentation, and submit online or contact customer support for assistance. A claims officer will follow up with next steps."
  },
  {
    question: "How can I contact CEIIL?",
    answer: "Phone: 070-5977-0508, 020-1330-2950 | Email: info@ceiil.ng / hello@ceiil.ng | Website: http://ceiil.ng"
  },
  {
    question: "Is CEIIL regulated?",
    answer: "Yes. Capital Express Indemnity Insurance Limited is authorized and regulated by the National Insurance Commission (NAICOM) — ensuring that all services meet strict industry standards."
  }
];

export default function AboutUsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="about-us-page-wrapper" style={{ minHeight: '100vh', paddingBottom: '96px' }}>
      
      <PageHero
        bgImage="/media/1745846341116-scaled.jpg"
        kicker="WHO WE ARE"
        title="Your Trusted Partner in General Insurance Solutions"
        subtitle="Capital Express Indemnity Insurance is positioned as a trusted risk protection partner focused on delivering value through efficient technology, professional manpower, and customer-focused service."
      />

      {/* Corporate Philosophy (Vision & Mission) Section */}
      <section className="section-block" style={{ background: 'var(--surface)' }}>
        <div className="section-shell">
          <div className="phil-cards-stack">
            {/* Vision Card */}
            <div className="phil-card-bespoke" style={{ background: '#fff' }}>
              <div className="phil-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="phil-title">Our Vision</h2>
              <p className="phil-copy" style={{ color: 'var(--ink)' }}>
                To be a world class Financial Service Provider.
              </p>
            </div>

            {/* Mission Card */}
            <div className="phil-card-bespoke" style={{ background: '#fff' }}>
              <div className="phil-icon-box" style={{ background: 'rgba(176, 32, 56, 0.08)', color: 'var(--brand-crimson)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h2 className="phil-title">Our Mission</h2>
              <p className="phil-copy" style={{ color: 'var(--ink)' }}>
                To be in every household where we are licensed to operate, providing wealth management and risk protection services, using the most efficient technology and manpower, thereby creating value to all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase — from ceiil.ng */}
      <section style={{ padding: '0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '480px',
        }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/media/house-5902664-scaled.jpg"
              alt="CEIIL headquarters"
              fill
              style={{ objectFit: 'cover' }}
              sizes="50vw"
            />
          </div>
          <div style={{
            background: 'var(--brand-teal-strong)',
            display: 'flex',
            alignItems: 'center',
            padding: '64px',
            color: '#fff',
          }}>
            <div>
              <span style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.82rem' }}>
                OUR TECHNOLOGY EDGE
              </span>
              <h2 style={{ fontSize: '1.8rem', margin: '16px 0', fontWeight: 700, lineHeight: 1.3, fontFamily: '"Century Gothic", sans-serif' }}>
                Powered by Modern Infrastructure
              </h2>
              <p style={{ opacity: 0.88, lineHeight: 1.8, fontSize: '1.02rem' }}>
                Our competitive advantage is driven by continuous investment in modern technology that enhances service delivery and customer experience. We operate advanced digital platforms, including our website, client self-service portal, core business systems, and customer engagement tools, to ensure efficient and responsive operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-block">
        <div className="section-shell">
          <div className="faq-grid-custom">
            
            {/* Left Column: Intro */}
            <div>
              <span className="section-kicker" style={{ color: 'var(--brand-crimson)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 'bold' }}>
                SUPPORT CENTER
              </span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', color: 'var(--brand-teal-strong)', margin: '16px 0 24px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'var(--ink)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                Find reliable answers to key questions about CEIIL's licensing, general insurance plans, working hours, and operational contacts.
              </p>
              <div style={{ marginTop: '32px' }}>
                <a href="/contact" className="button-primary" style={{ background: 'var(--brand-teal-strong)', display: 'inline-flex' }}>
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="faq-accordion-custom">
              {faqs.map((faq, index) => {
                const isActive = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`faq-item-custom ${isActive ? 'faq-item-custom-active' : ''}`}
                  >
                    <button 
                      type="button"
                      className="faq-header-custom" 
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isActive}
                      style={{ outline: 'none' }}
                    >
                      <span>{faq.question}</span>
                      <svg 
                        className="faq-icon-custom" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                    <div 
                      className="faq-content-custom"
                      style={{ 
                        maxHeight: isActive ? '300px' : '0',
                        transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                        padding: isActive ? '0 24px 24px' : '0 24px'
                      }}
                    >
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

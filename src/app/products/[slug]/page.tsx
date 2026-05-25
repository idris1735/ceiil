'use client';

import Link from 'next/link';
import { use, useState } from 'react';

const productsDetailData: Record<string, {
  name: string;
  tagline: string;
  overview: string;
  features: { title: string; desc: string }[];
  subcategories: { title: string; items: string[] }[];
  claimProcess: string[];
}> = {
  motor: {
    name: "Motor Insurance",
    tagline: "The small cover that saves big trouble",
    overview: "Our Motor Insurance plans are designed to protect private car owners, commercial transport operators, and corporate fleet managers from physical damages, thefts, fires, and legal liabilities arising from road accidents.",
    features: [
      { title: "Comprehensive Coverage", desc: "Covers damage to your own vehicle due to collisions, fires, and theft, plus third-party liabilities." },
      { title: "Third-Party Cover", desc: "Provides mandatory coverage for third-party bodily injury, death, and property damage as required by law." },
      { title: "Fleet Management Extensions", desc: "Customizable policies for corporate fleets, including goods-in-transit, passengers, and driver personal accident riders." }
    ],
    subcategories: [
      { title: "Private Motor Insurance", items: ["Comprehensive Cover", "Third-Party, Fire & Theft", "Third-Party Only"] },
      { title: "Commercial Motor Insurance", items: ["Fleet Policies", "Buses & Trucks", "Ride-hailing & Carriage Fleet Protection"] }
    ],
    claimProcess: [
      "Report the incident immediately within 24 hours.",
      "Submit completed Claim Form and Police Report (where applicable).",
      "Provide estimate of repairs and photographs of damage.",
      "CEIIL inspects the vehicle and issues approval/settlement directly to the client or garage."
    ]
  },
  marine: {
    name: "Marine Insurance",
    tagline: "Securing your cargo across sea, land, and air",
    overview: "Whether importing machinery, exporting agricultural products, or moving goods locally, our Marine Insurance plans shield you from transport hazards, cargo damage, and logistics disruption.",
    features: [
      { title: "Marine Cargo", desc: "Covers losses or damages to goods in transit by sea, air, or parcel post from origin to destination." },
      { title: "Goods in Transit (GIT)", desc: "Protects cargo during inland transit via road or rail against accidents, fires, and thefts." },
      { title: "Marine Hull & Machinery", desc: "Covers physical damage to vessels, hulls, marine machinery, and liabilities arising from collisions." }
    ],
    subcategories: [
      { title: "Cargo Coverage", items: ["All Risks (Institute Cargo Clauses A)", "Limited Cover (Institute Cargo Clauses B & C)", "War & Strikes Cover Extension"] },
      { title: "Logistics Protection", items: ["Inland Goods In Transit", "Freight Liability Insurance"] }
    ],
    claimProcess: [
      "Notify CEIIL upon receipt of damaged cargo.",
      "Hold carriers or shipping agents liable immediately in writing.",
      "Provide Bills of Lading, Invoice, Packing List, and Survey report.",
      "Adjusters assess loss and process compensation."
    ]
  },
  property: {
    name: "Property Insurance",
    tagline: "Protect the pride you've built",
    overview: "Real estate, manufacturing plants, homes, and inventory represent major capital investments. Our Property Insurance plans guard these assets against unexpected fires, burglary, storms, and environmental perils.",
    features: [
      { title: "Fire & Special Perils", desc: "Shields buildings and contents from fire, explosions, lightning, floods, earthquakes, and civil unrest." },
      { title: "Burglary & Housebreaking", desc: "Covers theft of inventory, office equipment, or household valuables accompanied by forcible or violent entry." },
      { title: "Business Interruption", desc: "Replaces lost revenue and covers ongoing operational costs during repairs following a covered property loss." }
    ],
    subcategories: [
      { title: "Commercial Buildings", items: ["Warehouses & Factories", "Office Plazas & Corporate Headquarters", "Retail Shops & Inventory Complexes"] },
      { title: "Residential Houses", items: ["Home Structure Protection", "Personal Property & Valuables Cover"] }
    ],
    claimProcess: [
      "Mitigate further damage and contact fire/emergency services.",
      "Notify CEIIL claims team with description of damage.",
      "Prepare a list of lost/damaged property with values.",
      "Loss adjusters visit site to authorize claims settlement."
    ]
  },
  liability: {
    name: "Liability Insurance",
    tagline: "Securing operational trust & compliance",
    overview: "Operational exposure and professional services carry risks of litigation, regulatory penalties, and public damage claims. We provide general and specialized liability coverage to protect corporate balance sheets.",
    features: [
      { title: "Professional Indemnity", desc: "Covers legal defense costs and damages resulting from professional errors, omissions, or negligence." },
      { title: "Fidelity Guarantee", desc: "Protects employers from financial loss due to dishonest acts, fraud, or embezzlement by employees." },
      { title: "Occupiers' Liability", desc: "Mandatory insurance protecting members of the public against injuries occurring within your business premises." }
    ],
    subcategories: [
      { title: "Corporate Liability", items: ["Directors & Officers (D&O)", "Fidelity Guarantee Cover", "Product Liability Cover"] },
      { title: "Professional Protection", items: ["Medical Malpractice", "Architects & Engineers Liability", "Legal & Accounting Professional Liability"] }
    ],
    claimProcess: [
      "Do not admit liability, offer, or promise payment to third parties.",
      "Forward all third-party demands, writs, or summonses to CEIIL immediately.",
      "Submit completed liability claim form with relevant documents.",
      "CEIIL legal and adjusters team defends or settles the claim."
    ]
  },
  engineering: {
    name: "Engineering & Construction",
    tagline: "Mastering project complexity with precision cover",
    overview: "Construction works, engineering contracts, and specialized machinery require robust coverages that match project scope. We provide custom solutions for contractors, builders, and engineers.",
    features: [
      { title: "Contractor All-Risk (CAR)", desc: "Protects civil engineering projects, contractors, and third-party liabilities during execution." },
      { title: "Erection All Risk (EAR)", desc: "Covers installation of plant, machinery, steel structures, and electrical systems." },
      { title: "Plant All Risk", desc: "Provides physical damage coverage for excavators, cranes, generators, and construction machinery." }
    ],
    subcategories: [
      { title: "Project Policies", items: ["Contractors All Risks", "Erection All Risks", "Testing & Commissioning Coverage"] },
      { title: "Machinery Assets", items: ["Plant & Equipment All Risks", "Machinery Breakdown Insurance", "Electronic Equipment Insurance"] }
    ],
    claimProcess: [
      "Report damage immediately upon occurrence on-site.",
      "Document construction logs, photographs, and witness accounts.",
      "Provide estimate of repair or replacement from qualified engineer.",
      "Site visit by engineering loss adjusters to resolve claim."
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const product = productsDetailData[slug] || productsDetailData.motor;
  const [inquiryStatus, setInquiryStatus] = useState<string | null>(null);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStatus("Thank you! Your product inquiry has been received. Our team will contact you shortly.");
  };

  return (
    <div className="product-detail-wrapper" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Back Button */}
      <div className="section-shell" style={{ marginBottom: '24px' }}>
        <Link href="/products" style={{ color: 'var(--brand-crimson)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          &larr; Back to Portfolio
        </Link>
      </div>

      {/* Main product presentation */}
      <section className="section-shell" style={{ marginBottom: '48px' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'var(--brand-teal-strong)', color: '#fff', borderRadius: 'var(--radius-panel)' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>PRODUCT DETAILS</span>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '3rem', margin: '16px 0 12px', fontFamily: '"Century Gothic", var(--font-brand), sans-serif' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--accent-teal)', fontStyle: 'italic', margin: '0 0 24px' }}>
            &ldquo;{product.tagline}&rdquo;
          </p>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            {product.overview}
          </p>
        </div>
      </section>

      {/* Two Column details: Info on left, Inquiry form on right */}
      <section className="section-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Column: Features & Subcategories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Features */}
            <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 24px', fontFamily: '"Century Gothic", sans-serif' }}>
                Key Value Features
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {product.features.map((feature, i) => (
                  <div key={i}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-crimson)', margin: '0 0 6px', fontWeight: 600 }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.94rem', margin: 0, lineHeight: '1.5' }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-products */}
            <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 24px', fontFamily: '"Century Gothic", sans-serif' }}>
                Coverage Categories
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                {product.subcategories.map((sub, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--brand-teal)', margin: '0 0 12px', fontWeight: 600 }}>
                      {sub.title}
                    </h3>
                    <ul style={{ paddingLeft: '16px', margin: 0, color: 'var(--ink)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                      {sub.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Claims process */}
            <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 24px', fontFamily: '"Century Gothic", sans-serif' }}>
                Claims Procedure
              </h2>
              <ol style={{ paddingLeft: '20px', margin: 0, color: 'var(--ink)', fontSize: '0.94rem', lineHeight: '1.8' }}>
                {product.claimProcess.map((step, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{step}</li>
                ))}
              </ol>
            </div>

          </div>

          {/* Right Column: Dynamic Inquiry Form */}
          <div className="glass-panel info-card" style={{ padding: '40px', background: '#fff', position: 'sticky', top: '120px' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 8px', fontFamily: '"Century Gothic", sans-serif' }}>
              Request a Quote / Inquiry
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: '1.4' }}>
              Interested in {product.name}? Complete the details below, and a CEIIL insurance agent will contact you.
            </p>

            {inquiryStatus ? (
              <div style={{ 
                padding: '20px', 
                background: 'var(--brand-teal-soft)', 
                color: 'var(--brand-teal-strong)', 
                borderRadius: '12px', 
                fontWeight: 600,
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                {inquiryStatus}
              </div>
            ) : (
              <form onSubmit={handleInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label htmlFor="full-name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Full Name / Company</label>
                  <input 
                    type="text" 
                    id="full-name"
                    required 
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--line)', 
                      outline: 'none',
                      fontSize: '0.95rem'
                    }} 
                    placeholder="Enter your name or business"
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required 
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--line)', 
                      outline: 'none',
                      fontSize: '0.95rem'
                    }} 
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required 
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--line)', 
                      outline: 'none',
                      fontSize: '0.95rem'
                    }} 
                    placeholder="e.g. 07059770508"
                  />
                </div>

                <div>
                  <label htmlFor="coverage-limit" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Expected Sum Insured (Optional)</label>
                  <input 
                    type="text" 
                    id="coverage-limit"
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--line)', 
                      outline: 'none',
                      fontSize: '0.95rem'
                    }} 
                    placeholder="e.g., ₦5,000,000"
                  />
                </div>

                <div>
                  <label htmlFor="notes" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Additional Coverage Notes</label>
                  <textarea 
                    id="notes"
                    rows={4}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid var(--line)', 
                      outline: 'none',
                      fontSize: '0.95rem',
                      resize: 'none'
                    }} 
                    placeholder="Describe your assets or insurance requirements..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="button-primary"
                  style={{ 
                    padding: '14px', 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    background: 'var(--brand-crimson)', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff',
                    marginTop: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

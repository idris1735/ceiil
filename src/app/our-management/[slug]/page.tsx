import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import PageHero from '@/components/PageHero';

const managementProfiles: Record<string, { name: string; role: string; image: string; fullBio: string }> = {
  'adewale-koko': {
    name: "Mr. Adewale Koko",
    role: "Managing Director / CEO",
    image: "/media/adewale-koko.jpg",
    fullBio: "Mr. Adewale Koko is a highly experienced chartered insurer with more than two decades of extensive expertise in the insurance industry. His proficiency spans business development, strategic planning, risk management, oil and gas, and financial management.\n\nThroughout his career, he has held pivotal leadership roles in several renowned Nigerian companies, demonstrating remarkable skill and strategic foresight. Before joining Capital Express Indemnity Insurance Limited, Mr. Koko served as Managing Director of Coronation Life Assurance Limited, where he was instrumental in steering the company toward significant growth and stability.\n\nHe also held the position of Group Head, Oil and Gas, at both Standard Alliance Insurance Plc and Wapic Insurance, now Coronation Insurance, managing relationships with numerous International Oil Companies and marginal field operators in Nigeria. Known for his self-driven approach and consistent ability to meet and exceed targets, Mr. Koko combines a strategic mindset with a deep understanding of the insurance landscape.",
  },
  'uruemuesiri-oghen': {
    name: "Uruemuesiri Oghen",
    role: "Company Secretary / Compliance",
    image: "/media/Mrs. Uruemuesiri Oghen.JPG",
    fullBio: "Uruemuesiri Oghen is a corporate lawyer with over 20 years' experience delivering secretarial, legal, HR management, corporate governance, and compliance services.\n\nShe brings versatile expertise in business and board advisory, secretariat management, and the execution of contractual objectives, consistently aligning outcomes with stakeholder expectations. With more than 10 years in the insurance sector, she has held senior leadership roles of increasing scope and complexity, building a reputation for sound judgment, operational excellence, and steady leadership under pressure.",
  },
  'arusiuka-adetutu': {
    name: "Mrs. Arusiuka Adetutu",
    role: "General Manager, Business Development",
    image: "/media/Mrs. Adetutu Ariusika.jpeg",
    fullBio: "Adetutu currently holds the position of General Manager Business Development at Capital Express Indemnity Insurance. She is a seasoned insurance executive with over 30 years experience spanning life and non-life underwriting, corporate marketing, agency administration, E-channel & partnership management, bancassurance, and product development.\n\nHer extensive career has equipped her with deep insight into the Nigerian insurance market and the ability to drive sustainable business growth through strategic client relationships and innovative distribution channels.",
  },
  'adeyinka-oyekunle': {
    name: "Adeyinka Oyekunle",
    role: "Chief Technical Officer",
    image: "/media/Mrs. Adeyinka Oyekunle.JPG",
    fullBio: "Adeyinka E. Oyekunle is a seasoned insurance professional with over a decade of experience across claims, underwriting, and leadership.\n\nShe has successfully led teams at International Energy Insurance Plc, Law Union & Rock Insurance Plc — now Tangerine General Insurance Limited — and Custodian & Allied Insurance PLC, delivering results through technical expertise and strong people leadership.",
  },
  'olatubosun-caleb': {
    name: "Olatubosun Caleb",
    role: "ERM",
    image: "/media/Mr. Caleb Olatubosun.png",
    fullBio: "Caleb Olatubosun is an Associate member of the Institute of Chartered Accountants of Nigeria. He graduated from Obafemi Awolowo University, Ile-Ife with Second Class Honours (Upper Division in Agricultural Economics).\n\nHe has over three decades of hands-on experience in accounting, auditing, investigation, taxation, and risk management.",
  },
  'audu-dunni-oladokun': {
    name: "Audu Dunni Oladokun",
    role: "Head, E-Business",
    image: "/media/Mr, Oladotun Audu.jpeg",
    fullBio: "Dunni is a visionary Technology and E-Business Executive with over two decades of experience driving digital transformation and operational excellence across the financial and insurance sectors.\n\nHe has consistently repositioned technology from a support function into a core business driver, leveraging innovative platforms, data insights, and strategic partnerships to unlock new value and competitive advantage.",
  },
  'victor-ajayi': {
    name: "Victor Ajayi",
    role: "Head ICT",
    image: "/media/Mr. Victor Ajayi.jpeg",
    fullBio: "Victor Ajayi is a visionary technology leader with a robust background in Electrical/Electronics Engineering and over two decades of experience in IT and infrastructure.\n\nHe holds an MBA in Management Technology from Lagos State University and an HND in Telecoms Electronics from Federal Polytechnic, Ado-Ekiti.",
  },
  'olayinka-popoola': {
    name: "Olayinka Popoola",
    role: "Group Head, Retail, Branch Operations and Multi-Clients",
    image: "",
    fullBio: "Olayinka Popoola is the Head, Branch and Retail/Multi Clients. He has been in the insurance industry for more than two decades.\n\nPrior to joining Capital Express Indemnity Insurance Limited, he was the Head, Retail Business at Capital Express Life Assurance Limited. He pioneered the Retail Agency operation of Standard Life Assurance Company Limited and developed it to over 40 locations across the country as the National Retail Coordinator.",
  },
  'steve-akadiri': {
    name: "Dr. Steve Akadiri",
    role: "Group Head, Partnership and Alliances",
    image: "",
    fullBio: "Dr. Steve Olufemi Akadiri is a distinguished management professional and thought leader with extensive experience across insurance, pensions, media, and event management.\n\nHe currently serves as Group Head, Partnership and Alliances at Capital Express Indemnity Insurance Limited where he focuses on marketing partnerships, operational efficiency, customer-centric strategies, and performance management.",
  },
};

export default function ManagementProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const profile = managementProfiles[slug];
  if (!profile) notFound();

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      <PageHero bgImage={profile.image || "/media/ceiil-wall-paper5-scaled.jpg"} kicker="MANAGEMENT TEAM" title={profile.name} subtitle={profile.role} />

      <section className="section-block">
        <div className="section-shell">
          <Link href="/our-management" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--brand-crimson)', fontWeight: 600, marginBottom: '32px' }}>&larr; Back to Management</Link>

          <div className="glass-panel info-card" style={{ padding: '48px', background: '#fff', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 280px', position: 'relative', height: '380px', borderRadius: 'var(--radius-card)', overflow: 'hidden', backgroundColor: 'var(--surface-strong)' }}>
              {profile.image ? (
                <Image src={profile.image} alt={profile.name} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="300px" />
              ) : (
                <AvatarPlaceholder name={profile.name} />
              )}
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 8px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>{profile.name}</h2>
              <p style={{ fontSize: '1rem', color: 'var(--brand-crimson)', fontWeight: 600, margin: '0 0 24px' }}>{profile.role}</p>
              {profile.fullBio.split('\n\n').map((p, i) => (
                <p key={i} style={{ color: 'var(--ink)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '16px' }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AvatarPlaceholder from '@/components/AvatarPlaceholder';
import PageHero from '@/components/PageHero';

const managementProfiles: Record<string, { name: string; role: string; image: string; fullBio: string }> = {
  'adewale-koko': {
    name: "Adewale Koko",
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
    name: "Arusiuka Adetutu",
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
    image: "/media/olayinka-popoola.png",
    fullBio: "Olayinka Popoola is the Head, Branch and Retail/Multi Clients. He has been in the insurance industry for more than two decades.\n\nPrior to joining Capital Express Indemnity Insurance Limited, he was the Head, Retail Business at Capital Express Life Assurance Limited. He pioneered the Retail Agency operation of Standard Life Assurance Company Limited and developed it to over 40 locations across the country as the National Retail Coordinator.\n\nHe joined Standard Alliance Insurance Plc in 2014 because of the merger process as the Divisional Head, Lagos East/Western Region, and later became the Divisional Head, National Retail Business.",
  },
  'steve-akadiri': {
    name: "Steve Akadiri",
    role: "Group Head, Partnership and Alliances",
    image: "/media/steve-akadiri.png",
    fullBio: "Dr. Steve Olufemi Akadiri is a distinguished management professional and thought leader with extensive experience across insurance, pensions, media and event management.\n\nHe currently serves as Group Head, Partnership and Alliances at Capital Express Indemnity Insurance Limited where he focuses on marketing partnerships, operational efficiency, customer centric strategies and performance management.\n\nHe is a Fellow of the Institute of Management Consultants (FIMC) and Doctoral Fellow of the Chartered Institute of Sales and Customer Service Management. He holds a bachelor's degree (BA) from Ekiti State University and a Post Graduate Diploma in Adult Learning from JCI University, Coral Gables, Florida USA.\n\nHe began his career as a broadcaster with FRCN Radio Nigeria and later served as Executive Secretary of JCI Nigeria, demonstrating strong leadership and commitment to youth development. His insurance career started in 2001 with Standard Alliance Insurance Limited where he served in several capacities as Branch Manager and Head Public Sector Marketing.\n\nSteve has held many management roles, earned multiple awards for service and leadership and is widely recognized for his public speaking, strategic leadership and expertise in organizational development, customer service and stakeholder engagement. He is an accomplished seminar leader and life coach and married with children.",
  },
  'eyitayo-oluwaloyi': {
    name: "Eyitayo Sunday Oluwaloyi",
    role: "Executive Director, Technical & Operations",
    image: "/media/ED.png",
    fullBio: "Eyitayo has over thirty-six years' experience in the Insurance Industry. His professional experience of over two decades cuts across various functions such as Technical, Marketing, and Branch Operations.\n\nHe holds a Higher National Diploma in Insurance from Lagos State Polytechnic, a Bachelor degree in Insurance, a Masters Degree in Business Administration (MBA), a Masters of Science degree (MSc) in Risk Management and Insurance from University of Lagos, and a PhD in Risk Management & Insurance from Lead City University, Ibadan.\n\nHe started his insurance career with WAPIC Insurance Plc (now Coronation Insurance Plc) in 1996 as an Assistant Superintendent in the department of Fire and Accident. He joined Custodian and Allied Insurance as Head of Reinsurance in 1997. He spent over fourteen years in Custodian and Allied Insurance and rose to the level of a Divisional Head, Bancassurance and Personal Lines. Whilst in Custodian, Eyitayo headed Reinsurance, Underwriting, Claims, Engineering/Oil & Gas, Public Sector, and Branch Operations.\n\nEyitayo worked briefly as General Manager/COO in Carrier Insurance Brokers before joining Noor Takaful as the Head of Technical/Chief Compliance Officer (General Takaful Insurance) in 2016. He was promoted in 2018 to the position of an Assistant General Manager (Operations) to oversee both General and Family (Life) Takaful Insurance. In recognition of his excellent track record, he was appointed as Executive Director of the company in 2019 and later Managing Director/CEO in 2020. Eyitayo strategically moved the income of the company from One billion to about Five Billion before leaving Noor Takaful in 2022.\n\nIn 2024, Eyitayo joined Salam Takaful Insurance as an Executive Director (Technical & Operations) before joining Capital Express Indemnity Insurance in 2026. He qualified as an Associate of the Chartered Insurance Institute of Nigeria in 1998 and he is an alumnus of the prestigious Lagos Business School.",
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

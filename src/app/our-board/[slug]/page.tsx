import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

const boardProfiles: Record<string, {
  name: string;
  role: string;
  image: string;
  fullBio: string;
}> = {
  'dere-awosika': {
    name: "Dr. 'Dere Awosika, OON, MFR, mni",
    role: "Chairman",
    image: "/media/Chairman.JPG",
    fullBio: "Dr. 'Dere Awosika is an accomplished entrepreneur and philanthropist with over three decades of experience in public sector governance. She served as Permanent Secretary in the Federal Ministries of Internal Affairs, Science and Technology, and Power.\n\nIn April 2013, she was appointed to the Board of Access Bank, where she served as Vice-Chairman of the Board Audit Committee and Chairman of the Board Credit and Finance Committee. She became Chairman of Access Bank in January 2020.\n\nDr. Awosika has also served on the boards of Capital Express Assurance Ltd, Chams Plc, Ned-In Pharmaceutical IV Plant, and Josephine Consulting Limited.\n\nHer leadership at CEIIL brings a wealth of governance experience, strategic oversight, and a proven track record of steering major institutions toward sustainable growth.",
  },
  'olayinka-aletor': {
    name: "Chief Mrs. Olayinka Titilope Aletor, mni, JP",
    role: "Non-Executive Director",
    image: "/media/yinka-aletor.JPG",
    fullBio: "Chief Mrs. Olayinka Titilope Aletor is an accomplished professional with expertise spanning the humanities and legal fields. She holds a Bachelor's degree in History from Olabisi Onabanjo University, formerly the University of Ago-Iwoye, and later studied Law at the University of Ibadan. She has also completed several professional training programmes that have broadened her skills and industry exposure.\n\nMrs. Aletor worked with the Council of Legal Education, where she applied her legal expertise to advance and strengthen legal education in Nigeria.\n\nShe currently sits on the boards of highly rated organisations across various sectors, including insurance, and continues to contribute to their growth and success.",
  },
  'segun-ajayi-kadir': {
    name: "Mr. Segun Ajayi-Kadir, mni",
    role: "Independent Non-Executive Director",
    image: "/media/dr-segun-kadri.JPG",
    fullBio: "Mr. Segun Ajayi-Kadir is a seasoned administrator and policy advocate with extensive experience in private sector development and industry advocacy in Nigeria.\n\nHe began his career at the Lagos Chamber of Commerce and Industry, where he served as Executive Secretary, and later worked with the Ikeja Branch of the Manufacturers Association of Nigeria. He subsequently served as Director of the Association's Liaison Office in the Federal Capital Territory, Abuja, and as Director of the Field Services Department. In 2016, he was appointed Director General of the Manufacturers Association of Nigeria.\n\nHe has served on various Federal Government committees, councils, and boards, including the Tariff Technical Committee, National Focal Point on Trade Matters, and the Industrial Training Fund. His professional development includes training programmes with the United Nations Industrial Development Organization, the Center for International Private Enterprise in Washington, DC, and the Lagos Business School at Pan-Atlantic University.",
  },
  'abdulaziz-mashi': {
    name: "Alh. Abdulaziz Abdullahi Mashi",
    role: "Independent Non-Executive Director",
    image: "/media/abdullahi-mashi.JPG",
    fullBio: "Mr. Abdulaziz M. Abdullahi is a seasoned accountant and financial manager with over 35 years of experience across both the private and public sectors.\n\nBorn on 12 August 1961, he holds a B.Sc. in Accounting from Bayero University, Kano, and an MBA in Financial Management from the University of Plymouth, United Kingdom. He became a member of the Association of National Accountants of Nigeria in 2004 and the Nigerian Institute of Management in 2008, and was admitted as a Fellow of the Association of National Accountants of Nigeria in 2016.\n\nHis distinguished public service career includes serving as Director, Internal Audit Department, State House, Abuja (2015–2017); Director, Finance & Accounts, Nigeria Security and Civil Defence Corps (2017); Permanent Secretary, Federal Ministry of Communications (2017–2018); and Permanent Secretary, Federal Ministry of Health (2018–2021).\n\nPresently, he is the Founder and CEO of Ehsquare Consulting Ltd, established in 2021. He is married with children and grandchildren.",
  },
  'gboyega-fatimilehin': {
    name: "Mr. Adegboyega Fatimilehin",
    role: "Independent Non-Executive Director",
    image: "/media/Mr-Ghoyega-Fatimileyin.jpeg",
    fullBio: "Mr. Gboyega Fatimilehin is a seasoned real estate professional and a recognised leader in the Nigerian real estate industry.\n\nHe is the Founding Partner of Diya Fatimilehin & Co., Nigeria's leading estate service and valuation firm. He began his career as a trainee surveyor in 1978 and, in 1983, entered into partnership with Mr. M.K. Diya to establish the firm. Under his leadership, it has grown into one of the most respected names in Nigeria's real estate market.\n\nMr. Fatimilehin serves on the boards of several notable organisations and is an active member of key professional bodies, including the Nigerian Institution of Estate Surveyors and Valuers, the Nigerian Institute of Management, and the Institute of Directors, London. He is also a Senior Certified Valuer of the International Real Estate Institute, USA.\n\nHe graduated from Obafemi Awolowo University in 1978. He is married and blessed with children.",
  },
  'francis-oketola': {
    name: "Mr. Francis A. Oketola",
    role: "Non-Executive Director",
    image: "/media/francis-oketola.jpg",
    fullBio: "Mr. Francis A. Oketola has over three decades of experience in finance, performance management, audit, internal control, risk management, and strategy.\n\nHe began his career at KPMG, auditing the financial statements of organisations across multiple industries. He later joined EIB International Bank Plc, now Polaris Bank, as Assistant Manager in the Inspectorate Division. He rose to Senior Manager, where he established the Financial Planning and Control Department, and subsequently served as Head of Performance Measurement at Skye Bank, now Polaris Bank.\n\nBefore joining Capital Express Indemnity Insurance Limited, he was Chief Finance Officer at CrystaLife Assurance Plc, now ARM Life Plc.\n\nMr. Oketola is a Chartered Accountant and a member of the Chartered Institute of Taxation of Nigeria (CITN). He holds a First-Class Honours degree from the University of Maiduguri and a postgraduate degree in Economics from Lagos State University.",
  },
  'mathew-ogwezhi': {
    name: "Mr. Mathew Ogwezhi",
    role: "Non-Executive Director",
    image: "/media/Mr. Matthew Ogwezhi.JPG",
    fullBio: "Mr. Mathew Ogwezhi is a seasoned insurance professional with over 20 years' experience in the industry. His expertise spans strategic partnership management, deal structuring, contract negotiations, channel development, marketing, and leadership.\n\nHis journey at Capital Express Assurance began in 2003. He has since held roles as Personal Assistant to the Managing Director/CEO, Head of Educational Institutions, Regional Director for the South-South and South-East, and Head of Marketing, Sales and Distribution, building a track record of driving growth and strengthening market presence across regions.\n\nAcademically, he graduated from Auchi Polytechnic in 1993 with an Ordinary National Diploma in Mass Communication and earned a Bachelor of Arts in Mass Communication, Second Class Upper Division, from Delta State University in 1998. He completed an MBA in Marketing at Lagos State University in 2006.\n\nProfessionally, he qualified as a Chartered Insurer in 2009 and is an Associate Member of the Nigerian Institute of Public Relations since 2008 and the Nigerian Council of Registered Insurance Brokers since 2013.",
  },
  'adewale-koko': {
    name: "Mr. Adewale Koko",
    role: "Managing Director / CEO",
    image: "/media/adewale-koko.jpg",
    fullBio: "Mr. Adewale Koko is a distinguished Chartered Insurer with over two decades of experience in the insurance industry. His expertise spans business development, strategic planning, oil and gas, risk management, product development, and financial management.\n\nThroughout his career, he has made significant contributions to several leading corporate firms in Nigeria, consistently demonstrating strong leadership and deep industry insight. Before joining Capital Express Indemnity Insurance Limited, Mr. Koko served as Managing Director of Coronation Life Assurance Limited, where he was instrumental in steering the company toward significant growth and stability.\n\nHe also held the position of Group Head, Oil and Gas, at both Standard Alliance Insurance Plc and Wapic Insurance, now Coronation Insurance. In these roles, he managed relationships with numerous International Oil Companies and marginal field operators in Nigeria, solidifying his reputation as a specialist in the energy insurance sector.\n\nKnown for his self-driven approach and consistent ability to meet and exceed targets, Mr. Koko combines a strategic mindset with a deep understanding of the insurance landscape. At Capital Express Indemnity Insurance Limited, he continues to leverage his experience to drive the company's success and deliver measurable value to clients.",
  },
};

export default function BoardProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const profile = boardProfiles[slug];

  if (!profile) {
    notFound();
  }

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <PageHero
        bgImage={profile.image}
        kicker="BOARD OF DIRECTORS"
        title={profile.name}
        subtitle={profile.role}
      />

      <section className="section-block">
        <div className="section-shell">
          <Link
            href="/our-board"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--brand-crimson)',
              fontWeight: 600,
              marginBottom: '32px',
            }}
          >
            &larr; Back to Board
          </Link>

          <div className="glass-panel info-card" style={{ padding: '48px', background: '#fff', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 280px', position: 'relative', height: '380px', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="300px"
              />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-teal-strong)', margin: '0 0 8px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 700 }}>
                {profile.name}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--brand-crimson)', fontWeight: 600, margin: '0 0 24px' }}>
                {profile.role}
              </p>
              {profile.fullBio.split('\n\n').map((paragraph, i) => (
                <p key={i} style={{ color: 'var(--ink)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '16px' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

# CEIIL Content Inventory

Last researched: 2026-05-22

This document records content verified from the live CEIIL website and local `public/media` assets. Do not add marketing copy here unless it is marked as proposed. The goal is to keep sourced content separate from design interpretation.

## Source Reliability

Primary sources checked:

- Live site: `https://ceiil.ng/`
- WordPress pages API: `https://ceiil.ng/wp-json/wp/v2/pages?per_page=100`
- WordPress posts API: `https://ceiil.ng/wp-json/wp/v2/posts?per_page=100`
- WordPress media API: `https://ceiil.ng/wp-json/wp/v2/media?per_page=100`
- Local media folder: `public/media`

Known crawl limitations:

- The WordPress XML sitemap endpoints closed the connection during extraction.
- The `property-insurance` page did not render in the browser extraction, but its content was available through the WordPress pages API.
- The current live homepage repeats several hero/content blocks.
- The live site contains placeholder or legacy pages such as `sample-page`, `hello-world`, and a `test-page` with life assurance copy that appears unrelated to CEIIL's current general insurance positioning.
- The user mentioned an attached landing reference image, but no attachment was visible in this chat context.

## Confirmed Brand Basics

Company name:

- Capital Express Indemnity Insurance Limited
- Abbreviation used on site: CEIIL

Logo colors confirmed from `public/media/Official-Capital-Express-Indemnity-Logo-Colored.png`:

- Deep teal: `#004058`
- Crimson: `#B02038`
- Anti-aliased logo edge variants observed: `#004060`, `#B82038`, `#B82040`

Typography direction from client:

- Century Gothic
- Do not default to Nunito for the rebuild unless the client approves it as fallback.

Regulatory footer text on live site:

- Authorized and Regulated by the National Insurance Commission.

## Confirmed Contact Details

Address:

- 17, Bishop Kale Close, Off Kasumu Ekemode Street, Off Saka Tinubu Street, Victoria Island, Lagos, Nigeria

Phone:

- 020-1330-2950
- 070-5977-0508

Email:

- info@ceiil.ng
- hello@ceiil.ng
- customercare@ceiil.ng appears in some footer instances, but not consistently.

Working hours:

- Monday to Friday
- 8:00 AM to 5:00 PM

Socials:

- The contact page only exposes text labels for Facebook and Instagram. Actual profile URLs were not verified.

## Live Navigation

Top-level navigation observed:

- Home
- Who We Are
- Products
- News
- Contact us
- Financials
- Career

Dropdown under Who We Are:

- Our Core Values
- Our Board
- Our Management
- Investor Portal

Dropdown under Products:

- Motor-Insurance
- Liability-Insurance
- Engineering-Insurance
- Marine-Insurance
- Property-Insurance

Homepage quick actions:

- Buy a Policy: points to `http://ceiil.ng/index.php/contact-us/`
- Make a Claim: points to `http://ceiil.ng/index.php/motor-insurance-claim-2/`
- Renew a Policy: points to `https://www.ceiil.com.ng/`

## Published WordPress Pages

Pages discovered through WordPress API:

- `home`: Home
- `home-2`: Home
- `home-old`: Home-OLD
- `about-us`: About Us
- `our-core-values`: our core values
- `our-management-team`: Our Leadership, used by nav as Our Board
- `our-leadership`: our leadership, used by nav as Our Management
- `solutions`: Solutions
- `motor-insurance`: motor-insurance
- `liability-insurance`: liability-insurance
- `engineering-insurance`: engineering-insurance
- `marine-insurance`: marine-insurance
- `property-insurance`: property-insurance
- `projects`: Projects, used as News/Blog list
- `blog`: Our Blog
- `contact-us`: Contact Us
- `our-financials`: Financials
- `investor-portal`: Investor Portal
- `join-our-team`: Career
- `motor-insurance-claim`: Motor Insurance Claim, but visible content says Fire and Special Perils Claim Form
- `motor-insurance-claim-2`: Motor Insurance Claim, contains claim forms
- `privacy-policy`: Privacy Policy, mostly empty page shell
- `privacy-policy-2`: titled privacy-policy but contains products/solutions content
- Profile pages: `adewale-koko`, `olayiwola-adaramola-2`, `yetunde-idouwu`, `oludare-olude`, `adeyinka-oyekunle`, `olawale-adedokun`, `johnson-fagbemi`, `victor-ajayi`, `olatubosun-caleb`

Pages to treat as low-confidence or legacy:

- `sample-page`: default WordPress sample text
- `hello-world`: default starter blog post
- `test-page`: appears to contain Capital Express Assurance life assurance products, not CEIIL general insurance
- `elementor-page-1691`: unclear Elementor artifact
- `adeyinka-oyekunle-copy`: duplicate/copy page

## Homepage Content

Hero/current carousel content observed:

- Intro statement: "We're not just about business; We're about ensuring your peace of mind."
- Company name: Capital Express Indemnity Insurance Limited
- Transit coverage slide: comprehensive transit coverage, goods in transit, motor insurance
- Asset protection slide: fidelity guarantee insurance and burglary insurance

Homepage quick product categories:

- Marine
- Motor
- Property
- Liability
- Engineering

What We Do:

- The page positions CEIIL as providing comprehensive, reliable, tailored insurance solutions that protect peace of mind.
- Main theme: insurance coverage, service, and risk advisory.

Why Choose Us pillars:

- Value and Optimisation
- Client Advocacy and Confidence
- Your Trusted Risk Advisor
- Experience the CEIIL Difference

Corporate philosophy:

- Vision: To be a world class financial services provider.
- Mission: To provide wealth management and risk protection services, using efficient technology and manpower, thereby creating value to all stakeholders.

Note: The existing `PROJECT.md` says the mission includes "to be in every household where we are licensed to operate." That phrase was not present in the live homepage text I verified on 2026-05-22.

Core values:

- Customer Dedication: service and support that meets or exceeds client needs.
- Respect for Individuals: respect, dignity, and people feeling valued.
- Integrity: honesty, transparency, ethical conduct.
- Creativity: innovative solutions for evolving customer needs.
- Teamwork: collaboration and mutual support.

## About Page

Page title:

- About Us

Positioning:

- CEIIL is described as a premier non-life/general insurance provider.
- The copy emphasizes wide-ranging non-life insurance solutions, excellence, customer satisfaction, peace of mind, and reliable coverage.

FAQ content covers:

- What CEIIL is.
- Location.
- Working hours.
- Types of insurance offered.
- Fidelity Guarantee Insurance.
- Professional Indemnity Insurance.
- Policy management through CEIIL Insurance Portal.
- Claim filing process.
- Contact methods.
- NAICOM regulation.

## Product Overview Page

Page title:

- Solutions

Hero theme:

- Safeguarding Your Future, One Policy at a Time

Product categories described:

- Marine: goods transported by sea, air, or land; ships, cargo, terminals, transport risks.
- Motor: physical damage, bodily injury, traffic collision liabilities, theft, fire, weather, vandalism.
- Property: buildings and contents against fire, theft, weather-related damage.
- Liability: claims from injuries or property damage, legal costs, and payouts.
- Specialized: tailored cover for unique or high-risk scenarios.

Detailed overview sections:

- Marine Insurance: cargo, hull, freight, and maritime liability.
- Motor Insurance: third-party liability, comprehensive coverage, collision, personal injury protection.
- Property Insurance: fire/allied perils, burglary, all-risk, business interruption.
- Liability Insurance: general liability, professional indemnity, product liability, public liability.
- Engineering Insurance: machinery breakdown, contractors all risk, erection all risk, plant all risk.

## Motor Insurance Page

Products/options:

- Third-Party Motor Insurance
- Third-Party Fire and Theft
- Standard Comprehensive Motor Insurance
- Extended Comprehensive Motor Insurance
- Goods in Transit All-Risk, although this also appears under Marine and may need IA cleanup.

Key sourced details:

- Third-party motor covers legal liabilities to third parties for death, bodily injury, or property damage.
- Third-party fire and theft adds fire damage and theft protection.
- Standard comprehensive includes vehicle damage, third-party liabilities, theft, fire, accidental damage, and personal accident cover for the driver.
- Extended comprehensive references third-party damage cover up to NGN 2,000,000 and free personal accident cover of NGN 500,000.
- Goods in Transit covers goods moved by road, rail, or inland waters within Nigeria, including collision, overturning, or fire to the conveying vehicle.

## Marine Insurance Page

Products/options:

- Marine Cargo Insurance
- Marine Hull Insurance
- Goods in Transit All-Risk

Key sourced details:

- Marine Cargo covers imported goods conveyed by sea or air.
- Features include stranded/grounded/sunk/capsized ship, overturning or derailment of land transport, collision, general average, and jettison.
- Benefits include protection from cargo loss/damage cost and warehouse-to-warehouse cover.
- Marine Hull covers vessels, yachts, and machinery. The live page contains a typo, "Marine Hurl."
- Goods in Transit repeats the all-risk/restricted-cover content from the Motor page.

## Liability Insurance Page

Overview:

- Liability insurance protects individuals and businesses from legal liability risks such as malpractice, injury, or negligence.
- It helps cover legal costs and payouts for which the insured would be responsible if found legally liable.
- The page states it does not cover intentional or criminal acts.

Products/options:

- Fidelity Guarantee Insurance
- Professional Indemnity Insurance

Key sourced details:

- Fidelity Guarantee covers employer losses caused by employee forgery, embezzlement, larceny, fraud, or dishonesty.
- Fidelity benefits include loss-of-money cover, discovery after employee death/departure, and reasonable legal expenses.
- Professional Indemnity covers professionals against liabilities from negligence, errors, or omissions in services.
- Professional Indemnity is stated as operating on a claims-made basis.

## Engineering Insurance Page

Overview:

- Engineering insurance covers risks around engineering projects, construction, and machinery operations.

Products/options:

- Plant All Risks Insurance
- Erection All Risk Insurance
- Machinery Breakdown Insurance
- Contractor All-Risk Insurance

Key sourced details:

- Plant All Risks covers plant/equipment loss or damage from external causes such as fire, impact, and theft.
- Erection All Risk protects against sudden and unforeseen damage while property, machines, structures, or installations are on-site, stored, erected, tested, or maintained.
- Machinery Breakdown covers internal breakdown during use, repair, and replacement needs.
- Contractor All-Risk covers contract works, construction plant/equipment/machinery, plus third-party property damage or bodily injury connected to civil engineering work.

## Property Insurance Page

Source note:

- Retrieved from WordPress API because browser extraction did not render the page.

Overview:

- Property insurance provides reimbursement for damage or theft involving a structure and contents.
- Risks referenced include fire, theft, and some weather-related damage.

Products/options:

- Fire and Special Peril Insurance
- Burglary and Housebreaking Insurance

Fire and Special Peril features:

- Fire and lightning.
- Limited explosion and industrial explosion.
- Aircraft.
- Riots, strikes, lockout.
- Malicious damage.
- Earthquake or volcanic eruption.
- Storm, tempest, and flood.
- Bush fire.
- Escape of water from tank/apparatus or burst pipes.
- Impact by road vehicle or animal.

Fire and Special Peril benefits:

- Temporary accommodation cost.
- Rebuilding cost.
- Malicious damage indemnity, except during theft.
- Debris removal.
- Some non-fire losses such as burst pipes and flood.
- Contents temporarily removed for repairs up to 10 percent of sum insured.

Burglary benefits/features:

- Covers property in commercial buildings from theft involving violent and forcible entry.
- Can cover furniture, fixtures/fittings, equipment, electronics, and more.
- May cover damaged entry points, temporarily removed contents, contents in vehicles parked overnight on insured premises, and residential/non-residential premises.
- Possible extensions include personal effects/tools, lock and key replacement, and larceny for residential premises.

## Claims Content

Claim routes discovered:

- `motor-insurance-claim`: visible title says Fire and Special Perils Claim Form and links to a Fire Claim Form.
- `motor-insurance-claim-2`: fuller claim page with multiple claim form sections.

Forms/content detected on `motor-insurance-claim-2`:

- All Risk Claim Form
- Fire / Material Damage Claim Form
- Motor Accident Claim Form

Common claim fields detected:

- Policy number.
- Claim number.
- Insured name.
- Address.
- Occupation.
- Telephone number.
- Email address.
- Inception/renewal date.
- Nature and circumstances of loss.
- Police report details.
- Other insurance details.
- Particulars of claim.
- Fraud/exaggeration warning.
- Declaration/signature/date.

Motor accident fields detected:

- Vehicle make, registration number, engine number, chassis number, value, and purpose of use.
- Driver details and license details.
- Accident date, time, location, road/weather/brake conditions.
- Police station details.
- Injuries, witnesses, damaged parts, repair estimate, vehicle location, repairer details.
- Third-party details.

## Leadership Content

Board page, titled Our Leadership but used by nav as Our Board:

- Dr. 'Dere Awosika (OON, MFR, mni): Chairman
- Chief Mrs Olayinka Titilope Aletor mni (JP): Non-Executive Director
- Mr Adewale Adegoke Koko: MD/CEO
- Mr Olayinka Edson Adaramola: ED Technical/Operations
- Mr Adewale Francis Oketola: Non-Executive Director
- Mr Matthew Ogwezhi: Non-Executive Director
- A card appears as "Independent Non-Executive Director" with role "Non-Executive Director"; name not extracted from visible text.
- Mr Segun Ajayi-Kadir, mni: Independent Non-Executive Director
- Alh. Abdulaziz Mashi Abdullahi: Independent Non-Executive Director

Management page:

- Adewale Koko: MD/CEO
- Olayiwola Adaramola: ED, Technical & Operation
- Yetunde Idowu: Chief Marketing Officer
- Oludare Olude: GM Corporate Sales
- Adeyinka Oyekunle: Chief Technical Officer
- Uruemuesiri Oghen: Company Secretary / Compliance
- Olawale Adedokun: Head, E-Business
- Johnson Fagbemi: CFO
- Victor Ajayi: Head, ICT
- Olatubosun Caleb: Head, ERM

Profile pages with longer bios were verified for:

- Adewale Koko
- Olayiwola Adaramola
- Yetunde Idowu
- Oludare Olude
- Adeyinka Oyekunle
- Olawale Adedokun
- Johnson Fagbemi
- Victor Ajayi
- Olatubosun Caleb

No dedicated profile page was found in the extracted profile list for Uruemuesiri Oghen, although local images exist.

## Strategic Alliances

International Re-Insurers:

- Korean Re
- The Hartford
- Artrium
- Thomas Miller
- Markel
- Gallagher Re
- Apollo

Regional Re-Insurers:

- WAICA Re
- FBS Re
- Continental Re
- Africa Re

Re-Insurer Brokers:

- Gallagher
- Jordans Global
- Lockton

## Blog / News

Published posts:

- NIIRA 2025 Explained: Why Capital Express Indemnity Insurance is Built for Your Protection
- The Small Cover That Saves Big Trouble
- Hello world!

Post notes:

- `Hello world!` is a default WordPress starter post and should not be migrated as real content.
- `The Small Cover That Saves Big Trouble` is about Third Party Motor Insurance in Nigeria, legal compliance, affordability, and CEIIL pricing examples.
- `NIIRA 2025 Explained...` discusses the Nigerian Insurance Industry Reform Act 2025, compulsory insurance for public buildings/construction projects, compliance, consumer protection, and builders insurance.

Third-party motor price examples from the blog:

- Private car: NGN 15,000
- Tricycle: NGN 5,000
- Motorcycle: NGN 3,000
- Commercial vehicle: NGN 20,000

Use price content only after business confirmation because pricing can change.

## Financials / Investor

Financials page:

- Live page says reports are coming soon.

Investor Portal:

- Live page says coming soon.

Important media note:

- Local media and WordPress media include `Capital-Express-Indemnity-Insurance-2024-AFS-signed-version-2.pdf`.
- Do not expose this PDF on the rebuilt site until the client confirms it should replace the "coming soon" financials page.

## Career

Page title:

- Career / Join Our Team

Content summary:

- CEIIL says great people build great companies.
- The workplace is positioned around innovation, collaboration, professional growth, diversity, inclusivity, and individual talent.

No job listings were extracted.

## Local Media Assets To Consider

Logo:

- `public/media/Official-Capital-Express-Indemnity-Logo-Colored.png`
- `public/media/ceiil-litt.png`
- `public/media/cropped-ceiil-litt.png`
- `public/media/Logo-W.png`

Hero / campaign assets:

- `public/media/CEIIL-Wallpaper1-scaled.jpg` - 2560x1440
- `public/media/protect-the-pride-you-built-scaled.jpg` - 2560x1440
- `public/media/The-small-cover-scaled.jpg` - 2560x2560
- `public/media/CEIIL-banner-scaled.jpg` - 2560x1440
- `public/media/CEIIL-Screensaver1-scaled.jpg` - 2560x1440
- `public/media/ceiil-wall-paper4-scaled.jpg` - 2560x1440
- `public/media/ceiil-wall-paper5-scaled.jpg` - 2560x1440
- `public/media/ceiil-wallpaper3-scaled.jpg` - 2560x1440

Product assets:

- `public/media/Motor-2-scaled.jpg` - 2560x1440
- `public/media/Marine-scaled.jpg` - 2560x1440
- `public/media/Fire-SpecialPerils-scaled.jpg` - 2560x1440
- `public/media/Thirdparty-Police-scaled.jpg` - 2560x2560
- `public/media/professionalIndemnity-scaled.jpg` - 2560x1440
- `public/media/Our-financials-bg.jpg` - 1920x1080

Leadership images:

- `public/media/adewale-koko.jpg`
- `public/media/Olayiwola-Adaramola.jpeg`
- `public/media/ADEYINKA-OYEKUNLE.jpg`
- `public/media/UREMUESIRI-OGHEN.jpeg`
- `public/media/HEAD-E-BUSINESS-PASSPORT.jpg`
- `public/media/cfo-scaled.jpg`
- `public/media/cfo2-scaled.jpg`
- `public/media/cfo5-scaled.jpg`
- `public/media/ajayi-victor.jpg`
- `public/media/caleb-scaled.jpg`
- `public/media/Dr.-'Dere-scaled.jpg` if filesystem normalization allows direct reference
- `public/media/Chief-Mrs.-OLAYINKA-scaled.jpg`
- `public/media/Mr.-Segun--scaled.jpg`
- `public/media/Alh.-Abdulaziz-scaled.jpg`

Partner logos:

- `public/media/koreanpr-1.png`
- `public/media/thehartford-1.png`
- `public/media/artrium-1.png`
- `public/media/thomasmiller-1.png`
- `public/media/markel-1.png`
- `public/media/gallagherre-2.png`
- `public/media/apollo-1.png`
- `public/media/waica-1.png`
- `public/media/fbs-re-1.png`
- `public/media/continental-1.png`
- `public/media/africa-re-1.png`
- `public/media/jordansglobal-1.png`
- `public/media/lockton-1.png`

## Content Risks To Resolve Before Final Build

- Confirm whether product architecture should include only the five live nav products or also Oil & Gas, Travel, and General Accident from existing project notes.
- Confirm whether Financials should stay "coming soon" or expose the local 2024 AFS PDF.
- Confirm whether `customercare@ceiil.ng` is active.
- Confirm social media URLs.
- Confirm the unidentified board card on the board page.
- Decide whether Goods in Transit belongs under Marine, Motor, or both.
- Confirm pricing from the Third Party Motor blog before using it in UI.
- Fix copy errors from source during rewrite: "Marine Hurl," "collison," duplicated "How can I manage my insurance policies?", duplicated Vision/Mission blocks, and "Capital Express Assurance Limited" appearing on the contact section of the home page.

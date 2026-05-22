import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PagePreloader from "@/components/PagePreloader";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Capital Express Indemnity Insurance Limited (CEIIL)",
    template: "%s | CEIIL",
  },
  description:
    "Capital Express Indemnity Insurance Limited — Nigeria's trusted risk advisor. Comprehensive insurance solutions: Motor, Marine, Property, Engineering, Oil & Gas, Liability, and Travel Insurance. Victoria Island, Lagos.",
  keywords: [
    "insurance Nigeria",
    "indemnity insurance",
    "motor insurance Lagos",
    "marine insurance",
    "engineering insurance Nigeria",
    "CEIIL",
    "Capital Express Insurance",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://ceiil.ng",
    siteName: "Capital Express Indemnity Insurance Limited",
    title: "CEIIL — Your Trusted Risk Advisor",
    description:
      "We don't just insure — we innovate, advocate, and elevate. Comprehensive indemnity insurance solutions across Nigeria.",
  },
  metadataBase: new URL("https://ceiil.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <meta name="theme-color" content="#00425B" />
      </head>
      <body style={{ fontFamily: "var(--font-nunito), 'Century Gothic', AppleGothic, sans-serif" }}>
        <PagePreloader />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

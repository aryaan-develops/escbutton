import type { Metadata } from "next";
import { Comfortaa, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const comfortaa = Comfortaa({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://escbutton.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "esc button — Affordable Web Design & Development India",
    template: "%s | esc button — Web Studio India",
  },

  description:
    "esc button is an affordable Indian freelance web studio. We design & build fast websites, landing pages, and apps for startups, small businesses, salons, and local brands across India. Starting ₹5,000. Pan-India service.",

  keywords: [
    // Core service keywords
    "freelance web designer India",
    "affordable website design India",
    "cheap website development India",
    "web design agency India",
    "website developer near me",
    "best freelance developer India",
    // Pan-India city targeting
    "web designer Delhi",
    "web designer Mumbai",
    "web designer Bangalore",
    "web designer Hyderabad",
    "web designer Pune",
    "web designer Chennai",
    "web designer Kolkata",
    "web designer Jaipur",
    "web designer Ahmedabad",
    "web designer Lucknow",
    "web designer Indore",
    "web designer Bhopal",
    // Jugaad / value keywords
    "cheap website India",
    "low budget website India",
    "sasta website banao",
    "affordable web development India",
    "budget website design",
    "website under 5000 rupees",
    "small business website India",
    "startup website India",
    // Tech keywords
    "Next.js developer India",
    "React developer India",
    "Tailwind CSS developer",
    "full stack developer India",
    "landing page designer India",
    "portfolio website India",
    "e-commerce website India",
    // Niche keywords
    "salon website design India",
    "yoga studio website India",
    "restaurant website India",
    "photography website India",
    "tailor website India",
    "local business website India",
    // Brand
    "esc button",
    "escbutton",
    "esc button web studio",
  ],

  authors: [{ name: "esc button", url: BASE_URL }],
  creator: "esc button",
  publisher: "esc button",

  category: "Web Design & Development",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "esc button",
    title: "esc button — Affordable Web Design & Development India",
    description:
      "We build fast, clean websites for Indian businesses starting ₹5,000. No agency prices, no jargon — just real results. Pan-India freelance web studio.",
    images: [
      {
        url: "/escfav.png",
        width: 1200,
        height: 630,
        alt: "esc button — Freelance Web Studio India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "esc button — Affordable Web Design & Development India",
    description:
      "Affordable websites for Indian startups, salons, studios & small businesses. Starting ₹5,000. Fast delivery. Pan-India service.",
    images: ["/escfav.png"],
    creator: "@escbutton",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },

  alternates: {
    canonical: BASE_URL,
  },

  verification: {
    google: "google-site-verification-placeholder",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "esc button",
      description:
        "Affordable freelance web design and development studio based in India. We build websites, landing pages, and apps for startups, salons, small businesses, and local brands across India.",
      url: BASE_URL,
      logo: `${BASE_URL}/escfav.png`,
      image: `${BASE_URL}/escfav.png`,
      email: "2005aryankumar333@gmail.com",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceArea: [
        "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune",
        "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Lucknow",
        "Indore", "Bhopal", "India",
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "UPI, Bank Transfer, Online",
      knowsLanguage: ["en", "hi"],
      sameAs: [BASE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "esc button",
      description: "Affordable freelance web studio — pan-India",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      name: "esc button",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/escfav.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "2005aryankumar333@gmail.com",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${comfortaa.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Geo tags for India */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        {/* Additional crawl hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen flex flex-col text-primary">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

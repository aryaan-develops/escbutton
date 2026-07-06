import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Hire a Web Designer in India | esc button",
  description:
    "Get in touch with esc button — affordable freelance web designer available for projects across India. Website starting ₹5,000. Fast reply within 24 hours.",
  keywords: [
    "hire web designer India",
    "freelance web developer contact India",
    "affordable website quote India",
    "website price India",
    "get website made India",
    "cheap web design quote",
    "website under 5000 rupees India",
    "hire developer India online",
  ],
  openGraph: {
    title: "Contact esc button — Hire an Affordable Web Designer in India",
    description:
      "Tell us about your project. We reply within 24 hours. Budget-friendly websites for Indian businesses.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

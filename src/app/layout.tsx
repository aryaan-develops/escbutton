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

export const metadata: Metadata = {
  title: "esc button — Web Design & Digital Help",
  description:
    "We design and build websites, fix digital problems, and help businesses grow online — at prices that won't break the bank.",
  keywords: [
    "freelance web developer",
    "affordable website design",
    "Next.js developer",
    "esc button",
    "web design portfolio",
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
      <body className="min-h-screen flex flex-col text-primary">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

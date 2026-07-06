import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — esc button",
  description: "A curated selection of websites and digital products we've designed and built for clients.",
};

const projects = [
  {
    img:   "/fintech.jpg",
    title: "Fintech Analytics Platform",
    desc:  "A high-performance dashboard for institutional investors. Real-time data visualisation, clean tables, and fast load times.",
    tags:  ["React", "Node.js", "Charts"],
    span:  "md:col-span-12 lg:col-span-8",
    aspect:"aspect-[16/9]",
  },
  {
    img:   "/taskflow.jpg",
    title: "Task Flow App",
    desc:  "A minimalist productivity app built for iOS and Android. Simple flows, no clutter, just clear daily task management.",
    tags:  ["React Native", "UX Design"],
    span:  "md:col-span-6 lg:col-span-4",
    aspect:"aspect-[4/3]",
  },
  {
    img:   "/web3.jpg",
    title: "Web3 Identity Protocol",
    desc:  "A decentralised identity landing page with interactive WebGL animations and smooth scroll storytelling.",
    tags:  ["Three.js", "Next.js", "Motion"],
    span:  "md:col-span-6 lg:col-span-4",
    aspect:"aspect-[4/3]",
  },
];

export default function Work() {
  return (
    <>
      {/* ── Header ─────────────────────────────────── */}
      <section className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28 overflow-hidden">
        <span className="floating-key top-16 right-12 text-4xl hidden lg:block" style={{ transform: "rotate(9deg)" }}>Space</span>
        <span className="floating-key bottom-8 left-8 text-3xl hidden lg:block" style={{ transform: "rotate(-7deg)" }}>Del</span>

        <p className="text-sm font-bold tracking-widest uppercase text-on-surface-variant mb-5">
          Our Work
        </p>
        <h1 className="brand-font text-[44px] md:text-[60px] font-extrabold leading-tight tracking-tight text-primary mb-6 max-w-2xl">
          Things we&apos;ve shipped.
        </h1>
        <p className="text-on-surface-variant text-base max-w-lg leading-relaxed">
          A curated selection of real projects — from full web applications to
          branding sites and mobile apps.
        </p>
      </section>

      <hr className="section-divider" />

      {/* ── Project Grid ───────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((p) => (
            <div key={p.title} className={`${p.span} sketchy-card overflow-hidden group cursor-pointer flex flex-col`}>
              <div className={`${p.aspect} w-full overflow-hidden bg-surface-container border-b-2 border-primary`}>
                <Image
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {p.tags.map((t) => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                  <h2 className="brand-font text-2xl font-bold text-primary mb-2">
                    {p.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                </div>
                <button className="mt-6 self-start flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                  View Details <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* "Add yours" card */}
          <div className="md:col-span-12 lg:col-span-8 sketchy-card p-10 flex flex-col justify-center items-start bg-white relative overflow-hidden">
            <span className="floating-key right-4 top-4 text-2xl" style={{ transform: "rotate(12deg)" }}>Fn</span>
            <h3 className="brand-font text-[28px] font-bold text-primary mb-4">
              Have a project in mind?
            </h3>
            <p className="text-on-surface-variant text-sm max-w-md mb-8 leading-relaxed">
              We&apos;re always happy to take on interesting work. Whether it&apos;s a brand new
              site or fixing something that&apos;s been broken — reach out and let&apos;s figure
              it out together.
            </p>
            <Link href="/contact" className="keycap-button keycap-button-primary px-8 py-3 text-sm">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Prototypes — Live Website Examples Made in India",
  description:
    "Browse live design prototypes by esc button — salon, yoga, library, tailor, photography, wellness, and productivity app websites. All built affordably for Indian clients.",
  keywords: [
    "website design prototypes India",
    "salon website design India",
    "yoga studio website India",
    "photography website India",
    "tailor website India",
    "library website India",
    "cheap landing page India",
    "sample websites India",
  ],
  openGraph: {
    title: "Design Prototypes — esc button",
    description: "Live prototypes for salons, yoga studios, libraries, tailors & more. Built affordable for India.",
  },
};

const projects = [
  {
    title: "Zial — Hair Studio & Salon",
    desc: "A sleek, modern booking-style landing page for a premium hair studio. Minimal layout, soft tones, and an elegant feel throughout.",
    link: "https://zialport.vercel.app/",
    image: "/salon.png",
    tag: "Salon & Beauty",
    accent: "bg-accent-pink",
  },
  {
    title: "Ankhaae — Mental Relaxation",
    desc: "A calming wellness website focused on mental health and mindfulness. Soft typography, serene visuals, and intentional whitespace.",
    link: "https://ankhaae.vercel.app/",
    image: "/mental.png",
    tag: "Wellness & Mental Health",
    accent: "bg-accent-blue",
  },
  {
    title: "Liba — Digital Library",
    desc: "A clean, bookish library website with searchable collections, shelf views, and a cozy reading-room vibe.",
    link: "https://liba-snowy.vercel.app/",
    image: "/library.png",
    tag: "Education & Culture",
    accent: "bg-accent-yellow",
  },
  {
    title: "Sui Dhaga — Tailor Studio",
    desc: "A stylish e-commerce-inspired website for a bespoke tailor. Showcasing fabric, craftsmanship, and custom clothing orders.",
    link: "https://sui-dhaga-ras1.vercel.app/",
    image: "/tailor.png",
    tag: "Fashion & Craft",
    accent: "bg-accent-green",
  },
  {
    title: "Smriti Yoga — Yoga Studio",
    desc: "A spiritual yoga studio site with class schedules, instructor profiles, and a warm earthy design philosophy.",
    link: "https://smritiyoga.vercel.app/",
    image: "/yoga.png",
    tag: "Health & Lifestyle",
    accent: "bg-accent-pink",
  },
  {
    title: "Rose Studio — Photography",
    desc: "An elegant photo studio portfolio featuring galleries, service packages, and a romantic, editorial design language.",
    link: "https://rosestudio.vercel.app/",
    image: "/photo.png",
    tag: "Photography & Art",
    accent: "bg-accent-blue",
  },
  {
    title: "TaskiMate — Task Manager",
    desc: "A productivity-focused task management app with a clean kanban-style board, priority flags, and a distraction-free interface.",
    link: "https://taskimatezz.vercel.app/",
    image: null, // will use an SVG placeholder
    tag: "Productivity & Tools",
    accent: "bg-accent-yellow",
  },
];

export default function Design() {
  return (
    <>
      {/* ── Header ─────────────────────────────────── */}
      <section className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28 overflow-hidden">
        {/* Floating decorative keys */}
        <span
          className="floating-key top-16 right-12 text-3xl hidden lg:block"
          style={{ transform: "rotate(8deg)" }}
        >
          Ctrl
        </span>
        <span
          className="floating-key bottom-10 left-6 text-4xl hidden lg:block"
          style={{ transform: "rotate(-7deg)" }}
        >
          Alt
        </span>

        <p className="text-sm font-bold tracking-widest uppercase text-on-surface-variant mb-5">
          Designs &amp; Prototypes
        </p>
        <h1 className="brand-font text-[44px] md:text-[60px] font-extrabold leading-tight tracking-tight text-primary mb-6 max-w-2xl">
          Real websites.{" "}
          <span className="hand-drawn-underline">Live today.</span>
        </h1>
        <p className="text-on-surface-variant text-base max-w-lg leading-relaxed">
          A collection of live prototypes and design experiments — each one
          built from scratch for a real-world use case. Click any card to
          explore it live.
        </p>
      </section>

      <hr className="section-divider" />

      {/* ── Project Grid ───────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sketchy-card overflow-hidden flex flex-col group no-underline"
            >
              {/* Image / placeholder */}
              <div className="aspect-[4/3] w-full overflow-hidden border-b-2 border-primary bg-surface-container relative">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  /* Fallback stylised placeholder for TaskiMate */
                  <div className={`w-full h-full ${p.accent} flex flex-col items-center justify-center gap-4`}>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="8" width="24" height="24" rx="4" stroke="#1a1c1c" strokeWidth="2.5" fill="white"/>
                      <rect x="40" y="8" width="24" height="24" rx="4" stroke="#1a1c1c" strokeWidth="2.5" fill="white"/>
                      <rect x="8" y="40" width="24" height="24" rx="4" stroke="#1a1c1c" strokeWidth="2.5" fill="white"/>
                      <rect x="40" y="40" width="24" height="24" rx="4" stroke="#1a1c1c" strokeWidth="2.5" fill="white"/>
                      <path d="M13 20l4 4 8-8" stroke="#1a1c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M45 20l4 4 8-8" stroke="#1a1c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 52l4 4 8-8" stroke="#1a1c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="brand-font font-extrabold text-primary text-lg">TaskiMate</span>
                  </div>
                )}

                {/* "Live" badge */}
                <span className="absolute top-3 right-3 bg-accent-green border-2 border-primary text-primary text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">
                  Live ↗
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span
                    className={`inline-block ${p.accent} border-2 border-primary text-primary text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded mb-4`}
                  >
                    {p.tag}
                  </span>
                  <h2 className="brand-font text-xl font-bold text-primary mb-2 leading-snug">
                    {p.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-primary group-hover:underline">
                  View Live Site <ExternalLink size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <h2 className="brand-font text-[36px] md:text-[44px] font-bold text-primary mb-5">
          Want something like this?
        </h2>
        <p className="text-on-surface-variant text-base mb-8 max-w-md mx-auto">
          Tell us what you need — we can design and build your website quickly
          and affordably.
        </p>
        <a href="/contact" className="keycap-button keycap-button-primary inline-flex px-10 py-4 text-base">
          Start a Project
        </a>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Affordable Freelance Web Studio India",
  description:
    "Learn about esc button — an affordable Indian freelance web studio building websites for small businesses, salons, startups, and local brands pan-India. Smart, fast, budget-friendly.",
  keywords: [
    "about esc button",
    "Indian freelance web studio",
    "affordable web developer India",
    "cheap website design India",
    "jugaad web design India",
    "small business website India",
    "budget web development",
  ],
  openGraph: {
    title: "About esc button — Budget Freelance Web Studio India",
    description: "Smart web solutions for Indian businesses. No bloat, no agency pricing — just results.",
  },
};

const stack = [
  { name: "Next.js",   emoji: "▲" },
  { name: "React",     emoji: "⚛" },
  { name: "Tailwind",  emoji: "🎨" },
  { name: "TypeScript",emoji: "📘" },
  { name: "Figma",     emoji: "🖌" },
  { name: "Vercel",    emoji: "🚀" },
];

const steps = [
  { n: "01", title: "Listen",  body: "We start by understanding you — your business, your audience, and what success actually looks like for you." },
  { n: "02", title: "Design",  body: "We sketch wireframes and create a visual direction that's clean, on-brand, and built for real people to use." },
  { n: "03", title: "Build",   body: "We write hand-crafted code using Next.js and Tailwind. No page builders, no bloat — just fast, clean sites." },
  { n: "04", title: "Launch",  body: "We deploy your site, set up your domain, and make sure everything works perfectly before handing it over." },
];

export default function About() {
  return (
    <>
      {/* ── Intro ──────────────────────────────────── */}
      <section className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-24 md:py-32 overflow-hidden">
        {/* Floating keys */}
        <span className="floating-key top-20 right-10 text-4xl hidden lg:block" style={{ transform: "rotate(10deg)" }}>Shift</span>
        <span className="floating-key bottom-16 left-8 text-3xl hidden lg:block" style={{ transform: "rotate(-8deg)" }}>Ctrl</span>

        <p className="text-sm font-bold tracking-widest uppercase text-on-surface-variant mb-5">About us</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="brand-font text-[44px] md:text-[58px] font-extrabold leading-tight tracking-tight text-primary mb-8">
              We build the web.<br />
              <span className="hand-drawn-underline">Cleanly.</span>
            </h1>
            <div className="space-y-5 text-on-surface-variant text-base leading-relaxed">
              <p>
                esc button is a one-person freelance studio focused on making the web feel
                easier. We work with small businesses, solo founders, and creative professionals
                who need a professional online presence without the agency price tag.
              </p>
              <p>
                We believe good websites don&apos;t need to be complicated. A clear message,
                fast loading, and a design that works on every screen — that&apos;s the goal
                every time.
              </p>
              <p>
                Based in India. Working with clients worldwide. Always human, always
                responsive.
              </p>
            </div>
          </div>

          {/* Facts panel */}
          <div className="sketchy-card p-8 bg-white flex flex-col gap-6">
            {[
              { label: "Projects shipped",  value: "20+" },
              { label: "Happy clients",     value: "15+" },
              { label: "Avg. delivery time",value: "2–3 wks" },
              { label: "Response time",     value: "< 24 hrs" },
            ].map((f) => (
              <div key={f.label} className="flex justify-between items-center border-b-2 border-dashed border-outline-variant pb-5 last:border-0 last:pb-0">
                <span className="text-sm font-semibold text-on-surface-variant">{f.label}</span>
                <span className="brand-font text-2xl font-extrabold text-primary">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── How we work ────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="brand-font text-[36px] md:text-[44px] font-bold text-primary mb-3">
            How we work
          </h2>
          <p className="text-on-surface-variant text-sm max-w-md mx-auto">
            Four simple steps from idea to live website.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="sketchy-card p-7 flex flex-col gap-4">
              <div className="step-circle">{s.n}</div>
              <h3 className="brand-font text-xl font-bold">{s.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Tech stack ─────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <h2 className="brand-font text-[36px] md:text-[44px] font-bold text-primary mb-3">
            Tools we use
          </h2>
          <p className="text-on-surface-variant text-sm">
            A focused stack chosen for speed, reliability, and great developer experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {stack.map((t) => (
            <div key={t.name} className="sketchy-card px-8 py-6 flex flex-col items-center gap-2 min-w-[110px]">
              <span className="text-3xl">{t.emoji}</span>
              <span className="brand-font font-bold text-sm text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA ────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <h2 className="brand-font text-[36px] md:text-[44px] font-bold text-primary mb-5">
          Sound like a good fit?
        </h2>
        <p className="text-on-surface-variant text-base mb-8 max-w-sm mx-auto">
          Tell us about your project — no commitment, no pressure.
        </p>
        <Link href="/contact" className="keycap-button keycap-button-primary inline-flex px-10 py-4 text-base">
          Get in Touch
        </Link>
      </section>
    </>
  );
}

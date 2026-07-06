import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/ab1.mp4"
        />

        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Decorative floating keys — sitting above overlay */}
        <span className="floating-key top-20 left-8 text-3xl hidden lg:block z-10 text-white border-white/40 opacity-20" style={{ transform: "rotate(-6deg)" }}>Esc</span>
        <span className="floating-key bottom-16 right-10 text-4xl hidden lg:block z-10 text-white border-white/40 opacity-20" style={{ transform: "rotate(8deg)" }}>Enter</span>
        <span className="floating-key top-36 right-16 text-2xl hidden lg:block z-10 text-white border-white/40 opacity-20" style={{ transform: "rotate(-10deg)" }}>Tab</span>

        {/* Content */}
        <div className="relative z-10 px-5 md:px-8 py-24 md:py-36 max-w-[1280px] mx-auto flex flex-col items-center">
          <p className="text-sm font-bold tracking-widest uppercase text-white/70 mb-5">
            Freelance Web Studio
          </p>

          <h1 className="brand-font text-[52px] md:text-[72px] font-extrabold leading-tight tracking-tight text-white mb-6 max-w-3xl">
            Turning{" "}
            <span className="relative inline-block">
              <span className="hand-drawn-underline">Ideas</span>
            </span>{" "}
            into Digital Reality.
          </h1>

          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            We design and build clean, fast websites for small businesses,
            startups, and creators — at prices that actually make sense.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <Link href="/contact" className="neon-glow-btn px-10 py-4 text-base">
              Hire Me
            </Link>
            <Link href="/work" className="keycap-button px-10 py-4 text-base border-2 border-white bg-white/10 text-white hover:bg-white/20">
              View Our Work
            </Link>
          </div>
        </div>
      </section>


      <hr className="section-divider" />

      {/* ── What we do ─────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="mb-14 text-center">
          <h2 className="brand-font text-[36px] md:text-[44px] font-bold text-primary mb-3">
            What we do
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto text-base">
            Three things, done really well.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎨",
              title: "Web Design",
              body: "Clean, modern interfaces that look great on every screen. We design with your audience in mind — simple, clear, and beautiful.",
              color: "bg-accent-pink",
            },
            {
              icon: "⚡",
              title: "Development",
              body: "Fast websites built with Next.js and Tailwind CSS. No page builders, no clutter — just hand-written code that loads in a blink.",
              color: "bg-accent-blue",
            },
            {
              icon: "🔧",
              title: "Digital Help",
              body: "Domain setup, deployment, bug fixing, SEO basics — we handle all the small technical things that slow you down.",
              color: "bg-accent-green",
            },
          ].map((s) => (
            <div key={s.title} className="sketchy-card p-8 flex flex-col items-start">
              <div className={`w-14 h-14 ${s.color} border-2 border-primary rounded-full flex items-center justify-center text-2xl mb-6`}>
                {s.icon}
              </div>
              <h3 className="brand-font text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Recent Work Teaser ──────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="brand-font text-[36px] md:text-[44px] font-bold text-primary mb-2">
              Recent Work
            </h2>
            <p className="text-on-surface-variant text-sm italic">A few things we've shipped recently.</p>
          </div>
          <Link href="/work" className="hidden md:flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
            See All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured — Indoshree */}
          <a
            href="https://indoshree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-7 sketchy-card overflow-hidden cursor-pointer group no-underline"
          >
            <div className="aspect-[16/9] overflow-hidden border-b-2 border-primary relative group">
              <Image
                src="/indoshree.png"
                alt="Indoshree"
                width={800}
                height={450}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <span className="absolute top-3 right-3 bg-accent-green border-2 border-primary text-primary text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">Live ↗</span>
            </div>
            <div className="p-8">

              <h3 className="brand-font text-2xl font-bold mb-2">Indoshree</h3>
              <p className="text-on-surface-variant text-sm">
                A beautifully crafted e-commerce experience built for Indoshree — clean
                layouts, smooth product browsing, and a strong brand identity.
              </p>
            </div>
          </a>

          {/* Small — DropPurity */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <a
              href="https://droppurity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sketchy-card overflow-hidden cursor-pointer group flex flex-col no-underline h-full"
            >
              <div className="aspect-[4/3] overflow-hidden border-b-2 border-primary relative">
                <Image
                  src="/droppurity.png"
                  alt="DropPurity"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <span className="absolute top-3 right-3 bg-accent-green border-2 border-primary text-primary text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">Live ↗</span>
              </div>
              <div className="p-5 flex-1">
                <h3 className="brand-font text-xl font-bold mb-1">DropPurity</h3>
                <p className="text-on-surface-variant text-xs mb-3">
                  A modern product landing page for a water purification brand — clean
                  visuals, strong copy, and conversion-first design.
                </p>

              </div>
            </a>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CTA Banner ─────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="sketchy-card p-12 md:p-16 text-center relative overflow-hidden">
          <span className="floating-key -left-4 bottom-4 text-5xl" style={{ transform: "rotate(-18deg)" }}>Alt</span>
          <span className="floating-key -right-4 top-4 text-3xl" style={{ transform: "rotate(12deg)" }}>Cmd</span>

          <h2 className="brand-font text-[40px] md:text-[52px] font-extrabold text-primary mb-5 relative z-10">
            Let&apos;s build together.
          </h2>
          <p className="text-on-surface-variant text-base max-w-md mx-auto mb-10 leading-relaxed relative z-10">
            Currently taking on new projects. If you have an idea and need someone
            reliable to bring it to life — let&apos;s talk.
          </p>
          <Link href="/contact" className="keycap-button keycap-button-primary inline-flex px-10 py-4 text-base relative z-10">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}

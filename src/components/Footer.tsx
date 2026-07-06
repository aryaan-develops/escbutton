import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface w-full border-t-2 border-primary">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-6">

        {/* Brand */}
        <div>
          <div className="brand-font text-[22px] font-extrabold tracking-tighter text-primary flex items-center gap-1.5 mb-1">
            <span className="keycap-logo text-[16px] px-2 py-0.5">esc</span>
            button
          </div>
          <p className="text-sm text-on-surface-variant italic">
            © {new Date().getFullYear()} escbutton. Hand-crafted with precision.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-semibold">
          <Link href="/"        className="text-primary hover:underline">Home</Link>
          <Link href="/about"   className="text-primary hover:underline">About</Link>
          <Link href="/work"    className="text-primary hover:underline">Work</Link>
          <Link href="/design"  className="text-primary hover:underline">Design</Link>
          <Link href="/contact" className="text-primary hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

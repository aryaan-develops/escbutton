"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",    href: "/"        },
  { label: "About",   href: "/about"   },
  { label: "Work",    href: "/work"    },
  { label: "Design",  href: "/design"  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b-2 border-primary">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex items-center justify-between h-20">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-1.5 brand-font text-[26px] font-extrabold tracking-tighter text-primary">
          <span className="keycap-logo text-[18px] py-0.5 px-2.5">esc</span>
          button
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors pb-0.5 ${
                  pathname === href
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="keycap-button keycap-button-primary text-sm px-6 py-2.5">
            Hire Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-primary p-1"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-2 border-primary p-6 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-base font-semibold border-b border-dashed border-gray-100 pb-2 ${
                pathname === href ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="keycap-button keycap-button-primary py-3 text-center w-full mt-2"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}

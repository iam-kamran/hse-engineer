"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/fundamentals/what-is-hse", label: "Fundamentals" },
  { href: "/certifications", label: "Certifications" },
  { href: "/incident-investigation", label: "Investigations" },
  { href: "/workplace-scenarios", label: "Scenarios" },
  { href: "/gulf-interview-prep/saudi-arabia", label: "Gulf Interview" },
  { href: "/glossary", label: "Glossary" },
  { href: "/progress", label: "My Progress" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-green-400">
            <span className="text-2xl">🦺</span>
            <span>HSE Engineer</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === l.href || pathname.startsWith(l.href + "/")
                    ? "bg-green-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-700 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href || pathname.startsWith(l.href + "/")
                  ? "bg-green-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";

interface SidebarLink {
  href: string;
  label: string;
  moduleId: string;
}

interface LearningSidebarProps {
  links: SidebarLink[];
  title: string;
}

export function LearningSidebar({ links, title }: LearningSidebarProps) {
  const pathname = usePathname();
  const { isCompleted } = useProgress();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed bottom-4 right-4 z-40 bg-green-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-slate-200 overflow-y-auto z-30 transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-slate-200">
          <h2 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">
            {title}
          </h2>
        </div>
        <nav className="p-3 space-y-0.5">
          {links.map((link) => {
            const active = pathname === link.href;
            const completed = isCompleted(link.moduleId);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "bg-green-50 text-green-700 font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    completed
                      ? "border-green-500 bg-green-500"
                      : "border-slate-300"
                  }`}
                >
                  {completed && (
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-20"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

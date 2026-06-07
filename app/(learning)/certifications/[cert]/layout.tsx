"use client";
import { LearningSidebar } from "@/components/layout/LearningSidebar";
import Link from "next/link";

const certMeta: Record<string, { title: string; modules: { slug: string; label: string }[] }> = {
  "nebosh-igc": {
    title: "NEBOSH IGC",
    modules: [
      { slug: "element-1", label: "Element 1: Why Manage H&S" },
      { slug: "element-2", label: "Element 2: Management Systems" },
      { slug: "element-3", label: "Element 3: Managing Risk" },
      { slug: "element-4", label: "Element 4: Monitoring & Measuring" },
      { slug: "element-5", label: "Element 5: Physical & Psychological Health" },
      { slug: "element-6", label: "Element 6: Musculoskeletal Health" },
      { slug: "element-7", label: "Element 7: Chemical & Biological" },
      { slug: "element-8", label: "Element 8: General Workplace" },
      { slug: "element-9", label: "Element 9: Work Equipment" },
      { slug: "element-10", label: "Element 10: Fire" },
      { slug: "element-11", label: "Element 11: Electricity" },
      { slug: "element-12", label: "Element 12: Construction" },
      { slug: "ig2-practical", label: "IG2: Practical Assessment" },
      { slug: "exam-prep", label: "Exam Preparation" },
    ],
  },
  iosh: {
    title: "IOSH Managing Safely",
    modules: [
      { slug: "module-1", label: "Module 1: Introducing Managing Safely" },
      { slug: "module-2", label: "Module 2: Assessing Risks" },
      { slug: "module-3", label: "Module 3: Controlling Risks" },
      { slug: "module-4", label: "Module 4: Understanding Responsibilities" },
      { slug: "module-5", label: "Module 5: Identifying Hazards" },
      { slug: "module-6", label: "Module 6: Investigating Incidents" },
      { slug: "module-7", label: "Module 7: Measuring Performance" },
    ],
  },
  osha: {
    title: "OSHA 30-Hour",
    modules: [
      { slug: "construction-intro", label: "Construction: Introduction & OSH Act" },
      { slug: "construction-falls", label: "Construction: Fall Protection" },
      { slug: "construction-electrical", label: "Construction: Electrical Safety" },
      { slug: "construction-scaffolds", label: "Construction: Scaffolding" },
      { slug: "construction-excavations", label: "Construction: Excavations & Trenching" },
      { slug: "construction-cranes", label: "Construction: Cranes & Rigging" },
      { slug: "construction-hazcom", label: "Construction: HazCom / GHS" },
      { slug: "construction-ppe", label: "Construction: PPE" },
      { slug: "construction-fire", label: "Construction: Fire Protection" },
      { slug: "construction-tools", label: "Construction: Hand & Power Tools" },
      { slug: "general-intro", label: "General Industry: Introduction" },
      { slug: "general-hazcom", label: "General Industry: HazCom" },
      { slug: "general-lockout", label: "General Industry: Lockout/Tagout" },
      { slug: "general-confined", label: "General Industry: Confined Spaces" },
      { slug: "general-electrical", label: "General Industry: Electrical Safety" },
      { slug: "general-ppe", label: "General Industry: PPE" },
      { slug: "general-fire", label: "General Industry: Fire Safety & EAPs" },
      { slug: "general-ergonomics", label: "General Industry: Ergonomics" },
      { slug: "general-msd", label: "General Industry: Machine Guarding" },
      { slug: "general-recordkeeping", label: "General Industry: Recordkeeping" },
    ],
  },
  "first-aid": {
    title: "First Aid / CPR",
    modules: [
      { slug: "scene-safety", label: "Module 1: Scene Safety" },
      { slug: "cpr-aed", label: "Module 2: CPR & AED" },
      { slug: "wound-management", label: "Module 3: Wound Management" },
      { slug: "fractures-burns", label: "Module 4: Fractures & Burns" },
      { slug: "heat-cold", label: "Module 5: Heat & Cold Injuries" },
      { slug: "h2s-response", label: "Module 6: H2S & Chemical Emergencies" },
    ],
  },
  "nebosh-diploma": {
    title: "NEBOSH Diploma",
    modules: [
      { slug: "unit-a", label: "Unit A: Managing H&S" },
      { slug: "unit-b", label: "Unit B: Hazardous Agents" },
      { slug: "unit-c", label: "Unit C: Work Equipment Safety" },
      { slug: "unit-d", label: "Unit D: Specialist Hazards" },
      { slug: "unit-e", label: "Unit E: Environmental Management" },
    ],
  },
  "iso-auditor": {
    title: "ISO 45001 / 14001 Auditor",
    modules: [
      { slug: "iso-45001-overview", label: "ISO 45001: Overview" },
      { slug: "iso-45001-clauses", label: "ISO 45001: Clauses 4–10" },
      { slug: "iso-14001-overview", label: "ISO 14001: Overview" },
      { slug: "iso-14001-clauses", label: "ISO 14001: Clauses 4–10" },
      { slug: "audit-planning", label: "Audit Planning" },
      { slug: "conducting-audits", label: "Conducting Audits" },
      { slug: "audit-reporting", label: "Audit Reporting" },
    ],
  },
};

export default function CertLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cert: string };
}) {
  const meta = certMeta[params.cert];
  if (!meta) return <div className="p-8">{children}</div>;

  const links = meta.modules.map((m) => ({
    href: `/certifications/${params.cert}/${m.slug}`,
    label: m.label,
    moduleId: `certifications/${params.cert}/${m.slug}`,
  }));

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-col w-64 flex-shrink-0 bg-white border-r border-slate-200 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-4 border-b border-slate-200">
          <Link
            href={`/certifications/${params.cert}`}
            className="text-xs font-semibold text-slate-500 uppercase tracking-wide hover:text-green-700 transition-colors"
          >
            ← {meta.title}
          </Link>
        </div>
        <LearningSidebar links={links} title={meta.title} />
        <div className="p-4 border-t border-slate-200 space-y-2 mt-auto">
          <Link
            href={`/certifications/${params.cert}/quiz`}
            className="block text-center text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg py-2 transition-colors"
          >
            Practice Quiz
          </Link>
          <Link
            href={`/certifications/${params.cert}/interview-prep`}
            className="block text-center text-sm font-medium bg-green-50 hover:bg-green-100 text-green-700 rounded-lg py-2 transition-colors"
          >
            Interview Prep
          </Link>
        </div>
      </div>

      <div className="flex-1 min-w-0 max-w-4xl">
        {/* Mobile module nav */}
        <div className="lg:hidden border-b border-slate-200 bg-white">
          <details className="group">
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none select-none">
              <div className="flex items-center gap-2">
                <Link
                  href={`/certifications/${params.cert}`}
                  className="text-xs font-semibold text-green-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  ← {meta.title}
                </Link>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500">All modules</span>
              </div>
              <svg
                className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="border-t border-slate-100 pb-2 max-h-72 overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors border-b border-slate-50 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 px-4 pt-3 pb-2">
                <Link
                  href={`/certifications/${params.cert}/quiz`}
                  className="flex-1 text-center text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg py-2 transition-colors"
                >
                  Practice Quiz
                </Link>
                <Link
                  href={`/certifications/${params.cert}/interview-prep`}
                  className="flex-1 text-center text-xs font-medium bg-green-50 hover:bg-green-100 text-green-700 rounded-lg py-2 transition-colors"
                >
                  Interview Prep
                </Link>
              </div>
            </div>
          </details>
        </div>

        <div className="p-6 lg:p-10">{children}</div>
      </div>
    </div>
  );
}

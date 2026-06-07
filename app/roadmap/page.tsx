import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSE Career Roadmap | HSE Engineer",
  description:
    "Step-by-step learning path from zero to Gulf-ready HSE professional. Seven phases covering fundamentals, IOSH, NEBOSH IGC, OSHA, First Aid, Gulf interview prep, and advanced certifications.",
};

const phases = [
  {
    number: 1,
    title: "HSE Fundamentals",
    duration: "1–2 weeks",
    color: "green",
    description: "Master the core concepts every HSE professional must know.",
    items: [
      { label: "What is HSE", href: "/fundamentals/what-is-hse" },
      { label: "Hazard vs Risk", href: "/fundamentals/hazard-vs-risk" },
      { label: "Types of Hazards", href: "/fundamentals/types-of-hazards" },
      { label: "Incident vs Accident", href: "/fundamentals/incident-vs-accident" },
      { label: "Safety Culture", href: "/fundamentals/safety-culture" },
      { label: "HSE in the Gulf", href: "/fundamentals/hse-in-the-gulf" },
    ],
    certGoal: null,
  },
  {
    number: 2,
    title: "IOSH Managing Safely",
    duration: "2–4 weeks",
    color: "blue",
    description: "Your first formal certification. Practical, beginner-friendly, globally recognised.",
    items: [
      { label: "Module 1: Introducing Managing Safely", href: "/certifications/iosh" },
      { label: "Module 2: Assessing Risks", href: "/certifications/iosh" },
      { label: "Module 3: Controlling Risks", href: "/certifications/iosh" },
      { label: "Module 4: Understanding Your Responsibilities", href: "/certifications/iosh" },
      { label: "Module 5: Identifying Hazards", href: "/certifications/iosh" },
      { label: "Module 6: Investigating Incidents", href: "/certifications/iosh" },
      { label: "Module 7: Measuring Performance", href: "/certifications/iosh" },
    ],
    certGoal: "IOSH Managing Safely Certificate",
  },
  {
    number: 3,
    title: "NEBOSH IGC",
    duration: "3–6 months",
    color: "yellow",
    description: "The most demanded qualification in the Gulf. 12 elements + practical assessment.",
    items: [
      { label: "IG1: Management of International Health & Safety (12 elements)", href: "/certifications/nebosh-igc" },
      { label: "IG2: Risk Assessment (Practical)", href: "/certifications/nebosh-igc" },
      { label: "Exam Preparation", href: "/certifications/nebosh-igc" },
    ],
    certGoal: "NEBOSH International General Certificate",
  },
  {
    number: 4,
    title: "OSHA 30-Hour",
    duration: "1–2 months",
    color: "orange",
    description: "Essential for O&G and construction. Choose your track: Construction or General Industry.",
    items: [
      { label: "Construction Track (10 modules)", href: "/certifications/osha" },
      { label: "General Industry Track (10 modules)", href: "/certifications/osha" },
    ],
    certGoal: "OSHA 30-Hour Card",
  },
  {
    number: 5,
    title: "First Aid & CPR",
    duration: "1 week",
    color: "red",
    description: "Required for most HSE roles. Gulf-specific emergencies including H2S and heat stroke.",
    items: [
      { label: "First Aid / CPR Modules", href: "/certifications/first-aid" },
    ],
    certGoal: "First Aid / CPR Certificate",
  },
  {
    number: 6,
    title: "Gulf Interview Preparation",
    duration: "2–4 weeks",
    color: "purple",
    description: "Targeted prep for Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Oil & Gas interviews.",
    items: [
      { label: "Saudi Arabia", href: "/gulf-interview-prep/saudi-arabia" },
      { label: "UAE", href: "/gulf-interview-prep/uae" },
      { label: "Qatar", href: "/gulf-interview-prep/qatar" },
      { label: "Kuwait", href: "/gulf-interview-prep/kuwait" },
      { label: "Oman", href: "/gulf-interview-prep/oman" },
      { label: "Oil & Gas", href: "/gulf-interview-prep/oil-gas" },
    ],
    certGoal: null,
  },
  {
    number: 7,
    title: "Advanced Certifications (Optional)",
    duration: "6–18 months",
    color: "slate",
    description: "For senior roles and management tracks.",
    items: [
      { label: "NEBOSH Diploma", href: "/certifications/nebosh-diploma" },
      { label: "ISO 45001 / 14001 Lead Auditor", href: "/certifications/iso-auditor" },
    ],
    certGoal: null,
  },
];

const colorMap: Record<string, string> = {
  green: "bg-green-500 border-green-500",
  blue: "bg-blue-500 border-blue-500",
  yellow: "bg-yellow-500 border-yellow-500",
  orange: "bg-orange-500 border-orange-500",
  red: "bg-red-500 border-red-500",
  purple: "bg-purple-500 border-purple-500",
  slate: "bg-slate-500 border-slate-500",
};

const lightColorMap: Record<string, string> = {
  green: "border-green-200 bg-green-50",
  blue: "border-blue-200 bg-blue-50",
  yellow: "border-yellow-200 bg-yellow-50",
  orange: "border-orange-200 bg-orange-50",
  red: "border-red-200 bg-red-50",
  purple: "border-purple-200 bg-purple-50",
  slate: "border-slate-200 bg-slate-50",
};

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <nav className="text-sm text-slate-500 mb-4">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Roadmap</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">HSE Career Roadmap</h1>
        <p className="text-slate-600 max-w-2xl">
          A step-by-step path from zero to Gulf-ready HSE professional. Follow the
          phases in order for the most efficient learning journey.
        </p>
      </div>

      <div className="space-y-8">
        {phases.map((phase) => (
          <div key={phase.number} className={`border-2 rounded-xl p-6 ${lightColorMap[phase.color]}`}>
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg ${colorMap[phase.color]}`}
              >
                {phase.number}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <h2 className="text-xl font-bold text-slate-900">{phase.title}</h2>
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-500">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mt-1">{phase.description}</p>
              </div>
            </div>

            <ul className="space-y-1 mb-4">
              {phase.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-green-700 transition-colors py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {phase.certGoal && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/60">
                <span className="text-lg">🏅</span>
                <span className="text-sm font-medium text-slate-700">{phase.certGoal}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

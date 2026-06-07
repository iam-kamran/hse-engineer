import Link from "next/link";
import { getIncidentCases } from "@/lib/data-loaders";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incident Investigation | HSE Engineer",
  description:
    "NEBOSH accident investigation methodology with real case studies: fall from height, H2S exposure, confined space fatality. Immediate–underlying–root cause analysis with corrective action plans.",
};

const methodology = [
  {
    step: 1,
    label: "Scene Preservation",
    desc: "Secure the area, prevent access, preserve all physical evidence before anything is moved.",
    color: "bg-red-500",
  },
  {
    step: 2,
    label: "Evidence Collection",
    desc: "Photographs, witness interviews, documentary records (PTW, training logs, CCTV).",
    color: "bg-orange-500",
  },
  {
    step: 3,
    label: "Cause Analysis",
    desc: "Apply the NEBOSH framework: identify immediate causes first, then underlying, then root causes.",
    color: "bg-yellow-500",
  },
  {
    step: 4,
    label: "Corrective Actions",
    desc: "Develop a prioritised action plan — immediate, short-term, and long-term — with owners and deadlines.",
    color: "bg-green-500",
  },
  {
    step: 5,
    label: "Report & Close-Out",
    desc: "Submit regulatory notification, share lessons learned, verify corrective actions are implemented.",
    color: "bg-blue-500",
  },
];

export default function IncidentInvestigationPage() {
  const cases = getIncidentCases();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Incident Investigation" },
        ]}
      />

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🔍</span>
          <h1 className="text-3xl font-bold text-slate-900">Incident Investigation</h1>
        </div>
        <p className="text-slate-600 text-lg max-w-3xl">
          Master the NEBOSH accident investigation methodology — from scene preservation to root cause
          analysis and corrective action planning. Real case studies drawn from Gulf region incidents.
        </p>
      </header>

      {/* NEBOSH Methodology */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-2">NEBOSH Investigation Methodology</h2>
        <p className="text-slate-500 text-sm mb-6">
          NEBOSH uses a three-level cause model: <strong>Immediate Causes</strong> (the unsafe acts and conditions you
          see at the scene), <strong>Underlying Causes</strong> (the management system failures that allowed those
          conditions), and <strong>Root Causes</strong> (the fundamental organisational failures behind everything).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: "Immediate Causes",
              sub: "What caused the injury directly?",
              icon: "⚡",
              color: "border-red-300 bg-red-50",
              items: ["Unsafe acts (what the person did)", "Unsafe conditions (physical state of the environment)"],
            },
            {
              title: "Underlying Causes",
              sub: "Why did those acts/conditions exist?",
              icon: "🔧",
              color: "border-orange-300 bg-orange-50",
              items: [
                "Failures in training, supervision, or procedures",
                "Equipment or workplace design failures",
              ],
            },
            {
              title: "Root Causes",
              sub: "Why did the management system allow it?",
              icon: "🌱",
              color: "border-green-300 bg-green-50",
              items: [
                "Policy, culture, or leadership failures",
                "Lack of risk assessment or audit processes",
              ],
            },
          ].map((c) => (
            <div key={c.title} className={`rounded-xl border-2 p-5 ${c.color}`}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
              <p className="text-xs text-slate-500 mb-3 italic">{c.sub}</p>
              <ul className="space-y-1">
                {c.items.map((item) => (
                  <li key={item} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          5-Step Investigation Process
        </h3>
        <div className="space-y-3">
          {methodology.map((m) => (
            <div key={m.step} className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-8 h-8 ${m.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
              >
                {m.step}
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 flex-1">
                <p className="font-semibold text-slate-900 text-sm">{m.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Real Case Studies</h2>
        <p className="text-slate-500 text-sm mb-6">
          Each case applies the full NEBOSH investigation methodology to a realistic Gulf region incident,
          with step-by-step cause analysis and a complete corrective action plan.
        </p>
        <div className="space-y-4">
          {cases.map((c) => (
            <Link
              key={c.id}
              href={`/incident-investigation/${c.id}`}
              className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-green-400 hover:shadow-sm transition-all group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <DifficultyBadge difficulty={c.difficulty} />
                  <span className="text-xs text-slate-400">~{c.estimatedReadTime} min read</span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                  {c.title}
                </h3>
                {c.learningObjectives.length > 0 && (
                  <p className="text-sm text-slate-500 mt-1">{c.learningObjectives[0]}</p>
                )}
              </div>
              <svg
                className="w-5 h-5 text-slate-300 group-hover:text-green-500 transition-colors flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

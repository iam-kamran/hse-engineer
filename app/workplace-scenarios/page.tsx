import Link from "next/link";
import { getWorkplaceScenarios } from "@/lib/data-loaders";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workplace Scenarios | HSE Engineer",
  description:
    "Real organisation-level HSE situations with step-by-step action plans and solutions. Contractor management, permit to work, PPE enforcement, incident response, and more.",
};

const categoryColors: Record<string, string> = {
  "Contractor Management": "bg-blue-100 text-blue-700",
  "Permit to Work": "bg-orange-100 text-orange-700",
  "Behavioural Safety": "bg-purple-100 text-purple-700",
  "Incident Investigation": "bg-red-100 text-red-700",
  "Incident Response": "bg-red-100 text-red-700",
  "Audit & Compliance": "bg-yellow-100 text-yellow-700",
  "Emergency Response": "bg-rose-100 text-rose-700",
};

export default function WorkplaceScenariosPage() {
  const scenarios = getWorkplaceScenarios();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Workplace Scenarios" },
        ]}
      />

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🏗️</span>
          <h1 className="text-3xl font-bold text-slate-900">Workplace Scenarios</h1>
        </div>
        <p className="text-slate-600 text-lg max-w-3xl">
          Real organisation-level HSE situations you will face as a safety professional. Each scenario
          comes with immediate action items, short-term corrective actions, long-term solutions, and what
          NOT to do — aligned with Gulf region best practices.
        </p>
      </header>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <div className="flex items-start gap-3">
          <span className="text-amber-500 text-xl flex-shrink-0">💡</span>
          <div>
            <p className="font-semibold text-amber-800 mb-1">How to Use These Scenarios</p>
            <p className="text-amber-700 text-sm">
              Read the context and challenge, then try to formulate your own response before revealing the
              action items. These scenarios are also ideal for NEBOSH exam preparation — many are based
              on the type of applied knowledge questions that appear in IG1 open-book assessments.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {scenarios.map((s) => (
          <Link
            key={s.id}
            href={`/workplace-scenarios/${s.id}`}
            className="flex flex-col p-5 bg-white border border-slate-200 rounded-xl hover:border-green-400 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  categoryColors[s.category] ?? "bg-slate-100 text-slate-600"
                }`}
              >
                {s.category}
              </span>
              <DifficultyBadge difficulty={s.difficulty} />
            </div>
            <h3 className="font-bold text-slate-900 group-hover:text-green-700 transition-colors mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-2 flex-1">{s.context}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-wrap gap-1">
                {s.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-slate-400 flex-shrink-0">~{s.estimatedReadTime} min</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { getWorkplaceScenario, getWorkplaceScenarios } from "@/lib/data-loaders";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getWorkplaceScenarios().map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const s = getWorkplaceScenario(params.id);
  if (!s) return { title: "Scenario | HSE Engineer" };
  return {
    title: `${s.title} | HSE Engineer`,
    description: s.context.slice(0, 160),
  };
}

function ActionSection({
  title,
  items,
  color,
  icon,
}: {
  title: string;
  items: string[];
  color: string;
  icon: string;
}) {
  return (
    <div className={`rounded-xl border-2 p-5 ${color} mb-5`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ScenarioPage({ params }: { params: { id: string } }) {
  const s = getWorkplaceScenario(params.id);
  if (!s) notFound();

  const all = getWorkplaceScenarios();
  const idx = all.findIndex((x) => x.id === s.id);
  const prev = all[idx - 1];
  const next = all[idx + 1];

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Workplace Scenarios", href: "/workplace-scenarios" },
          { label: s.title },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <DifficultyBadge difficulty={s.difficulty} />
          <span className="text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-xs font-medium">
            {s.category}
          </span>
          <span className="text-sm text-slate-400">~{s.estimatedReadTime} min</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{s.title}</h1>
        <div className="flex flex-wrap gap-1 mb-4">
          {s.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
        {s.neboshElement && (
          <div className="text-xs bg-green-50 border border-green-200 rounded px-3 py-1.5 text-green-700 font-medium inline-block">
            {s.neboshElement}
          </div>
        )}
      </header>

      {/* Context */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
        <h2 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">The Situation</h2>
        <p className="text-slate-700 leading-relaxed">{s.context}</p>
      </div>

      {/* Challenge */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8">
        <h2 className="font-bold text-blue-800 mb-2">The Challenge</h2>
        <p className="text-blue-700 leading-relaxed">{s.challenge}</p>
      </div>

      {/* Action Sections */}
      <ActionSection
        title="Immediate Actions (Right Now)"
        items={s.immediateActions}
        color="border-red-200 bg-red-50"
        icon="🚨"
      />
      <ActionSection
        title="Short-Term Actions (Within Days)"
        items={s.shortTermActions}
        color="border-orange-200 bg-orange-50"
        icon="📋"
      />
      <ActionSection
        title="Long-Term Actions (Systemic Fixes)"
        items={s.longTermActions}
        color="border-green-200 bg-green-50"
        icon="🔧"
      />

      {/* What NOT to do */}
      <div className="rounded-xl border-2 border-red-300 bg-red-50 p-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">⚠️</span>
          <h3 className="font-bold text-red-800">What NOT to Do</h3>
        </div>
        <ul className="space-y-2">
          {s.whatNotToDo.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-red-700">
              <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Principle */}
      <div className="bg-blue-600 text-white rounded-xl p-5 mb-6">
        <h3 className="font-bold mb-2 text-sm uppercase tracking-wide opacity-80">Key Principle</h3>
        <p className="leading-relaxed">{s.keyPrinciple}</p>
      </div>

      {/* Gulf Context */}
      {s.gulfContext && (
        <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <span className="text-amber-500 text-xl flex-shrink-0">🌍</span>
          <div>
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Gulf Context</p>
            <p className="text-amber-800 text-sm leading-relaxed">{s.gulfContext}</p>
          </div>
        </div>
      )}

      {/* Regulatory References */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          Regulatory References
        </h3>
        <ul className="space-y-1">
          {s.regulatoryRefs.map((ref, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
              <span className="text-slate-400 flex-shrink-0">→</span>
              {ref}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <nav className="grid grid-cols-2 gap-4 mb-6">
        {prev && (
          <Link
            href={`/workplace-scenarios/${prev.id}`}
            className="flex flex-col items-start p-4 border border-slate-200 rounded-lg hover:border-green-400 hover:shadow-sm transition-all group"
          >
            <span className="text-xs text-slate-400 mb-1">← Previous</span>
            <span className="text-sm font-medium text-slate-700 group-hover:text-green-700">{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link
            href={`/workplace-scenarios/${next.id}`}
            className="flex flex-col items-end p-4 border border-slate-200 rounded-lg hover:border-green-400 hover:shadow-sm transition-all group col-start-2"
          >
            <span className="text-xs text-slate-400 mb-1">Next →</span>
            <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 text-right">
              {next.title}
            </span>
          </Link>
        )}
      </nav>

      <div className="text-center">
        <Link href="/workplace-scenarios" className="text-sm text-green-600 hover:text-green-700 font-medium">
          ← All Scenarios
        </Link>
      </div>
    </article>
  );
}

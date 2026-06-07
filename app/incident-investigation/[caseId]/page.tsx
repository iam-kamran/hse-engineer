import { getIncidentCase, getIncidentCases } from "@/lib/data-loaders";
import { ModuleContent } from "@/components/content/ModuleContent";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getIncidentCases().map((c) => ({ caseId: c.id }));
}

export function generateMetadata({ params }: { params: { caseId: string } }): Metadata {
  const c = getIncidentCase(params.caseId);
  if (!c) return { title: "Case Study | HSE Engineer" };
  return {
    title: `${c.title} | HSE Engineer`,
    description: c.learningObjectives[0] ?? "",
  };
}

export default function IncidentCasePage({ params }: { params: { caseId: string } }) {
  const c = getIncidentCase(params.caseId);
  if (!c) notFound();

  const all = getIncidentCases();
  const idx = all.findIndex((x) => x.id === c.id);
  const prev = all[idx - 1];
  const next = all[idx + 1];

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Incident Investigation", href: "/incident-investigation" },
          { label: c.title },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <DifficultyBadge difficulty={c.difficulty} />
          <span className="text-sm text-slate-400">~{c.estimatedReadTime} min read</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{c.title}</h1>
        {c.learningObjectives.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="font-semibold text-green-800 mb-2 text-sm uppercase tracking-wide">
              Learning Objectives
            </h2>
            <ul className="space-y-1">
              {c.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                  <span className="mt-0.5">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <ModuleContent blocks={c.content} />

      <nav className="mt-10 grid grid-cols-2 gap-4">
        {prev && (
          <Link
            href={`/incident-investigation/${prev.id}`}
            className="flex flex-col items-start p-4 border border-slate-200 rounded-lg hover:border-green-400 hover:shadow-sm transition-all group"
          >
            <span className="text-xs text-slate-400 mb-1">← Previous Case</span>
            <span className="text-sm font-medium text-slate-700 group-hover:text-green-700">{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link
            href={`/incident-investigation/${next.id}`}
            className="flex flex-col items-end p-4 border border-slate-200 rounded-lg hover:border-green-400 hover:shadow-sm transition-all group col-start-2"
          >
            <span className="text-xs text-slate-400 mb-1">Next Case →</span>
            <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 text-right">
              {next.title}
            </span>
          </Link>
        )}
      </nav>

      <div className="mt-6 text-center">
        <Link
          href="/incident-investigation"
          className="text-sm text-green-600 hover:text-green-700 font-medium"
        >
          ← All Case Studies
        </Link>
      </div>
    </article>
  );
}

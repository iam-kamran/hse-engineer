import { notFound } from "next/navigation";
import { getFundamentalModule, getFundamentalModules } from "@/lib/data-loaders";
import { ModuleContent } from "@/components/content/ModuleContent";
import { ModuleCompletionButton } from "@/components/progress/ModuleCompletionButton";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import Link from "next/link";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const mod = getFundamentalModule(params.slug);
  if (!mod) return { title: "HSE Fundamentals | HSE Engineer" };
  return {
    title: `${mod.title} | HSE Engineer`,
    description: mod.learningObjectives.slice(0, 2).join(" · ").slice(0, 160),
  };
}

export async function generateStaticParams() {
  const mods = getFundamentalModules();
  return mods.map((m) => ({ slug: m.id.replace("fundamentals/", "") }));
}

export default function FundamentalsModulePage({
  params,
}: {
  params: { slug: string };
}) {
  const mod = getFundamentalModule(params.slug);
  if (!mod) notFound();

  const all = getFundamentalModules();
  const idx = all.findIndex((m) => m.id === mod.id);
  const prev = all[idx - 1];
  const next = all[idx + 1];

  return (
    <article>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Fundamentals", href: "/fundamentals/what-is-hse" },
          { label: mod.title },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <DifficultyBadge difficulty={mod.difficulty} />
          <span className="text-sm text-slate-400">
            ~{mod.estimatedReadTime} min read
          </span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{mod.title}</h1>
        {mod.learningObjectives.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="font-semibold text-green-800 mb-2 text-sm uppercase tracking-wide">
              Learning Objectives
            </h2>
            <ul className="space-y-1">
              {mod.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                  <span className="mt-0.5">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <ModuleContent blocks={mod.content} />

      <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
        <ModuleCompletionButton moduleId={mod.id} />
        {mod.quizId && (
          <Link
            href={`/certifications/${mod.quizId}/quiz`}
            className="text-green-600 hover:text-green-700 font-medium text-sm"
          >
            Take Quiz →
          </Link>
        )}
      </div>

      <nav className="mt-8 grid grid-cols-2 gap-4">
        {prev && (
          <Link
            href={`/fundamentals/${prev.id.replace("fundamentals/", "")}`}
            className="flex flex-col items-start p-4 border border-slate-200 rounded-lg hover:border-green-400 hover:shadow-sm transition-all group"
          >
            <span className="text-xs text-slate-400 mb-1">← Previous</span>
            <span className="text-sm font-medium text-slate-700 group-hover:text-green-700">
              {prev.title}
            </span>
          </Link>
        )}
        {next && (
          <Link
            href={`/fundamentals/${next.id.replace("fundamentals/", "")}`}
            className="flex flex-col items-end p-4 border border-slate-200 rounded-lg hover:border-green-400 hover:shadow-sm transition-all group col-start-2"
          >
            <span className="text-xs text-slate-400 mb-1">Next →</span>
            <span className="text-sm font-medium text-slate-700 group-hover:text-green-700 text-right">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}

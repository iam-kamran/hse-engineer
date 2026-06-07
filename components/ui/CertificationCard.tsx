import Link from "next/link";
import { CertSection } from "@/types/module";
import { DifficultyBadge } from "./DifficultyBadge";

const demandColors: Record<CertSection["demandLevel"], string> = {
  high: "text-green-600",
  medium: "text-yellow-600",
  specialized: "text-purple-600",
};

const demandLabels: Record<CertSection["demandLevel"], string> = {
  high: "High Demand",
  medium: "Medium Demand",
  specialized: "Specialized",
};

export function CertificationCard({ cert }: { cert: CertSection }) {
  return (
    <Link
      href={`/certifications/${cert.slug}`}
      className="block bg-white rounded-xl border border-slate-200 hover:border-green-400 hover:shadow-md transition-all p-6 group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{cert.icon}</span>
        <DifficultyBadge difficulty={cert.difficulty} />
      </div>
      <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-green-700 transition-colors">
        {cert.title}
      </h3>
      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{cert.description}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">
          {cert.moduleCount} modules · ~{cert.estimatedHours}h
        </span>
        <span className={`font-medium ${demandColors[cert.demandLevel]}`}>
          {demandLabels[cert.demandLevel]}
        </span>
      </div>
    </Link>
  );
}

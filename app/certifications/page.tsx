import Link from "next/link";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { CertSection } from "@/types/module";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Certifications | HSE Engineer",
  description:
    "Browse all HSE certifications: NEBOSH IGC, IOSH Managing Safely, OSHA 30-Hour, First Aid/CPR, NEBOSH Diploma, and ISO 45001/14001 Lead Auditor — with free modules, MCQ quizzes, and Gulf interview prep.",
};

const certifications: CertSection[] = [
  {
    id: "nebosh-igc",
    title: "NEBOSH IGC",
    description:
      "The world's most recognized health & safety qualification. Covers 12 elements of international health & safety management.",
    icon: "🏆",
    difficulty: "intermediate",
    moduleCount: 14,
    estimatedHours: 40,
    demandLevel: "high",
    slug: "nebosh-igc",
  },
  {
    id: "iosh",
    title: "IOSH Managing Safely",
    description:
      "Practical safety management for supervisors and managers. Risk assessment, incident investigation, and performance measurement.",
    icon: "📋",
    difficulty: "beginner",
    moduleCount: 7,
    estimatedHours: 24,
    demandLevel: "high",
    slug: "iosh",
  },
  {
    id: "osha",
    title: "OSHA 30-Hour",
    description:
      "US OSHA standard, widely required in Gulf O&G projects. Construction and General Industry tracks.",
    icon: "🔧",
    difficulty: "intermediate",
    moduleCount: 20,
    estimatedHours: 30,
    demandLevel: "high",
    slug: "osha",
  },
  {
    id: "first-aid",
    title: "First Aid / CPR",
    description:
      "Scene safety, CPR/AED, wound management, and Gulf-specific emergencies including heat stroke and H2S response.",
    icon: "⛑️",
    difficulty: "beginner",
    moduleCount: 6,
    estimatedHours: 8,
    demandLevel: "medium",
    slug: "first-aid",
  },
  {
    id: "nebosh-diploma",
    title: "NEBOSH Diploma",
    description:
      "Advanced professional qualification. Units A–E covering management systems, hazardous agents, and workplace equipment.",
    icon: "🎓",
    difficulty: "advanced",
    moduleCount: 5,
    estimatedHours: 60,
    demandLevel: "specialized",
    slug: "nebosh-diploma",
  },
  {
    id: "iso-auditor",
    title: "ISO 45001 / 14001 Lead Auditor",
    description:
      "Conduct OHSMS and EMS audits. All clauses plus hands-on audit process modules.",
    icon: "🔍",
    difficulty: "advanced",
    moduleCount: 17,
    estimatedHours: 35,
    demandLevel: "specialized",
    slug: "iso-auditor",
  },
];

export default function CertificationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <nav className="text-sm text-slate-500 mb-4">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Certifications</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">All Certifications</h1>
        <p className="text-slate-600 max-w-2xl">
          Each certification section includes structured learning modules, 10–15
          question MCQ quizzes, and Gulf-specific interview preparation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}

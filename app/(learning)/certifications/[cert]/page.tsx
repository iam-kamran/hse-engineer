import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import type { Metadata } from "next";

interface CertMeta {
  title: string;
  icon: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
  modules: { slug: string; title: string; estimatedReadTime: number }[];
}

const certData: Record<string, CertMeta> = {
  "nebosh-igc": {
    title: "NEBOSH International General Certificate",
    icon: "🏆",
    description:
      "The world's most recognised health and safety qualification. The NEBOSH IGC covers all aspects of international health and safety management across 12 elements, plus a practical risk assessment (IG2). It is the most requested certification in Gulf HSE job postings.",
    difficulty: "intermediate",
    estimatedHours: 40,
    modules: [
      { slug: "element-1", title: "Element 1: Why We Should Manage Workplace Health & Safety", estimatedReadTime: 12 },
      { slug: "element-2", title: "Element 2: How Health & Safety Management Systems Work", estimatedReadTime: 15 },
      { slug: "element-3", title: "Element 3: Managing Risk — Understanding People and Processes", estimatedReadTime: 14 },
      { slug: "element-4", title: "Element 4: Health & Safety Monitoring and Measuring", estimatedReadTime: 13 },
      { slug: "element-5", title: "Element 5: Physical & Psychological Health", estimatedReadTime: 16 },
      { slug: "element-6", title: "Element 6: Musculoskeletal Health", estimatedReadTime: 12 },
      { slug: "element-7", title: "Element 7: Chemical & Biological Agents", estimatedReadTime: 15 },
      { slug: "element-8", title: "Element 8: General Workplace Issues", estimatedReadTime: 13 },
      { slug: "element-9", title: "Element 9: Work Equipment", estimatedReadTime: 14 },
      { slug: "element-10", title: "Element 10: Fire", estimatedReadTime: 12 },
      { slug: "element-11", title: "Element 11: Electricity", estimatedReadTime: 11 },
      { slug: "element-12", title: "Element 12: Construction Activities", estimatedReadTime: 14 },
      { slug: "ig2-practical", title: "IG2: Risk Assessment (Practical Assessment)", estimatedReadTime: 20 },
      { slug: "exam-prep", title: "Exam Preparation & Question Technique", estimatedReadTime: 18 },
    ],
  },
  iosh: {
    title: "IOSH Managing Safely",
    icon: "📋",
    description:
      "A practical health and safety certification for managers and supervisors at all levels and in all sectors. IOSH Managing Safely teaches how to identify and assess risks, control hazards, investigate incidents, and measure safety performance.",
    difficulty: "beginner",
    estimatedHours: 24,
    modules: [
      { slug: "module-1", title: "Module 1: Introducing Managing Safely", estimatedReadTime: 10 },
      { slug: "module-2", title: "Module 2: Assessing Risks", estimatedReadTime: 12 },
      { slug: "module-3", title: "Module 3: Controlling Risks", estimatedReadTime: 12 },
      { slug: "module-4", title: "Module 4: Understanding Your Responsibilities", estimatedReadTime: 11 },
      { slug: "module-5", title: "Module 5: Identifying Hazards", estimatedReadTime: 14 },
      { slug: "module-6", title: "Module 6: Investigating Incidents", estimatedReadTime: 12 },
      { slug: "module-7", title: "Module 7: Measuring Performance", estimatedReadTime: 10 },
    ],
  },
  osha: {
    title: "OSHA 30-Hour",
    icon: "🔧",
    description:
      "The OSHA 30-Hour program is designed for supervisors and workers with safety responsibilities in construction or general industry. It is widely required in Gulf O&G and construction projects, especially those involving US company standards.",
    difficulty: "intermediate",
    estimatedHours: 30,
    modules: [
      { slug: "construction-intro", title: "Construction: Introduction & OSH Act", estimatedReadTime: 20 },
      { slug: "construction-falls", title: "Construction: Fall Protection (Subpart M)", estimatedReadTime: 22 },
      { slug: "construction-electrical", title: "Construction: Electrical Safety (Subpart K)", estimatedReadTime: 20 },
      { slug: "construction-scaffolds", title: "Construction: Scaffolding (Subpart L)", estimatedReadTime: 22 },
      { slug: "construction-excavations", title: "Construction: Excavations & Trenching (Subpart P)", estimatedReadTime: 22 },
      { slug: "construction-cranes", title: "Construction: Cranes & Rigging (Subpart CC)", estimatedReadTime: 20 },
      { slug: "construction-hazcom", title: "Construction: Hazard Communication / GHS", estimatedReadTime: 18 },
      { slug: "construction-ppe", title: "Construction: PPE Selection and Use", estimatedReadTime: 18 },
      { slug: "construction-fire", title: "Construction: Fire Protection & Prevention", estimatedReadTime: 18 },
      { slug: "construction-tools", title: "Construction: Hand and Power Tools", estimatedReadTime: 16 },
      { slug: "general-intro", title: "General Industry: Introduction to OSHA (1910)", estimatedReadTime: 18 },
      { slug: "general-hazcom", title: "General Industry: HazCom 2012 / GHS (1910.1200)", estimatedReadTime: 18 },
      { slug: "general-lockout", title: "General Industry: Lockout/Tagout (1910.147)", estimatedReadTime: 22 },
      { slug: "general-confined", title: "General Industry: Permit-Required Confined Spaces (1910.146)", estimatedReadTime: 22 },
      { slug: "general-electrical", title: "General Industry: Electrical Safety & Arc Flash", estimatedReadTime: 20 },
      { slug: "general-ppe", title: "General Industry: PPE (Subpart I)", estimatedReadTime: 18 },
      { slug: "general-fire", title: "General Industry: Fire Safety & Emergency Action Plans", estimatedReadTime: 18 },
      { slug: "general-ergonomics", title: "General Industry: Ergonomics & Manual Handling", estimatedReadTime: 18 },
      { slug: "general-msd", title: "General Industry: Machine Guarding (1910.212)", estimatedReadTime: 18 },
      { slug: "general-recordkeeping", title: "General Industry: OSHA Recordkeeping (1904)", estimatedReadTime: 18 },
    ],
  },
  "first-aid": {
    title: "First Aid / CPR",
    icon: "⛑️",
    description:
      "Essential first aid and CPR certification for HSE professionals. Includes Gulf-specific emergencies such as heat stroke management and H2S gas exposure response.",
    difficulty: "beginner",
    estimatedHours: 8,
    modules: [
      { slug: "scene-safety", title: "Module 1: Scene Safety and Initial Assessment", estimatedReadTime: 8 },
      { slug: "cpr-aed", title: "Module 2: CPR and AED Use", estimatedReadTime: 10 },
      { slug: "wound-management", title: "Module 3: Wound Management and Bleeding Control", estimatedReadTime: 9 },
      { slug: "fractures-burns", title: "Module 4: Fractures, Burns, and Crush Injuries", estimatedReadTime: 9 },
      { slug: "heat-cold", title: "Module 5: Heat Stroke and Cold Injuries (Gulf Focus)", estimatedReadTime: 10 },
      { slug: "h2s-response", title: "Module 6: H2S Gas Exposure and Chemical Emergencies", estimatedReadTime: 10 },
    ],
  },
  "nebosh-diploma": {
    title: "NEBOSH Diploma",
    icon: "🎓",
    description:
      "The NEBOSH National/International Diploma is the advanced professional qualification in health and safety. It is suited for those who want to move into HSE management roles and covers strategic management, hazardous agents, and complex risk systems.",
    difficulty: "advanced",
    estimatedHours: 60,
    modules: [
      { slug: "unit-a", title: "Unit A: Managing Health & Safety", estimatedReadTime: 25 },
      { slug: "unit-b", title: "Unit B: Hazardous Agents in the Workplace", estimatedReadTime: 22 },
      { slug: "unit-c", title: "Unit C: Workplace and Work Equipment Safety", estimatedReadTime: 20 },
      { slug: "unit-d", title: "Unit D: Specialist Workplace Hazards (Construction)", estimatedReadTime: 20 },
      { slug: "unit-e", title: "Unit E: Environmental Management", estimatedReadTime: 18 },
    ],
  },
  "iso-auditor": {
    title: "ISO 45001 / 14001 Lead Auditor",
    icon: "🔍",
    description:
      "Become a certified lead auditor for ISO 45001 (OHSMS) and ISO 14001 (EMS). Understand all standard clauses, audit planning, conducting audits, and reporting findings. Highly valued in Gulf companies implementing management systems.",
    difficulty: "advanced",
    estimatedHours: 35,
    modules: [
      { slug: "iso-45001-overview", title: "ISO 45001: Overview and Context", estimatedReadTime: 12 },
      { slug: "iso-45001-clauses", title: "ISO 45001: Clauses 4–10 in Detail", estimatedReadTime: 20 },
      { slug: "iso-14001-overview", title: "ISO 14001: Overview and Context", estimatedReadTime: 12 },
      { slug: "iso-14001-clauses", title: "ISO 14001: Clauses 4–10 in Detail", estimatedReadTime: 18 },
      { slug: "audit-planning", title: "Audit Planning and Preparation", estimatedReadTime: 14 },
      { slug: "conducting-audits", title: "Conducting Audits and Collecting Evidence", estimatedReadTime: 15 },
      { slug: "audit-reporting", title: "Audit Reporting and Follow-Up", estimatedReadTime: 12 },
    ],
  },
};

export function generateMetadata({ params }: { params: { cert: string } }): Metadata {
  const cert = certData[params.cert];
  if (!cert) return { title: "Certification" };
  return {
    title: `${cert.title} | HSE Engineer`,
    description: cert.description.slice(0, 160),
  };
}

export default function CertOverviewPage({ params }: { params: { cert: string } }) {
  const cert = certData[params.cert];
  if (!cert) notFound();

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Certifications", href: "/certifications" },
          { label: cert.title },
        ]}
      />

      <header className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">{cert.icon}</span>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <DifficultyBadge difficulty={cert.difficulty} />
              <span className="text-sm text-slate-400">~{cert.estimatedHours} hours total</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{cert.title}</h1>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">{cert.description}</p>
      </header>

      <div className="flex gap-3 mb-8">
        <Link
          href={`/certifications/${params.cert}/interview-prep`}
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
        >
          Interview Prep →
        </Link>
        <Link
          href={`/certifications/${params.cert}/quiz`}
          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
        >
          Practice Quiz
        </Link>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          {cert.modules.length} Modules
        </h2>
        {cert.modules.map((mod, i) => (
          <Link
            key={mod.slug}
            href={`/certifications/${params.cert}/${mod.slug}`}
            className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-green-400 hover:shadow-sm transition-all group"
          >
            <span className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-green-100 group-hover:text-green-700 transition-colors flex-shrink-0">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-800 group-hover:text-green-700 transition-colors">
                {mod.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">~{mod.estimatedReadTime} min read</p>
            </div>
            <svg className="w-4 h-4 text-slate-300 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}

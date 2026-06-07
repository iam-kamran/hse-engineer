import Link from "next/link";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { CertSection } from "@/types/module";

const certifications: CertSection[] = [
  {
    id: "nebosh-igc",
    title: "NEBOSH IGC",
    description:
      "The world's most recognized health & safety qualification. Covers 12 elements from hazard identification to risk control and international standards.",
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
      "Practical safety management for supervisors and managers. Covers risk assessment, incident investigation, and measuring safety performance.",
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
      "US OSHA standard, widely required in Gulf O&G projects. Two tracks: Construction and General Industry. Covers permits, PPE, and hazard controls.",
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
      "Scene safety, CPR/AED, wound management, and Gulf-specific emergencies including heat stroke and H2S gas response.",
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
      "Advanced professional qualification. Units A–E covering management systems, hazardous agents, and workplace equipment safety.",
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
      "Conduct occupational health & environmental management system audits. Covers all clauses plus hands-on audit process modules.",
    icon: "🔍",
    difficulty: "advanced",
    moduleCount: 17,
    estimatedHours: 35,
    demandLevel: "specialized",
    slug: "iso-auditor",
  },
];

const roadmapSteps = [
  {
    step: 1,
    title: "HSE Fundamentals",
    desc: "Learn core concepts: hazard vs risk, safety culture, Gulf regulations.",
    href: "/fundamentals/what-is-hse",
    color: "bg-green-500",
  },
  {
    step: 2,
    title: "IOSH Managing Safely",
    desc: "First formal certification — practical, beginner-friendly.",
    href: "/certifications/iosh",
    color: "bg-blue-500",
  },
  {
    step: 3,
    title: "NEBOSH IGC",
    desc: "The gold standard. Most Gulf employers require it.",
    href: "/certifications/nebosh-igc",
    color: "bg-yellow-500",
  },
  {
    step: 4,
    title: "OSHA 30-Hour",
    desc: "Essential for O&G and construction projects.",
    href: "/certifications/osha",
    color: "bg-orange-500",
  },
  {
    step: 5,
    title: "Gulf Interview Prep",
    desc: "Country-specific questions, PTW, legislation, safety culture.",
    href: "/gulf-interview-prep/saudi-arabia",
    color: "bg-purple-500",
  },
];

const stats = [
  { label: "Certifications Covered", value: "6" },
  { label: "Learning Modules", value: "70+" },
  { label: "Practice Questions", value: "500+" },
  { label: "Gulf Countries", value: "6" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
            <span>🌍</span> Built for Gulf Region Job Seekers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Become a Job-Ready{" "}
            <span className="text-green-400">HSE Engineer</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Master every major safety certification and ace Gulf region HSE interviews —
            all in one place, completely free. No engineering degree required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/fundamentals/what-is-hse"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border border-white/20 transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-green-600">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Overview */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Your Learning Roadmap
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Follow this step-by-step path from zero to Gulf-ready HSE professional.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
          <div className="space-y-6">
            {roadmapSteps.map((step) => (
              <Link
                key={step.step}
                href={step.href}
                className="flex items-start gap-6 group"
              >
                <div
                  className={`flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md relative z-10 group-hover:scale-110 transition-transform`}
                >
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-5 group-hover:border-green-400 group-hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-green-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">{step.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              All Certifications
            </h2>
            <p className="text-slate-500">
              Each certification includes structured modules, MCQ quizzes, and
              Gulf-specific interview questions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Gulf Prep CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Gulf Interviews?</h2>
          <p className="text-green-100 mb-8 text-lg">
            20–30 real interview questions per country. Covers Saudi Arabia, UAE,
            Qatar, Kuwait, Oman, and Bahrain — plus Oil & Gas industry questions.
          </p>
          <Link
            href="/gulf-interview-prep/saudi-arabia"
            className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors inline-block"
          >
            Explore Gulf Interview Prep
          </Link>
        </div>
      </section>
    </>
  );
}

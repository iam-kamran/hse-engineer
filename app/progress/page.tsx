"use client";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const allModules = [
  // Fundamentals
  { id: "fundamentals/what-is-hse", label: "What is HSE", href: "/fundamentals/what-is-hse", section: "Fundamentals" },
  { id: "fundamentals/hazard-vs-risk", label: "Hazard vs Risk", href: "/fundamentals/hazard-vs-risk", section: "Fundamentals" },
  { id: "fundamentals/types-of-hazards", label: "Types of Hazards", href: "/fundamentals/types-of-hazards", section: "Fundamentals" },
  { id: "fundamentals/incident-vs-accident", label: "Incident vs Accident", href: "/fundamentals/incident-vs-accident", section: "Fundamentals" },
  { id: "fundamentals/safety-culture", label: "Safety Culture", href: "/fundamentals/safety-culture", section: "Fundamentals" },
  { id: "fundamentals/hse-in-the-gulf", label: "HSE in the Gulf", href: "/fundamentals/hse-in-the-gulf", section: "Fundamentals" },
  // NEBOSH IGC
  { id: "certifications/nebosh-igc/element-1", label: "IGC Element 1: Why Manage H&S", href: "/certifications/nebosh-igc/element-1", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-2", label: "IGC Element 2: Management Systems", href: "/certifications/nebosh-igc/element-2", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-3", label: "IGC Element 3: Managing Risk", href: "/certifications/nebosh-igc/element-3", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-4", label: "IGC Element 4: Monitoring & Measuring", href: "/certifications/nebosh-igc/element-4", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-5", label: "IGC Element 5: Physical & Psychological Health", href: "/certifications/nebosh-igc/element-5", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-6", label: "IGC Element 6: Musculoskeletal Health", href: "/certifications/nebosh-igc/element-6", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-7", label: "IGC Element 7: Chemical & Biological", href: "/certifications/nebosh-igc/element-7", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-8", label: "IGC Element 8: General Workplace", href: "/certifications/nebosh-igc/element-8", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-9", label: "IGC Element 9: Work Equipment", href: "/certifications/nebosh-igc/element-9", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-10", label: "IGC Element 10: Fire", href: "/certifications/nebosh-igc/element-10", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-11", label: "IGC Element 11: Electricity", href: "/certifications/nebosh-igc/element-11", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/element-12", label: "IGC Element 12: Construction", href: "/certifications/nebosh-igc/element-12", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/ig2-practical", label: "IGC IG2: Practical Assessment", href: "/certifications/nebosh-igc/ig2-practical", section: "NEBOSH IGC" },
  { id: "certifications/nebosh-igc/exam-prep", label: "IGC Exam Preparation", href: "/certifications/nebosh-igc/exam-prep", section: "NEBOSH IGC" },
  // IOSH
  { id: "certifications/iosh/module-1", label: "IOSH Module 1: Introducing Managing Safely", href: "/certifications/iosh/module-1", section: "IOSH" },
  { id: "certifications/iosh/module-2", label: "IOSH Module 2: Assessing Risks", href: "/certifications/iosh/module-2", section: "IOSH" },
  { id: "certifications/iosh/module-3", label: "IOSH Module 3: Controlling Risks", href: "/certifications/iosh/module-3", section: "IOSH" },
  { id: "certifications/iosh/module-4", label: "IOSH Module 4: Understanding Responsibilities", href: "/certifications/iosh/module-4", section: "IOSH" },
  { id: "certifications/iosh/module-5", label: "IOSH Module 5: Identifying Hazards", href: "/certifications/iosh/module-5", section: "IOSH" },
  { id: "certifications/iosh/module-6", label: "IOSH Module 6: Investigating Incidents", href: "/certifications/iosh/module-6", section: "IOSH" },
  { id: "certifications/iosh/module-7", label: "IOSH Module 7: Measuring Performance", href: "/certifications/iosh/module-7", section: "IOSH" },
  // OSHA Construction
  { id: "certifications/osha/construction-intro", label: "OSHA: Construction Intro", href: "/certifications/osha/construction-intro", section: "OSHA" },
  { id: "certifications/osha/construction-falls", label: "OSHA: Fall Protection", href: "/certifications/osha/construction-falls", section: "OSHA" },
  { id: "certifications/osha/construction-electrical", label: "OSHA: Electrical (Construction)", href: "/certifications/osha/construction-electrical", section: "OSHA" },
  { id: "certifications/osha/construction-scaffolds", label: "OSHA: Scaffolding", href: "/certifications/osha/construction-scaffolds", section: "OSHA" },
  { id: "certifications/osha/construction-excavations", label: "OSHA: Excavations & Trenching", href: "/certifications/osha/construction-excavations", section: "OSHA" },
  { id: "certifications/osha/construction-cranes", label: "OSHA: Cranes & Rigging", href: "/certifications/osha/construction-cranes", section: "OSHA" },
  { id: "certifications/osha/construction-hazcom", label: "OSHA: HazCom / GHS (Construction)", href: "/certifications/osha/construction-hazcom", section: "OSHA" },
  { id: "certifications/osha/construction-ppe", label: "OSHA: PPE (Construction)", href: "/certifications/osha/construction-ppe", section: "OSHA" },
  { id: "certifications/osha/construction-fire", label: "OSHA: Fire Protection", href: "/certifications/osha/construction-fire", section: "OSHA" },
  { id: "certifications/osha/construction-tools", label: "OSHA: Hand & Power Tools", href: "/certifications/osha/construction-tools", section: "OSHA" },
  // OSHA General Industry
  { id: "certifications/osha/general-intro", label: "OSHA: General Industry Intro", href: "/certifications/osha/general-intro", section: "OSHA" },
  { id: "certifications/osha/general-hazcom", label: "OSHA: HazCom 2012 (General)", href: "/certifications/osha/general-hazcom", section: "OSHA" },
  { id: "certifications/osha/general-lockout", label: "OSHA: Lockout/Tagout", href: "/certifications/osha/general-lockout", section: "OSHA" },
  { id: "certifications/osha/general-confined", label: "OSHA: Permit-Required Confined Spaces", href: "/certifications/osha/general-confined", section: "OSHA" },
  { id: "certifications/osha/general-electrical", label: "OSHA: Electrical Safety (General)", href: "/certifications/osha/general-electrical", section: "OSHA" },
  { id: "certifications/osha/general-ppe", label: "OSHA: PPE (General Industry)", href: "/certifications/osha/general-ppe", section: "OSHA" },
  { id: "certifications/osha/general-fire", label: "OSHA: Fire Safety & EAPs", href: "/certifications/osha/general-fire", section: "OSHA" },
  { id: "certifications/osha/general-ergonomics", label: "OSHA: Ergonomics", href: "/certifications/osha/general-ergonomics", section: "OSHA" },
  { id: "certifications/osha/general-msd", label: "OSHA: Machine Guarding", href: "/certifications/osha/general-msd", section: "OSHA" },
  { id: "certifications/osha/general-recordkeeping", label: "OSHA: Recordkeeping", href: "/certifications/osha/general-recordkeeping", section: "OSHA" },
  // First Aid
  { id: "certifications/first-aid/scene-safety", label: "First Aid: Scene Safety", href: "/certifications/first-aid/scene-safety", section: "First Aid" },
  { id: "certifications/first-aid/cpr-aed", label: "First Aid: CPR & AED", href: "/certifications/first-aid/cpr-aed", section: "First Aid" },
  { id: "certifications/first-aid/wound-management", label: "First Aid: Wound Management", href: "/certifications/first-aid/wound-management", section: "First Aid" },
  { id: "certifications/first-aid/fractures-burns", label: "First Aid: Fractures & Burns", href: "/certifications/first-aid/fractures-burns", section: "First Aid" },
  { id: "certifications/first-aid/heat-cold", label: "First Aid: Heat & Cold Injuries", href: "/certifications/first-aid/heat-cold", section: "First Aid" },
  { id: "certifications/first-aid/h2s-response", label: "First Aid: H2S & Chemical Emergencies", href: "/certifications/first-aid/h2s-response", section: "First Aid" },
  // NEBOSH Diploma
  { id: "certifications/nebosh-diploma/unit-a", label: "Diploma Unit A: Managing H&S", href: "/certifications/nebosh-diploma/unit-a", section: "NEBOSH Diploma" },
  { id: "certifications/nebosh-diploma/unit-b", label: "Diploma Unit B: Hazardous Agents", href: "/certifications/nebosh-diploma/unit-b", section: "NEBOSH Diploma" },
  { id: "certifications/nebosh-diploma/unit-c", label: "Diploma Unit C: Workplace Safety", href: "/certifications/nebosh-diploma/unit-c", section: "NEBOSH Diploma" },
  { id: "certifications/nebosh-diploma/unit-d", label: "Diploma Unit D: Specialist Hazards", href: "/certifications/nebosh-diploma/unit-d", section: "NEBOSH Diploma" },
  { id: "certifications/nebosh-diploma/unit-e", label: "Diploma Unit E: Environmental Management", href: "/certifications/nebosh-diploma/unit-e", section: "NEBOSH Diploma" },
  // ISO Auditor
  { id: "certifications/iso-auditor/iso-45001-overview", label: "ISO Auditor: ISO 45001 Overview", href: "/certifications/iso-auditor/iso-45001-overview", section: "ISO Auditor" },
  { id: "certifications/iso-auditor/iso-45001-clauses", label: "ISO Auditor: ISO 45001 Clauses 4–10", href: "/certifications/iso-auditor/iso-45001-clauses", section: "ISO Auditor" },
  { id: "certifications/iso-auditor/iso-14001-overview", label: "ISO Auditor: ISO 14001 Overview", href: "/certifications/iso-auditor/iso-14001-overview", section: "ISO Auditor" },
  { id: "certifications/iso-auditor/iso-14001-clauses", label: "ISO Auditor: ISO 14001 Clauses 4–10", href: "/certifications/iso-auditor/iso-14001-clauses", section: "ISO Auditor" },
  { id: "certifications/iso-auditor/audit-planning", label: "ISO Auditor: Audit Planning", href: "/certifications/iso-auditor/audit-planning", section: "ISO Auditor" },
  { id: "certifications/iso-auditor/conducting-audits", label: "ISO Auditor: Conducting Audits", href: "/certifications/iso-auditor/conducting-audits", section: "ISO Auditor" },
  { id: "certifications/iso-auditor/audit-reporting", label: "ISO Auditor: Audit Reporting", href: "/certifications/iso-auditor/audit-reporting", section: "ISO Auditor" },
];

const sectionOrder = ["Fundamentals", "NEBOSH IGC", "IOSH", "OSHA", "First Aid", "NEBOSH Diploma", "ISO Auditor"];

export default function ProgressPage() {
  const { progress, isCompleted } = useProgress();
  const completedCount = progress.completedModules.length;
  const totalModules = allModules.length;
  const percentage = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;
  const quizEntries = Object.entries(progress.quizScores);

  const bySection = sectionOrder.map((section) => ({
    section,
    modules: allModules.filter((m) => m.section === section),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">My Progress</h1>
      <p className="text-slate-500 mb-10">
        Your progress is saved automatically in your browser. No account needed.
      </p>

      {/* Overall progress */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-sm text-slate-500 mb-1">Overall Completion</p>
            <p className="text-4xl font-bold text-slate-900">{percentage}%</p>
          </div>
          <p className="text-slate-400 text-sm">
            {completedCount} / {totalModules} modules
          </p>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Section progress bars */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {bySection.map(({ section, modules }) => {
          const done = modules.filter((m) => isCompleted(m.id)).length;
          const pct = modules.length > 0 ? Math.round((done / modules.length) * 100) : 0;
          return (
            <div key={section} className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-slate-500 mb-1 truncate">{section}</p>
              <p className="text-2xl font-bold text-slate-900 mb-2">{pct}%</p>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div
                  className="bg-green-500 h-1.5 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1.5">{done}/{modules.length} done</p>
            </div>
          );
        })}
      </div>

      {/* Module list by section */}
      {bySection.map(({ section, modules }) => (
        <details key={section} className="bg-white border border-slate-200 rounded-xl mb-4 group" open={section === "Fundamentals"}>
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none hover:bg-slate-50 rounded-xl">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold text-slate-900">{section}</h2>
              <span className="text-xs bg-slate-100 text-slate-500 rounded-full px-2.5 py-0.5">
                {modules.filter((m) => isCompleted(m.id)).length}/{modules.length}
              </span>
            </div>
            <svg
              className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {modules.map((mod) => {
              const done = isCompleted(mod.id);
              return (
                <div key={mod.id} className="flex items-center justify-between px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        done ? "border-green-500 bg-green-500" : "border-slate-300"
                      }`}
                    >
                      {done && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                    <p className="text-sm text-slate-800">{mod.label}</p>
                  </div>
                  <Link
                    href={mod.href}
                    className="text-xs text-green-600 hover:text-green-700 font-medium whitespace-nowrap ml-4"
                  >
                    {done ? "Review" : "Start →"}
                  </Link>
                </div>
              );
            })}
          </div>
        </details>
      ))}

      {/* Quiz scores */}
      {quizEntries.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl mt-8">
          <div className="p-5 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">Quiz Scores</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {quizEntries.map(([quizId, score]) => (
              <div key={quizId} className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-medium text-slate-800">{quizId}</p>
                  <p className="text-xs text-slate-400">{score.attempts} attempt(s)</p>
                </div>
                <span
                  className={`text-sm font-bold ${
                    score.passed ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {score.score}% {score.passed ? "✓ Pass" : "✗ Fail"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {quizEntries.length === 0 && completedCount === 0 && (
        <div className="text-center py-12 text-slate-400 mt-4">
          <p className="text-5xl mb-4">📚</p>
          <p className="font-medium text-slate-600 mb-2">No progress yet</p>
          <p className="text-sm mb-6">Start learning and your progress will appear here.</p>
          <Link
            href="/fundamentals/what-is-hse"
            className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors inline-block"
          >
            Start with HSE Fundamentals
          </Link>
        </div>
      )}
    </div>
  );
}

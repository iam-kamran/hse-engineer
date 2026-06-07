"use client";
import { useState } from "react";
import { InterviewQuestion } from "@/types/interview";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const countryLabels: Record<string, string> = {
  "saudi-arabia": "Saudi Arabia",
  uae: "UAE",
  qatar: "Qatar",
  kuwait: "Kuwait",
  oman: "Oman",
  bahrain: "Bahrain",
  "oil-gas": "Oil & Gas Industry",
};

const countryFlags: Record<string, string> = {
  "saudi-arabia": "🇸🇦",
  uae: "🇦🇪",
  qatar: "🇶🇦",
  kuwait: "🇰🇼",
  oman: "🇴🇲",
  bahrain: "🇧🇭",
  "oil-gas": "🛢️",
};

const CATEGORIES = [
  { value: "all", label: "All Topics" },
  { value: "risk-assessment", label: "Risk Assessment" },
  { value: "ptw", label: "Permit to Work" },
  { value: "incident-investigation", label: "Incident Investigation" },
  { value: "emergency-response", label: "Emergency Response" },
  { value: "confined-space", label: "Confined Space" },
  { value: "hot-work", label: "Hot Work" },
  { value: "legislation", label: "Legislation" },
  { value: "safety-culture", label: "Safety Culture" },
  { value: "general", label: "General" },
];

const LEVELS = [
  { value: "all", label: "All Levels" },
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid-Level" },
  { value: "senior", label: "Senior" },
];

function QuestionAccordion({ q }: { q: InterviewQuestion }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-slate-900 pr-4">{q.text}</span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform mt-0.5 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-slate-100">
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Model Answer
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">{q.modelAnswer}</p>
            </div>

            {q.keyPoints.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Key Points to Mention
                </h4>
                <ul className="space-y-1">
                  {q.keyPoints.map((kp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {kp}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {q.tip && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                  Gulf Tip
                </p>
                <p className="text-amber-800 text-sm">{q.tip}</p>
              </div>
            )}

            {q.followUpQuestions && q.followUpQuestions.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Likely Follow-Up Questions
                </h4>
                <ul className="space-y-1">
                  {q.followUpQuestions.map((fq, i) => (
                    <li key={i} className="text-sm text-slate-600 italic">• {fq}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-2 flex-wrap pt-1">
              <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-600 capitalize">
                {q.category.replace(/-/g, " ")}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                q.difficulty === "junior"
                  ? "bg-green-100 text-green-700"
                  : q.difficulty === "mid"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {q.difficulty === "junior" ? "Junior" : q.difficulty === "mid" ? "Mid-Level" : "Senior"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface Props {
  country: string;
  questions: InterviewQuestion[];
}

export default function GulfInterviewClient({ country, questions }: Props) {
  const countryLabel = countryLabels[country] || country;
  const flag = countryFlags[country] || "🌍";

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const filtered = questions.filter((q) => {
    const catMatch = categoryFilter === "all" || q.category === categoryFilter;
    const lvlMatch = levelFilter === "all" || q.difficulty === levelFilter;
    return catMatch && lvlMatch;
  });

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Gulf Interview Prep", href: "/gulf-interview-prep/saudi-arabia" },
          { label: countryLabel },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          {flag} {countryLabel} — HSE Interview Questions
        </h1>
        <p className="text-slate-500">
          Real interview questions with model answers, key points to mention, and Gulf-specific coaching tips.
        </p>
      </div>

      {/* Country navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(countryLabels).map(([slug, label]) => (
          <a
            key={slug}
            href={`/gulf-interview-prep/${slug}`}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              slug === country
                ? "bg-green-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {countryFlags[slug]} {label}
          </a>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {LEVELS.map((l) => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
        <span className="self-center text-sm text-slate-400">
          {filtered.length} question{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {questions.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-5xl mb-4">🚧</p>
          <p className="text-lg font-medium text-slate-600 mb-2">Questions Coming Soon</p>
          <p className="text-sm">Interview questions for {countryLabel} are being added. Check back soon.</p>
        </div>
      ) : (
        <div>
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-4xl mb-3">🔍</p>
              <p>No questions match your filters.</p>
            </div>
          ) : (
            filtered.map((q) => <QuestionAccordion key={q.id} q={q} />)
          )}
        </div>
      )}
    </div>
  );
}

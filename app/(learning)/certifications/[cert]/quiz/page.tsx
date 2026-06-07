import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { QuizContainer } from "@/components/quiz/QuizContainer";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { Quiz } from "@/types/quiz";

const certLabels: Record<string, string> = {
  "nebosh-igc": "NEBOSH IGC",
  iosh: "IOSH Managing Safely",
  osha: "OSHA 30-Hour",
  "first-aid": "First Aid / CPR",
  "nebosh-diploma": "NEBOSH Diploma",
  "iso-auditor": "ISO 45001 / 14001 Lead Auditor",
};

const quizLabels: Record<string, string> = {
  "element-1-quiz": "Element 1: Why Manage H&S",
  "element-2-quiz": "Element 2: Management Systems",
  "element-3-quiz": "Element 3: Managing Risk",
  "element-4-quiz": "Element 4: Monitoring & Measuring",
  "element-5-quiz": "Element 5: Physical & Psychological Health",
  "element-6-quiz": "Element 6: Musculoskeletal Health",
  "element-7-quiz": "Element 7: Chemical & Biological Agents",
  "element-8-quiz": "Element 8: General Workplace Issues",
  "element-9-quiz": "Element 9: Work Equipment",
  "element-10-quiz": "Element 10: Fire",
  "element-11-quiz": "Element 11: Electricity",
  "element-12-quiz": "Element 12: Construction Activities",
};

const elementNumbers: Record<string, number> = {
  "element-1-quiz": 1,
  "element-2-quiz": 2,
  "element-3-quiz": 3,
  "element-4-quiz": 4,
  "element-5-quiz": 5,
  "element-6-quiz": 6,
  "element-7-quiz": 7,
  "element-8-quiz": 8,
  "element-9-quiz": 9,
  "element-10-quiz": 10,
  "element-11-quiz": 11,
  "element-12-quiz": 12,
};

function loadAllQuizzes(certSlug: string): { filename: string; quiz: Quiz }[] {
  const dir = path.join(process.cwd(), "data", "certifications", certSlug, "quizzes");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort((a, b) => {
      const na = elementNumbers[a.replace(".json", "")] ?? 99;
      const nb = elementNumbers[b.replace(".json", "")] ?? 99;
      return na - nb;
    })
    .map((f) => ({
      filename: f.replace(".json", ""),
      quiz: JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as Quiz,
    }));
}

export default function QuizPage({
  params,
  searchParams,
}: {
  params: { cert: string };
  searchParams: { quiz?: string };
}) {
  const certLabel = certLabels[params.cert] || params.cert;
  const allQuizzes = loadAllQuizzes(params.cert);

  const breadcrumbBase = [
    { label: "Home", href: "/" },
    { label: "Certifications", href: "/certifications" },
    { label: certLabel, href: `/certifications/${params.cert}` },
  ];

  // Specific quiz requested via ?quiz=element-3-quiz
  if (searchParams.quiz) {
    const found = allQuizzes.find((q) => q.filename === searchParams.quiz);
    if (found) {
      const quizLabel = quizLabels[found.filename] || found.quiz.title;
      return (
        <div>
          <Breadcrumb
            items={[
              ...breadcrumbBase,
              { label: "Quizzes", href: `/certifications/${params.cert}/quiz` },
              { label: quizLabel },
            ]}
          />
          <QuizContainer quiz={found.quiz} nextHref={`/certifications/${params.cert}/quiz`} />
        </div>
      );
    }
  }

  // Single quiz: load directly, no selection needed
  if (allQuizzes.length === 1) {
    return (
      <div>
        <Breadcrumb items={[...breadcrumbBase, { label: "Quiz" }]} />
        <QuizContainer quiz={allQuizzes[0].quiz} nextHref={`/certifications/${params.cert}`} />
      </div>
    );
  }

  // Multiple quizzes: show selection grid
  if (allQuizzes.length > 1) {
    return (
      <div>
        <Breadcrumb items={[...breadcrumbBase, { label: "Quizzes" }]} />

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {certLabel} — Practice Quizzes
          </h1>
          <p className="text-slate-500">
            {allQuizzes.length} element quizzes available. Each quiz has 12 questions with
            immediate feedback. Aim for 70%+ to pass.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allQuizzes.map(({ filename, quiz }) => {
            const label = quizLabels[filename] || quiz.title;
            const num = elementNumbers[filename];
            return (
              <Link
                key={filename}
                href={`/certifications/${params.cert}/quiz?quiz=${filename}`}
                className="group flex items-start gap-4 p-5 bg-white border-2 border-slate-200 rounded-xl hover:border-green-400 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-slate-100 group-hover:bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-500 group-hover:text-green-700 transition-colors">
                  {num ?? "Q"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors text-sm leading-snug">
                    {label}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {quiz.questions.length} questions · Pass mark {quiz.passMark}%
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-300 group-hover:text-green-500 transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
          <strong>Tip:</strong> Complete each element module before taking its quiz for best results.
          Your scores are saved automatically in your browser.
        </div>
      </div>
    );
  }

  // No quizzes
  return (
    <div>
      <Breadcrumb items={[...breadcrumbBase, { label: "Quiz" }]} />
      <div className="py-12 text-center">
        <div className="text-5xl mb-4">🚧</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {certLabel} — Quizzes Coming Soon
        </h1>
        <p className="text-slate-500 mb-6 max-w-md mx-auto">
          Quiz questions for {certLabel} are being prepared. Complete the modules
          first to build your knowledge.
        </p>
        <Link
          href={`/certifications/${params.cert}`}
          className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors inline-block"
        >
          Back to Modules
        </Link>
      </div>
    </div>
  );
}

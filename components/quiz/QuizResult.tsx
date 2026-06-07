"use client";
import { Quiz, QuizAttempt } from "@/types/quiz";
import Link from "next/link";

interface QuizResultProps {
  quiz: Quiz;
  attempts: QuizAttempt[];
  score: number;
  passed: boolean;
  onRetry: () => void;
  nextHref?: string;
}

export function QuizResult({ quiz, attempts, score, passed, onRetry, nextHref }: QuizResultProps) {
  const correctCount = attempts.filter((a) => a.isCorrect).length;

  return (
    <div className="text-center py-8">
      <div className="text-6xl mb-4">{passed ? "🎉" : "📚"}</div>

      <div
        className={`inline-flex items-center justify-center w-28 h-28 rounded-full border-4 mb-6 ${
          passed ? "border-green-500 bg-green-50" : "border-orange-400 bg-orange-50"
        }`}
      >
        <div>
          <div className={`text-3xl font-bold ${passed ? "text-green-700" : "text-orange-600"}`}>
            {score}%
          </div>
          <div className={`text-xs ${passed ? "text-green-600" : "text-orange-500"}`}>
            {passed ? "PASS" : "RETRY"}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        {passed ? "Well Done!" : "Keep Studying!"}
      </h2>
      <p className="text-slate-500 mb-2">
        You answered {correctCount} out of {quiz.questions.length} questions correctly.
      </p>
      <p className="text-sm text-slate-400 mb-8">
        Pass mark: {quiz.passMark}% · Your score: {score}%
      </p>

      <div className="space-y-3 max-w-xs mx-auto">
        <button
          onClick={onRetry}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-colors"
        >
          Retry Quiz
        </button>
        {passed && nextHref && (
          <Link
            href={nextHref}
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Continue →
          </Link>
        )}
      </div>

      {/* Per-question review */}
      <div className="mt-10 text-left">
        <h3 className="font-semibold text-slate-800 mb-4">Question Review</h3>
        <div className="space-y-3">
          {quiz.questions.map((q, i) => {
            const attempt = attempts.find((a) => a.questionId === q.id);
            const isCorrect = attempt?.isCorrect ?? false;
            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border ${
                  isCorrect
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 font-bold ${isCorrect ? "text-green-600" : "text-red-500"}`}>
                    {isCorrect ? "✓" : "✗"}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800 mb-1">
                      Q{i + 1}. {q.text}
                    </p>
                    {!isCorrect && (
                      <p className="text-xs text-slate-600">
                        Correct: {q.options.find((o) => o.id === q.correctOptionId)?.text}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 mt-1">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

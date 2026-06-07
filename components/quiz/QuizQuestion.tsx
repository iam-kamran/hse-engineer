"use client";
import { QuizQuestion as QuizQuestionType } from "@/types/quiz";
import { AnswerOption } from "./AnswerOption";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  total: number;
  selectedOptionId: string | null;
  showExplanation: boolean;
  onAnswer: (optionId: string) => void;
  onNext: () => void;
  isLast: boolean;
}

export function QuizQuestion({
  question,
  questionNumber,
  total,
  selectedOptionId,
  showExplanation,
  onAnswer,
  onNext,
  isLast,
}: QuizQuestionProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-slate-500">
          Question {questionNumber} of {total}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i < questionNumber - 1
                  ? "w-4 bg-green-500"
                  : i === questionNumber - 1
                  ? "w-6 bg-green-600"
                  : "w-4 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      <h2 className="text-lg font-semibold text-slate-900 mb-6 leading-relaxed">
        {question.text}
      </h2>

      <div className="space-y-3 mb-6">
        {question.options.map((opt) => (
          <AnswerOption
            key={opt.id}
            option={opt}
            selected={selectedOptionId === opt.id}
            revealed={showExplanation}
            correct={opt.id === question.correctOptionId}
            onSelect={onAnswer}
          />
        ))}
      </div>

      {showExplanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">
            Explanation
          </p>
          <p className="text-blue-800 text-sm leading-relaxed">{question.explanation}</p>
          {question.referenceClause && (
            <p className="text-xs text-blue-500 mt-2">
              Reference: {question.referenceClause}
            </p>
          )}
        </div>
      )}

      {showExplanation && (
        <button
          onClick={onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {isLast ? "See Results" : "Next Question →"}
        </button>
      )}
    </div>
  );
}

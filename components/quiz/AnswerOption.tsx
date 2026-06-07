"use client";
import { QuizOption } from "@/types/quiz";

interface AnswerOptionProps {
  option: QuizOption;
  selected: boolean;
  revealed: boolean;
  correct: boolean;
  onSelect: (id: string) => void;
}

export function AnswerOption({ option, selected, revealed, correct, onSelect }: AnswerOptionProps) {
  let style =
    "border-slate-200 bg-white text-slate-700 hover:border-green-400 hover:bg-green-50";

  if (revealed) {
    if (correct) style = "border-green-500 bg-green-50 text-green-800";
    else if (selected) style = "border-red-400 bg-red-50 text-red-800";
    else style = "border-slate-200 bg-slate-50 text-slate-400";
  } else if (selected) {
    style = "border-blue-500 bg-blue-50 text-blue-800";
  }

  return (
    <button
      onClick={() => !revealed && onSelect(option.id)}
      disabled={revealed}
      className={`w-full text-left flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${style}`}
    >
      <span
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold ${
          revealed && correct
            ? "border-green-500 bg-green-500 text-white"
            : revealed && selected
            ? "border-red-400 bg-red-400 text-white"
            : selected
            ? "border-blue-500 bg-blue-500 text-white"
            : "border-current"
        }`}
      >
        {revealed && correct ? "✓" : revealed && selected ? "✗" : ""}
      </span>
      <span className="text-sm leading-relaxed">{option.text}</span>
    </button>
  );
}

"use client";
import { useProgress } from "@/hooks/useProgress";

export function ModuleCompletionButton({ moduleId }: { moduleId: string }) {
  const { completeModule, isCompleted } = useProgress();
  const done = isCompleted(moduleId);

  return (
    <button
      onClick={() => completeModule(moduleId)}
      disabled={done}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
        done
          ? "bg-green-100 text-green-700 cursor-default"
          : "bg-green-600 hover:bg-green-700 text-white"
      }`}
    >
      {done ? (
        <>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Completed
        </>
      ) : (
        "Mark as Complete"
      )}
    </button>
  );
}

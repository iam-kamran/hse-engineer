"use client";
import { createContext, useCallback } from "react";
import { UserProgress } from "@/types/progress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  defaultProgress,
  markModuleComplete,
  saveQuizScore,
  toggleBookmark,
} from "@/lib/progress-utils";

interface ProgressContextValue {
  progress: UserProgress;
  completeModule: (moduleId: string) => void;
  recordQuizScore: (quizId: string, score: number, passed: boolean) => void;
  bookmark: (moduleId: string) => void;
  isCompleted: (moduleId: string) => boolean;
  isBookmarked: (moduleId: string) => boolean;
}

export const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useLocalStorage<UserProgress>(
    "hse_progress",
    defaultProgress
  );

  const completeModule = useCallback(
    (moduleId: string) => setProgress((p) => markModuleComplete(p, moduleId)),
    [setProgress]
  );

  const recordQuizScore = useCallback(
    (quizId: string, score: number, passed: boolean) =>
      setProgress((p) => saveQuizScore(p, quizId, score, passed)),
    [setProgress]
  );

  const bookmark = useCallback(
    (moduleId: string) => setProgress((p) => toggleBookmark(p, moduleId)),
    [setProgress]
  );

  const isCompleted = useCallback(
    (moduleId: string) => progress.completedModules.includes(moduleId),
    [progress]
  );

  const isBookmarked = useCallback(
    (moduleId: string) => progress.bookmarks.includes(moduleId),
    [progress]
  );

  return (
    <ProgressContext.Provider
      value={{ progress, completeModule, recordQuizScore, bookmark, isCompleted, isBookmarked }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

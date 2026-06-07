import { UserProgress, QuizScore } from "@/types/progress";

const STORAGE_KEY = "hse_progress";

export const defaultProgress: UserProgress = {
  completedModules: [],
  quizScores: {},
  bookmarks: [],
};

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultProgress, ...JSON.parse(raw) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markModuleComplete(progress: UserProgress, moduleId: string): UserProgress {
  if (progress.completedModules.includes(moduleId)) return progress;
  return { ...progress, completedModules: [...progress.completedModules, moduleId] };
}

export function saveQuizScore(
  progress: UserProgress,
  quizId: string,
  score: number,
  passed: boolean
): UserProgress {
  const prev = progress.quizScores[quizId];
  const updated: QuizScore = {
    score,
    passed,
    attempts: (prev?.attempts ?? 0) + 1,
    lastAttemptDate: new Date().toISOString(),
  };
  return { ...progress, quizScores: { ...progress.quizScores, [quizId]: updated } };
}

export function toggleBookmark(progress: UserProgress, moduleId: string): UserProgress {
  const has = progress.bookmarks.includes(moduleId);
  return {
    ...progress,
    bookmarks: has
      ? progress.bookmarks.filter((b) => b !== moduleId)
      : [...progress.bookmarks, moduleId],
  };
}

export function getOverallPercent(
  progress: UserProgress,
  totalModules: number
): number {
  if (totalModules === 0) return 0;
  return Math.round((progress.completedModules.length / totalModules) * 100);
}

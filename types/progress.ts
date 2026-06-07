export interface QuizScore {
  score: number;
  passed: boolean;
  attempts: number;
  lastAttemptDate: string;
}

export interface UserProgress {
  completedModules: string[];
  quizScores: Record<string, QuizScore>;
  bookmarks: string[];
}

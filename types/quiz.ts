export type QuizDifficulty = "easy" | "medium" | "hard";

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
  referenceClause?: string;
  difficulty: QuizDifficulty;
  tags: string[];
}

export interface Quiz {
  id: string;
  moduleId: string;
  title: string;
  passMark: number;
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

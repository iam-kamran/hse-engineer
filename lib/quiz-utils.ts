import { Quiz, QuizAttempt } from "@/types/quiz";

export function scoreQuiz(quiz: Quiz, attempts: QuizAttempt[]): number {
  const correct = attempts.filter((a) => a.isCorrect).length;
  return Math.round((correct / quiz.questions.length) * 100);
}

export function didPass(quiz: Quiz, score: number): boolean {
  return score >= quiz.passMark;
}

"use client";
import { useState } from "react";
import { Quiz, QuizAttempt } from "@/types/quiz";
import { scoreQuiz, didPass } from "@/lib/quiz-utils";

type QuizState = "idle" | "active" | "complete";

export function useQuiz(quiz: Quiz) {
  const [state, setState] = useState<QuizState>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const score = scoreQuiz(quiz, attempts);
  const passed = didPass(quiz, score);

  function start() {
    setState("active");
    setCurrentIndex(0);
    setAttempts([]);
    setSelectedOption(null);
    setShowExplanation(false);
  }

  function answer(optionId: string) {
    if (selectedOption) return;
    setSelectedOption(optionId);
    setShowExplanation(true);
    setAttempts((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        isCorrect: optionId === currentQuestion.correctOptionId,
      },
    ]);
  }

  function next() {
    if (currentIndex + 1 >= quiz.questions.length) {
      setState("complete");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }

  return {
    state,
    currentIndex,
    currentQuestion,
    attempts,
    selectedOption,
    showExplanation,
    score,
    passed,
    start,
    answer,
    next,
  };
}

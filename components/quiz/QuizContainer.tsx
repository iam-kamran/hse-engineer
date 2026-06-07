"use client";
import { Quiz } from "@/types/quiz";
import { useQuiz } from "@/hooks/useQuiz";
import { useProgress } from "@/hooks/useProgress";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResult } from "./QuizResult";

interface QuizContainerProps {
  quiz: Quiz;
  nextHref?: string;
}

export function QuizContainer({ quiz, nextHref }: QuizContainerProps) {
  const hook = useQuiz(quiz);
  const { recordQuizScore } = useProgress();

  function handleComplete() {
    recordQuizScore(quiz.id, hook.score, hook.passed);
  }

  if (hook.state === "idle") {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">📝</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{quiz.title}</h2>
        <p className="text-slate-500 mb-2">
          {quiz.questions.length} questions · Pass mark: {quiz.passMark}%
        </p>
        <p className="text-sm text-slate-400 mb-8">
          Each question shows an explanation after you answer.
        </p>
        <button
          onClick={hook.start}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-xl transition-colors"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (hook.state === "complete") {
    return (
      <QuizResult
        quiz={quiz}
        attempts={hook.attempts}
        score={hook.score}
        passed={hook.passed}
        onRetry={hook.start}
        nextHref={nextHref}
      />
    );
  }

  return (
    <QuizQuestion
      question={hook.currentQuestion}
      questionNumber={hook.currentIndex + 1}
      total={quiz.questions.length}
      selectedOptionId={hook.selectedOption}
      showExplanation={hook.showExplanation}
      onAnswer={(id) => {
        hook.answer(id);
        if (hook.currentIndex + 1 >= quiz.questions.length) handleComplete();
      }}
      onNext={hook.next}
      isLast={hook.currentIndex + 1 === quiz.questions.length}
    />
  );
}

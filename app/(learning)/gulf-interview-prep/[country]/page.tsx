import { getInterviewQuestions } from "@/lib/data-loaders";
import GulfInterviewClient from "./GulfInterviewClient";

interface Props {
  params: { country: string };
}

export default function GulfInterviewPrepPage({ params }: Props) {
  const questions = getInterviewQuestions(params.country);
  return <GulfInterviewClient country={params.country} questions={questions} />;
}

import { Module } from "@/types/module";
import { Quiz } from "@/types/quiz";
import { InterviewQuestion } from "@/types/interview";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

function readJson<T>(filePath: string): T {
  const fullPath = path.join(dataDir, filePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(raw) as T;
}

function readJsonDir<T>(dirPath: string): T[] {
  const fullDir = path.join(dataDir, dirPath);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<T>(path.join(dirPath, f)));
}

export function getFundamentalModules(): Module[] {
  return readJsonDir<Module>("fundamentals/modules").sort(
    (a, b) => a.order - b.order
  );
}

export function getFundamentalModule(slug: string): Module | null {
  try {
    return readJson<Module>(`fundamentals/modules/${slug}.json`);
  } catch {
    return null;
  }
}

export function getCertModules(certSlug: string): Module[] {
  return readJsonDir<Module>(`certifications/${certSlug}/modules`).sort(
    (a, b) => a.order - b.order
  );
}

export function getCertModule(certSlug: string, moduleSlug: string): Module | null {
  try {
    return readJson<Module>(`certifications/${certSlug}/modules/${moduleSlug}.json`);
  } catch {
    return null;
  }
}

export function getQuiz(quizId: string): Quiz | null {
  try {
    const parts = quizId.split("/");
    return readJson<Quiz>(`certifications/${parts[0]}/quizzes/${parts[1]}.json`);
  } catch {
    return null;
  }
}

export function getInterviewQuestions(region?: string): InterviewQuestion[] {
  if (region) {
    try {
      return readJson<InterviewQuestion[]>(`interview/gulf-${region}.json`);
    } catch {
      return [];
    }
  }
  return readJsonDir<InterviewQuestion[]>("interview")
    .flat()
    .filter(Boolean) as InterviewQuestion[];
}

export type BlockType =
  | "heading"
  | "paragraph"
  | "keyPoint"
  | "definition"
  | "table"
  | "example"
  | "gulfNote"
  | "list"
  | "warning";

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ModuleBlock {
  type: BlockType;
  text?: string;
  term?: string;
  items?: string[];
  table?: TableData;
}

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Module {
  id: string;
  sectionId: string;
  title: string;
  order: number;
  estimatedReadTime: number;
  difficulty: Difficulty;
  learningObjectives: string[];
  content: ModuleBlock[];
  quizId?: string;
}

export interface CertSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: Difficulty;
  moduleCount: number;
  estimatedHours: number;
  demandLevel: "high" | "medium" | "specialized";
  slug: string;
}

export type InterviewCategory =
  | "risk-assessment"
  | "ptw"
  | "incident-investigation"
  | "emergency-response"
  | "confined-space"
  | "hot-work"
  | "legislation"
  | "safety-culture"
  | "general";

export type GulfRegion =
  | "saudi-arabia"
  | "uae"
  | "qatar"
  | "kuwait"
  | "oman"
  | "bahrain"
  | "oil-gas";

export type InterviewLevel = "junior" | "mid" | "senior";

export interface InterviewQuestion {
  id: string;
  text: string;
  category: InterviewCategory;
  region?: GulfRegion;
  difficulty: InterviewLevel;
  modelAnswer: string;
  keyPoints: string[];
  tip?: string;
  followUpQuestions?: string[];
}

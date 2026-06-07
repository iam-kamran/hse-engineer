export interface WorkplaceScenario {
  id: string;
  title: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedReadTime: number;
  tags: string[];
  context: string;
  challenge: string;
  immediateActions: string[];
  shortTermActions: string[];
  longTermActions: string[];
  whatNotToDo: string[];
  keyPrinciple: string;
  regulatoryRefs: string[];
  gulfContext?: string;
  neboshElement?: string;
}

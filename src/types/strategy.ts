export interface Recommendation {
  title: string;
  description: string;
  budget: string;
  timeline: string;
}

export interface Strategy {
  summary: string;
  recommendations: Recommendation[];
  kpis: string[];
  timeline: string;
  totalBudget: string;
}
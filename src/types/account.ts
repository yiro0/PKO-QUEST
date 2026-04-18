export interface Account {
  id: string;
  name: string;
  description: string;
  features: string[];
  matchCriteria: {
    minAgeScore?: number;
    maxAgeScore?: number;
    minWorkTypeScore?: number;
    maxWorkTypeScore?: number;
    minIncomeScore?: number;
    maxIncomeScore?: number;
    preferenceScore?: number;
  };
}
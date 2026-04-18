export type Answer = {
  id: string;
  text: string;
  scoreCategory?: string; // np. 'age', 'income', 'work_type'
  scoreValue?: number;
};

export type Scene = {
  id: number;
  type: 'cinematic' | 'dialogue' | 'question' | 'result';
  title: string;
  description: string;
  characterLine?: string;
  answers?: Answer[];
  backgroundUrl?: string;
};
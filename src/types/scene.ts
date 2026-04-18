export type Answer = {
  id: string;
  text: string;
  scoreCategory?: string;
  scoreValue?: number;
};

export type Scene = {
  id: number;
  type: 'cinematic' | 'dialogue' | 'question' | 'result';
  title: string;
  description: string;
  characterLine?: string;
  characterName?: string;  // <-- Imię (np. "Barnaba")
  characterImage?: string; // <-- Ścieżka (np. "/images/characters/barnaba.png")
  backgroundUrl?: string;  // Ścieżka (np. "/images/backgrounds/karczma.jpg")
  answers?: Answer[];
};
import type { Scene } from '../types/scene';

export const SCENES: Scene[] = [
  {
    id: 1,
    type: 'cinematic',
    title: 'Inicjalizacja',
    description: 'System załadowany. Nawiązywanie bezpiecznego połączenia z operatorem...',
  },
  {
    id: 2,
    type: 'question',
    title: 'Weryfikacja stażu operacyjnego',
    characterLine: 'Rozpoczynamy skanowanie profilu. Podaj swój status czasowy w strukturach (wiek), aby dostosować poziom dostępu.',
    description: 'Wybierz swój przedział wiekowy:',
    answers: [
      { id: 'age_1', text: '[A] Jestem rekrutem (poniżej 13 lat)', scoreCategory: 'age', scoreValue: 10 },
      { id: 'age_2', text: '[B] Kadet wdrożeniowy (13 - 26 lat)', scoreCategory: 'age', scoreValue: 20 },
      { id: 'age_3', text: '[C] Pełnoprawny operator (powyżej 26 lat)', scoreCategory: 'age', scoreValue: 30 },
    ]
  },
  {
    id: 3,
    type: 'question',
    title: 'Charakterystyka misji',
    characterLine: 'Potwierdzono status. Określ swój tryb działania na rynku kontraktów.',
    description: 'Wybierz formę działalności:',
    answers: [
      { id: 'work_1', text: '[A] Niezależna jednostka (JDG)', scoreCategory: 'work_type', scoreValue: 1 },
      { id: 'work_2', text: '[B] Dowodzę sztabem (Spółka/Korporacja)', scoreCategory: 'work_type', scoreValue: 2 },
      { id: 'work_3', text: '[C] Cywil / Kontrakt standardowy (Etat)', scoreCategory: 'work_type', scoreValue: 3 },
    ]
  }
];
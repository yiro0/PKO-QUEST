import { create } from 'zustand';
import type { Account } from '../types/account';
import { calculateResult } from './scoring';

interface GameState {
  currentStage: 'welcome' | 'playing' | 'result';
  currentSceneId: number;
  scores: Record<string, number>;
  matchedAccount: Account | null; // Tu zapiszemy wynik końcowy
  
  startGame: () => void;
  advanceScene: (nextId: number) => void;
  addScore: (category: string, value: number) => void;
  finishGame: () => void; // Nowa akcja kończąca grę
}

export const useGameStore = create<GameState>((set, get) => ({
  currentStage: 'welcome',
  currentSceneId: 1,
  scores: {},
  matchedAccount: null,
  
  startGame: () => set({ currentStage: 'playing', currentSceneId: 1, scores: {}, matchedAccount: null }),
  
  advanceScene: (nextId) => set({ currentSceneId: nextId }),
  
  addScore: (category, value) => 
    set((state) => ({
      scores: { ...state.scores, [category]: (state.scores[category] || 0) + value }
    })),

  finishGame: () => {
    const finalScores = get().scores;
    const result = calculateResult(finalScores); // Wywołujemy algorytm
    set({ matchedAccount: result, currentStage: 'result' });
  }
}));
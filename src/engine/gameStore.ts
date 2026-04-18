import { create } from 'zustand';

interface GameState {
  currentStage: 'welcome' | 'playing' | 'result';
  startGame: () => void;
}

// Creating global game state
export const useGameStore = create<GameState>((set) => ({
  currentStage: 'welcome', // we start from welcome screen
  startGame: () => set({ currentStage: 'playing' }), // function that changes stage of game
}));
import { create } from 'zustand';

interface GameState {
  currentStage: 'welcome' | 'playing' | 'result';
  currentSceneId: number; // actual stage number
  scores: Record<string, number>; // place for points { age: 10, work_type: 1 }
  
  startGame: () => void;
  advanceScene: (nextId: number) => void;
  addScore: (category: string, value: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentStage: 'welcome',
  currentSceneId: 1, // starting stage
  scores: {},
  
  // afetr game start, scene and points have to be reset
  startGame: () => set({ currentStage: 'playing', currentSceneId: 1, scores: {} }),
  

  // transition to next scene
  advanceScene: (nextId) => set({ currentSceneId: nextId }),
  
  // adding points to category
  addScore: (category, value) => 
    set((state) => ({
      scores: { ...state.scores, [category]: (state.scores[category] || 0) + value }
    })),
}));
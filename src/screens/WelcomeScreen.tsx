import { useGameStore } from '../engine/gameStore';

export default function WelcomeScreen() {
  const startGame = useGameStore((state) => state.startGame);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-[#2c3e50] z-0" />

      <button
        onClick={startGame}
        className="relative z-10 bg-[#8b5a2b] hover:bg-[#5c3a21] text-[#fdf6e3] px-10 py-4 rounded-xl text-xl font-bold cursor-pointer transition-all shadow-lg hover:shadow-xl uppercase tracking-wider border-b-4 border-[#5c3a21] active:translate-y-1 active:border-b-0"
      >
        Play the game
      </button>
    </div>
  );
}
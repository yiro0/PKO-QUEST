import { useGameStore } from '../engine/gameStore';

export default function WelcomeScreen() {
  const startGame = useGameStore((state) => state.startGame);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Opcjonalne tło powitalne */}
      <div className="absolute inset-0 bg-[#2c3e50] z-0"></div>
      
      <div className="bg-[#fdf6e3]/95 border-4 border-[#8b5a2b] p-10 rounded-2xl text-center z-10 max-w-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
        <h1 className="text-5xl font-bold mb-6 text-[#8b5a2b] font-serif tracking-wide drop-shadow-sm">
          Dolina Złotego Dębu
        </h1>
        <p className="text-[#5c3a21] mb-10 font-serif text-xl leading-relaxed">
          Witaj w spokojnej dolinie! Przed Tobą nowe życie, własny kąt i skrzynia pełna miedziaków. Zanim zaczniesz budować swoją farmę, odwiedź Głównego Skarbnika.
        </p>
        
        <button 
          onClick={startGame}
          className="bg-[#8b5a2b] hover:bg-[#5c3a21] text-[#fdf6e3] px-10 py-4 rounded-xl text-xl font-bold cursor-pointer transition-all shadow-lg hover:shadow-xl uppercase tracking-wider font-serif border-b-4 border-[#5c3a21] active:translate-y-1 active:border-b-0"
        >
          Wsiądź do dyliżansu
        </button>
      </div>
    </div>
  );
}
import { useGameStore } from '../engine/gameStore';
import welcomeBg from '../assets/welcome_screen_backgrounf.png';

export default function WelcomeScreen() {
  const startGame = useGameStore((state) => state.startGame);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Zamieniamy jednolity kolor na obrazek tła */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${welcomeBg})` }}
      />
      
      {/* Opcjonalnie: lekki ciemny filtr (overlay), żeby przycisk był bardziej widoczny */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      <button
        onClick={startGame}
        className="relative z-10 bg-[#8b5a2b] hover:bg-[#5c3a21] text-[#fdf6e3] px-10 py-4 rounded-xl text-xl font-bold cursor-pointer transition-all shadow-lg hover:shadow-xl uppercase tracking-wider border-b-4 border-[#5c3a21] active:translate-y-1 active:border-b-0"
      >
        Play the game
      </button>
    </div>
  );
}
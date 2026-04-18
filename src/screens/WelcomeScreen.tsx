import { useGameStore } from '../engine/gameStore';

export default function WelcomeScreen() {
  // we are getting here startGame function from our engine
  const startGame = useGameStore((state) => state.startGame);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400 font-mono tracking-widest">
          PKO Quest
        </h1>
        <p className="text-slate-400 mb-12 font-mono">
          Witaj w centrali PKO Banku Polskiego. Twój pierwszy dzień w nowym świecie właśnie się zaczyna.
        </p>
        
        <button 
          onClick={startGame} // <-- here we are linking action
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg text-xl font-bold cursor-pointer transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] uppercase tracking-wider"
        >
          Zainicjuj profilowanie
        </button>
      </div>
    </div>
  );
}
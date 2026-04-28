import { useEffect, useState } from 'react';
import { useGameStore } from '../engine/gameStore';
import AccountCard from '../components/AccountCard';
import { motion } from 'framer-motion';
import resultBg from '../assets/welcome_screen_backgrounf.png'; // Background import

export default function ResultScreen() {
  const matchedAccount = useGameStore((state) => state.matchedAccount);
  const startGame = useGameStore((state) => state.startGame);
  
  // Stan kontrolujący, czy pokazujemy animację ładowania, czy już wynik
  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    // Symulacja obliczeń przez 3 sekundy (tak jak w Waszym scenariuszu Faza 3, scena 7)
    const timer = setTimeout(() => {
      setIsCalculating(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isCalculating) {
    return (
      <div className="min-h-screen relative text-white flex flex-col items-center justify-center">
        {/* background image div */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${resultBg})` }}
        />
        {/* black overlay placed ONTO the div for easier text readability */}
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-center relative z-10"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-mono text-blue-400 tracking-widest uppercase mb-2 drop-shadow-md">
            Analizowanie Profilu...
          </h2>
          <p className="text-slate-300 font-mono drop-shadow-md">Dopasowywanie najlepszego sprzętu operacyjnego</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative text-white py-12 px-4 flex flex-col items-center justify-center">
      {/* Tło obrazkowe */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${resultBg})` }}
      />
      {/* Ciemny overlay dla czytelności wyników i kart */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* Z-10 na głównych kontenerach, żeby były NAD tłem */}
      <div className="max-w-2xl w-full text-center mb-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-blue-400 mb-4 font-mono tracking-widest uppercase drop-shadow-md"
        >
          Raport Dispatch System
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-200 text-lg drop-shadow-md"
        >
          Wiem dokładnie, czego potrzebujesz. Na podstawie zebranych danych, to jest Twój optymalny przydział:
        </motion.p>
      </div>

      <div className="max-w-md w-full relative z-10">
        {matchedAccount ? (
          <AccountCard account={matchedAccount} />
        ) : (
          <div className="text-red-500 bg-black/50 p-4 rounded text-center">Błąd: Nie udało się dopasować konta.</div>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 relative z-10"
      >
        <button 
          onClick={startGame}
          className="text-slate-300 hover:text-white underline cursor-pointer font-bold drop-shadow-md"
        >
          Rozpocznij profilowanie od nowa
        </button>
      </motion.div>
    </div>
  );
}
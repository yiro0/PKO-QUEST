import { useEffect, useState } from 'react';
import { useGameStore } from '../engine/gameStore';
import AccountCard from '../components/AccountCard';
import { motion } from 'framer-motion';

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
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-mono text-blue-400 tracking-widest uppercase">
            Analizowanie Profilu...
          </h2>
          <p className="text-slate-500 mt-2 font-mono">Dopasowywanie najlepszego sprzętu operacyjnego</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-blue-400 mb-4 font-mono tracking-widest uppercase"
        >
          Raport Dispatch System
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 text-lg"
        >
          Wiem dokładnie, czego potrzebujesz. Na podstawie zebranych danych, to jest Twój optymalny przydział:
        </motion.p>
      </div>

      <div className="max-w-md w-full">
        {matchedAccount ? (
          <AccountCard account={matchedAccount} />
        ) : (
          <div className="text-red-500">Błąd: Nie udało się dopasować konta.</div>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12"
      >
        <button 
          onClick={startGame}
          className="text-slate-400 hover:text-white underline cursor-pointer"
        >
          Rozpocznij profilowanie od nowa
        </button>
      </motion.div>
    </div>
  );
}
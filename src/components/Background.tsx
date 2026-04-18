import { useGameStore } from '../engine/gameStore';
import { SCENES } from '../data/scenes';
import { motion, AnimatePresence } from 'framer-motion';

export default function Background() {
  const currentSceneId = useGameStore((state) => state.currentSceneId);
  const currentStage = useGameStore((state) => state.currentStage);
  
  const scene = SCENES.find((s) => s.id === currentSceneId);
  // Domyślne tło, gdyby scena go nie miała
  const defaultBg = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop'; 
  
  const bgImage = currentStage === 'result' ? defaultBg : (scene?.backgroundUrl || defaultBg);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Ciemny gradient/overlay, żeby terminal i litery były super czytelne */}
      <div className="absolute inset-0 bg-slate-900/75 z-10 backdrop-blur-[2px]"></div>
      
      {/* AnimatePresence odpowiada za płynne przenikanie zdjęć */}
      <AnimatePresence mode="wait">
        <motion.img
          key={bgImage}
          src={bgImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          alt="Scene background"
        />
      </AnimatePresence>
    </div>
  );
}
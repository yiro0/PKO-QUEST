import { useGameStore } from './engine/gameStore';
import WelcomeScreen from './screens/WelcomeScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const currentStage = useGameStore((state) => state.currentStage);

  return (
    <AnimatePresence mode="wait">
      
      {currentStage === 'welcome' && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <WelcomeScreen />
        </motion.div>
      )}

      {currentStage === 'playing' && (
        <motion.div
          key="playing"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GameScreen />
        </motion.div>
      )}

      {currentStage === 'result' && (
        <motion.div
          key="result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ResultScreen />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
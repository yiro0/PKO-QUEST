import { useGameStore } from '../engine/gameStore';
import { SCENES } from '../data/scenes';

export default function SceneRunner() {
  // 1. DODANE: Wyciągamy funkcję finishGame z silnika
  const { currentSceneId, advanceScene, addScore, finishGame } = useGameStore();

  const scene = SCENES.find((s) => s.id === currentSceneId);

  if (!scene) return <div className="text-red-500">Błąd: Brak sceny {currentSceneId}</div>;

  const handleChoice = (scoreCategory?: string, scoreValue?: number) => {
    if (scoreCategory && scoreValue) {
      addScore(scoreCategory, scoreValue);
    }
    
    if (currentSceneId < SCENES.length) {
      advanceScene(currentSceneId + 1);
    } else {
      // 2. ZMIENIONE: Zamiast po prostu przełączać ekran, odpalamy obliczanie!
      finishGame(); 
    }
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <h2 className="text-2xl text-blue-400 mb-2 font-mono font-bold uppercase tracking-widest">
        {scene.title}
      </h2>
      
      {scene.characterLine && (
        <div className="bg-slate-700/50 p-4 rounded-lg border-l-4 border-blue-500 mb-6 italic text-slate-200">
          "{scene.characterLine}"
        </div>
      )}

      <p className="text-slate-300 font-mono mb-8 text-lg">
        {scene.description}
      </p>

      <div className="flex flex-col gap-3 mt-auto">
        {scene.answers ? (
          scene.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleChoice(answer.scoreCategory, answer.scoreValue)}
              className="text-left bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-500 p-4 rounded transition-all cursor-pointer text-slate-200 shadow-sm"
            >
              {answer.text}
            </button>
          ))
        ) : (
          <button
            onClick={() => handleChoice()}
            className="text-center bg-blue-600 hover:bg-blue-500 p-4 rounded font-bold cursor-pointer transition-colors uppercase tracking-wider text-white"
          >
            Kontynuuj...
          </button>
        )}
      </div>
    </div>
  );
}
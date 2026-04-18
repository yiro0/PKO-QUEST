import { useGameStore } from '../engine/gameStore';
import { SCENES } from '../data/scenes';

export default function SceneRunner() {
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
      finishGame(); 
    }
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      
      {/* --- NOWY WSKAŹNIK POSTĘPU --- */}
      <div className="flex gap-2 mb-8">
        {SCENES.map((s, index) => {
          // index + 1 to numer sceny w kolejności (1, 2, 3...)
          const stepNumber = index + 1;
          
          let barClass = "bg-slate-700"; // Domyślnie szare (nieodkryte)
          
          if (stepNumber < currentSceneId) {
            barClass = "bg-blue-800"; // Ukończone
          } else if (stepNumber === currentSceneId) {
            barClass = "bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"; // Aktualne (pulsuje i świeci)
          }

          return (
            <div 
              key={s.id} 
              className={`h-1.5 flex-1 rounded-sm transition-all duration-300 ${barClass}`}
            />
          );
        })}
      </div>
      {/* ----------------------------- */}

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
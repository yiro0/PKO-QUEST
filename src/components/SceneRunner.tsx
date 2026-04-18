import { useGameStore } from '../engine/gameStore';
import { SCENES } from '../data/scenes';
import CharacterSprite from './CharacterSprite';

export default function SceneRunner() {
  const { currentSceneId, advanceScene, addScore, finishGame } = useGameStore();
  const scene = SCENES.find((s) => s.id === currentSceneId);

  if (!scene) return <div className="text-red-500">Błąd: Brak sceny {currentSceneId}</div>;

  const handleChoice = (scoreCategory?: string, scoreValue?: number) => {
    if (scoreCategory && scoreValue) addScore(scoreCategory, scoreValue);
    if (currentSceneId < SCENES.length) advanceScene(currentSceneId + 1);
    else finishGame(); 
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      
      {/* 1. Wyświetlenie Postaci */}
      <CharacterSprite imageSrc={scene.characterImage} />

      {/* 2. Stylizacja na przytulne okno dialogowe (pergamin/drewno) */}
      <div className="bg-[#fdf6e3]/95 p-6 rounded-xl border-4 border-[#8b5a2b] shadow-[0_10px_25px_rgba(0,0,0,0.5)] relative flex-1 flex flex-col">
        
        {/* Imię postaci na ozdobnej wstążce */}
        {scene.characterName && (
          <div className="absolute -top-5 left-6 bg-[#8b5a2b] text-[#fdf6e3] px-5 py-1.5 rounded-sm shadow-md font-serif text-lg font-bold border-2 border-[#5c3a21] uppercase tracking-wider">
            {scene.characterName}
          </div>
        )}
        
        <h2 className="font-serif text-2xl font-bold mb-4 text-[#5c3a21] border-b-2 border-[#8b5a2b]/20 pb-2 mt-2">
          {scene.title}
        </h2>
        
        {scene.characterLine && (
          <p className="italic text-[#4a3b32] mb-4 font-serif text-xl leading-relaxed">
            "{scene.characterLine}"
          </p>
        )}

        <p className="font-serif mb-6 text-[#5c3a21]/80">{scene.description}</p>

        {/* Przyciski odpowiedzi dopasowane do stylu */}
        <div className="flex flex-col gap-3 mt-auto">
          {scene.answers ? (
            scene.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleChoice(answer.scoreCategory, answer.scoreValue)}
                className="text-left bg-[#e9dcc9] hover:bg-[#d8c3a5] border-2 border-[#8b5a2b]/40 hover:border-[#8b5a2b] p-4 rounded-lg font-serif transition-colors text-[#4a3b32] shadow-sm font-medium"
              >
                {answer.text}
              </button>
            ))
          ) : (
            <button
              onClick={() => handleChoice()}
              className="text-center bg-[#8b5a2b] hover:bg-[#5c3a21] p-4 rounded-lg font-bold cursor-pointer transition-colors uppercase tracking-wider text-[#fdf6e3] font-serif shadow-md"
            >
              Kontynuuj przygodę...
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
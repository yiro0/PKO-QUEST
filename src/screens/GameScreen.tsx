import SceneRunner from '../components/SceneRunner';
import Background from '../components/Background';

export default function GameScreen() {
  return (
    // Zmieniamy wyśrodkowanie na przypięcie do dołu (justify-end)
    <div className="relative min-h-screen flex flex-col justify-end p-4 md:p-8 pb-8 md:pb-12">
      
      <Background />

      {/* Kontener ograniczający szerokość, przypięty na dole */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col">
        <SceneRunner />
      </div>
    </div>
  );
}
import SceneRunner from '../components/SceneRunner';
import Background from '../components/Background'; // <-- IMPORT

export default function GameScreen() {
  return (
    // ZMIANA: relative i pozbywamy się twardego koloru tła (zostaje samo h-screen)
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      
      {/* NASZE NOWE TŁO */}
      <Background />

      {/* ZMIANA: dodajemy z-10 i relative, żeby terminal był NAD tłem */}
      <div className="relative z-10 max-w-3xl w-full bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-2xl min-h-[500px] flex flex-col transition-all">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-slate-400 font-mono text-sm">dispatch_terminal_v1.0</span>
        </div>
        
        <SceneRunner />
        
      </div>
    </div>
  );
}
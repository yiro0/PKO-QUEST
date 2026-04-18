export default function GameScreen() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-slate-400 font-mono text-sm">dispatch_terminal_v1.0</span>
        </div>
        
        <h2 className="text-2xl text-blue-400 mb-4 font-mono font-bold uppercase tracking-widest">
          Skanowanie agenta...
        </h2>
        <p className="text-slate-300 font-mono">
          Trwa wczytywanie pierwszego scenariusza. Proszę czekać.
        </p>
      </div>
    </div>
  );
}
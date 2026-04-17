export default function WelcomeScreen() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">PKO Quest</h1>
        <p className="text-slate-400 mb-8">Witaj w centrali PKO Banku Polskiego. Twój pierwszy dzień w nowym świecie właśnie się zaczyna.</p>
        <button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded text-xl font-bold cursor-pointer transition-colors">
          Zainicjuj profilowanie
        </button>
      </div>
    </div>
  );
}
import type { Account } from '../types/account';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface AccountCardProps {
  account: Account;
}

export default function AccountCard({ account }: AccountCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl relative overflow-hidden"
    >
      {/* Dekoracyjny pasek na górze */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500"></div>

      <h3 className="text-2xl font-bold text-white mb-2">{account.name}</h3>
      <p className="text-slate-400 mb-6 font-mono text-sm">{account.description}</p>

      <div className="space-y-3 mb-8">
        {account.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <span className="text-slate-200">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {/* Placeholder - tu w przyszłości Dev C z Fazy 3 wepnie link do formularza banku */}
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded cursor-pointer transition-colors w-full uppercase tracking-wider">
          Otwórz to konto
        </button>
      </div>
    </motion.div>
  );
}
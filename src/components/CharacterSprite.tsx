import { motion } from 'framer-motion';

interface Props {
  imageSrc?: string;
}

export default function CharacterSprite({ imageSrc }: Props) {
  // Jeśli scena nie ma przypisanej postaci, nic nie rysujemy
  if (!imageSrc) return null;

  return (
    <motion.div 
      key={imageSrc}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -5, 0] }} 
      transition={{ 
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }}
      className="w-64 h-80 mx-auto mb-[-20px] relative z-20"
    >
      {/* Ładujemy obrazek z Twojego folderu public/images/... */}
      <img 
        src={imageSrc} 
        alt="Postać" 
        className="w-full h-full object-contain drop-shadow-2xl"
        // Tymczasowy zastępnik (alt), jeśli pliku jeszcze nie ma na dysku
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/400x600/transparent/white?text=Miejsce+na\\nPostac';
        }}
      />
    </motion.div>
  );
}
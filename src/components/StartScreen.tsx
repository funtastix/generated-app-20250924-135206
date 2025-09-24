import { motion } from 'framer-motion';
interface StartScreenProps {
  onStart: () => void;
}
export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[10000] p-4"
    >
      <div className="text-center space-y-8">
        <h1 
          className="font-pixel text-5xl md:text-7xl text-cyan animate-flicker" 
          style={{ textShadow: '0 0 8px #00FFFF, 0 0 12px #00FFFF' }}
        >
          AuraStream
        </h1>
        <p className="text-lime text-lg md:text-xl max-w-md">
          An immersive retro-futuristic listening experience. Click to begin transmission.
        </p>
        <button
          onClick={onStart}
          className="font-pixel text-2xl bg-transparent border-2 border-magenta text-magenta px-8 py-4 hover:bg-magenta hover:text-black hover:shadow-glow-magenta transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-magenta/50 active:scale-95"
        >
          [ ENTER ]
        </button>
      </div>
    </motion.div>
  );
}
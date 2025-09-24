import { cn } from '@/lib/utils';
import { usePlayerStore } from '@/store/playerStore';
export function AlbumArt() {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className={cn(
        "relative aspect-square w-full border-2 border-cyan p-2",
        "before:absolute before:inset-0 before:border-2 before:border-magenta before:animate-glitch before:opacity-75",
        "after:absolute after:inset-0 after:border-2 after:border-lime after:animate-glitch after:animation-delay-[-0.2s] after:opacity-75"
      )}>
        <div className={cn(
          "w-full h-full bg-black flex items-center justify-center transition-all duration-500",
          isPlaying ? 'animate-pulse' : ''
        )}>
          <div className={cn(
            "w-2/3 h-2/3 border-4 transition-all duration-1000",
            isPlaying ? "border-lime animate-flicker" : "border-cyan"
          )}>
            <div className={cn(
              "w-full h-full flex items-center justify-center transition-all duration-1000",
              isPlaying ? "bg-lime/10" : "bg-cyan/10"
            )}>
              <div className={cn(
                "w-1/3 h-1/3 bg-magenta transition-transform duration-1000",
                isPlaying ? "rotate-45 scale-125" : "rotate-0"
              )}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
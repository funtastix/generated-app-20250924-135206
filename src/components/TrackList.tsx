import { usePlayerStore } from '@/store/playerStore';
import { cn } from '@/lib/utils';
import { Music, Volume2 } from 'lucide-react';
export function TrackList() {
  const tracks = usePlayerStore((state) => state.tracks);
  const currentTrackIndex = usePlayerStore((state) => state.currentTrackIndex);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const playTrack = usePlayerStore((state) => state.playTrack);
  return (
    <div className="w-full border-2 border-magenta p-2">
      <div className="border-2 border-lime h-96 overflow-y-auto p-4 space-y-2">
        {tracks.map((track, index) => {
          const isActive = currentTrackIndex === index;
          return (
            <button
              key={index}
              onClick={() => playTrack(index)}
              className={cn(
                "w-full flex items-center gap-4 text-left p-2 transition-colors duration-200",
                "hover:bg-lime/20 focus:bg-lime/20 focus:outline-none focus:ring-2 focus:ring-lime",
                isActive ? "text-lime" : "text-cyan"
              )}
            >
              <div className="font-pixel text-lg w-6">
                {isActive && isPlaying ? (
                  <Volume2 className="w-5 h-5 animate-pulse text-lime" />
                ) : (
                  <span className={isActive ? 'text-lime' : 'text-magenta'}>{String(index + 1).padStart(2, '0')}</span>
                )}
              </div>
              <div className="flex-grow">
                <p className="font-mono text-xl truncate">{track.title}</p>
                <p className="text-sm text-magenta/80">{track.artist}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
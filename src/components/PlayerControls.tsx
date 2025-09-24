import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { usePlayerStore } from '@/store/playerStore';
import { Slider } from '@/components/ui/slider';
import { quotes } from '@/lib/quotes';
function formatTime(seconds: number) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}
export function PlayerControls() {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const nextTrack = usePlayerStore((state) => state.nextTrack);
  const prevTrack = usePlayerStore((state) => state.prevTrack);
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const isMuted = usePlayerStore((state) => state.isMuted);
  const toggleMute = usePlayerStore((state) => state.toggleMute);
  const currentTime = usePlayerStore((state) => state.currentTime);
  const duration = usePlayerStore((state) => state.duration);
  const currentTrackIndex = usePlayerStore((state) => state.currentTrackIndex);
  const tracks = usePlayerStore((state) => state.tracks);
  const setCurrentTime = usePlayerStore((state) => state.setCurrentTime);
  const setIsSeeking = usePlayerStore((state) => state.setIsSeeking);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const currentTrack = currentTrackIndex !== null ? tracks[currentTrackIndex] : null;
  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0]);
  };
  const handleSeekStart = () => {
    setIsSeeking(true);
  };
  const handleSeekEnd = (value: number[]) => {
    setCurrentTime(value[0]);
    setIsSeeking(false);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 h-28 bg-black/80 backdrop-blur-sm border-t-2 border-cyan p-2 z-50">
      <div className="w-full h-full border-2 border-magenta p-2 flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Slider
              value={[currentTime]}
              max={duration || 1}
              onValueChange={handleSeek}
              onPointerDown={handleSeekStart}
              onValueCommit={handleSeekEnd}
              onTouchStart={handleSeekStart}
              className="[&_span.relative.h-full.overflow-hidden.rounded-full.bg-background]:bg-lime/20 [&_span.relative.h-full.overflow-hidden.rounded-full.bg-background>span]:bg-lime"
            />
          </div>
          <div className="font-mono text-sm w-24 text-right">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            {currentTrack && (
              <div>
                <p className="font-mono text-lime truncate">{currentTrack.title}</p>
                <p className="text-magenta text-sm truncate">{currentTrack.artist}</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={prevTrack} className="text-cyan hover:text-lime hover:scale-110 transition-all focus:outline-none focus:ring-2 ring-lime rounded-full"><SkipBack size={28} /></button>
            <button onClick={togglePlay} className="text-lime bg-lime/20 rounded-full p-2 border-2 border-lime hover:shadow-glow-lime transition-all focus:outline-none focus:ring-2 ring-lime">
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
            <button onClick={nextTrack} className="text-cyan hover:text-lime hover:scale-110 transition-all focus:outline-none focus:ring-2 ring-lime rounded-full"><SkipForward size={28} /></button>
          </div>
          <div className="w-1/3 flex items-center justify-end gap-2">
            <button onClick={toggleMute} className="text-cyan hover:text-lime transition-colors focus:outline-none focus:ring-2 ring-lime rounded-full">
              {isMuted || volume === 0 ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.01}
              onValueChange={(v) => setVolume(v[0])}
              className="w-24 [&_span.relative.h-full.overflow-hidden.rounded-full.bg-background]:bg-cyan/20 [&_span.relative.h-full.overflow-hidden.rounded-full.bg-background>span]:bg-cyan"
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black px-2 border-x-2 border-cyan text-magenta text-sm animate-flicker">
        {currentQuote}
      </div>
    </div>
  );
}
import React, { useRef, useEffect, useState } from 'react';
import { MusicPlayer } from '@/components/MusicPlayer';
import { PlayerControls } from '@/components/PlayerControls';
import { usePlayerStore } from '@/store/playerStore';
import { StartScreen } from '@/components/StartScreen';
import { AnimatePresence } from 'framer-motion';
export function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const {
    currentTrackIndex,
    tracks,
    isPlaying,
    volume,
    isMuted,
    currentTime,
    isSeeking,
    pause,
    nextTrack,
    setDuration,
    setCurrentTime,
  } = usePlayerStore();
  const currentTrack = currentTrackIndex !== null ? tracks[currentTrackIndex] : null;
  const handleStart = () => {
    setHasStarted(true);
    // On iOS, audio context must be unlocked by a user gesture.
    // Playing and immediately pausing a silent audio element is a common workaround.
    audioRef.current?.play().catch(() => {});
    audioRef.current?.pause();
  };
  // Effect for loading the track source
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentTrack) {
      if (audio.src !== currentTrack.url) {
        audio.src = currentTrack.url;
        audio.load();
      }
    }
  }, [currentTrack]);
  // Effect for controlling play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasStarted) return;
    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
        pause(); // Sync state back to paused if playback fails
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, hasStarted, pause]);
  // Effect for volume and mute state
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
    }
  }, [volume, isMuted]);
  // Effect for seeking
  useEffect(() => {
    const audio = audioRef.current;
    // Only update audio's currentTime when the user is NOT actively seeking.
    // The threshold prevents fighting over minor discrepancies between state and audio time.
    if (audio && !isSeeking && Math.abs(audio.currentTime - currentTime) > 1.5) {
      audio.currentTime = currentTime;
    }
  }, [currentTime, isSeeking]);
  const handleTimeUpdate = () => {
    if (audioRef.current && !isSeeking) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  return (
    <div className="min-h-screen pb-32">
      <AnimatePresence>
        {!hasStarted && <StartScreen onStart={handleStart} />}
      </AnimatePresence>
      {hasStarted && (
        <>
          <MusicPlayer />
          <PlayerControls />
          <footer className="fixed bottom-32 left-0 right-0 text-center text-magenta/50 text-xs py-2 pointer-events-none">
            <p>Built with ❤️ at Cloudflare</p>
          </footer>
        </>
      )}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextTrack}
        preload="metadata"
        crossOrigin="anonymous"
      />
    </div>
  );
}
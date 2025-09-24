import { create } from 'zustand';
import { tracks, Track } from '@/lib/tracks';
interface PlayerState {
  tracks: Track[];
  currentTrackIndex: number | null;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  duration: number;
  currentTime: number;
  isSeeking: boolean;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  playTrack: (trackIndex: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setDuration: (duration: number) => void;
  setCurrentTime: (time: number) => void;
  setIsSeeking: (isSeeking: boolean) => void;
}
export const usePlayerStore = create<PlayerState>((set, get) => ({
  tracks,
  currentTrackIndex: null,
  isPlaying: false,
  volume: 0.75,
  isMuted: false,
  duration: 0,
  currentTime: 0,
  isSeeking: false,
  play: () => {
    const { currentTrackIndex } = get();
    if (currentTrackIndex === null && tracks.length > 0) {
      set({ isPlaying: true, currentTrackIndex: 0 });
    } else {
      set({ isPlaying: true });
    }
  },
  pause: () => set({ isPlaying: false }),
  togglePlay: () => {
    const { isPlaying, currentTrackIndex, tracks } = get();
    if (currentTrackIndex === null && tracks.length > 0) {
      set({ currentTrackIndex: 0, isPlaying: true });
    } else {
      set({ isPlaying: !isPlaying });
    }
  },
  playTrack: (trackIndex) => {
    const { currentTrackIndex, isPlaying } = get();
    if (currentTrackIndex === trackIndex) {
      set({ isPlaying: !isPlaying });
    } else {
      set({ currentTrackIndex: trackIndex, isPlaying: true, currentTime: 0 });
    }
  },
  nextTrack: () => {
    const { currentTrackIndex, tracks } = get();
    if (currentTrackIndex !== null) {
      const nextIndex = (currentTrackIndex + 1) % tracks.length;
      set({ currentTrackIndex: nextIndex, isPlaying: true, currentTime: 0 });
    } else {
      get().play();
    }
  },
  prevTrack: () => {
    const { currentTrackIndex, tracks } = get();
    if (currentTrackIndex !== null) {
      const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
      set({ currentTrackIndex: prevIndex, isPlaying: true, currentTime: 0 });
    } else {
      get().play();
    }
  },
  setVolume: (volume) => set({ volume }),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  setDuration: (duration) => set({ duration }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setIsSeeking: (isSeeking) => set({ isSeeking }),
}));
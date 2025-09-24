import { AlbumArt } from './AlbumArt';
import { TrackList } from './TrackList';
export function MusicPlayer() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col items-center space-y-12">
        <h1 className="font-pixel text-4xl md:text-5xl text-cyan animate-flicker" style={{ textShadow: '0 0 5px #00FFFF' }}>
          AuraStream
        </h1>
        <AlbumArt />
        <TrackList />
      </div>
    </div>
  );
}
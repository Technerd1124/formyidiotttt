import { useState, useRef } from "react";
import { Heart, Play, Pause, Music } from "lucide-react";
import photoPlaceholder from "@/assets/photo-placeholder.jpg";

const PhotoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative group">
      {/* Glowing border */}
      <div className="absolute -inset-1 gradient-love rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-card rounded-2xl p-6 shadow-2xl border border-love-pink/30 animate-love-letter">
        {/* Photo */}
        <div className="relative w-64 h-72 mx-auto mb-6 rounded-xl overflow-hidden animate-glow">
          <img
            src={photoPlaceholder}
            alt="Amarendra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-love-red/30 to-transparent" />
        </div>

        {/* Name */}
        <h2 className="text-4xl font-script text-center gradient-love-text mb-2">
          Amarendra
        </h2>
        <p className="text-center text-muted-foreground font-body text-sm mb-6 flex items-center justify-center gap-1">
          <Heart className="w-3 h-3 text-love-red fill-love-red" />
          My Forever Valentine
          <Heart className="w-3 h-3 text-love-red fill-love-red" />
        </p>

        {/* Music Player */}
        <div className="bg-secondary/60 backdrop-blur-sm rounded-xl p-4 border border-love-pink/20">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full gradient-love flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-heart"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground font-body">Our Song 🎵</p>
              <p className="text-xs text-muted-foreground font-body">
                {isPlaying ? "♪ Playing..." : "Tap to play our song"}
              </p>
              {isPlaying && (
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-love-red rounded-full"
                      style={{
                        height: `${Math.random() * 16 + 4}px`,
                        animation: `pulse-heart ${0.5 + Math.random() * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            <Music className="w-5 h-5 text-love-rose" />
          </div>
        </div>

        {/* Audio element - using a royalty free love song */}
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          loop
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default PhotoCard;

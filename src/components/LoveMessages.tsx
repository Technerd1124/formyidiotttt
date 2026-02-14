import { Heart } from "lucide-react";

const loveMessages = [
  "You make my heart skip a beat 💓",
  "Every moment with you is magical ✨",
  "You are my today and all of my tomorrows 🌹",
  "In you, I found my forever 💍",
  "My heart beats your name, idiot love u  💕",
];

const LoveMessages = () => {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      {loveMessages.map((msg, i) => (
        <div
          key={i}
          className="bg-card/80 backdrop-blur-sm border border-love-pink/20 rounded-2xl p-4 shadow-lg animate-love-letter flex items-start gap-3"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <Heart className="w-5 h-5 text-love-red fill-love-red flex-shrink-0 mt-0.5 animate-pulse-heart" />
          <p className="font-body text-foreground text-sm leading-relaxed">{msg}</p>
        </div>
      ))}
    </div>
  );
};

export default LoveMessages;

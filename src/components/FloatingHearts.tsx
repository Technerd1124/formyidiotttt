import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; size: number; delay: number; duration: number; emoji: string }>>([]);

  useEffect(() => {
    const emojis = ["❤️", "💕", "💗", "💖", "💘", "🌹", "✨", "💝"];
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 14,
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 8,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;

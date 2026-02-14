import { Heart, Sparkles, Camera } from "lucide-react";
import valentineBg from "@/assets/valentine-bg.jpg";
import FloatingHearts from "@/components/FloatingHearts";
import PhotoCard from "@/components/PhotoCard";
import LoveMessages from "@/components/LoveMessages";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={valentineBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-love-pink/30">
            <Sparkles className="w-4 h-4 text-love-gold" />
            <span className="text-xs font-body font-semibold text-secondary-foreground tracking-wide uppercase">
              Valentine's Special
            </span>
            <Sparkles className="w-4 h-4 text-love-gold" />
          </div>

          <h1 className="text-6xl md:text-8xl font-script gradient-love-text text-shadow-love mb-4 animate-gentle-bounce">
            Happy Valentine's Day
          </h1>
          <p className="text-xl md:text-2xl font-script text-love-rose mb-2">
            To My Dearest
          </p>
          <h2 className="text-5xl md:text-7xl font-script gradient-love-text animate-shimmer">
            Amarendra
          </h2>

          <div className="flex items-center justify-center gap-2 mt-6">
            <Heart className="w-5 h-5 text-love-red fill-love-red animate-pulse-heart" />
            <p className="font-body text-muted-foreground text-sm">With all my love, forever & always</p>
            <Heart className="w-5 h-5 text-love-red fill-love-red animate-pulse-heart" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 animate-gentle-bounce mt-4">
          <p className="font-body text-xs text-muted-foreground">Scroll down for more</p>
          <div className="text-love-red text-center mt-1">↓</div>
        </div>
      </section>

      {/* Photo Card & Song Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-love-blush/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-script text-center gradient-love-text mb-4">
            You & Me 💑
          </h2>
          <p className="text-center font-body text-muted-foreground mb-12 text-sm">
            A picture says a thousand words, but my love for you is beyond words
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <PhotoCard />
            <LoveMessages />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-love-blush/20 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-love-rose" />
              <span className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">Our Memories</span>
              <Camera className="w-5 h-5 text-love-rose" />
            </div>
            <h2 className="text-4xl md:text-5xl font-script gradient-love-text mb-3">
              Our Photo Gallery 📸
            </h2>
            <p className="font-body text-muted-foreground text-sm">
              Every picture tells a story of us 💕
            </p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-card/90 backdrop-blur-sm border border-love-pink/20 rounded-3xl p-8 md:p-12 shadow-2xl animate-glow">
            <div className="text-center mb-6">
              <span className="text-4xl">💌</span>
              <h2 className="text-3xl font-script gradient-love-text mt-2">A Letter For You</h2>
            </div>
            <div className="font-body text-foreground/80 space-y-4 text-sm leading-relaxed">
              <p>My Dearest Amarendra,</p>
              <p>
                Every day with you feels like Valentine's Day. Your smile lights up my world,
                your laughter is my favorite melody, and your love is the greatest gift I've ever received.
              </p>
              <p>
                You are my sunshine on cloudy days, my calm in the storm, and my reason to believe
                in forever. I am so grateful that the universe brought us together. 🌟
              </p>
              <p>
                Here's to us — to every moment we've shared and every adventure that awaits.
                I love you more than words could ever express.
              </p>
              <p className="font-script text-xl gradient-love-text text-right mt-6">
                Forever Yours ❤️
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


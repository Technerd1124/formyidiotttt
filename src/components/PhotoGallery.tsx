import { useState } from "react";
import { Heart, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/photo-placeholder (2).jpg";
import gallery5 from "@/assets/gallery11.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: gallery1, caption: "Our sunset moments 🌅", span: "col-span-2 row-span-1" },
  { src: gallery2, caption: "Holding you close 🤝", span: "col-span-1 row-span-2" },
  { src: gallery3, caption: "Roses for you 🌹", span: "col-span-1 row-span-1" },
  { src: gallery4, caption: "Rain can't stop us 🌧️", span: "col-span-1 row-span-2" },
  { src: gallery5, caption: "Our coffee dates ☕", span: "col-span-1 row-span-1" },
  { src: gallery6, caption: "Dancing under stars ✨", span: "col-span-2 row-span-1" },
];

const PhotoGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className={`${i === 0 ? "md:col-span-2" : ""} ${i === 1 || i === 3 ? "md:row-span-2" : ""} relative group cursor-pointer rounded-2xl overflow-hidden border border-love-pink/20 shadow-lg hover:shadow-2xl transition-all duration-500`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover min-h-[200px] md:min-h-[240px] group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="animate-love-letter max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selected].src}
              alt={photos[selected].caption}
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-4 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-love-pink fill-love-pink animate-pulse-heart" />
              <p className="font-script text-2xl text-primary-foreground">{photos[selected].caption}</p>
              <Heart className="w-4 h-4 text-love-pink fill-love-pink animate-pulse-heart" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;

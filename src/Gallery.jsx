import { useState, useEffect } from "react";

// ✅ Moved outside so it's constant & not a dependency
const images = [
  "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg",
  "/images/5.jpg", "/images/9.jpg", "/images/10.jpg", "/images/12.jpg",
  "/images/13.jpg", "/images/14.jpg", "/images/15.jpg",
  "/images/6.jpg", "/images/7.jpg", "/images/8.jpg", "/images/11.jpg",
  "/images/18.jpg", "/images/19.jpg",
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) => (prev + 1) % images.length);
        }
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
        }
        if (e.key === "Escape") {
          setLightboxIndex(null);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]); // ✅ no warning now

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="backdrop-blur-md bg-black/10 dark:bg-black/40 text-gray-900 dark:text-white p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-4xl font-bold mb-10 text-center text-orange-600 dark:text-orange-400">
          Our Gallery
        </h2>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={src}
                alt={`yoga-${index + 1}`}
                loading="lazy"
                className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">View Photo</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Counter */}
            <p className="absolute top-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
              {lightboxIndex + 1} / {images.length}
            </p>

            {/* Image */}
            <img
              src={images[lightboxIndex]}
              alt="Full View"
              className="max-h-[80vh] max-w-full rounded-lg shadow-lg"
            />

            {/* Download Button */}
            <a
              href={images[lightboxIndex]}
              download
              className="absolute top-4 right-4 text-white text-lg bg-orange-500 px-3 py-1 rounded hover:bg-orange-600"
            >
              ⬇ Download
            </a>

            {/* Navigation Arrows */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-orange-400"
              onClick={() =>
                setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
              }
            >
              ❮
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-orange-400"
              onClick={() =>
                setLightboxIndex((prev) => (prev + 1) % images.length)
              }
            >
              ❯
            </button>
          </div>
        </div>
      )}

      {/* Tailwind fade-in animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}

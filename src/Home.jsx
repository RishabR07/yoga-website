import { useState, useEffect } from "react";

const images = [
  "/images/15.jpg",
  "/images/12.jpg",
  "/images/9.jpg",
  "/images/5.jpg",
  "/images/13.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden font-sans text-[#3e2f1c] bg-white">
      {/* Background Slideshow */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Golden-Brown Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5E3C]/40 via-[#deb887]/20 to-transparent"></div>

      {/* Hero Section */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#b8860b] drop-shadow-lg">
          College Yoga & Wellness Club
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#5c4033] max-w-2xl mx-auto leading-relaxed">
          Discover inner peace, flexibility, and strength.  
          Join us in our journey of mindfulness, meditation, and holistic living.  
          Together, we create a healthier and happier campus.
        </p>
      </div>

      {/* Features Section */}
      <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-6">
        <div className="bg-gradient-to-br from-[#deb887]/80 to-[#8B5E3C]/80 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold text-white mb-2">🧘‍♀️ Daily Practice</h3>
          <p className="text-white/90">
            Morning and evening yoga sessions designed to energize and relax.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#deb887]/80 to-[#8B5E3C]/80 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold text-white mb-2">🌿 Meditation Retreats</h3>
          <p className="text-white/90">
            Weekend retreats to rejuvenate your mind and soul in nature.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#deb887]/80 to-[#8B5E3C]/80 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold text-white mb-2">🤝 Community Wellness</h3>
          <p className="text-white/90">
            A supportive community that encourages a balanced and mindful lifestyle.
          </p>
        </div>
      </div>

      {/* Footer-style CTA */}
      <div className="relative z-10 mt-16 mb-12 text-center px-6">
        <h2 className="text-3xl font-bold text-[#b8860b] mb-4">
          Start Your Wellness Journey Today
        </h2>
        <p className="text-[#5c4033]">
          Sign up for free workshops, meditation sessions, and yoga classes at our college.
        </p>
      </div>
    </section>
  );
}

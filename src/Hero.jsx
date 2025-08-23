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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // slower for more relaxed feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-500 to-orange-100">
      {/* Hero Section with Background Slider */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* Dim overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="z-10 text-center max-w-3xl px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-wide">
            Welcome to Yoga Club Web Page
          </h2>
          <p className="text-lg md:text-2xl text-gray-100 drop-shadow-md mb-8 leading-relaxed">
            Your journey to mindfulness and wellness starts here.
          </p>
          <a
            href="#about"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300"
          >
            Explore Classes
          </a>
        </div>
      </section>

      {/* Why Yoga Bliss Section */}
      <section id="about" className="py-20 px-4 bg-orange-50">
        <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">
          Why Yoga Club;
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-[0_0_20px_4px_rgba(234,88,12,0.3)] transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At KPT YOGA, we envision a world where every individual feels
              empowered, connected, and whole through the practice of yoga. Yoga
              is not just a physical exercise, but a path to transformation,
              emotional resilience, and spiritual awakening. Our sanctuary
              nurtures inner peace, promotes harmony with nature, and inspires
              mindful living — both on and off the mat.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-[0_0_20px_4px_rgba(234,88,12,0.3)] transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide a welcoming and inclusive space for all
              to explore the depth of yoga. We offer authentic, heart-centered
              teaching rooted in tradition yet adaptable for modern life.
              Through classes, workshops, and community events, we foster
              growth, healing, and connection. Whether you're a beginner or a
              lifelong yogi, we support your journey toward balance, health, and
              joy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/15.jpg')" }} // Replace with Yoga image
      ></div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          College Yoga & Wellness Club
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Discover inner peace, flexibility, and strength.  
          Together, we create a healthier and happier campus.
        </p>
      </div>
    </section>
  );
}

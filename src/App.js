import Navbar from './Header'; // Keep your Navbar
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Classes from './Classes';
import About from './About';
// import Image from './Image'; // Optional
import Gallery from './Gallery';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-400 to-white-100 text-gray-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow w-full">
        {/* 🔹 Sections stacked vertically */}
        <section id="home" className="p-8 max-w-5xl mx-auto">
          <Home />
        </section>

        <section id="classes" className="p-8 max-w-5xl mx-auto">
          <Classes />
        </section>

        <section id="about" className="p-8 max-w-5xl mx-auto">
          <About />
        </section>

        <section id="gallery" className="p-8 max-w-5xl mx-auto">
          <Gallery />
        </section>

        <section id="contact" className="p-8 max-w-5xl mx-auto">
          <Contact />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;

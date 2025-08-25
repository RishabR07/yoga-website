import Navbar from './Header';  // Navbar
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Classes from './Classes';
import Gallery from './Gallery';
import SectionWrapper from './SectionWrapper'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="min-h-screen text-gray-900 font-sans flex flex-col">
      <Navbar />

      {/* Main Content with animated sections */}
      <main className="flex-grow w-full">
        <SectionWrapper id="home" direction="up"><Home /></SectionWrapper>
        <SectionWrapper id="about" direction="left"><About /></SectionWrapper>
        <SectionWrapper id="classes" direction="right"><Classes /></SectionWrapper>
        <SectionWrapper id="gallery" direction="down"><Gallery /></SectionWrapper>
        <SectionWrapper id="contact" direction="up"><Contact /></SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

export default App;

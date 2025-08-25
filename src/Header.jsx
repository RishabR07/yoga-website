import { useState, useEffect } from 'react';
import logo from './assets/123.jpg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '#home' },
    { name: 'Classes', to: '#classes' },
    { name: 'About', to: '#about' },
    { name: 'Gallery', to: '#gallery' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 
        ${isScrolled ? 'shadow-xl bg-[#b8860b]' : 'bg-[#b8860b]/95'} text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Yoga Bliss Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <a href="#home" className="text-2xl font-bold hover:underline">
            KPT Yoga Club
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="relative px-2 py-1 font-medium text-white transition duration-300 
                         hover:text-yellow-300 group"
            >
              {link.name}
              {/* Animated underline */}
              <span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 
                           transition-all duration-300 group-hover:w-full"
              ></span>
              {/* Glow effect */}
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                           transition duration-500 blur-lg bg-yellow-500/30"
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none flex flex-col justify-between w-6 h-6"
          >
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-3 bg-[#a0522d] px-4 py-4 rounded-b-lg shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="block relative px-2 py-1 font-medium text-white transition duration-300 
                         hover:text-yellow-300 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 
                           transition-all duration-300 group-hover:w-full"
              ></span>
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                           transition duration-500 blur-lg bg-yellow-500/30"
              ></span>
            </a>
          ))}
        </div>
      )}

      {/* Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}

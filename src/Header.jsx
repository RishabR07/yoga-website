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
      className={`sticky top-0 z-50 p-4 md:p-6 transition-shadow duration-300 ${
        isScrolled ? 'shadow-xl' : ''
      } bg-[#b8860b] text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
              className="transition hover:text-[#f5deb3]"
            >
              {link.name}
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
        <div className="md:hidden mt-4 space-y-3 bg-[#a0522d] p-4 rounded-lg shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="block transition hover:text-[#f5deb3]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
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

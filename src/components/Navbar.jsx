import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-beige/80 backdrop-blur-md border-b border-espresso/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            NYLAIN
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => scrollToSection('collection')}
              className="text-sm lg:text-base font-light tracking-wide hover:underline underline-offset-4 transition-all"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm lg:text-base font-light tracking-wide hover:underline underline-offset-4 transition-all"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('our-story')}
              className="text-sm lg:text-base font-light tracking-wide hover:underline underline-offset-4 transition-all"
            >
              Our story
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-sm lg:text-base font-light tracking-wide hover:underline underline-offset-4 transition-all"
            >
              Reviews
            </button>
          </div>

          {/* Shop Button */}
          <button
            onClick={() => scrollToSection('collection')}
            className="px-5 py-2.5 text-sm lg:text-base font-light tracking-wide border border-espresso/30 hover:border-espresso hover:bg-espresso/5 transition-all duration-300"
          >
            Shop now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

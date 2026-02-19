import { useState } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-2">
              <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-espresso/60 font-light">
                NAIL WRAPS • EFFORTLESS ELEGANCE
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight">
                Salon nails.
                <br />
                <span className="italic font-normal">No salon.</span>
              </h1>
            </div>

            <p className="text-base lg:text-lg text-espresso/70 font-light leading-relaxed max-w-lg">
              Experience the luxury of salon-quality nails without the appointment. 
              Our premium nail wraps deliver flawless elegance in minutes, 
              lasting up to two weeks with zero dry time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('collection')}
                className="px-8 py-4 bg-espresso text-ivory font-light tracking-wide hover:bg-espresso/90 transition-all duration-300 text-base lg:text-lg"
              >
                Shop the collection
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-4 border border-espresso/30 text-espresso font-light tracking-wide hover:border-espresso hover:bg-espresso/5 transition-all duration-300 text-base lg:text-lg"
              >
                How it works
              </button>
            </div>

            <p className="text-sm lg:text-base text-espresso/50 font-light pt-2">
              <span className="line-through text-espresso/40">From $12.99</span>{' '}
              <span className="text-red-600">From $8.99</span> • Free shipping over $30
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden border border-espresso/10 bg-gradient-to-br from-gold-light/30 to-gold/20">
              {!imageError ? (
                <img
                  src="/images/nylain_hero.png"
                  alt="Premium burgundy nail wraps on elegant beige surface"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-2 px-4">
                    <p className="text-espresso/40 font-serif text-lg lg:text-xl">Image not found</p>
                    <p className="text-espresso/30 text-xs">Please add nylain_hero.png to<br />public/images/ folder</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

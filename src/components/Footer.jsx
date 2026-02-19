const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 lg:py-16 px-6 lg:px-12 border-t border-espresso/10 bg-ivory/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight">
              NYLAIN
            </div>
            <p className="text-sm lg:text-base text-espresso/60 font-light leading-relaxed max-w-xs">
              Premium nail wraps that deliver salon-quality elegance in minutes.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg lg:text-xl font-light mb-4 lg:mb-6 text-espresso">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('collection')}
                  className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all"
                >
                  All Designs
                </button>
              </li>
              <li>
                <button className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all">
                  New Arrivals
                </button>
              </li>
              <li>
                <button className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all">
                  Best Sellers
                </button>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg lg:text-xl font-light mb-4 lg:mb-6 text-espresso">
              Help
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all">
                  Shipping
                </button>
              </li>
              <li>
                <button className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all">
                  Returns
                </button>
              </li>
              <li>
                <button className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* NYLAIN Column */}
          <div>
            <h3 className="font-serif text-lg lg:text-xl font-light mb-4 lg:mb-6 text-espresso">
              NYLAIN
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('our-story')}
                  className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all">
                  Press
                </button>
              </li>
              <li>
                <button className="text-sm lg:text-base text-espresso/60 font-light hover:text-espresso hover:underline underline-offset-4 transition-all">
                  Careers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 lg:pt-12 border-t border-espresso/10">
          <p className="text-xs lg:text-sm text-espresso/50 font-light text-center">
            © {new Date().getFullYear()} NYLAIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

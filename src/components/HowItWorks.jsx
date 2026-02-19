import { howItWorksSteps } from '../data/content';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-32 px-6 lg:px-12 bg-ivory/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-16 lg:mb-24 text-center lg:text-left">
          How it works
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Background Number */}
              <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 font-serif text-8xl lg:text-9xl xl:text-[12rem] text-espresso/5 font-light leading-none pointer-events-none">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10 pt-8 lg:pt-12">
                <h3 className="font-serif text-2xl lg:text-3xl font-light mb-4 lg:mb-6 text-espresso">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-espresso/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

const Marquee = () => {
  const items = [
    "Effortless Elegance",
    "Salon Quality",
    "5 Minute Application",
    "Lasts 2 Weeks",
    "No Dry Time",
    "Premium Materials",
    "Easy Removal",
    "100% Satisfaction"
  ];

  return (
    <section className="py-8 lg:py-12 border-y border-espresso/10 overflow-hidden bg-ivory/50">
      <div className="flex whitespace-nowrap marquee-animation">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8 lg:mx-12">
            <span className="font-serif text-lg lg:text-2xl text-espresso/60 font-light">
              {item}
            </span>
            <span className="mx-8 lg:mx-12 text-espresso/20">•</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;

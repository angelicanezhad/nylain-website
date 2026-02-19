const Proof = () => {
  const metrics = [
    {
      value: "10 min",
      label: "Application"
    },
    {
      value: "3 wks",
      label: "Lasting beauty"
    },
    {
      originalValue: "$12.99",
      saleValue: "$8.99",
      label: "Starting price"
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 lg:gap-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              {metric.value ? (
                <div className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light text-espresso mb-3 lg:mb-4">
                  {metric.value}
                </div>
              ) : (
                <div className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light mb-3 lg:mb-4 flex items-center justify-center gap-3">
                  <span className="text-espresso/40 line-through text-2xl lg:text-4xl xl:text-5xl">
                    {metric.originalValue}
                  </span>
                  <span className="text-red-600">
                    {metric.saleValue}
                  </span>
                </div>
              )}
              <div className="text-xs lg:text-sm text-espresso/60 font-light tracking-wide uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;

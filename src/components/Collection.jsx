import { useState } from 'react';
import { collectionItems } from '../data/content';

const Collection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? collectionItems : collectionItems.slice(0, 4);

  return (
    <section id="collection" className="py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 lg:mb-16 gap-4">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight">
            The Collection
          </h2>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-sm lg:text-base font-light tracking-wide hover:underline underline-offset-4 transition-all text-espresso/70"
            >
              View all 10 designs
            </button>
          )}
        </div>

        {/* Grid */}
        <div className={`grid gap-6 lg:gap-8 ${showAll ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'}`}>
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gold-light/20 to-gold/10 border border-espresso/10 mb-4 flex items-center justify-center group-hover:border-espresso/30 transition-colors duration-300">
                <p className="text-espresso/30 text-xs lg:text-sm font-serif">
                  Nail Design {String(item.id).padStart(2, '0')}
                </p>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h3 className="font-serif text-base lg:text-lg font-medium text-espresso">
                  {item.name}
                </h3>
                <p className="text-xs lg:text-sm text-espresso/60 font-light">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm lg:text-base text-espresso/50 font-light line-through">
                    {item.originalPrice}
                  </span>
                  <span className="text-sm lg:text-base text-red-600 font-light">
                    {item.salePrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;

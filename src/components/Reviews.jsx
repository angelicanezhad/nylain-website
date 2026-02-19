import { reviews } from '../data/content';

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-12 lg:mb-16">
          What she says
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-espresso/10 p-8 lg:p-10 bg-ivory/50 hover:border-espresso/20 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-lg lg:text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg lg:text-xl italic text-espresso/80 mb-6 lg:mb-8 leading-relaxed">
                "{review.quote}"
              </p>

              {/* Author */}
              <div className="space-y-1">
                <p className="font-light text-sm lg:text-base text-espresso font-sans">
                  {review.name}
                </p>
                <p className="text-xs lg:text-sm text-espresso/50 font-light">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { useState } from 'react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-espresso text-ivory">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 lg:space-y-8 mb-10 lg:mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight">
            New designs.
            <br />
            <span className="italic font-normal">First access.</span>
          </h2>
          <p className="text-base lg:text-lg text-ivory/70 font-light max-w-2xl mx-auto">
            Be the first to know when we launch exclusive collections and limited editions.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/50 font-light focus:outline-none focus:border-ivory/40 transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-ivory text-espresso font-light tracking-wide hover:bg-ivory/90 transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="px-8 py-4 bg-ivory/10 border border-ivory/20 text-ivory font-light">
              Thank you! We'll be in touch soon.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Waitlist;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Proof from './components/Proof';
import Collection from './components/Collection';
import HowItWorks from './components/HowItWorks';
import OurStory from './components/OurStory';
import Reviews from './components/Reviews';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Proof />
        <Collection />
        <HowItWorks />
        <OurStory />
        <Reviews />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;

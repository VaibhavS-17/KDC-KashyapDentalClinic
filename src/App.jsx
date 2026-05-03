import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;

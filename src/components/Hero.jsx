import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade up text elements
      gsap.fromTo('.hero-anim', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      
      // Image scale in
      gsap.fromTo('.hero-img',
        { scale: 1.05, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.4 }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden border-b border-primary/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start text-left">
          <div className="hero-anim flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center bg-accent/10 text-accent font-bold px-4 py-2 rounded-full text-sm">
              Expert MDS Care
            </span>
          </div>
          
          <h1 className="hero-anim font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
            Advanced Smile Restoration & <span className="text-accent">Specialized Care</span>
          </h1>
          
          <p className="hero-anim text-primary/70 text-lg md:text-xl font-display font-medium mb-10 max-w-lg leading-relaxed">
            Specialist-led treatments across two modern dental clinics in Nallasopara, prioritizing your comfort, hygiene, and long-term oral health.
          </p>

          <div className="hero-anim flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="tel:6360724703" 
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-center hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-md shadow-primary/20"
            >
              Book a Consultation
            </a>
            <a 
              href="#locations" 
              className="bg-white border-2 border-primary/10 text-primary px-8 py-4 rounded-full font-bold text-center hover:border-primary/30 transition-colors hover:bg-primary/5"
            >
              Find Nearest Clinic
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hero-img relative h-[400px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10 mix-blend-multiply" />
          <img 
            src="/KDC_clinic_image.webp" 
            alt="Premium Dental Clinic Interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between">
            <div>
              <p className="text-primary font-bold text-sm">2 Modern Clinics in Nallasopara</p>
              <p className="text-primary/60 text-xs">Sea Grapes Bldg & Station Rd (Both in West)</p>
            </div>
            <a 
              href="#locations" 
              className="bg-accent text-white text-xs font-bold px-3.5 py-2 rounded-xl hover:bg-accent/90 transition-colors flex-shrink-0"
            >
              View Branches
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

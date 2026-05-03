import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text reveal
      gsap.from('.reveal-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top center+=100',
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="philosophy"
      ref={container} 
      className="relative min-h-[80vh] w-full flex items-center justify-center py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="parallax-bg absolute inset-0 -top-[20%] h-[140%] w-full">
          <img 
            src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000" 
            alt="Clean Porcelain Texture" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply grayscale"
          />
        </div>
      </div>

      <div className="max-w-5xl w-full text-center text-primary">
        <p className="reveal-text font-display text-lg md:text-2xl text-primary/60 mb-6">
          Most clinics focus on: quick fixes and volume.
        </p>
        <h2 className="reveal-text font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
          We focus on: <br />
          <span className="font-drama italic text-accent text-6xl md:text-8xl lg:text-[9rem] pr-4">longevity.</span>
        </h2>
      </div>
    </section>
  );
}

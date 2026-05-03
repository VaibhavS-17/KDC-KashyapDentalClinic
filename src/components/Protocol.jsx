import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Smile Architecture",
    desc: "Comprehensive evaluation using advanced imaging to map the entire architecture of your smile.",
    Animation: () => (
      <svg viewBox="0 0 100 100" className="w-48 h-48 sm:w-64 sm:h-64 opacity-80 text-primary">
        <path d="M 20 40 Q 50 80 80 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-[dash_3s_ease-in-out_infinite_alternate]" strokeDasharray="100" strokeDashoffset="100" />
        <circle cx="20" cy="40" r="4" fill="#CC5833" />
        <circle cx="80" cy="40" r="4" fill="#CC5833" />
        <circle cx="50" cy="60" r="4" fill="#CC5833" />
        <style>{`
          @keyframes dash {
            to { stroke-dashoffset: 0; }
          }
        `}</style>
      </svg>
    )
  },
  {
    id: "02",
    title: "Precision Design",
    desc: "Crafting the perfect restorative approach tailored for longevity and functional aesthetics.",
    Animation: () => (
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 border border-primary/20 rounded-lg overflow-hidden grid grid-cols-5 grid-rows-5 gap-1 p-2 bg-white">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="bg-primary/5 rounded-sm flex items-center justify-center">
            {i === 12 && <div className="w-4 h-8 border-2 border-accent rounded-sm animate-pulse" />}
          </div>
        ))}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_10px_#CC5833] animate-[scan_2s_ease-in-out_infinite_alternate]" />
        <style>{`
          @keyframes scan {
            0% { transform: translateY(0); }
            100% { transform: translateY(240px); }
          }
        `}</style>
      </div>
    )
  },
  {
    id: "03",
    title: "Final Restoration",
    desc: "Delivery of MDS-driven treatments with optimal biological integration and perfect comfort.",
    Animation: () => (
      <svg viewBox="0 0 100 100" className="w-48 h-48 sm:w-64 sm:h-64 text-primary">
        <path d="M 30 20 C 30 10, 45 10, 50 20 C 55 10, 70 10, 70 20 C 70 40, 60 70, 50 90 C 40 70, 30 40, 30 20 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M 40 50 L 48 58 L 65 35" fill="none" stroke="#CC5833" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-[check_2s_ease-out_infinite]" strokeDasharray="50" strokeDashoffset="50" />
        <style>{`
          @keyframes check {
            50%, 100% { stroke-dashoffset: 0; }
          }
        `}</style>
      </svg>
    )
  }
];

export default function Protocol() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          id: `card-${i}`,
        });
      });

      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={container} className="relative bg-background pb-[100vh]">
      {steps.map((step, i) => (
        <div 
          key={step.id} 
          className="protocol-card h-screen w-full flex items-center justify-center sticky top-0 bg-background text-primary overflow-hidden border-t border-primary/5 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]"
          style={{ zIndex: i }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />
          
          <div className="relative max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Visual */}
            <div className="flex justify-center md:justify-end">
              <step.Animation />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <span className="font-mono text-accent text-lg mb-4 block">[{step.id}]</span>
              <h3 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                {step.title}
              </h3>
              <p className="text-primary/70 font-display text-lg md:text-xl max-w-md font-medium">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

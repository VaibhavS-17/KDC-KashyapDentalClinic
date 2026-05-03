import { useEffect, useRef } from 'react';
import { Star, ShieldCheck, Stethoscope, Clock } from 'lucide-react';
import gsap from 'gsap';

export default function TrustBanner() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.trust-item', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.6 // Starts slightly after hero finishes
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const items = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />,
      title: "5.0 Google Rating",
      desc: "From satisfied patients"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-accent" />,
      title: "MDS Specialists",
      desc: "Expert, specialized care"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Advanced Implant Center",
      desc: "State-of-the-art tech"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Open 7 Days a Week",
      desc: "Flexible timings for you"
    }
  ];

  return (
    <section ref={container} className="w-full bg-white border-b border-primary/5 py-8 px-6 relative z-10 -mt-12 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="trust-item flex flex-col items-center text-center gap-3">
              <div className="bg-background p-3 rounded-full hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="font-sans font-bold text-primary text-sm md:text-base">{item.title}</h4>
                <p className="text-primary/60 text-xs md:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

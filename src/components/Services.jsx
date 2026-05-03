import { useEffect, useRef } from 'react';
import { HeartPulse, Sparkles, Smile, ShieldPlus, Drill, Activity } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.service-header', 
        { y: 30, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.service-header',
          start: 'top 85%',
        }
      });

      gsap.fromTo('.service-card', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <ShieldPlus className="w-8 h-8 text-accent" />,
      title: "Dental Implants",
      desc: "Permanent, natural-looking tooth replacements to restore full function and aesthetics."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Smile Designing",
      desc: "Customized cosmetic treatments including veneers to give you a flawless, confident smile."
    },
    {
      icon: <Activity className="w-8 h-8 text-accent" />,
      title: "Root Canal Treatment",
      desc: "Painless, advanced endodontic therapy to save infected teeth and eliminate pain."
    },
    {
      icon: <Smile className="w-8 h-8 text-accent" />,
      title: "Prosthodontics",
      desc: "Expertly crafted crowns, bridges, and dentures for complete smile restoration."
    },
    {
      icon: <Drill className="w-8 h-8 text-accent" />,
      title: "General Dentistry",
      desc: "Comprehensive check-ups, cleanings, and cavity fillings for optimal oral health."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-accent" />,
      title: "Orthodontics",
      desc: "Braces and clear aligners to straighten teeth and correct bite issues."
    }
  ];

  return (
    <section id="services" ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="service-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary mb-6">
            Comprehensive Dental Services
          </h2>
          <p className="text-primary/70 text-lg">
            From routine check-ups to complex full-mouth restorations, we use advanced technology and specialist expertise to provide the best care.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="service-card bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-sans font-bold text-xl text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-primary/70 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

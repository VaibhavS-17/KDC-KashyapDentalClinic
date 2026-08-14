import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
// ScrollTrigger is registered centrally in main.jsx

export default function AboutUs() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-text', {
        x: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        }
      });

      gsap.from('.about-image', {
        x: 40,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const points = [
    "Specialized MDS Doctors",
    "2 Modern Clinics in Nallasopara (East & West)",
    "Painless & Stress-Free Environment",
    "Strict Sterilization Protocols",
    "Advanced Dental & Implant Technology"
  ];

  return (
    <section id="about-us" ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="about-text font-sans font-bold text-3xl md:text-5xl text-primary mb-6">
            Meet Your Specialists
          </h2>
          <p className="about-text text-primary/70 text-lg mb-6 leading-relaxed">
            At Kashyap Dental Clinic & Implant Centre, we believe in providing expert care that prioritizes your comfort and long-term health. Available across two fully equipped branches in Nallasopara (East & West), our practice is led by highly qualified MDS specialists.
          </p>
          <p className="about-text text-primary/70 text-lg mb-8 leading-relaxed">
            We don't just treat teeth; we restore confidence. Our patient-first approach means we listen to your concerns, explain every step of the procedure, and ensure a completely stress-free experience for implants, root canals, and cosmetic smile makeovers.
          </p>

          <div className="about-text grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium text-primary text-sm sm:text-base">{point}</span>
              </div>
            ))}
          </div>

          <div className="about-text mt-8 flex">
            <a 
              href="https://wa.me/918310112284"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-md"
            >
              Consult Our Experts
            </a>
          </div>
        </div>

        {/* Image / Doctor Profiles */}
        <div className="about-image relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-accent/10 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10 hidden sm:block" />
          <div className="bg-background rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 relative group shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000" 
              alt="Specialist Doctors" 
              loading="lazy"
              decoding="async"
              className="w-full h-[350px] md:h-[500px] object-cover rounded-2xl grayscale mix-blend-multiply group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="mt-[-4rem] mx-4 sm:mx-0 sm:mt-0 sm:absolute sm:bottom-8 sm:left-8 sm:right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-accent grid grid-cols-1 sm:grid-cols-2 gap-6 z-10 relative">
              <div>
                <h4 className="font-sans font-bold text-lg md:text-xl text-primary mb-0.5">Dr. RK Kashyap</h4>
                <p className="text-accent text-xs font-bold uppercase tracking-wider">BDS, MDS (Reg no. 51751A)</p>
                <p className="text-primary/70 text-xs mt-1.5 leading-relaxed">
                  Prosthodontist, Crown, Bridge,<br />Implantologist & Smile Designing
                </p>
              </div>
              <div className="sm:border-l sm:border-primary/10 sm:pl-4 border-t border-primary/10 pt-4 sm:border-t-0 sm:pt-0">
                <h4 className="font-sans font-bold text-lg md:text-xl text-primary mb-0.5">Dr. Jha Riteeka Kashyap</h4>
                <p className="text-accent text-xs font-bold uppercase tracking-wider">BDS, MDS (Reg no. 61695)</p>
                <p className="text-primary/70 text-xs mt-1.5 leading-relaxed">
                  Conservative Dentistry & Endodontist,<br />Esthetic & Cosmetic Dentistry
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

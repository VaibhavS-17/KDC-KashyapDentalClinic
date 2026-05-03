import { useState, useEffect, useRef } from 'react';
import { MousePointer2 } from 'lucide-react';
import gsap from 'gsap';

function ShufflerCard() {
  const [items, setItems] = useState([
    { id: 1, label: "Prosthodontics", color: "bg-primary text-white" },
    { id: 2, label: "Endodontics", color: "bg-dark text-white" },
    { id: 3, label: "MDS Driven", color: "bg-accent text-white" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newItems = [...prev];
        const last = newItems.pop();
        newItems.unshift(last);
        return newItems;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full flex items-center justify-center">
      {items.map((item, index) => {
        const isTop = index === 0;
        const isMiddle = index === 1;
        const isBottom = index === 2;
        
        return (
          <div
            key={item.id}
            className={`absolute w-3/4 py-4 px-6 rounded-2xl flex items-center justify-between shadow-lg transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${item.color}`}
            style={{
              transform: `translateY(${isTop ? '0px' : isMiddle ? '16px' : '32px'}) scale(${isTop ? 1 : isMiddle ? 0.95 : 0.9})`,
              zIndex: 10 - index,
              opacity: isTop ? 1 : isMiddle ? 0.7 : 0.4
            }}
          >
            <span className="font-sans font-bold text-sm tracking-wide">{item.label}</span>
            <div className="w-2 h-2 rounded-full bg-white/50" />
          </div>
        );
      })}
    </div>
  );
}

function TypewriterCard() {
  const messages = [
    "> EVALUATING ENAMEL DENSITY...",
    "> MAPPING SMILE CURVE",
    "> IMPLANT ALIGNMENT: OPTIMAL",
    "> GINGIVAL HEALTH: EXCELLENT",
    "> RESTORATION SECURED."
  ];
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < messages[msgIndex].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + messages[msgIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, Math.random() * 50 + 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, msgIndex]);

  return (
    <div className="h-48 w-full bg-background border border-primary/10 rounded-2xl p-6 font-mono text-xs flex flex-col shadow-inner">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-primary/50 tracking-wider">CLINICAL SCAN</span>
      </div>
      <div className="text-primary/60 mb-2">&gt; scanner connected</div>
      <div className="text-primary font-medium">
        {text}
        <span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse" />
      </div>
    </div>
  );
}

function SchedulerCard() {
  const container = useRef(null);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Starting pos
      tl.set(cursorRef.current, { x: 20, y: 120 })
        // Move to Wed
        .to(cursorRef.current, { x: 140, y: 50, duration: 1, ease: "power2.inOut" })
        // Click press
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(".day-3", { backgroundColor: "#CC5833", color: "#FFF", duration: 0.2 }, "<")
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        // Move to save
        .to(cursorRef.current, { x: 220, y: 140, duration: 1, ease: "power2.inOut", delay: 0.5 })
        // Click save
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(".save-btn", { scale: 0.95, duration: 0.1 }, "<")
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(".save-btn", { scale: 1, duration: 0.1 }, "<")
        // Fade out
        .to(cursorRef.current, { opacity: 0, duration: 0.5 })
        // Reset day
        .to(".day-3", { backgroundColor: "transparent", color: "#1A1A1A", duration: 0.2 })
        .set(cursorRef.current, { opacity: 1, x: 20, y: 120 });
        
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="h-48 w-full relative flex flex-col justify-center items-center gap-6 select-none">
      <div className="flex gap-2">
        {days.map((day, i) => (
          <div key={i} className={`day-${i} w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-sans text-dark transition-colors`}>
            {day}
          </div>
        ))}
      </div>
      <div className="save-btn px-6 py-2 rounded-full bg-primary text-white text-xs font-bold tracking-wide">
        STRESS-FREE BOOKING
      </div>
      
      <MousePointer2 
        ref={cursorRef} 
        className="absolute top-0 left-0 w-6 h-6 text-accent drop-shadow-md z-10" 
        style={{ fill: 'currentColor' }}
      />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-sans font-bold text-xl text-dark mb-2">Specialist-Led Expertise</h3>
            <p className="text-dark/60 text-sm mb-8 leading-relaxed">
              Precision treatments led by experienced MDS specialists in prosthodontics, endodontics, and cosmetic dentistry.
            </p>
            <ShufflerCard />
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-sans font-bold text-xl text-dark mb-2">Advanced Implantology</h3>
            <p className="text-dark/60 text-sm mb-8 leading-relaxed">
              From single implants to full smile makeovers, we use state-of-the-art restorative techniques.
            </p>
            <TypewriterCard />
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-sans font-bold text-xl text-dark mb-2">Top-Rated Care</h3>
            <p className="text-dark/60 text-sm mb-8 leading-relaxed">
              Backed by perfect patient reviews, we prioritize your comfort and long-term dental health.
            </p>
            <SchedulerCard />
          </div>

        </div>
      </div>
    </section>
  );
}

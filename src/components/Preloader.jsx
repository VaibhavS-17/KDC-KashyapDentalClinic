import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.preloader-container', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => setVisible(false)
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader-container fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center">
      <img 
        src="/KDC_logo.png" 
        alt="Kashyap Dental Clinic Loading..." 
        className="h-24 w-auto object-contain animate-pulse mb-8" 
      />
      <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden">
        <div className="h-full bg-accent animate-loading-bar rounded-full" />
      </div>
    </div>
  );
}
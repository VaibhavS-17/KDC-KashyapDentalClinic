import { useEffect, useState } from 'react';
import { PhoneCall } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-primary/10 shadow-sm py-3" 
        : "bg-white/80 backdrop-blur-sm border-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/KDC_logo.png" alt="KDC Logo" className="h-12 w-auto object-contain" />
        </a>
        
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: 'Services', id: '#services' },
            { label: 'About Us', id: '#about-us' },
            { label: 'Reviews', id: '#reviews' },
            { label: 'Smile Gallery', id: '#gallery' }
          ].map((item) => (
            <a 
              key={item.label}
              href={item.id}
              className="text-sm font-semibold text-primary/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a href="tel:6360724703" className="hidden lg:flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors">
            <PhoneCall className="w-4 h-4" />
            6360724703
          </a>
          <a 
            href="https://wa.me/918310112284"
            className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-colors shadow-sm"
          >
            Book Appointment
          </a>
        </div>

      </div>
    </nav>
  );
}

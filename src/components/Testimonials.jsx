import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.review-card', 
        { y: 30, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 80%',
        }
      });
      
      gsap.fromTo('.gallery-item', 
        { scale: 0.9, opacity: 0 },
        {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 85%',
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const reviews = [
    {
      name: "Rahul M.",
      text: "Best dental clinic in Nallasopara. The doctors are highly qualified and very patient. My implant procedure was completely painless.",
    },
    {
      name: "Sneha P.",
      text: "Got my smile designing done here. The results are amazing! The clinic is very clean and hygienic. Highly recommend.",
    },
    {
      name: "Amit S.",
      text: "Had a severe toothache and needed an emergency root canal. The doctor handled it perfectly. Very professional and caring staff.",
    }
  ];

  return (
    <section id="reviews" ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-sans font-bold text-3xl md:text-5xl text-primary mb-6">
          Loved by Our Patients
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="text-primary/70 text-lg">
          We are proud to have a flawless 5.0 Google rating.
        </p>
      </div>

      <div className="reviews-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="review-card bg-white p-8 rounded-3xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-primary/80 italic mb-6">
                "{review.text}"
              </p>
            </div>
            <div className="font-bold text-primary">
              - {review.name}
            </div>
          </div>
        ))}
      </div>
      
      {/* Smile Gallery */}
      <div id="gallery" className="max-w-7xl mx-auto mt-32 text-center">
         <h3 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">
            Smile Transformations
         </h3>
         <p className="text-primary/70 text-lg mb-12">Real results from our clinic.</p>
         
         <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Spacing Correction (Midline Diastema)", img: "/gallery/case1.webp" },
              { title: "Missing Tooth Replacement (Bridge)", img: "/gallery/case2.webp" },
              { title: "Complete Smile Makeover", img: "/gallery/case3.webp" },
              { title: "Orthodontic Filling (Braces)", img: "/gallery/case4.webp" },
              { title: "Esthetic Front Tooth Correction", img: "/gallery/case5.webp" }
            ].map((caseItem, i) => (
              <div key={i} className="gallery-item group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-primary/5 cursor-pointer">
                <img 
                  src={caseItem.img} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image isn't loaded yet */}
                <div className="absolute inset-0 hidden flex-col items-center justify-center text-primary/40 bg-background/50">
                   <span className="font-medium text-sm px-4">Missing: {caseItem.img}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left">
                  <h4 className="text-white font-sans font-bold text-lg leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {caseItem.title}
                  </h4>
                  <p className="text-white/80 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    Before & After
                  </p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}

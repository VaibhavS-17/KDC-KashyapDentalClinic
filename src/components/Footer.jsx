import { MapPin, ArrowRight, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* The Local Proof Section */}
      <section className="bg-background py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-dark mb-6">
            Located at the Heart of Care
          </h2>
          <p className="text-dark/60 font-display text-lg mb-12 max-w-2xl">
            Satyam Shivam Shopping Centre, Near Nallasopara Railway Station. 
            Easily accessible for your complete smile restoration journey.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 w-full text-left bg-white p-8 rounded-[3rem] shadow-sm border border-primary/5">
            {/* Details */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <div className="flex items-center gap-3 text-accent font-bold mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3>Clinic Address</h3>
                </div>
                <p className="text-primary/70 leading-relaxed text-lg">
                  Satyam Shivam Shopping Centre,<br />
                  Near Nallasopara Railway Station,<br />
                  Nallasopara East, Maharashtra
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 text-accent font-bold mb-2">
                  <Clock className="w-5 h-5" />
                  <h3>Open Timings</h3>
                </div>
                <div className="bg-background p-4 rounded-xl text-primary/80 font-medium">
                  <div className="flex justify-between mb-2">
                    <span>Monday – Saturday</span>
                    <span className="font-bold text-primary">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-primary/10 mb-2">
                    <span>Sunday</span>
                    <span className="font-bold text-primary">10:00 AM - 6:00 PM</span>
                  </div>
                  <p className="text-sm font-semibold text-accent mt-3 text-center">
                    Appointments Available Every Day
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a 
                  href="https://share.google/DCXZnudvhlELSjrmi" target="_blank" rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-primary text-white px-8 py-4 rounded-[2rem] text-sm font-semibold transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </span>
                </a>

                <a 
                  href="#gallery" 
                  className="group relative overflow-hidden bg-white border border-primary/10 text-primary px-8 py-4 rounded-[2rem] text-sm font-semibold transition-all duration-300 hover:border-primary flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    See Smile Gallery
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-[2rem] overflow-hidden bg-background shadow-inner h-[350px] lg:h-auto min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.868778848154!2d72.81057488049182!3d19.418463991206173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a96d112347bd%3A0xc3ab279e2a77ed5b!2sNalasopara%20Station%20Rd%2C%20Nalasopara%20East%2C%20Nala%20Sopara%2C%20Maharashtra%20401209!5e0!3m2!1sen!2sin!4v1714736631851!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kashyap Dental Clinic Location on Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Actual Footer */}
      <footer className="bg-primary pt-24 pb-8 px-6 md:px-12 lg:px-24 rounded-t-[4rem] relative z-10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center bg-white p-4 rounded-2xl w-fit">
              <img src="/KDC_logo.png" alt="KDC Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/60 font-display max-w-xs">
              Expert dental care and advanced smile restoration you can trust.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-sans font-bold text-lg mb-2">Connect</h4>
            <a href="https://wa.me/918310112284" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              WhatsApp: 8310112284
            </a>
            <a href="tel:6360724703" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              Call: 6360724703
            </a>
            <a href="https://share.google/DCXZnudvhlELSjrmi" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              Get Directions
            </a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-sans font-bold text-lg mb-2">Timings</h4>
            <div className="text-white/60 text-sm flex flex-col gap-2">
              <p>Mon – Sat: 10:00 AM - 10:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
            <h4 className="font-sans font-bold text-lg mt-4 mb-2">Legal</h4>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-white/40 text-sm font-display text-center">
            © {new Date().getFullYear()} Kashyap Dental Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

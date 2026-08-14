import { useState } from 'react';
import { MapPin, ArrowRight, Clock, Phone, MessageSquare, Building2, ChevronRight, Eye } from 'lucide-react';

const CLINIC_BRANCHES = [
  {
    id: 'west',
    name: 'Nallasopara West (Sea Grapes)',
    tag: 'West Branch',
    badge: 'Implant Centre & Clinic',
    fullName: 'Kashyap Dental Clinic & Implant Centre',
    addressLines: [
      'Shop No. G/01, Sea Grapes Bldg.',
      'Near Vimal Classic Bldg., Nallasopara West',
      'Vasai-Virar, Maharashtra 401203'
    ],
    pincode: '401203',
    timingsWeekdays: '10:00 AM – 10:00 PM',
    timingsSunday: '10:00 AM – 7:00 PM',
    phone: '063607 24703',
    phoneClean: '6360724703',
    whatsapp: '918310112284',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kashyap+Dental+Clinic+Sea+Grapes+Building+Nalasopara+West+Maharashtra+401203',
    mapEmbed: 'https://maps.google.com/maps?q=Sea+Grapes+Building,+Nalasopara+West,+Vasai-Virar,+Maharashtra+401203&t=&z=16&ie=UTF8&iwloc=&output=embed',
    photos: [
      { src: '/clinics/west-front.png', title: 'Clinic Entrance', subtitle: 'Ground Floor, Sea Grapes' },
      { src: '/clinics/west-banner.png', title: 'Storefront Signboard', subtitle: 'Specialist Center' },
      { src: '/clinics/west-standee.png', title: 'Doctor & Services Board', subtitle: 'MDS Specialists' },
      { src: '/clinics/west-street.png', title: 'Street View', subtitle: 'Near Vimal Classic' }
    ]
  },
  {
    id: 'east',
    name: 'Nallasopara East (Station Road)',
    tag: 'East Branch',
    badge: 'Near Railway Station',
    fullName: 'Kashyap Dental Clinic',
    addressLines: [
      'Satyam Shivam Shopping Centre',
      'Near Nallasopara Railway Station',
      'Nallasopara East, Maharashtra 401209'
    ],
    pincode: '401209',
    timingsWeekdays: '10:00 AM – 10:00 PM',
    timingsSunday: '10:00 AM – 6:00 PM',
    phone: '6360724703',
    phoneClean: '6360724703',
    whatsapp: '918310112284',
    mapUrl: 'https://share.google/DCXZnudvhlELSjrmi',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.868778848154!2d72.81057488049182!3d19.418463991206173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a96d112347bd%3A0xc3ab279e2a77ed5b!2sNalasopara%20Station%20Rd%2C%20Nalasopara%20East%2C%20Nala%20Sopara%2C%20Maharashtra%20401209!5e0!3m2!1sen!2sin!4v1714736631851!5m2!1sen!2sin',
    photos: [
      { src: '/KDC_clinic_image.webp', title: 'Clinic Setup', subtitle: 'Modern Operatory' }
    ]
  }
];

export default function Footer() {
  const [selectedBranchId, setSelectedBranchId] = useState('west');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const currentBranch = CLINIC_BRANCHES.find(b => b.id === selectedBranchId) || CLINIC_BRANCHES[0];

  const handleBranchSelect = (id) => {
    setSelectedBranchId(id);
    setActivePhotoIdx(0);
  };

  return (
    <>
      {/* The Local Proof Section */}
      <section id="locations" className="bg-background py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
            <Building2 className="w-4 h-4 text-accent" />
            2 Convenient Locations in Nallasopara
          </div>

          <h2 className="font-sans font-bold text-3xl md:text-5xl text-dark mb-4">
            Visit Our Clinics
          </h2>
          <p className="text-dark/60 font-display text-lg mb-10 max-w-2xl">
            Choose the branch closest to you in Nallasopara East or West for complete dental care and smile restoration.
          </p>

          {/* Branch Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-3 p-1.5 bg-white rounded-full border border-primary/10 shadow-sm mb-10">
            {CLINIC_BRANCHES.map((branch) => {
              const isActive = branch.id === currentBranch.id;
              return (
                <button
                  key={branch.id}
                  onClick={() => handleBranchSelect(branch.id)}
                  className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-primary/70 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <MapPin className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-primary/40'}`} />
                  <span>{branch.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-primary/5 text-primary/60'}`}>
                    {branch.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Branch Card */}
          <div className="grid lg:grid-cols-12 gap-8 w-full text-left bg-white p-6 sm:p-10 rounded-[3rem] shadow-sm border border-primary/5">
            
            {/* Details Column */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-1">
                  <span>{currentBranch.badge}</span>
                </div>
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-primary mb-4">
                  {currentBranch.fullName}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-background p-4 rounded-2xl border border-primary/5">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary text-sm mb-1">Address</h4>
                      <p className="text-primary/80 leading-relaxed text-base">
                        {currentBranch.addressLines.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < currentBranch.addressLines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-background p-4 rounded-2xl border border-primary/5">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <h4 className="font-bold text-primary text-sm mb-1">Clinic Timings</h4>
                      <div className="flex justify-between text-sm py-1 border-b border-primary/5">
                        <span className="text-primary/70 font-medium">Monday – Saturday:</span>
                        <span className="font-bold text-primary">{currentBranch.timingsWeekdays}</span>
                      </div>
                      <div className="flex justify-between text-sm py-1">
                        <span className="text-primary/70 font-medium">Sunday:</span>
                        <span className="font-bold text-primary">{currentBranch.timingsSunday}</span>
                      </div>
                      <p className="text-xs font-semibold text-accent mt-2">
                        ✨ Walk-ins & Prior Appointments Welcome
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={currentBranch.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-[180px] bg-primary text-white px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Get Directions</span>
                </a>

                <a 
                  href={`tel:${currentBranch.phoneClean}`}
                  className="group px-6 py-3.5 rounded-2xl text-sm font-bold bg-background text-primary border border-primary/10 hover:border-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call {currentBranch.phoneClean}</span>
                </a>

                <a 
                  href={`https://wa.me/${currentBranch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3.5 rounded-2xl text-sm font-bold bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map & Photo Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Active Clinic Photo Showcase */}
              {currentBranch.photos && currentBranch.photos.length > 0 && (
                <div className="bg-background rounded-2xl p-3 border border-primary/5">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-inner group">
                    <img 
                      src={currentBranch.photos[activePhotoIdx]?.src || currentBranch.photos[0].src} 
                      alt={currentBranch.photos[activePhotoIdx]?.title || 'Clinic Photo'}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {currentBranch.photos[activePhotoIdx]?.title}
                      </span>
                      <span className="text-xs text-white/80">
                        {currentBranch.photos[activePhotoIdx]?.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Row if more than 1 photo */}
                  {currentBranch.photos.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {currentBranch.photos.map((p, i) => (
                        <button
                          key={i}
                          onClick={() => setActivePhotoIdx(i)}
                          className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            activePhotoIdx === i
                              ? 'border-accent shadow-sm scale-95'
                              : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden bg-background shadow-inner h-[220px] border border-primary/5">
                <iframe 
                  src={currentBranch.mapEmbed} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${currentBranch.name} Location Map`}
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Actual Footer */}
      <footer className="bg-primary pt-24 pb-8 px-6 md:px-12 lg:px-24 rounded-t-[4rem] relative z-10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center bg-white p-4 rounded-2xl w-fit">
              <img src="/KDC_logo.png" alt="KDC Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/70 font-display text-sm leading-relaxed">
              Expert dental care and advanced smile restoration you can trust. Serving patients across two dedicated branches in Nallasopara East and West.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-accent bg-white/5 py-2 px-3 rounded-xl w-fit">
              <span>★ 5.0 Rated Dental Practice</span>
            </div>
          </div>

          {/* Locations Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h4 className="font-sans font-bold text-lg mb-1 text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-accent" />
              Our 2 Clinics
            </h4>

            <div className="space-y-4 text-sm">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <span className="text-accent font-bold text-xs uppercase block mb-1">Branch 2 • Nallasopara West</span>
                <p className="text-white/80 font-medium leading-snug">
                  Shop G/01, Sea Grapes Bldg., Near Vimal Classic, Nalasopara (W) - 401203
                </p>
                <p className="text-white/50 text-xs mt-1">Timings: Mon–Sat 10am–10pm | Sun 10am–7pm</p>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <span className="text-accent font-bold text-xs uppercase block mb-1">Branch 1 • Nallasopara East</span>
                <p className="text-white/80 font-medium leading-snug">
                  Satyam Shivam Shopping Centre, Near Railway Station, Nalasopara (E) - 401209
                </p>
                <p className="text-white/50 text-xs mt-1">Timings: Mon–Sat 10am–10pm | Sun 10am–6pm</p>
              </div>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-3 flex flex-col gap-3 text-sm">
            <h4 className="font-sans font-bold text-lg mb-1">Quick Contact</h4>
            <a href="tel:6360724703" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Call: 063607 24703
            </a>
            <a href="https://wa.me/918310112284" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              WhatsApp: 8310112284
            </a>
            <a href="#locations" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/30" />
              View Map & Directions
            </a>

            <div className="pt-4 border-t border-white/10 mt-2">
              <h5 className="font-bold text-xs uppercase text-white/40 tracking-wider mb-1">Specialists</h5>
              <p className="text-white/70 text-xs">Dr. RK Kashyap (MDS)</p>
              <p className="text-white/70 text-xs">Dr. Jha Riteeka Kashyap (MDS)</p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-white/40 text-sm font-display text-center">
            © {new Date().getFullYear()} Kashyap Dental Clinic & Implant Centre. All rights reserved.
          </div>
          <div className="text-white/35 text-sm font-display text-center flex items-center gap-2">
            <span>Crafted by Vaibhav Sable</span>
            <span className="text-white/20">|</span>
            <a
              href="https://www.linkedin.com/in/vaibhav-sable-4725782ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Vaibhav Sable"
              className="inline-flex items-center text-white/45 hover:text-white/80 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

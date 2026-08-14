import { PhoneCall, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3">
      {/* Phone Button */}
      <a 
        href="tel:6360724703"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white"
        aria-label="Call Us"
      >
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918310112284"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}

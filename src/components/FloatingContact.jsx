import { PhoneCall, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a 
        href="tel:6360724703"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 ring-4 ring-white"
        aria-label="Call Us"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918310112284"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 ring-4 ring-white"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

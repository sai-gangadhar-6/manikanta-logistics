'use client'

import { Phone, MessageCircle } from 'lucide-react'

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] z-40 px-4 py-3 pb-safe flex gap-3">
      {/* Call Button */}
      <a
        href="tel:+919052722229"
        className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] min-h-[44px]"
      >
        <Phone className="w-4 h-4" fill="currentColor" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917382355966"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] min-h-[44px]"
      >
        <MessageCircle className="w-4 h-4" fill="currentColor" />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

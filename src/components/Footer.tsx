export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#0F172A] text-white pt-12 sm:pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#F97316] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2"/>
                  <path d="M16 8h4l3 5v4h-7V8z"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-base">Manikanta</span>
                <span className="font-semibold text-[#F97316] text-xs tracking-widest uppercase">Logistics</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              India&apos;s trusted partner for safe, reliable, and affordable packing and moving services.
              Your belongings are in safe hands.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Available 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-gray-300">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#F97316] text-sm transition-colors duration-200 py-2 min-h-[44px] hover:pl-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F97316] flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5 text-gray-300">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="tel:+919052722229" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group min-h-[44px]">
                  <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#F97316]/20 flex items-center justify-center text-sm transition-colors duration-200 flex-shrink-0">📞</span>
                  <span className="text-sm">+91 9052722229</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/917382355966" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group min-h-[44px]">
                  <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-green-500/20 flex items-center justify-center text-sm transition-colors duration-200 flex-shrink-0">💬</span>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:manikantapackersandmovers@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group min-h-[44px]">
                  <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#F97316]/20 flex items-center justify-center text-sm transition-colors duration-200 flex-shrink-0">✉️</span>
                  <span className="text-sm text-xs leading-tight">manikantapackers<br/>andmovers@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs text-center sm:text-left">
          <p>© {currentYear} Manikanta Logistics. All rights reserved.</p>
          <p>Made with ❤️ for stress-free moves across India</p>
        </div>
      </div>
    </footer>
  )
}

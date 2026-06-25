'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from './icons'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const WA_LINK = 'https://wa.me/917382355966?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20move.'
const TEL_LINK = 'tel:+919052722229'

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-wide flex items-center justify-between gap-4">

          {/* ── Wordmark ── */}
          <a
            href="#home"
            aria-label="Manikanta Logistics – Home"
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-500 group-hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center shadow-md">
              <Icons.truck className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
            </div>
            <div className="leading-none">
              <span className="block font-bold text-white text-sm sm:text-[15px] tracking-tight">Manikanta</span>
              <span className="block font-semibold text-orange-400 text-[10px] sm:text-xs tracking-[0.18em] uppercase">Logistics</span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav
            aria-label="Main navigation"
            className="hidden xl:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/8 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <a
              href={TEL_LINK}
              id="header-call-btn"
              aria-label="Call us now"
              className="btn-secondary !py-2.5 !px-4 !text-xs !bg-white/8 !border-white/20 !text-white hover:!bg-white/15"
            >
              <Icons.phone className="w-3.5 h-3.5" />
              +91 90527 22229
            </a>
            <a
              href="#enquiry"
              id="header-quote-btn"
              className="btn-primary !py-2.5 !px-5 !text-xs"
            >
              Get Free Quote
              <Icons.arrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* ── Mobile: quick call + hamburger ── */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={TEL_LINK}
              aria-label="Call now"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200"
            >
              <Icons.phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
            >
              {menuOpen ? <Icons.x className="w-5 h-5" /> : <Icons.menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-30 bg-slate-900/60 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-slate-900 shadow-2xl lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                    <Icons.truck className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="leading-none">
                    <span className="block font-bold text-white text-sm">Manikanta</span>
                    <span className="block font-semibold text-orange-400 text-[10px] tracking-[0.18em] uppercase">Logistics</span>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icons.x className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="p-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center justify-between py-3.5 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/8 font-medium transition-all duration-150"
                  >
                    {link.label}
                    <Icons.chevronRight className="w-4 h-4 text-slate-500" />
                  </motion.a>
                ))}
              </div>

              {/* Drawer CTAs */}
              <div className="p-4 mt-2 border-t border-white/10 space-y-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href={TEL_LINK}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full border border-white/20 text-white font-semibold py-3.5 rounded-xl hover:bg-white/8 transition-colors duration-200"
                >
                  <Icons.phone className="w-4 h-4" />
                  +91 90527 22229
                </a>
                <a
                  href="#enquiry"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200"
                >
                  Get Free Quote
                  <Icons.arrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

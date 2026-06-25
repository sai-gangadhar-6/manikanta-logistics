'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from './icons'

const navLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Services',      href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Pricing',       href: '#pricing' },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Contact',       href: '#contact' },
]

const WA_LINK = 'https://wa.me/917382355966?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20move.'
const TEL_LINK = 'tel:+919052722229'

const drawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 340, damping: 32, duration: 0.32 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.22, ease: 'easeIn' as const },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const linkVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.045, duration: 0.2 },
  }),
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen, closeMenu])

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
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200 flex-shrink-0"
            >
              <Icons.phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex items-center justify-center w-11 h-11 rounded-xl text-white hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Icons.x className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Icons.menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-Screen Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-slate-900/70 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.nav
              id="mobile-menu"
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] bg-slate-900 shadow-2xl lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
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
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icons.x className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links — scrollable */}
              <div className="flex-1 overflow-y-auto py-3 px-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-between py-3.5 px-4 rounded-xl text-slate-200 hover:text-white hover:bg-white/8 font-medium transition-all duration-150 min-h-[52px]"
                  >
                    <span>{link.label}</span>
                    <Icons.chevronRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Drawer CTAs — pinned bottom */}
              <div className="px-4 py-4 border-t border-white/10 space-y-3 flex-shrink-0 pb-safe">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2.5 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 min-h-[52px]"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href={TEL_LINK}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2.5 w-full border border-white/20 text-white font-semibold py-3.5 rounded-xl hover:bg-white/8 transition-colors duration-200 min-h-[52px]"
                >
                  <Icons.phone className="w-4 h-4" />
                  +91 90527 22229
                </a>
                <a
                  href="#enquiry"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2.5 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 min-h-[52px]"
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

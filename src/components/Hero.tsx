'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const trustBadges = [
  '✓ 500+ Happy Customers',
  '✓ Fully Insured',
  '✓ On-Time Delivery',
  '✓ 24/7 Support',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0F172A]">
        <Image
          src="/modern_indian_truck.png"
          alt="Modern white commercial container truck"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/75 to-[#0F172A]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* India Map Pill Badge */}
          <motion.div variants={fadeUp} className="mb-3 inline-flex items-center gap-2 bg-[#0F172A]/80 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md shadow-md mx-auto">
            <svg className="w-4 h-4 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>Service Available All Over India</span>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            Trusted Packers &amp; Movers Across India
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            Manikanta{' '}
            <span className="gradient-text">Logistics</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold text-gray-200 mb-4"
          >
            Safe, Reliable &amp; Affordable Packers and Movers
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Stress-free relocation anywhere in India — your belongings handled with care
            by trained professionals, delivered on time, every time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <a
              href="tel:9052722229"
              id="hero-call-btn"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C10] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 whitespace-nowrap min-w-max"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Call 9052722229</span>
            </a>
            <a
              href="https://wa.me/917382355966"
              id="hero-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white font-bold text-base px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap min-w-max"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.004 0C5.378 0 0 5.374 0 12c0 2.112.551 4.167 1.6 5.975L.057 24l6.197-1.625C8.01 23.424 10.024 24 12.004 24 18.63 24 24 18.626 24 12S18.63 0 12.004 0zm0 22a9.97 9.97 0 0 1-5.07-1.388l-.363-.216-3.765.987.947-3.66-.238-.378A9.92 9.92 0 0 1 2 12c0-5.514 4.49-10 10.004-10C17.518 2 22 6.486 22 12s-4.482 10-9.996 10zm5.513-7.514c-.3-.15-1.782-.88-2.057-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075a8.2 8.2 0 0 1-2.42-1.493 9.04 9.04 0 0 1-1.675-2.08c-.175-.3-.018-.463.132-.612.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.63-.925-2.235-.25-.6-.5-.512-.675-.52H7.93c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.113 3.227 5.117 4.524.714.308 1.272.493 1.707.632.715.227 1.366.195 1.88.118.574-.085 1.782-.728 2.032-1.433.25-.705.25-1.31.175-1.433-.075-.123-.275-.198-.575-.348z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="text-xs sm:text-sm font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

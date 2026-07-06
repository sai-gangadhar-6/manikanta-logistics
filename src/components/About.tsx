'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { Shield, Check, Truck, Clock } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '50+', label: 'Cities Served' },
  { value: '1500+', label: 'Happy Customers' },
  { value: '20+', label: 'Vehicles in Fleet' },
]

export default function About() {
  return (
    <section id="about" className="section-gray py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Who We Are</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">About Manikanta Packers & Movers</h2>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image — always first on mobile, left column on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative order-first lg:order-none"
          >
            <div className="relative h-60 sm:h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop"
                alt="Professional moving crew carefully wrapping and packing household items using bubble wrap and secure cardboard boxes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="mt-6 lg:mt-0"
          >
            <motion.h3
              variants={fadeUp}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4 leading-tight"
            >
              Your Trusted Partner for{' '}
              <span className="text-[#F97316]">Stress-Free Relocation</span>
            </motion.h3>

            <motion.p variants={fadeUp} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Founded with a single promise — to make every move stress-free — Manikanta Packers & Movers has grown
              into one of the most trusted packers and movers in South India. Over the past decade, we have
              helped over 1500+ families and businesses relocate safely across 50+ cities, building lasting
              relationships through honest pricing and meticulous care.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              <strong className="text-[#0F172A]">Our Mission:</strong> To deliver every customer&apos;s most valued
              possessions safely, on time, and without a single scratch — making relocation the easiest part
              of starting a new chapter.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
              <strong className="text-[#0F172A]">Our Vision:</strong> To become the most trusted logistics and
              relocation partner across South India and beyond, known for professionalism, transparency, and
              genuine care for every customer&apos;s belongings.
            </motion.p>

            {/* Operating Hours */}
            <motion.div variants={fadeUp} className="flex items-start gap-3 mb-5 bg-[#F97316]/5 rounded-xl p-4 border border-[#F97316]/10">
              <Clock className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-[#0F172A] mb-1">Operating Hours</p>
                <p>Monday – Saturday: 7:00 AM – 9:00 PM</p>
                <p>Sunday: 8:00 AM – 6:00 PM</p>
                <p className="text-[#F97316] font-medium mt-1">Same-day response to all enquiries.</p>
              </div>
            </motion.div>

            <motion.ul variants={fadeUp} className="space-y-2.5 mb-8">
              {[
                'Trained & background-verified staff',
                'Premium packing materials for all item types',
                'GPS-enabled fleet for real-time visibility',
                'Fully insured moves for complete peace of mind',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#F97316]/15 text-[#F97316] flex items-center justify-center flex-shrink-0">
                    <svg width="11" height="11" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </motion.ul>

            {/* Trust Badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2.5 mb-6"
            >
              {[
                { text: 'IBA Approved Movers', icon: Shield },
                { text: 'Fully Insured Moves', icon: Check },
                { text: 'GPS Tracked Fleet', icon: Truck },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Stats Grid — 2-col on mobile, 4-col on sm+ */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-[#F97316]">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-tight font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

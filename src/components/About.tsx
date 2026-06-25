'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '50+', label: 'Cities Covered' },
  { value: '500+', label: 'Happy Customers' },
  { value: '20+', label: 'Vehicles Fleet' },
]

export default function About() {
  return (
    <section id="about" className="section-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">About Manikanta Logistics</h2>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop"
                alt="Clean and organised logistics warehouse storage facility in India"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#F97316] text-white rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-extrabold leading-none">10+</div>
              <div className="text-xs font-semibold mt-1">Years Experience</div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5 leading-tight"
            >
              Your Trusted Partner for{' '}
              <span className="text-[#F97316]">Stress-Free Relocation</span>
            </motion.h3>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
              With over a decade of experience in the logistics and moving industry, Manikanta Logistics
              has built a reputation for delivering safe, reliable, and on-time relocation services across India.
              We understand that moving is more than just transporting goods — it&apos;s about trusting someone with your
              most valued possessions.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
              Our team of trained professionals uses high-quality packing materials and industry-best techniques
              to ensure every item — fragile or heavy — arrives in perfect condition. From a single room
              to a full office, we handle every move with the same care and attention.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-3 mb-10">
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

            {/* Stats Grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-2xl font-extrabold text-[#F97316]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-tight font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

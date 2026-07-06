'use client'

import { motion, Variants } from 'framer-motion'
import {
  HardHat,
  Shield,
  IndianRupee,
  Clock,
  Headphones,
  MessageCircle,
} from 'lucide-react'

const features = [
  {
    icon: HardHat,
    title: 'Professional Staff',
    desc: 'Trained, verified, and uniformed movers who treat your belongings like their own.',
  },
  {
    icon: Shield,
    title: 'Secure Packing',
    desc: 'Premium bubble wrap, corrugated sheets, and custom boxes for safe transit.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    desc: 'Transparent, competitive rates with no hidden charges — get a free quote instantly.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We respect your schedule. On-time pickup and delivery, guaranteed.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    desc: 'Our team is always available to answer questions and resolve concerns any time.',
  },
]

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function WhyUs() {
  return (
    <section id="why-us" className="section-gray py-10 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 lg:mb-8"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-2">Our Advantage</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-3">Why Choose Us?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Thousands of families and businesses trust Manikanta Packers &amp; Movers for every move — here&apos;s why.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Grid — 1-col on xs, 2-col sm (5th spans 2), 5-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
          {features.map((feature, i) => {
            const FeatureIcon = feature.icon
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`relative bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center z-10 ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Horizontal line for desktop (Y-center of 48px circle is 24px Y-offset + 16px top padding = 40px) */}
                {i < features.length - 1 && (
                  <div
                    className="hidden lg:block absolute left-1/2 w-[calc(100%+1.5rem)] h-0.5 border-t border-dashed border-[#F97316]/30 z-0"
                    style={{ top: '40px' }}
                  />
                )}

                {/* Vertical line for mobile Y-center of 44px/48px circle starts at 38px/40px, runs down to next Y-center */}
                {i < features.length - 1 && (
                  <div
                    className="absolute top-[38px] sm:top-[40px] left-1/2 -translate-x-1/2 w-0.5 border-l border-dashed border-[#F97316]/30 z-0 h-[calc(100%+1rem)] sm:h-[calc(100%+1.5rem)] lg:hidden"
                  />
                )}

                {/* Icon Circle */}
                <div className="relative z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#F97316]/30 flex items-center justify-center mb-3 shadow-xs">
                  <FeatureIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F97316]" strokeWidth={2} />
                </div>

                {/* Text Details */}
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 lg:mt-10 text-center"
        >
          <a
            href="https://wa.me/917382355966"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 min-h-[52px]"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Request a Free Quote on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

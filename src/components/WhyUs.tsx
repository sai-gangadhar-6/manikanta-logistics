'use client'

import { motion, Variants } from 'framer-motion'
import {
  HardHat,
  Shield,
  Navigation,
  IndianRupee,
  Clock,
  Headphones,
  ShieldCheck,
  Globe,
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
    icon: Navigation,
    title: 'GPS-Enabled Vehicles',
    desc: 'Real-time location visibility for all our transport vehicles during your move.',
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
  {
    icon: ShieldCheck,
    title: 'Damage-Free Guarantee',
    desc: 'We take full accountability for every item we handle. Our careful packing techniques and trained crew ensure your belongings arrive in the same condition they left.',
  },
  {
    icon: Globe,
    title: 'Pan-India Network',
    desc: 'Serving over 50 cities across all major Indian states with a reliable network of vehicles, warehouses, and trained local partners for seamless door-to-door delivery.',
  },
]

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function WhyUs() {
  return (
    <section id="why-us" className="section-gray py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Our Advantage</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">Why Choose Us?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Thousands of families and businesses trust Manikanta Packers & Movers for every move — here&apos;s why.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Grid — 1-col on xs, 2-col sm, 4-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex gap-4 sm:gap-5"
              >
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                  <FeatureIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F97316]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1.5">{feature.title}</h3>
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
          className="mt-12 text-center"
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

'use client'

import { motion, Variants } from 'framer-motion'

const features = [
  {
    icon: '👷',
    title: 'Professional Staff',
    desc: 'Trained, verified, and uniformed movers who treat your belongings like their own.',
  },
  {
    icon: '📦',
    title: 'Secure Packing',
    desc: 'Premium bubble wrap, corrugated sheets, and custom boxes for safe transit.',
  },
  {
    icon: '📍',
    title: 'GPS-Enabled Vehicles',
    desc: 'Real-time location visibility for all our transport vehicles during your move.',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    desc: 'Transparent, competitive rates with no hidden charges — get a free quote instantly.',
  },
  {
    icon: '⏰',
    title: 'On-Time Delivery',
    desc: 'We respect your schedule. On-time pickup and delivery, guaranteed.',
  },
  {
    icon: '🎧',
    title: '24/7 Customer Support',
    desc: 'Our team is always available to answer questions and resolve concerns any time.',
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
    <section id="why-us" className="section-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Our Advantage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Why Choose Us?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Thousands of families and businesses trust Manikanta Logistics for every move — here&apos;s why.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F97316]/10 text-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] text-base mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

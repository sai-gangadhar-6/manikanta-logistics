'use client'

import { motion, Variants } from 'framer-motion'
import { services } from '@/data/services'
import { Icons, IconName } from './icons'

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.07 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            From a single sofa to an entire office — we&apos;ve got every relocation need covered with speed and care.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = Icons[service.icon as IconName]
            return (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariant}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm cursor-default group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center mb-5 group-hover:bg-[#F97316]/20 group-hover:scale-105 transition-all duration-300">
                    {IconComponent ? (
                      <IconComponent className="w-7 h-7" strokeWidth={1.8} />
                    ) : (
                      <span className="text-2xl">📦</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 w-8 h-0.5 bg-[#F97316] rounded-full group-hover:w-14 transition-all duration-300" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

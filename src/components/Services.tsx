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
    <section id="services" className="section-light py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">What We Offer</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            From shifting a single two-wheeler to managing full commercial transitions — we support your move with premium packing and dedicated care.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Grid — 1-col on mobile, 2-col sm, 3-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm cursor-default group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#F97316]/20 group-hover:scale-105 transition-all duration-300">
                    {IconComponent ? (
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
                    ) : (
                      <span className="text-2xl">📦</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg sm:text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  {/* What's Included */}
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">What&apos;s Included:</p>
                    <ul className="space-y-1.5">
                      {service.whatsIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                            <svg width="9" height="9" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metadata: Time and Vehicle */}
                  <div className="border-t border-gray-100 pt-3.5 mt-4 space-y-1.5 text-xs text-gray-500">
                    <p><strong className="text-gray-700 font-semibold">Duration:</strong> {service.estimatedTime}</p>
                    <p><strong className="text-gray-700 font-semibold">Vehicle:</strong> {service.vehicleType}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="w-8 h-0.5 bg-[#F97316] rounded-full group-hover:w-14 transition-all duration-300" />
                  <a
                    href="#enquiry"
                    className="w-full text-center border-2 border-[#F97316] hover:bg-[#F97316] hover:text-white text-[#F97316] font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] min-h-[48px] flex items-center justify-center"
                  >
                    Get Quote
                  </a>
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
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 min-h-[52px]"
          >
            Get a Free Quote
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="text-slate-600 hover:text-[#F97316] font-semibold text-sm transition-colors duration-200 py-2"
          >
            View Pricing &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const metrics = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Happy Customers' },
  { value: '50+', label: 'Cities Served' },
  { value: '20+', label: 'Vehicles Available' },
  { value: '1,000+', label: 'Successful Deliveries' },
]

export default function TrustStats() {
  return (
    <section className="bg-[#0F172A] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                i === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#F97316]">
                {metric.value}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-300 font-semibold mt-2 leading-tight max-w-[120px]">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

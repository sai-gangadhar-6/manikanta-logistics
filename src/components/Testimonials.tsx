'use client'

import { motion, Variants } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.08 },
  }),
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          fill={i < rating ? '#F97316' : '#E5E7EB'}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Happy Customers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">What Our Customers Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Real reviews from real customers who trusted us with their most important moves.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible snap-x snap-mandatory scrollbar-thin">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              className="min-w-[82vw] sm:min-w-0 snap-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating and Service Details */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={t.rating} />
                  <span className="text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {t.service}
                  </span>
                </div>

                {/* Quote icon */}
                <div className="text-4xl text-[#F97316]/30 font-serif leading-none mb-1">&ldquo;</div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">{t.review}</p>
              </div>

              <div className="pt-4 border-t border-gray-500/10 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm ${t.avatarColor || 'bg-[#0F172A]'}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm leading-tight">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    id: 'plan-407',
    vehicle: '407 Vehicle',
    emoji: '🚐',
    price: '₹4,000',
    priceNote: 'Starting from',
    suitable: 'Ideal for 1BHK homes, small office shifts, or compact loads.',
    features: [
      'Capacity: up to 1 tonne',
      'Suitable for 1BHK / studio apartments',
      'Local & short-distance moves',
      'Packing material included',
    ],
    highlight: false,
  },
  {
    id: 'plan-dcm',
    vehicle: 'DCM Vehicle',
    emoji: '🚛',
    price: '₹8,000',
    priceNote: 'Starting from',
    suitable: 'Perfect for 2–3BHK homes, larger offices, or heavy loads.',
    features: [
      'Capacity: up to 4 tonnes',
      'Suitable for 2-3BHK homes',
      'Intercity & long-distance moves',
      'Full packing & unpacking',
    ],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">No Surprises</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Transparent &amp; Affordable Pricing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Simple pricing based on vehicle type. No hidden charges — what you see is what you pay.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              id={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 border-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? 'bg-[#0F172A] border-[#F97316] text-white'
                  : 'bg-white border-gray-200 text-[#0F172A]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-4xl mb-4">{plan.emoji}</div>
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-[#0F172A]'}`}>
                {plan.vehicle}
              </h3>
              <p className={`text-xs mb-4 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.suitable}
              </p>

              <div className="mb-6">
                <span className={`text-xs font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.priceNote}
                </span>
                <div className={`text-4xl font-extrabold mt-1 ${plan.highlight ? 'text-[#F97316]' : 'text-[#F97316]'}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="w-4 h-4 rounded-full bg-[#F97316]/20 text-[#F97316] flex items-center justify-center flex-shrink-0">
                      <svg width="9" height="9" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/917382355966"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-105 ${
                  plan.highlight
                    ? 'bg-[#F97316] text-white hover:bg-[#EA6C10]'
                    : 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
                }`}
              >
                Get Free Quote
              </a>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center space-y-2"
        >
          <p className="text-[#F97316] font-semibold text-sm">+ ₹80/km for additional distance</p>
          <p className="text-gray-400 text-xs max-w-xl mx-auto">
            *Final price depends on distance, load, floor access, and packing requirements.
            Contact us for an exact quote tailored to your move.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/917382355966"
              id="pricing-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              💬 Get Free Quote on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

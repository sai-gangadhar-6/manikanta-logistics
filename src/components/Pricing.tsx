'use client'

import { motion } from 'framer-motion'
import { Truck, MessageCircle, MapPin } from 'lucide-react'

const plans = [
  {
    id: 'plan-407',
    vehicle: '407 Vehicle Shifting',
    icon: Truck,
    price: '₹4,000',
    priceNote: 'Starting from',
    suitable: 'Ideal for 1BHK homes, small office shifts, or compact loads.',
    features: [
      'Loading & unloading by 2-3 trained crew',
      'Basic packing materials & blankets',
      'Professional transit within service limits',
      'Standard furniture disassembly support',
    ],
    note: '*Extra charges apply for high floors without elevators or heavy/fragile crating.',
    highlight: false,
  },
  {
    id: 'plan-dcm',
    vehicle: 'DCM Vehicle Shifting',
    icon: Truck,
    price: '₹8,000',
    priceNote: 'Starting from',
    suitable: 'Perfect for 2–3BHK homes, larger offices, or heavy loads.',
    features: [
      'Loading & unloading by 4-6 trained crew',
      'Premium multi-layer packing materials',
      'Secure long-haul transit within region',
      'Complete furniture dismantling & placement',
    ],
    note: '*Extra charges apply for additional drop locations or piano/safe packing.',
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-light py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">No Surprises</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">Transparent &amp; Affordable Pricing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Simple pricing based on vehicle type. No hidden charges — what you see is what you pay.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Cards — single col on mobile, side-by-side sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => {
            const VehicleIcon = plan.icon
            return (
              <motion.div
                key={plan.id}
                id={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-2xl p-6 sm:p-7 border-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
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

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4 sm:mb-5">
                    <VehicleIcon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.vehicle}
                  </h3>
                  <p className={`text-xs mb-4 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.suitable}
                  </p>

                  <div className="mb-5 sm:mb-6">
                    <span className={`text-xs font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.priceNote}
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold mt-1 text-[#F97316]">
                      {plan.price}
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-2.5 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2.5 text-xs sm:text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className="w-4 h-4 rounded-full bg-[#F97316]/20 text-[#F97316] flex items-center justify-center flex-shrink-0">
                          <svg width="9" height="9" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className={`text-[11px] leading-relaxed mb-6 italic ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.note}
                  </p>
                </div>

                <a
                  href="https://wa.me/917382355966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold text-xs sm:text-sm py-4 rounded-xl transition-all duration-200 hover:scale-105 min-h-[52px] flex items-center justify-center ${
                    plan.highlight
                      ? 'bg-[#F97316] text-white hover:bg-[#EA6C10]'
                      : 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
                  }`}
                >
                  Get Exact Quote on WhatsApp
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Vehicle Transport Indicative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-8 sm:mt-10 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center text-[#F97316] flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">Need Vehicle Transportation?</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">We safely transport cars and bikes on dedicated enclosed carriers.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 sm:gap-6 w-full md:w-auto">
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold">Bike Shifting</span>
              <span className="text-[#F97316] text-base font-extrabold">from ₹1,500</span>
            </div>
            <div className="text-left border-l border-gray-200 pl-4 sm:pl-6">
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold">Car Shifting</span>
              <span className="text-[#F97316] text-base font-extrabold">from ₹5,000</span>
            </div>
            <a
              href="https://wa.me/917382355966"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold py-3 px-5 rounded-xl transition-all duration-200 min-h-[44px] flex items-center justify-center w-full sm:w-auto text-center"
            >
              Get Vehicle Quote
            </a>
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 sm:mt-10 text-center space-y-2"
        >
          <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-left shadow-xs mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 text-[#F97316]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">Additional Distance Charges</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                Additional travel beyond the standard service area is charged at ₹80 per kilometre.
              </p>
            </div>
          </div>
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
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5 text-white" fill="currentColor" />
              Get Free Quote on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

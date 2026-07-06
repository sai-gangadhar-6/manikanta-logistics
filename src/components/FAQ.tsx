'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How is pricing calculated and are there hidden charges?',
    answer: 'Our pricing is calculated transparently based on vehicle type, distance, volume of goods, and packing requirements. We provide a final, itemised quote upfront to guarantee absolutely no hidden charges or surprise delivery fees.',
  },
  {
    question: 'Is my furniture and belongings insured during transit?',
    answer: 'Yes, we provide comprehensive transit insurance coverage for all your household and vehicle relocations. Our dedicated team handles all safety checks and documentation to ensure complete peace of mind throughout the journey.',
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking your shifting slot 3 to 5 days in advance for local moves and 7 to 10 days for interstate relocations. This guarantees we can secure your preferred vehicle size and assign our best packing crew for your schedule.',
  },
  {
    question: 'How do I get a quote quickly?',
    answer: 'Getting a quote is fast and simple through our online enquiry form, which sends your details directly to our WhatsApp coordinator. You can also call us directly at +91 9052722229 to receive a fully customized estimate within minutes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="section-gray py-16 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">FAQ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">
            Questions People Ask Before Moving
          </h2>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left outline-none"
                >
                  <span className="font-bold text-[#0F172A] text-sm sm:text-base pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0F172A]"
                  >
                    <ChevronDown className="w-4 h-4 text-[#F97316]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

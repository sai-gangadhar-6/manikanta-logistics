'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How is pricing calculated and are there hidden charges?',
    answer: 'Our pricing is calculated based on the specific vehicle size needed, the total moving distance, the volume/weight of goods, and the quantity of packing materials used. We provide a fully detailed and transparent quote upfront with absolutely zero hidden charges, surprises, or delivery-day surcharges.',
  },
  {
    question: 'Do you handle interstate moves to all Indian states?',
    answer: 'Yes, we handle interstate moves across all major states and union territories in India. Our long-haul closed container trucks are GPS-enabled, and our experienced drivers are licensed for national highways, ensuring safe transit to any destination in the country.',
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking at least 3 to 5 days in advance for local within-city moves, and 7 to 10 days in advance for long-distance interstate moves. This ensures we can assign a dedicated crew and secure the exact truck type required for your schedule.',
  },
  {
    question: 'Is my belongings insured during transit and what does the coverage include?',
    answer: 'Yes, we provide comprehensive transit insurance for all moves. The coverage includes protection against accidental damage, collision, fire, and natural disasters during transit. Our team handles the documentation and claim processing on your behalf for total peace of mind.',
  },
  {
    question: 'Are packing materials included in the quoted price?',
    answer: 'Yes, all our standard quotes include the cost of high-grade packing materials. This includes multi-layer bubble wrap, heavy-duty corrugated cartons, stretch film, adhesive tapes, and protective furniture blankets. Our packing crew brings all materials on the day of the move.',
  },
  {
    question: 'How does bike or car transport work and how is the vehicle secured?',
    answer: 'Vehicles are packed with bubble wrap and scratch guards, then loaded onto specialized auto carriers using hydraulic ramps. We secure the wheels with heavy-duty locking blocks and fasten the chassis using industrial-grade ratchet straps. We document odometer readings and take detailed photos before loading.',
  },
  {
    question: 'Which cities and areas do you currently serve?',
    answer: 'Headquartered in Hyderabad, our active service network covers Bengaluru, Chennai, Pune, Mumbai, Delhi NCR, Visakhapatnam, Vijayawada, and other major metropolitan areas. We offer door-to-door packing and moving services both within these cities and across the interstate routes linking them.',
  },
  {
    question: 'How do I get a quote quickly?',
    answer: 'The fastest way is to fill out our quick online enquiry form, which formats your moving details and sends them directly to our coordinator on WhatsApp. You can also reach us directly via call at +91 9052722229 or WhatsApp at +91 7382355966 for an estimate in minutes.',
  },
  {
    question: 'What happens if there is damage during the move?',
    answer: 'In the rare event of damage, we take full accountability. Simply document the damaged item with photographs and notify our team within 24 hours of delivery. We will immediately assess the damage and initiate a speedy claim settlement or arrange for repair services.',
  },
  {
    question: 'Can you handle fragile, antique, or high-value items?',
    answer: 'Yes, we have specialized packing protocols for fragile and high-value items like glassware, paintings, and electronics. Our crew packs these using multi-layer foam wraps, custom wooden crating, and labels them clearly. They are loaded securely in safety-padded areas of our trucks.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, UPI payments (Google Pay, PhonePe, Paytm), bank transfers (NEFT/IMPS), and credit/debit cards. A small advance is collected at the time of booking to confirm your slot, with the remaining balance due upon successful delivery at your destination.',
  },
  {
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We understand that plans can change. You can cancel or reschedule your booking at no charge up to 48 hours before the scheduled moving time. Rescheduling or cancellations within 48 hours may attract a nominal vehicle reservation fee.',
  },
  {
    question: 'Is secure storage/warehousing available if my new home is not ready?',
    answer: 'Yes, we offer clean, pest-controlled, and CCTV-monitored warehouse storage options. You can store your packed goods with us for days, weeks, or months. When your new home is ready, simply notify us, and we will deliver and unpack everything for you.',
  },
  {
    question: 'How long does an interstate relocation typically take?',
    answer: 'Typically, moves within South India take 3 to 5 days, while moves to North or Western India take 5 to 7 days. We provide a specific estimated delivery window during booking and maintain constant contact during the journey.',
  },
  {
    question: 'Does your team handle the assembly and disassembly of furniture?',
    answer: 'Yes, our crew is equipped with the tools to safely disassemble large furniture items like beds, wardrobes, and dining tables, and reassemble them at your new home. This service is fully included in our standard shifting quotation.',
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

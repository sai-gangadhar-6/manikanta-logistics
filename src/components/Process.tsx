'use client'

import { motion } from 'framer-motion'
import { MessageCircle, FileText, Package, Truck, Home } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Share Your Requirements',
    description: 'Tell us your move details and inventory size via our quick call or WhatsApp interface. Our dedicated moving coordinators will guide you through options to customize your shifting plan.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Get a Free Quote',
    description: 'Receive a transparent, itemised quote within minutes with absolutely zero hidden fees. We verify your loading details to guarantee an accurate, fixed pricing structure.',
  },
  {
    number: '03',
    icon: Package,
    title: 'We Pack Everything',
    description: 'Our trained packing crew arrives on time with high-grade bubble wrap, customized cartons, and protective covers. We handle every fragile item and piece of furniture with utmost caution and care.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Safe Transport',
    description: 'Your boxed goods and furniture travel securely inside our closed, weatherproof, and GPS-enabled cargo fleet. We monitor the route in real-time to ensure absolute safety on national highways.',
  },
  {
    number: '05',
    icon: Home,
    title: 'Delivered & Unpacked',
    description: 'We unload, place, and reassemble all your heavy furniture pieces exactly where you designate at the destination. We ensure everything is unpacked cleanly so you can settle in comfortably on day one.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section-light py-16 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Simple Process</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">How Your Move Works</h2>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-8 sm:mt-12">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          {/* Timeline Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-gray-100 shadow-sm group-hover:border-[#F97316] group-hover:shadow-md transition-all duration-300">
                    <StepIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F172A] group-hover:text-[#F97316] transition-colors duration-300" />
                    
                    {/* Number Badge */}
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F97316] text-white font-extrabold text-[10px] sm:text-xs flex items-center justify-center shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Text Details */}
                  <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mt-6 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[200px] lg:max-w-none">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

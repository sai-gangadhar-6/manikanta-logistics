'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const serviceOptions = [
  'Home Shifting',
  'Office Relocation',
  'Local Shifting',
  'Interstate Moving',
  'Bike Transport',
  'Car Transport',
  'Packing & Unpacking',
  'Loading & Unloading',
  'Storage Solutions',
]

interface FormData {
  name: string
  phone: string
  from: string
  to: string
  service: string
  message: string
}

interface Errors {
  name?: string
  phone?: string
  from?: string
  to?: string
  service?: string
}

export default function EnquiryForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    from: '',
    to: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid 10-digit phone number'
    if (!form.from.trim()) e.from = 'Moving From is required'
    if (!form.to.trim()) e.to = 'Moving To is required'
    if (!form.service) e.service = 'Please select a service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitted(true)

    const msg = [
      `🚚 *New Enquiry — Manikanta Packers & Movers*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `📦 *Service:* ${form.service}`,
      `📍 *From:* ${form.from}`,
      `🏁 *To:* ${form.to}`,
      form.message ? `💬 *Message:* ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const encoded = encodeURIComponent(msg)

    setTimeout(() => {
      window.open(`https://wa.me/917382355966?text=${encoded}`, '_blank')
      setSubmitted(false)
      setForm({ name: '', phone: '', from: '', to: '', service: '', message: '' })
    }, 1500)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const inputClass = (field: keyof Errors) =>
    `w-full border-2 ${
      errors[field] ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20' : 'border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20'
    } rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white placeholder-gray-500 outline-none transition-all duration-200 min-h-[48px]`

  return (
    <section id="enquiry" className="section-gray py-16 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">Request a Free Quote</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Fill in the details below and we&apos;ll send you a quote directly on WhatsApp.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-7 lg:p-10 relative overflow-hidden"
        >
          {/* Success Toast */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.4 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-600"
                >
                  <Check className="w-8 h-8" strokeWidth={2.5} />
                </motion.div>
                <p className="text-xl font-bold text-[#0F172A]">Redirecting to WhatsApp...</p>
                <p className="text-gray-500 text-sm mt-1">Your enquiry is being sent!</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} noValidate id="enquiry-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Name */}
              <div>
                <label htmlFor="enquiry-name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your full name"
                  className={inputClass('name')}
                  autoComplete="name"
                  enterKeyHint="next"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="10-digit mobile number"
                  className={inputClass('phone')}
                  autoComplete="tel"
                  maxLength={10}
                  enterKeyHint="next"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* From */}
              <div>
                <label htmlFor="enquiry-from" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Moving From *
                </label>
                <input
                  id="enquiry-from"
                  type="text"
                  value={form.from}
                  onChange={(e) => handleChange('from', e.target.value)}
                  placeholder="City / Area"
                  className={inputClass('from')}
                  enterKeyHint="next"
                />
                {errors.from && <p className="text-red-500 text-xs mt-1">{errors.from}</p>}
              </div>

              {/* To */}
              <div>
                <label htmlFor="enquiry-to" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Moving To *
                </label>
                <input
                  id="enquiry-to"
                  type="text"
                  value={form.to}
                  onChange={(e) => handleChange('to', e.target.value)}
                  placeholder="City / Area"
                  className={inputClass('to')}
                  enterKeyHint="next"
                />
                {errors.to && <p className="text-red-500 text-xs mt-1">{errors.to}</p>}
              </div>

              {/* Service */}
              <div className="sm:col-span-2">
                <label htmlFor="enquiry-service" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Service Type *
                </label>
                <select
                  id="enquiry-service"
                  value={form.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className={`${inputClass('service')} cursor-pointer`}
                >
                  <option value="">— Select a service —</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="enquiry-message" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Additional Message
                </label>
                <textarea
                  id="enquiry-message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Any specific requirements or questions?"
                  className="w-full border-2 border-gray-300 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white placeholder-gray-500 outline-none transition-all duration-200 resize-none"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                id="enquiry-submit-btn"
                className="w-full sm:w-auto sm:px-12 flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold text-base py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 min-h-[52px]"
              >
                💬 Send Enquiry on WhatsApp
              </button>
            </div>

            <p className="text-center text-gray-400 text-xs mt-4">
              Your details will be sent directly to our WhatsApp. No spam, ever.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

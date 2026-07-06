'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-light py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Reach Us</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">Contact Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Ready to move? Get in touch via phone, email, or WhatsApp — we respond in minutes.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="space-y-4 sm:space-y-5"
          >
            {/* Phone Card */}
            <div className="bg-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-white/5 shadow-lg flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 text-[#F97316]">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Call Us</p>
                  <p className="text-lg sm:text-xl font-bold mt-0.5">+91 9052722229</p>
                </div>
              </div>
              <a
                href="tel:+919052722229"
                id="contact-call-btn"
                className="w-full text-center bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] min-h-[48px] flex items-center justify-center"
              >
                Call Now
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-50 border border-slate-200 text-[#0F172A] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 text-[#25D366]">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">WhatsApp</p>
                  <p className="text-lg sm:text-xl font-bold mt-0.5">+91 7382355966</p>
                </div>
              </div>
              <a
                href="https://wa.me/917382355966"
                id="contact-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] min-h-[48px] flex items-center justify-center"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200 text-[#0F172A] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 text-[#F97316]">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Email</p>
                  <p className="text-sm sm:text-base font-bold mt-0.5 break-all">manikantapackersandmovers@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:manikantapackersandmovers@gmail.com"
                id="contact-email-btn"
                className="w-full text-center border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] min-h-[48px] flex items-center justify-center"
              >
                Send Email
              </a>
            </div>

            {/* Operating Hours Note */}
            <p className="text-center text-xs text-gray-500 font-semibold mt-4">
              Available Monday–Saturday 7am–9pm and Sunday 8am–6pm
            </p>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 sm:h-80 lg:h-[450px] mt-2 lg:mt-0"
          >
            <iframe
              title="Manikanta Packers & Movers Service Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.123456789!2d80.5893!3d16.4836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a3b4c5d6%3A0x1234567890abcdef!2sPoranki%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

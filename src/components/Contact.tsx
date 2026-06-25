'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">Reach Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Contact Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Ready to move? Get in touch via phone, email, or WhatsApp — we respond in minutes.
          </p>
          <div className="w-16 h-1 bg-[#F97316] mx-auto rounded-full mt-5" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {/* Phone */}
            <a
              href="tel:+919052722229"
              id="contact-call-btn"
              className="flex items-center gap-5 bg-[#0F172A] text-white rounded-2xl p-5 hover:bg-[#1E293B] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F97316] flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                📞
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Call Us</p>
                <p className="text-xl font-bold mt-0.5">+91 9052722229</p>
                <p className="text-gray-400 text-xs mt-0.5">Available 24/7</p>
              </div>
              <svg className="ml-auto text-gray-500 group-hover:text-[#F97316] transition-colors" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917382355966"
              id="contact-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-green-600 text-white rounded-2xl p-5 hover:bg-green-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                💬
              </div>
              <div>
                <p className="text-xs text-green-100 font-medium uppercase tracking-widest">WhatsApp</p>
                <p className="text-xl font-bold mt-0.5">Message Us Now</p>
                <p className="text-green-100 text-xs mt-0.5">Instant reply guaranteed</p>
              </div>
              <svg className="ml-auto text-green-200 group-hover:text-white transition-colors" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:manikantapackersandmovers@gmail.com"
              id="contact-email-btn"
              className="flex items-center gap-5 bg-white border-2 border-gray-100 text-[#0F172A] rounded-2xl p-5 hover:border-[#F97316] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F97316]/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#F97316]/20 transition-colors duration-200">
                ✉️
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Email</p>
                <p className="text-sm font-bold mt-0.5 break-all">manikantapackersandmovers@gmail.com</p>
              </div>
              <svg className="ml-auto text-gray-300 group-hover:text-[#F97316] transition-colors flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-72 sm:h-96"
          >
            <iframe
              title="Manikanta Logistics Service Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9040881679!2d78.24323235!3d17.412608849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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

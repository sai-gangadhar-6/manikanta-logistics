'use client'

import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917382355966"
      id="floating-whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      className="hidden md:flex fixed right-5 z-50 w-14 h-14 rounded-full bg-green-500 shadow-2xl items-center justify-center wa-pulse"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
        <path d="M16.004 0C7.165 0 0 7.163 0 15.998c0 2.826.742 5.482 2.032 7.8L0 32l8.416-2.004A15.96 15.96 0 0016.004 32C24.835 32 32 24.837 32 15.998 32 7.163 24.835 0 16.004 0zm0 29.29a13.24 13.24 0 01-6.74-1.843l-.482-.288-4.995 1.19 1.256-4.853-.316-.5a13.22 13.22 0 01-2.03-7.002C2.697 8.662 8.663 2.7 16.004 2.7c7.337 0 13.3 5.962 13.3 13.298 0 7.34-5.963 13.293-13.3 13.293zm7.337-9.95c-.4-.2-2.37-1.17-2.738-1.303-.367-.133-.634-.2-.9.2-.268.4-1.033 1.3-1.267 1.567-.234.267-.467.3-.867.1-.4-.2-1.687-.622-3.21-1.984-1.186-1.06-1.987-2.37-2.22-2.77-.234-.4-.025-.616.176-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.17-1.234-2.97-.325-.78-.654-.676-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.37-1.4 3.34 0 1.967 1.434 3.87 1.634 4.137.2.267 2.82 4.3 6.836 6.03.954.413 1.7.66 2.282.843.96.305 1.833.262 2.52.16.768-.115 2.37-.97 2.704-1.906.333-.938.333-1.74.233-1.906-.1-.167-.367-.267-.767-.467z"/>
      </svg>
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  )
}

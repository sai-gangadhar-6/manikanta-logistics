'use client'

import { useState, useEffect } from 'react'

export default function PWAController() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // 1. Service Worker Registration
    if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[PWA] Service Worker registered with scope:', registration.scope)
          })
          .catch((error) => {
            console.error('[PWA] Service Worker registration failed:', error)
          })
      })
    }

    // 2. iOS Safari Install Banner Logic
    const detectIOS = () => {
      interface NavigatorStandalone extends Navigator {
        standalone?: boolean
      }
      const userAgent = window.navigator.userAgent.toLowerCase()
      const isIOS = /iphone|ipad|ipod/.test(userAgent) || 
                    (userAgent.includes('mac') && 'ontouchend' in document)
      const isSafari = userAgent.includes('safari') && !userAgent.includes('crios') && !userAgent.includes('fxios')
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                           (window.navigator as NavigatorStandalone).standalone === true

      const isDismissed = sessionStorage.getItem('ios-pwa-dismissed') === 'true'

      return isIOS && isSafari && !isStandalone && !isDismissed
    }

    // Delay showing the banner slightly for better UX
    const timer = setTimeout(() => {
      if (detectIOS()) {
        setShowBanner(true)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem('ios-pwa-dismissed', 'true')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      role="dialog"
      aria-label="Install App Hint"
      className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-[350px] z-50 
                 bg-slate-900/95 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl 
                 p-4 md:p-5 flex flex-col gap-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
            {/* Truck Icon */}
            <svg
              className="w-4.5 h-4.5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-sm tracking-tight text-white leading-tight">Manikanta Logistics</h2>
            <p className="text-[10px] text-orange-400 font-semibold uppercase tracking-wider mt-0.5">Packers & Movers</p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          aria-label="Close installation hint"
          className="text-slate-400 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Instructions */}
      <div className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
        <p className="font-medium text-slate-200 mb-2">Install this web app on your iPhone:</p>
        <ol className="flex flex-col gap-2 list-decimal list-inside pl-0.5 text-slate-300">
          <li>
            Tap the <strong className="text-white">Share</strong> button 
            <svg
              className="w-4 h-4 inline-block text-orange-500 mx-1 vertical-align-middle align-text-bottom"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            at the bottom of your Safari screen.
          </li>
          <li>
            Scroll down the menu and select <strong className="text-white">Add to Home Screen</strong>
            <svg
              className="w-4 h-4 inline-block text-orange-500 mx-1 vertical-align-middle align-text-bottom"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            .
          </li>
        </ol>
      </div>
    </div>
  )
}

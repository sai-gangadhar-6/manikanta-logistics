import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PWAController from '@/components/PWAController'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://manikanta-logistics.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Manikanta',
    statusBarStyle: 'default',
  },
  title: {
    default: 'Manikanta Logistics – Trusted Packers & Movers | Safe, Reliable & Affordable',
    template: '%s | Manikanta Logistics',
  },
  description:
    'Manikanta Logistics offers professional packing and moving services across India — home shifting, office relocation, vehicle transport, and storage solutions. Call +91 9052722229 for a free quote.',
  keywords: [
    'packers and movers',
    'home shifting',
    'office relocation',
    'vehicle transport',
    'car transport',
    'bike transport',
    'storage solutions',
    'interstate moving',
    'Manikanta Logistics',
    'affordable movers Hyderabad',
    'local shifting',
    'packing unpacking services India',
  ],
  authors: [{ name: 'Manikanta Logistics' }],
  creator: 'Manikanta Logistics',
  publisher: 'Manikanta Logistics',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Manikanta Logistics',
    title: 'Manikanta Logistics – Trusted Packers & Movers Across India',
    description:
      'Safe, reliable & affordable packing and moving services. Home shifting, office relocation, vehicle transport, interstate moving. 500+ happy customers. Call +91 9052722229.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=85&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Manikanta Logistics – Professional Packers and Movers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manikanta Logistics – Packers & Movers',
    description: 'Safe, reliable & affordable moving services across India. Free quote on WhatsApp.',
    images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=85&auto=format&fit=crop'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Manikanta Logistics',
  description:
    'Professional packing and moving services across India including home shifting, office relocation, vehicle transport, and storage solutions.',
  url: siteUrl,
  telephone: '+919052722229',
  email: 'manikantapackersandmovers@gmail.com',
  foundingDate: '2014',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919052722229',
    contactType: 'customer service',
    availableLanguage: ['English', 'Telugu', 'Hindi'],
    contactOption: 'TollFree',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Packing and Moving Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Shifting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Relocation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interstate Moving' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bike Transport' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Storage Solutions' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0F172A" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-700 antialiased`}>
        {children}
        <PWAController />
      </body>
    </html>
  )
}

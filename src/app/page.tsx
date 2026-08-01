import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import TrustStats from '@/components/TrustStats'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import EnquiryForm from '@/components/EnquiryForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileStickyBar from '@/components/MobileStickyBar'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <TrustStats />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <EnquiryForm />
        <Contact />

{/* SEO Section */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold mb-6">
    Best Packers and Movers in Vijayawada
  </h2>

  <p className="text-lg leading-8 text-gray-700 mb-6">
    Manikanta Packers & Movers provides professional home shifting,
    office relocation, bike transport, car transport, packing,
    unpacking, loading, unloading, warehouse storage, and interstate
    moving services in Vijayawada and across India.
  </p>

  <h3 className="text-2xl font-semibold mb-4">
    Why Choose Manikanta Packers & Movers?
  </h3>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>Professional Packing</li>
    <li>Safe Transportation</li>
    <li>Affordable Prices</li>
    <li>Experienced Team</li>
    <li>On-Time Delivery</li>
    <li>24/7 Customer Support</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">
    Packers and Movers Services in Vijayawada
  </h3>

  <p className="text-lg leading-8 text-gray-700">
    Whether you are shifting your home, office, bike, or car,
    Manikanta Packers & Movers offers trusted relocation services
    throughout Vijayawada, Andhra Pradesh, Hyderabad, Visakhapatnam,
    Guntur, and all major cities across India.
  </p>
</section>

</main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </>
  )
}

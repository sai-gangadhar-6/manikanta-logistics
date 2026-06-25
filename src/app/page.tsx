import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import EnquiryForm from '@/components/EnquiryForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Packers and Movers in Vijayawada | Manikanta Packers & Movers",
  description:
    "Looking for the best Packers and Movers in Vijayawada? Manikanta Packers & Movers offers home shifting, office relocation, bike transport, car transport, packing, unpacking, loading, unloading and warehouse storage services across Vijayawada and India.",
  keywords: [
    "Packers and Movers Vijayawada",
    "Best Packers and Movers Vijayawada",
    "Home Shifting Vijayawada",
    "House Shifting Vijayawada",
    "Office Relocation Vijayawada",
    "Bike Transport Vijayawada",
    "Car Transport Vijayawada",
    "Warehouse Storage Vijayawada",
  ],
};

export default function VijayawadaPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Best Packers and Movers in Vijayawada
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Trusted home shifting, office relocation, bike transport,
            car transport, packing, unpacking and warehouse storage
            services in Vijayawada with affordable pricing and secure delivery.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="tel:+919052722229"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919052722229"
              target="_blank"
              className="border border-orange-500 px-8 py-4 rounded-xl font-bold hover:bg-orange-500 transition"
            >
              WhatsApp Quote
            </a>

          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Packers & Movers Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                🏠 Home Shifting
              </h3>
              <p>
                Safe household shifting with professional packing and secure transportation.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                🏢 Office Relocation
              </h3>
              <p>
                Fast and secure office relocation with minimum business interruption.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                🏍 Bike Transport
              </h3>
              <p>
                Safe bike transportation anywhere in India.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                🚗 Car Transport
              </h3>
              <p>
                Reliable enclosed and open carrier vehicle transportation.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                📦 Packing & Unpacking
              </h3>
              <p>
                Premium quality packing materials with trained professionals.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                🏢 Warehouse Storage
              </h3>
              <p>
                Secure warehouse storage with monitored facilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Manikanta Packers & Movers?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Safe Packing
              </h3>
              <p>
                Professional packing materials ensure maximum safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Affordable Pricing
              </h3>
              <p>
                Transparent pricing with no hidden charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                On-Time Delivery
              </h3>
              <p>
                Timely pickup and delivery across India.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                24/7 Support
              </h3>
              <p>
                Friendly customer support whenever you need assistance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Packers and Movers in Vijayawada
          </h2>

          <p className="text-lg leading-8 mb-6">
            Manikanta Packers & Movers is one of the trusted moving companies in
            Vijayawada. We provide professional home shifting, office relocation,
            bike transport, car transport, warehouse storage and interstate
            moving services at affordable prices.
          </p>

          <p className="text-lg leading-8">
            Our experienced professionals ensure safe packing, careful handling,
            secure transportation and on-time delivery throughout Vijayawada,
            Guntur, Mangalagiri, Tenali, Hyderabad and all major cities across India.
          </p>

        </div>

      </section>

      {/* Contact */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact Manikanta Packers & Movers
          </h2>

          <p className="text-xl mb-4">
            📞 +91 9052722229
          </p>

          <p className="text-lg mb-8">
            📍 Vijayawada, Andhra Pradesh
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="tel:+919052722229"
              className="bg-orange-500 px-8 py-4 rounded-xl font-bold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919052722229"
              target="_blank"
              className="border border-orange-500 px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
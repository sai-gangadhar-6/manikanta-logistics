<main className="bg-white">

  <section className="bg-slate-900 text-white py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">

      <h1 className="text-5xl font-bold mb-6">
        Best Packers and Movers in Vijayawada
      </h1>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Trusted home shifting, office relocation, bike transport,
        car transport, packing and moving services in Vijayawada
        with affordable pricing and secure delivery.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <a
          href="tel:+919052722229"
          className="bg-orange-500 px-8 py-4 rounded-xl font-bold"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919052722229"
          className="border border-orange-500 px-8 py-4 rounded-xl font-bold"
        >
          WhatsApp Quote
        </a>

      </div>

    </div>
  </section>
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Packers and Movers in Vijayawada | Manikanta Packers & Movers",
  description:
    "Looking for the best Packers and Movers in Vijayawada? Manikanta Packers & Movers offers home shifting, office relocation, bike transport, car transport, packing, unpacking, loading and unloading services across Vijayawada and India.",
  keywords: [
    "Packers and Movers Vijayawada",
    "Best Packers and Movers Vijayawada",
    "Home Shifting Vijayawada",
    "House Shifting Vijayawada",
    "Office Relocation Vijayawada",
    "Bike Transport Vijayawada",
    "Car Transport Vijayawada",
  ],
};

export default function VijayawadaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-6">
        Best Packers and Movers in Vijayawada
      </h1>

      <p className="text-lg leading-8 mb-8">
        Manikanta Packers & Movers provides professional packing and moving
        services in Vijayawada. We offer safe home shifting, office relocation,
        bike transport, car transport, warehouse storage, packing and
        unpacking services at affordable prices.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4">
        Our Services
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>Home Shifting in Vijayawada</li>
        <li>Office Relocation</li>
        <li>Bike Transport</li>
        <li>Car Transport</li>
        <li>Packing & Unpacking</li>
        <li>Loading & Unloading</li>
        <li>Warehouse Storage</li>
        <li>Interstate Moving</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Why Choose Manikanta Packers & Movers?
      </h2>

      <p className="text-lg leading-8">
        Our experienced team ensures secure packing, careful handling,
        affordable pricing, live tracking and on-time delivery. We proudly
        serve customers throughout Vijayawada and nearby cities including
        Guntur, Mangalagiri, Tenali and across India.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Contact Us
      </h2>

      <p className="text-lg">
        📞 Phone: +91 9052722229
      </p>

      <p className="text-lg">
        📍 Location: Vijayawada, Andhra Pradesh
      </p>

    </main>
  );
}
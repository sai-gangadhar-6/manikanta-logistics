export interface Service {
  id: string
  icon: string
  title: string
  shortDesc: string
  description: string
  whatsIncluded: string[]
  estimatedTime: string
  vehicleType: string
}

export const services: Service[] = [
  {
    id: 'home-shifting',
    icon: 'home',
    title: 'Home Shifting',
    shortDesc: 'Complete household relocation handled with care.',
    description:
      'From studio apartments to large multi-story villas, we manage every detail of your residential move. Our fully trained crew handles the careful packing, heavy lifting, loading, transit, and final unpacking at your new home.',
    whatsIncluded: [
      'Multi-layer bubble wrap & heavy-duty cartons',
      'Experienced 4-6 member packing crew',
      'Full dismantling & reassembly of large furniture',
      'Transit insurance facilitation & claims assistance',
    ],
    estimatedTime: '1 – 2 Days',
    vehicleType: 'Tata 407 / DCM Toyota Container',
  },
  {
    id: 'office-relocation',
    icon: 'building',
    title: 'Office Relocation',
    shortDesc: 'Seamless business moves with minimal downtime.',
    description:
      'We understand that business continuity is critical. Our dedicated commercial relocation teams work efficiently — often during weekends or overnight — to pack and shift IT systems, desks, and documents with minimal disruption.',
    whatsIncluded: [
      'IT equipment & server safe-packing boxes',
      'Workstation disassembly & modular setup support',
      'Color-coded file and department labeling system',
      'Dedicated corporate move manager on-site',
    ],
    estimatedTime: '1 – 3 Days (Weekend Shifting Available)',
    vehicleType: 'Dedicated Large Closed Container Truck',
  },
  {
    id: 'interstate-moving',
    icon: 'route',
    title: 'Interstate Moving',
    shortDesc: 'Safe long-distance transport across India.',
    description:
      'Moving to a different state? Our long-haul closed container trucks relocate your household goods anywhere in India, secured against highway vibrations and weather elements with real-time tracking updates.',
    whatsIncluded: [
      'Ultra-secure multi-layer packing (5-layer wrap)',
      'High-grade waterproof closed containers',
      'Transit insurance coverage included',
      'Regular route coordinator updates',
    ],
    estimatedTime: '3 – 7 Days (Depending on Destination)',
    vehicleType: 'Heavy Closed Cargo Container Truck',
  },
  {
    id: 'bike-transport',
    icon: 'bike',
    title: 'Bike Transport',
    shortDesc: 'Secure two-wheeler transport, door to door.',
    description:
      'We transport your motorcycle or scooter safely in specialized enclosed carriers with secure tie-down systems, protective bubble wrapping, and absolute protection against road debris or scratches.',
    whatsIncluded: [
      'Multi-layer bubble wrap & scratch-guard sheets',
      'Heavy-duty secure ratchet strap locks',
      'Pre-transport condition audit & photo documentation',
      'Doorstep pickup and delivery service',
    ],
    estimatedTime: '3 – 5 Days (Interstate Transit)',
    vehicleType: 'Enclosed Multi-Bike Cargo Carrier',
  },
  {
    id: 'car-transport',
    icon: 'car',
    title: 'Car Transport',
    shortDesc: 'Damage-free car relocation on enclosed carriers.',
    description:
      'Get your sedan, SUV, or luxury car relocated safely using our specialized hydraulic loading car carriers. We ensure secure transit with full condition check documentation and insurance.',
    whatsIncluded: [
      'Full body dust-proof protective wrapping',
      'Hydraulic ramp loading & wheel locking blocks',
      'Pre-shipment odometer & inspection reports',
      'Comprehensive transit insurance coverage',
    ],
    estimatedTime: '4 – 7 Days (Interstate Transit)',
    vehicleType: 'Hydraulic Open/Closed Car Carrier Trailer',
  },
  {
    id: 'storage-solutions',
    icon: 'warehouse',
    title: 'Storage Solutions',
    shortDesc: 'Short and long-term secure warehousing.',
    description:
      'Need storage between moves or temporary warehousing for extra items? We offer clean, modern, pest-controlled warehouse storage facilities with round-the-clock security and flexible renting periods.',
    whatsIncluded: [
      'CCTV monitored 24/7 warehouse facility',
      'Clean, dry, pest-controlled storage vaults',
      'Palletised stacking & dust protective wrapping',
      'Flexible weekly or monthly rental agreements',
    ],
    estimatedTime: 'Flexible (Weekly/Monthly Rental)',
    vehicleType: 'Pickup & Delivery Vehicle Available',
  },
]

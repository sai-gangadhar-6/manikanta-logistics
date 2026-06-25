export interface Service {
  id: string
  icon: string
  title: string
  shortDesc: string
  description: string
}

export const services: Service[] = [
  {
    id: 'home-shifting',
    icon: 'home',
    title: 'Home Shifting',
    shortDesc: 'Complete household relocation handled with care.',
    description:
      'From studios to large villas, we manage every detail of your home move. Our trained crew carefully packs, loads, transports, and unpacks every item — fragile or heavy — at your new address.',
  },
  {
    id: 'office-relocation',
    icon: 'building',
    title: 'Office Relocation',
    shortDesc: 'Seamless business moves with minimal downtime.',
    description:
      'We understand that every hour of downtime costs money. Our commercial relocation team works efficiently — often overnight or on weekends — to shift your entire office setup with zero disruption to operations.',
  },
  {
    id: 'local-shifting',
    icon: 'mappin',
    title: 'Local Shifting',
    shortDesc: 'Fast, affordable within-city moves.',
    description:
      'Moving across the same city? Our local shifting service is quick, cost-effective, and stress-free. Whether it\'s a single room or a full household, we dispatch the right vehicle and crew for the job.',
  },
  {
    id: 'interstate-moving',
    icon: 'route',
    title: 'Interstate Moving',
    shortDesc: 'Safe long-distance transport across India.',
    description:
      'Our GPS-tracked fleet handles interstate relocations across all major Indian cities and towns. We use multi-layer packing for long-haul trips and provide regular updates throughout the journey.',
  },
  {
    id: 'bike-transport',
    icon: 'bike',
    title: 'Bike Transport',
    shortDesc: 'Secure two-wheeler transport, door to door.',
    description:
      'Your motorcycle or scooter is transported safely in enclosed or open carriers with proper tie-down strapping, protective covers, and zero direct road exposure — delivered in the same condition it left.',
  },
  {
    id: 'car-transport',
    icon: 'car',
    title: 'Car Transport',
    shortDesc: 'Damage-free car relocation on enclosed carriers.',
    description:
      'We move your car on a dedicated car carrier with full protective wrapping and secure loading. Whether you\'re relocating across states or need a vehicle delivered, your four-wheeler is in safe hands.',
  },
  {
    id: 'packing-unpacking',
    icon: 'box',
    title: 'Packing & Unpacking',
    shortDesc: 'Expert packing with premium materials.',
    description:
      'Our packing specialists use layered bubble wrap, foam sheets, corrugated boards, and custom-sized cartons for every item type. We label everything clearly and unpack just as carefully at your destination.',
  },
  {
    id: 'loading-unloading',
    icon: 'arrows',
    title: 'Loading & Unloading',
    shortDesc: 'Skilled labour for all heavy-lifting needs.',
    description:
      'Need just loading or unloading help? Our trained labour team handles all heavy lifting with proper techniques — no damaged walls, scratched floors, or strained backs. Safe for your belongings and the building.',
  },
  {
    id: 'storage-solutions',
    icon: 'warehouse',
    title: 'Storage Solutions',
    shortDesc: 'Short and long-term secure warehousing.',
    description:
      'Our clean, secure warehouses offer flexible storage from a few days to several months. Goods are palletised, covered, and kept in a monitored environment. Ideal for in-between moves or temporary overflow.',
  },
]

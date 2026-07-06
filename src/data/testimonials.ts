export interface Testimonial {
  id: string
  name: string
  city: string
  service: string
  rating: number
  review: string
  initials: string
  avatarColor: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ravi Kumar Reddy',
    city: 'Hyderabad → Bengaluru',
    service: 'Interstate Moving',
    rating: 5,
    review:
      'Moved my entire 3BHK from Hyderabad to Bengaluru and not a single item was damaged. The team arrived on time, packed everything meticulously — they even wrapped individual wine glasses in bubble wrap. Would absolutely use them again.',
    initials: 'RK',
    avatarColor: 'bg-blue-600',
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    city: 'Vijayawada → Hyderabad',
    service: 'Home Shifting',
    rating: 5,
    review:
      'I was dreading the move but Manikanta Packers & Movers made it completely effortless. Their coordinator kept me updated at every stage, the movers were polite and professional, and they finished two hours ahead of schedule. Five stars without hesitation.',
    initials: 'PS',
    avatarColor: 'bg-purple-600',
  },
  {
    id: 't3',
    name: 'Suresh Varma',
    city: 'Pune → Hyderabad',
    service: 'Car Transport',
    rating: 5,
    review:
      'Had my Honda City transported from Pune and it arrived without a single scratch. They send photo updates during transit which gave me so much peace of mind. The pricing was transparent with no surprises at delivery.',
    initials: 'SV',
    avatarColor: 'bg-green-600',
  },
]

const offers: Offer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: 'Apartment',
    isPremium: true,
    isBookmarked: false,
    rating: 4.5,
    image: 'img/apartment-01.jpg',
    description: 'A beautiful apartment located in the city center with all amenities.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  },
  {
    id: 2,
    title: 'Wood and stone place',
    price: 80,
    type: 'Room',
    isPremium: false,
    isBookmarked: true,
    rating: 4.0,
    image: 'img/apartment-01.jpg',
    description: 'A cozy room made of wood and stone with a rustic feel.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'Apartment',
    isPremium: false,
    isBookmarked: false,
    rating: 4.8,
    image: 'img/apartment-01.jpg',
    description: 'An apartment with a stunning view of the Prinsengracht canal.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'Apartment',
    isPremium: true,
    isBookmarked: false,
    rating: 5.0,
    image: 'img/apartment-01.jpg',
    description: 'A warm and cozy apartment with a large bed, perfect for relaxation.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  },
];

export default offers;
export interface Offer {
    id: number;
    title: string;
    price: number;
    type: string;
    isPremium: boolean;
    isBookmarked: boolean;
    rating: number;
    image: string;
    description: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

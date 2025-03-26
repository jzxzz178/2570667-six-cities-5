import { cities, City } from './cities';

const offers: Offer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: 'Apartment',
    isPremium: true,
    isBookmarked: false,
    city: cities[3],
    rating: 4.5,
    image: 'img/apartment-01.jpg',
    description: 'A beautiful apartment located in the city center with all amenities.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: 2,
    title: 'Wood and stone place',
    price: 80,
    type: 'Room',
    isPremium: false,
    isBookmarked: true,
    city: cities[3],
    rating: 4.0,
    image: 'img/apartment-01.jpg',
    description: 'A cozy room made of wood and stone with a rustic feel.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
    },
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'Apartment',
    isPremium: false,
    isBookmarked: false,
    city: cities[3],
    rating: 4.8,
    image: 'img/apartment-01.jpg',
    description: 'An apartment with a stunning view of the Prinsengracht canal.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'Apartment',
    isPremium: true,
    isBookmarked: false,
    city: cities[3],
    rating: 5.0,
    image: 'img/apartment-01.jpg',
    description: 'A warm and cozy apartment with a large bed, perfect for relaxation.',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
  },
];

export default offers;
export interface Offer {
    id: number;
    title: string;
    price: number;
    type: string;
    city: City;
    isPremium: boolean;
    isBookmarked: boolean;
    rating: number;
    image: string;
    description: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    location: {
      latitude: number;
      longitude: number;
    };
}

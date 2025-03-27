import { City } from '../mocks/cities';

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

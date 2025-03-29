import { City } from '../mocks/cities';

export interface Offer {
    id: number;
    title: string;
    price: number;
    type: string;
    city: City;
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    previewImage: string;
    description: string;
    location: {
      latitude: number;
      longitude: number;
    };
    images: string[];
}

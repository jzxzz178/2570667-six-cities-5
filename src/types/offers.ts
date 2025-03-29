// Общий базовый интерфейс для оффера
export interface BaseOffer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

// Интерфейс для страницы конкретного оффера
export interface DetailedOffer extends BaseOffer {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

// Интерфейс для оффера в списке
export interface OfferPreview extends BaseOffer {
  previewImage: string;
}

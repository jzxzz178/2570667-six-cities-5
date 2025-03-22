import { useState } from 'react';
import OfferCard from './offer-card';

interface Offer {
  id: number;
  isPremium: boolean;
  image: string;
  price: number;
  title: string;
  type: string;
  isBookmarked: boolean;
  rating: number;
}

interface OffersListProps {
  offers: Offer[];
  containerClassName?: string;
}

function OffersList({ offers, containerClassName }: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className={`cities__places-list places__list tabs__content ${containerClassName}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          id={offer.id}
          isPremium={offer.isPremium}
          image={offer.image}
          price={offer.price}
          title={offer.title}
          type={offer.type}
          isBookmarked={offer.isBookmarked}
          rating={offer.rating}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default OffersList;

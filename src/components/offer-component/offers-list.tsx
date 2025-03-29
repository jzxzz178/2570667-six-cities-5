import { useState } from 'react';
import OfferCard from './offer-card';
import { Offer } from '../../types/offers';

interface OffersListProps {
  offers: Offer[];
  containerClassName?: string;
  onCardMouseEnter?: (id: number) => void;
  onCardMouseLeave?: () => void;
}

function OffersList({
  offers,
  containerClassName,
  onCardMouseEnter,
  onCardMouseLeave,
}: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveOfferId(id);
    if (onCardMouseEnter) {
      onCardMouseEnter(id);
    }
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
    if (onCardMouseLeave) {
      onCardMouseLeave();
    }
  };

  return (
    <div
      className={`cities__places-list places__list tabs__content ${containerClassName}`}
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default OffersList;

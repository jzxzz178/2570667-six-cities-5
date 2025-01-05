import { Link } from 'react-router-dom';

interface OfferCardProps {
  id: number;
  isPremium: boolean;
  image: string;
  price: number;
  title: string;
  type: string;
  isBookmarked: boolean;
  rating: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function OfferCard(offerCard: OfferCardProps): JSX.Element {
  return (
    <div>
      <article
        className="cities__card place-card"
        onMouseEnter={offerCard.onMouseEnter}
        onMouseLeave={offerCard.onMouseLeave}
      >
        {offerCard.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offerCard.image} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offerCard.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{offerCard.isBookmarked ? 'In bookmarks' : 'To bookmarks'}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${(offerCard.rating / 5) * 100}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offerCard.id}`}>{offerCard.title}</Link>
          </h2>
          <p className="place-card__type">{offerCard.type}</p>
        </div>
      </article>
    </div>
  );
}

export default OfferCard;

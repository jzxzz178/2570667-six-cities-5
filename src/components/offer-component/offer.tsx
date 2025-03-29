import ReviewsList from '../review-components/review-list';
import CommentForm from '../comment-form-component/comment-form';
import Map from '../map/map';
import { useParams } from 'react-router-dom';
import OffersList from './offers-list';
import reviews from '../../mocks/reviews';
import users from '../../mocks/user';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { fetchNearbyOffers, getOffer } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header';

function Offer(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  const selectedOffer = useAppSelector((state) => state.app.selectedOffer);
  const isOfferLoading = useAppSelector(
    (state) => state.app.isOffersDataLoading
  );
  const nearbyOffers = useAppSelector((state) => state.app.nearbyOffers);

  useEffect(() => {
    if (id) {
      dispatch(getOffer(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [id, dispatch]);

  const [activeOfferId] = useState<string | null>(null);

  if (isOfferLoading) {
    return <LoadingScreen />;
  }

  if (!selectedOffer) {
    return <div>Offer not found</div>;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {selectedOffer.images && selectedOffer.images.length > 0 ? (
                selectedOffer.images.map((imgUrl, index) => (
                  <div className="offer__image-wrapper" key={imgUrl}>
                    <img
                      className="offer__image"
                      src={imgUrl}
                      alt={`Photo ${index + 1}`}
                    />
                  </div>
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{selectedOffer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{ width: `${(selectedOffer.rating / 5) * 100}%` }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {selectedOffer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {selectedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {selectedOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">
                  &euro;{selectedOffer.price}
                </b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {selectedOffer.goods && selectedOffer.goods.length > 0 ? (
                    selectedOffer.goods.map((item) => (
                      <li key={item} className="offer__inside-item">
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="offer__inside-item">No goods information</li>
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={selectedOffer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {selectedOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {selectedOffer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  {selectedOffer.description}
                </div>
              </div>
              <ReviewsList
                reviews={reviews
                  .filter((review) => review.offerId === 1)
                  .map((review) => ({
                    avatar: users[review.id - 1].avatar,
                    userName: users[review.id - 1].userName,
                    rating: review.rating,
                    text: review.text,
                    date: review.date,
                  }))}
              />
              <CommentForm />
            </div>
          </div>

          {nearbyOffers ? (
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OffersList
                  offers={nearbyOffers}
                  containerClassName="near-places__list"
                />
              </div>
            </section>
          ) : (
            <p></p>
          )}

          {nearbyOffers ? (
            <div
              className="offer__map map"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: '400px',
                margin: '0 auto',
              }}
            >
              <Map offers={nearbyOffers} activeOfferId={activeOfferId} />
            </div>
          ) : (
            <p>No map</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Offer;

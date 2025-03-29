import { useAppDispatch, useAppSelector } from '../../hooks';
import { fillOffers } from '../../store/action';
import Header from '../header';
import OffersList from '../offer-component/offers-list';


function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const allOffers = useAppSelector((state) => state.app.offers);

  const favoriteOffers = allOffers.filter((offer) => offer.isFavorite);

  const handleClearFavorites = () => {
    const updatedOffers = allOffers.map((offer) => ({
      ...offer,
      isBookmarked: false,
    }));
    dispatch(fillOffers(updatedOffers));
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favoriteOffers.length === 0 ? (
              <p>Nothing yet saved</p>
            ) : (
              <OffersList offers={favoriteOffers} />
            )}
            <button onClick={handleClearFavorites}>Clear Favorites</button>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;

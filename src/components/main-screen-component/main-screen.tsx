import Map from '../map/map';
import { State } from '../../types/store';
import OffersList from '../offer-component/offers-list';
import CitiesList from '../cities-list';
import { cities } from '../../mocks/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { useState } from 'react';
import SortingOptions, { SortOption } from '../sorting-options';

function MainScreen(): JSX.Element {
  const selectedCity = useAppSelector((state: State) => state.app.city);
  const offers = useAppSelector((state: State) => state.app.offers).filter(
    (offer) => offer.city.name === selectedCity
  );
  const dispatch = useAppDispatch();

  const onCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  // const [, setSortedOffers] = useState<Offer[]>(offers);

  const [selectedSort, setNewSort] = useState<SortOption>('popular');
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  const handleSortChange = (option: SortOption) => {
    setNewSort(option);
  };

  const sortedOffers = [...offers];
  switch (selectedSort) {
    case 'priceLowToHigh':
      sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case 'priceHighToLow':
      sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case 'topRated':
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={cities.map((c) => c.name)}
              selectedCity={selectedCity}
              onCityClick={onCityChange}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {selectedCity}
              </b>
              <form className="places__sorting" action="#" method="get">
                <SortingOptions
                  selectedSort={selectedSort}
                  onSortChange={handleSortChange}
                />
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={sortedOffers}
                  onCardMouseEnter={setActiveOfferId}
                  onCardMouseLeave={() => setActiveOfferId(null)}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} activeOfferId={activeOfferId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;

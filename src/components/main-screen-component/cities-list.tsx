import React from 'react';

interface CitiesListProps {
  cities: string[];
  selectedCity: string;
  onCityClick: (city: string) => void;
}

const CitiesList: React.FC<CitiesListProps> = ({
  cities,
  selectedCity,
  onCityClick,
}) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <button
            type="button"
            className={`locations__item-link tabs__item ${
              city === selectedCity ? 'tabs__item--active' : ''
            }`}
            onClick={() => onCityClick(city)}
          >
            <span>{city}</span>
          </button>
        </li>
      ))}
    </ul>
  </section>
);

export default CitiesList;

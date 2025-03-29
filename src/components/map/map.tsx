import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { State } from '../../types/store';
import { cities } from '../../mocks/cities';
import { BaseOffer } from '../../types/offers';
import { useAppSelector } from '../../hooks';

interface MapProps {
  offers: BaseOffer[];
  activeOfferId: string | null;
}

const Map: React.FC<MapProps> = ({ offers, activeOfferId }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const selectedCity = useAppSelector((state: State) => state.app.city);
  const cityEntity = cities.find((c) => c.name === selectedCity);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = L.map(mapRef.current, {
      center: cityEntity
        ? [cityEntity.location.latitude, cityEntity.location.longitude]
        : [52.38333, 4.9],
      zoom: cityEntity ? cityEntity.location.zoom : 4,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
    });

    offers.forEach((offer) => {
      const iconUrl =
        offer.id === activeOfferId ? 'img/pin-active.svg' : 'img/pin.svg';

      const icon = L.icon({
        iconUrl,
        iconSize: [30, 30],
      });

      const { latitude, longitude } = offer.location;
      L.marker([latitude, longitude], { icon })
        .addTo(map)
        .bindPopup(offer.title);
    });

    return () => {
      map.remove();
    };
  }, [activeOfferId, cityEntity, offers]);

  return (
    <div
      className="map"
      ref={mapRef}
      style={{ height: '700px', width: '110%' }}
    >
    </div>
  );
};

export default Map;

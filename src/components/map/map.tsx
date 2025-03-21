import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Offer } from '../../mocks/offers';

interface MapProps {
  offers: Offer[];
}

const Map: React.FC<MapProps> = ({ offers }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    // Создаем карту, центрируем её на Амстердаме
    const map = L.map(mapRef.current, {
      center: [52.38333, 4.9],
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
    });

    // Добавляем маркеры для каждого предложения
    offers.forEach((offer) => {
      const { latitude, longitude } = offer.location;
      L.marker([latitude, longitude]).addTo(map).bindPopup(offer.title);
    });

    // Очистка карты при размонтировании
    return () => {
      map.remove();
    };
  }, [offers]);

  return (
    <div
      className="map"
      ref={mapRef}
      style={{ height: '500px', width: '100%' }}
    >
    </div>
  );
};

export default Map;

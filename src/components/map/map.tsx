import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface MapOffer {
  title: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface MapProps {
  offers: MapOffer[];
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
      style={{ height: '700px', width: '110%' }}
    >
    </div>
  );
};

export default Map;

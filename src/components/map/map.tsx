import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { State } from '../../types/store';
import { cities } from '../../mocks/cities';

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
  const selectedCity = useSelector((state: State) => state.app.city);
  const cutyEntity = cities.find((c) => c.name === selectedCity);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = L.map(mapRef.current, {
      center: cutyEntity ? [cutyEntity.location.latitude, cutyEntity.location.longitude] : [52.38333, 4.9],
      zoom: cutyEntity ? cutyEntity.location.zoom : 4,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
    });

    offers.forEach((offer) => {
      const { latitude, longitude } = offer.location;
      L.marker([latitude, longitude]).addTo(map).bindPopup(offer.title);
    });

    return () => {
      map.remove();
    };
  }, [cutyEntity, offers]);

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

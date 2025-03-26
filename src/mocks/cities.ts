export interface City {
  name: string;
  latitude: number;
  longitude: number;
}

export const cities: City[] = [
  {
    name: 'Paris',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    name: 'Cologne',
    latitude: 50.9375,
    longitude: 6.9603,
  },
  {
    name: 'Brussels',
    latitude: 50.8503,
    longitude: 4.3517,
  },
  {
    name: 'Amsterdam',
    latitude: 52.3676,
    longitude: 4.9041,
  },
  {
    name: 'Hamburg',
    latitude: 53.5511,
    longitude: 9.9937,
  },
  {
    name: 'Dusseldorf',
    latitude: 51.2277,
    longitude: 6.7735,
  },
];

export type LocationItem = {
  name: string;
  descriptions: string[];
  image: string;
};

export const locationItems: LocationItem[] = [
  {
    name: 'STATION DE MONTAGE',
    descriptions: ['MAC STUDIO M2 MAX', '2 MONITORS + TV MONITOR', 'RESOLVE + PREMIERE', 'FOCUSRITE SCARLETT 2I2'],
    image: 'https://ganache.studio/media/location/station_montage.jpg',
  },
  {
    name: 'ARRI ALEXA MINI',
    descriptions: ['KIT ALEXA MINI ÉQUIPÉE', 'VIEWFINDER, CARTES', 'BATTERIES, ETC.'],
    image: 'https://ganache.studio/media/location/arri_alexa_mini.jpg',
  },
  {
    name: 'SONY ALPHA 7SIII',
    descriptions: ['KIT A7SIII ÉQUIPÉE', 'ZOOM SONY 24-105', 'BATTERIES ET CARTES'],
    image: 'https://ganache.studio/media/location/sony_alpha.webp',
  },
];

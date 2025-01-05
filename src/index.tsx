import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import offers from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offersCount = 312;

root.render(
  <React.StrictMode>
    <App offersCount={offersCount} offers={offers}></App>
  </React.StrictMode>
);

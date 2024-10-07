import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offersCount = 312;

root.render(
  <React.StrictMode>
    <App offersCount={offersCount}></App>
  </React.StrictMode>
);

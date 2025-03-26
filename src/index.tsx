import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

import offers from './mocks/offers';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offersCount = 4;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersCount={offersCount} offers={offers} />
    </Provider>
  </React.StrictMode>
);

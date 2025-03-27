import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

import { Provider } from 'react-redux';
import store from './store';
import { setOffersDataLoadingStatus } from './store/action';

store.dispatch(setOffersDataLoadingStatus);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

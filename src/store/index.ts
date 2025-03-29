import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';
import appReducer from './reducer';

const api = createAPI();

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;

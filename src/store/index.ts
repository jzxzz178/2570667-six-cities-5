import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';
import { createAPI } from '../api';

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

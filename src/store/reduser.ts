import { createReducer } from '@reduxjs/toolkit';
import offers, { Offer } from '../mocks/offers';
import { changeCity, fillOffers } from './action';

interface AppState {
  city: string;
  offers: Offer[];
}

const initialState: AppState = {
  city: 'Paris',
  offers: offers,
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default appReducer;

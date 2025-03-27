import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { changeCity, fillOffers, setOffersDataLoadingStatus } from './action';

interface AppState {
  city: string;
  offers: Offer[];
  isOffersDataLoading: boolean;
}

const initialState: AppState = {
  city: 'Paris',
  offers: [],
  isOffersDataLoading: false,
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export default appReducer;

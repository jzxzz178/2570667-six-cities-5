import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { changeCity, fillOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

interface AppState {
  city: string;
  offers: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData?: UserData;
}

const initialState: AppState = {
  city: 'Paris',
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default appReducer;

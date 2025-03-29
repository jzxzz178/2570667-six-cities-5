import { createReducer } from '@reduxjs/toolkit';
import { DetailedOffer, OfferPreview } from '../types/offers';
import {
  addUserComment,
  changeCity,
  fillNearbyOffers,
  fillOffers,
  fillReviewData,
  logoutUser,
  requireAuthorization,
  setOffersDataLoadingStatus,
  updateSelectedOffer,
  updateUserData,
} from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { dropToken } from '../services/token';
import { ReviewData } from '../types/review';

interface AppState {
  city: string;
  offers: OfferPreview[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData?: UserData;
  selectedOffer?: DetailedOffer;
  nearbyOffers?: OfferPreview[];
  reviews?: ReviewData[];
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
    })
    .addCase(updateUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(logoutUser, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userData = undefined;
      dropToken();
    })
    .addCase(updateSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(fillNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fillReviewData, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addUserComment, (state, action) => {
      if (state.reviews) {
        state.reviews.push(action.payload);
      } else {
        state.reviews = [action.payload];
      }
    });
});

export default appReducer;

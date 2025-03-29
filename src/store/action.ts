import { createAction } from '@reduxjs/toolkit';
import { DetailedOffer, OfferPreview } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review';

export const changeCity = createAction<string>('app/changeCity');

export const fillOffers = createAction<OfferPreview[]>('app/fillOffers');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'app/requireAuthorization'
);

export const updateUserData = createAction<UserData>('app/updateUserData');

export const logoutUser = createAction<void>('app/logoutUser');

export const updateSelectedOffer = createAction<DetailedOffer>(
  'app/updateSelectedOffer'
);

export const fillNearbyOffers = createAction<OfferPreview[]>(
  'app/fillNearbyOffers'
);

export const fillReviewData = createAction<ReviewData[]>('app/fillReviewData');

export const addUserComment = createAction<ReviewData>('app/addUserComment');

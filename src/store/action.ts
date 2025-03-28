import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<string>('app/changeCity');

export const fillOffers = createAction<Offer[]>('app/fillOffers');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'app/requireAuthorization'
);

export const updateUserData = createAction<UserData>('app/updateUserData');

export const logoutUser = createAction<void>('app/logoutUser');

export const updateSelectedOffer = createAction<Offer>(
  'app/updateSelectedOffer'
);

export const fillNearbyOffers = createAction<Offer[]>('app/fillNearbyOffers');

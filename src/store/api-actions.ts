import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/store';
import { APIRoute, AuthorizationStatus } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fillOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
} from './action';
import { Offer } from '../types/offers';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffers', async (_, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const response = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(fillOffers(response.data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/checkAuth', async (_, { dispatch, extra: api }) => {
  try {
    const response = await api.get<AuthorizationStatus>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

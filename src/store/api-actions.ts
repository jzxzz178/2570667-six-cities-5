import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/store';
import { APIRoute, AuthorizationStatus } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fillNearbyOffers,
  fillOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  updateSelectedOffer,
  updateUserData,
} from './action';
import { DetailedOffer, OfferPreview } from '../types/offers';
import { AuthData } from '../types/auth-data';
import { saveToken } from '../services/token';
import { UserData } from '../types/user-data';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffers', async (_, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const response = await api.get<OfferPreview[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(fillOffers(response.data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/checkAuth', async (_, { dispatch, extra: api }) => {
  try {
    const response = await api.get<UserData>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    saveToken(response.data.token);
    dispatch(updateUserData(response.data));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const response = await api.post<UserData>(APIRoute.Login, {
        email,
        password,
      });
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      saveToken(response.data.token);
      dispatch(updateUserData(response.data));
    } catch (e) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const getOffer = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('app/getOffer', async (id, { dispatch, extra: api }) => {
  try {
    const response = await api.get<DetailedOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(setOffersDataLoadingStatus(true));
    dispatch(updateSelectedOffer(response.data));
    dispatch(setOffersDataLoadingStatus(false));
  } catch (e) {
    Promise.reject(e);
  }
});

export const fetchNearbyOffers = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffers', async (id, { dispatch, extra: api }) => {
  // dispatch(setOffersDataLoadingStatus(true));
  const response = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${id}/nearby`);
  // dispatch(setOffersDataLoadingStatus(false));
  dispatch(fillNearbyOffers(response.data));
});

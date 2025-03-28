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
import { AuthData, UserData } from '../types/auth-data';
import { saveToken } from '../services/token';

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
    await api.get<AuthorizationStatus>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
      saveToken(response.data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (e) {
      // console.log(e);
    }
  }
);

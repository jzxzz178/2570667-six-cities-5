import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/store';
import { APIRoute } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fillOffers, setOffersDataLoadingStatus } from './action';
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

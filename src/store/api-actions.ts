import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './store';
import { APIRoute, AuthorizationStatus } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addUserComment,
  fillNearbyOffers,
  fillOffers,
  fillReviewData,
  requireAuthorization,
  setOffersDataLoadingStatus,
  updateSelectedOffer,
  updateUserData,
} from './action';
import { DetailedOffer, OfferPreview } from '../types/offers';
import { AuthData } from '../types/auth-data';
import { saveToken } from '../services/token';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review';
import { CommentData } from '../types/user-comment';

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
>('app/getOffer', async (offerId, { dispatch, extra: api }) => {
  try {
    const response = await api.get<DetailedOffer>(
      `${APIRoute.Offers}/${offerId}`
    );
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
>('data/fetchOffers', async (offerId, { dispatch, extra: api }) => {
  // dispatch(setOffersDataLoadingStatus(true));
  const response = await api.get<OfferPreview[]>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  // dispatch(setOffersDataLoadingStatus(false));
  dispatch(fillNearbyOffers(response.data));
});

export const fetchReviews = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchReviews', async (offerId, { dispatch, extra: api }) => {
  const response = await api.get<ReviewData[]>(
    `${APIRoute.Comments}/${offerId}`
  );
  // const transformedReviews = response.data.map((review) => ({
  //   ...review,
  //   date: new Date(review.date),
  // }));
  dispatch(fillReviewData(response.data));
});

export const publishReview = createAsyncThunk<
  void,
  CommentData,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/publishComment', async (commentData, { dispatch, extra: api }) => {
  const response = await api.post<ReviewData>(
    `${APIRoute.Comments}/${commentData.offerId}`,
    { comment: commentData.comment, rating: commentData.rating }
  );
  dispatch(addUserComment(response.data));
});

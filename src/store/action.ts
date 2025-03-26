import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../mocks/offers';

// Действие для изменения выбранного города
export const changeCity = createAction<string>('app/changeCity');

// Действие для заполнения списка предложений по аренде
export const fillOffers = createAction<Offer[]>('app/fillOffers');

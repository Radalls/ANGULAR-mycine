import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreState } from './film.reducer';

export const selectFilms = createSelector(
  createFeatureSelector('films'),
  (state: StoreState) => state.films
)

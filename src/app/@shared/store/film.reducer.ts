import { createReducer, on } from "@ngrx/store"
import { Film } from "@shared/models/Film"
import { getFilmsSuccess, addFilmSuccess } from './film.actions';

export interface StoreState {
  films: Film[]
}

const initialState: StoreState = {
  films: []
}

export const filmReducer = createReducer(
  initialState,
  on(getFilmsSuccess, (state, { films }) => ({
    ...state, films: films
  })),
  on(addFilmSuccess, (state, { film }) => ({
    ...state, films: [ ...state.films, film ]
  }))
)

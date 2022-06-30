import { createReducer, on } from "@ngrx/store"
import { Film } from "@shared/models/Film"
import { getFilmsSuccess, addFilmSuccess, editFilmSuccess, removeFilmSuccess } from './film.actions';

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
    ...state, films: [...state.films, film]
  })),

  on(editFilmSuccess, (state, { film }) => {
    const films = [ ...state.films ]
    for (let i = 0; i < films.length; i++) {
      if (films[i].id === film.id) { films[i] = film }
    }
    return { films };
  }),

  on(removeFilmSuccess, (state, { filmId }) => ({
    ...state, films: state.films.filter(f => f.id !== filmId)
  }))
)

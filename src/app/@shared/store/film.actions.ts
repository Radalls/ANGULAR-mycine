import { createAction, props } from "@ngrx/store";
import { Film } from '@shared/models/Film';

export const getFilms = createAction('[Films] getAll')
export const getFilmsSuccess = createAction('[Films] getAllSuccess', props<{ films: Film[] }>())
export const addFilm = createAction('[Films] add', props<{ film: Film }>())
export const addFilmSuccess = createAction('[Films] addSuccess', props<{ film: Film }>())
export const editFilm = createAction('[Films] edit', props<{ film: Film }>())
export const editFilmSuccess = createAction('[Films] editSuccess', props<{ film: Film }>())
export const removeFilm = createAction('[Films] remove', props<{ filmId: number }>())
export const removeFilmSuccess = createAction('[Films] removeSuccess', props<{ filmId: number }>())

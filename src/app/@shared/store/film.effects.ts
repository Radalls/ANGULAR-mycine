import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FilmService } from '@shared/services/film.service';
import { map, mergeMap, switchMap, tap } from "rxjs";
import { addFilm, addFilmSuccess, getFilms, getFilmsSuccess } from "./film.actions";
import { Router } from '@angular/router';

@Injectable()
export class FilmEffects {

  constructor(private action: Actions, private filmService: FilmService, private router: Router) {}

  getFilms = createEffect(() =>
    this.action.pipe(
      ofType(getFilms),
      switchMap(() => this.filmService.getAllFilms().pipe(map(films => getFilmsSuccess({ films }))))
    )
  )

  addFilm = createEffect(() =>
    this.action.pipe(
      ofType(addFilm),
      map(action => action.film),
      mergeMap(film => this.filmService.createFilm(film).pipe(map(film => addFilmSuccess({ film }))))
    )
  )

  addFilmSuccess = createEffect(() =>
    this.action.pipe(
      ofType(addFilmSuccess),
      tap(() => { this.router.navigate(['/']) })
    ),
    { dispatch: false }
  )
}

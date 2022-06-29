import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FilmService } from '@shared/services/film.service';
import { map, switchMap } from "rxjs";
import { getFilms, getFilmsSuccess } from "./film.actions";

@Injectable()
export class FilmEffects {

  constructor(private action: Actions, private filmService: FilmService) {}

  getFilms = createEffect(() =>
    this.action.pipe(
      ofType(getFilms),
      switchMap(() => this.filmService.getAllFilms().pipe(map(films => getFilmsSuccess({ films }))))
    )
  )
}

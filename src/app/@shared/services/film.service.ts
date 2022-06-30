import { Injectable } from '@angular/core';
import { Film } from '../models/Film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmsUrl = 'http://localhost:3000/films'

  constructor(private _httpClient: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this._httpClient.get<Film[]>(this.filmsUrl)
  }

  getFilm(id: number): Observable<Film> {
    return this._httpClient.get<Film>(this.filmsUrl + '/' + id)
  }

  createFilm(film: Film): Observable<Film> {
    return this._httpClient.post<Film>(this.filmsUrl, film)
  }

  updateFilm(film: Film): Observable<Film> {
    return this._httpClient.put<Film>(this.filmsUrl + '/' + film.id, film)
  }

  deleteFilm(id: number): Observable<Film> {
    return this._httpClient.delete<Film>(this.filmsUrl + '/' + id)
  }

}

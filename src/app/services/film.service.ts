import { Injectable } from '@angular/core';
import { Film } from '../models/Film';
import { FILMS } from './mock-films';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  static nextId: number = 4 // mock starter value
  films: Film[] = []

  filmsUrl = 'http://localhost:3000/films'

  constructor(private _httpClient: HttpClient) { }

  setId(film: Film) {
    film.id = FilmService.nextId
    FilmService.nextId++
  }

  getAllFilms(): Observable<Film[]> {
    //return this.films
    return this._httpClient.get<Film[]>(this.filmsUrl)
  }

  getFilm(id: number): Observable<Film> {
    //return this.films.find(f => f.id === id)
    return this._httpClient.get<Film>(this.filmsUrl + '/' + id)
  }

  createFilm(film: Film): Observable<Film> {
    //this.setId(film)
    //this.films.push(film)
    return this._httpClient.post<Film>(this.filmsUrl, film)
  }

  updateFilm(film: Film): Observable<Film> {
    /*for (const [index, f] of this.films.entries()) {
      if (f.id === film.id) {
        this.films[index] = film
      }
    }*/
    return this._httpClient.put<Film>(this.filmsUrl + '/' + film.id, film)
  }

  deleteFilm(id: number): Observable<Film> {
    /*for (const [index, f] of this.films.entries()) {
      if (f.id === film.id) {
        this.films.splice(index, 1)
      }
    }*/
    return this._httpClient.delete<Film>(this.filmsUrl + '/' + id)
  }

}

import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Film } from '../models/Film';
import { FILMS } from './mock-films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  static nextId: number = 4 // mock starter value
  films: Film[] = FILMS

  constructor() { }

  getAllFilms() {
    return this.films
  }

  getFilm(id: number) {
    return this.films.find(f => f.id === id)
  }

  setId(film: Film) {
    film.id = FilmService.nextId
    FilmService.nextId++
  }

  createFilm(film: Film) {
    this.setId(film)
    this.films.push(film)
  }

  updateFilm(film: Film) {
    for (const [index, f] of this.films.entries()) {
      if (f.id === film.id) {
        this.films[index] = film
      }
    }
  }

  deleteFilm(film: Film) {
    for (const [index, f] of this.films.entries()) {
      if (f.id === film.id) {
        this.films.splice(index, 1)
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Film } from '../models/Film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  films: Film[] = []

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((filmList) => {
      this.films = filmList
    })
  }

}

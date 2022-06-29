import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Film } from '@shared/models/Film';
import { selectFilms } from './../@shared/store/film.selectors';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  films: Film[] = []

  constructor(private store: Store<{films: Film[]}>) { }

  ngOnInit(): void {
    this.store.select(selectFilms).subscribe((filmList) => {
      this.films = filmList
    })
  }

}

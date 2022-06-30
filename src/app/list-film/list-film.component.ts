import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Film } from '@shared/models/Film';
import { selectFilms } from './../@shared/store/film.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  films: Observable<Film[]> = new Observable()

  constructor(private store: Store<{films: Film[]}>) { }

  ngOnInit(): void {
    this.films = this.store.select(selectFilms)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '@shared/models/Film';
import { FilmService } from '@shared/services/film.service';
import { Store } from '@ngrx/store';
import { removeFilm } from './../@shared/store/film.actions';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.scss']
})
export class DetailsFilmComponent implements OnInit {

  film?: Film

  constructor(
    private store: Store,
    private filmService: FilmService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) this.filmService.getFilm(Number.parseInt(id)).subscribe((film) => {
      this.film = film
    })
  }

  delete() {
    if (this.film) {
      this.store.dispatch(removeFilm({ filmId: this.film.id }))
    }
  }

  formatDate(date: string): string {
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    const year = date.split('-')[0]
    const month = months[Number.parseInt(date.split('-')[1])]
    const day = date.split('-')[2]
    return `${day} ${month} ${year}`
  }

}

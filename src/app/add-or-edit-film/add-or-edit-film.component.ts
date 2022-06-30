import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Film } from '@shared/models/Film';
import { FilmService } from '@shared/services/film.service';
import { addFilm, editFilm } from './../@shared/store/film.actions';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.scss']
})
export class AddOrEditFilmComponent implements OnInit {

  film?: Film

  filmForm = new FormGroup ({
    id: new FormControl(),
    title: new FormControl('', [
      Validators.required
    ]),
    synopsis: new FormControl(),
    rating: new FormControl(),
    release: new FormControl()
  })

  constructor(
    private store: Store<{films: Film[]}>,
    private filmService: FilmService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save() {
    if (this.film?.id) {
      this.store.dispatch(editFilm({ film: this.filmForm.value as Film }))
    }
    else {
      this.store.dispatch(addFilm({ film: this.filmForm.value as Film }))
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.filmService.getFilm(Number.parseInt(id)).subscribe((film) => {
        this.film = film

        if (this.film) {
          this.filmForm.setValue({
            id: this.film.id,
            title: this.film.title,
            synopsis: this.film.synopsis,
            rating: this.film.rating,
            release: this.film.release
          })
        }
      })
    }
  }

}

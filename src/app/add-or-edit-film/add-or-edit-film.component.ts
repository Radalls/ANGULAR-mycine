import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/Film';
import { FilmService } from '../services/film.service';

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
    rating: new FormControl()
  })

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  save() {
    if (this.film?.id) {
      this.filmService.updateFilm(this.filmForm.value as Film)
    }
    else {
      this.filmService.createFilm(this.filmForm.value as Film)
    }

    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.film = this.filmService.getFilm(Number.parseInt(id))

      if (this.film) {
        this.filmForm.setValue({
          id: this.film.id,
          title: this.film.title,
          synopsis: this.film.synopsis,
          rating: this.film.rating
        })
      }
    }
  }
}

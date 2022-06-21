import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/Film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.scss']
})
export class DetailsFilmComponent implements OnInit {

  film?: Film

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) this.film = this.filmService.getFilm(Number.parseInt(id))
  }

  delete() {
    if (this.film) {
      this.filmService.deleteFilm(this.film)
      this.router.navigate(['/'])
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-film',
  templateUrl: './rating-film.component.html',
  styleUrls: ['./rating-film.component.scss']
})
export class RatingFilmComponent implements OnInit {

  @Input() rating: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}

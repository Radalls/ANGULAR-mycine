import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { CardFilmComponent } from './card-film/card-film.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingFilmComponent } from './rating-film/rating-film.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { filmReducer } from '@shared/store/film.reducer';
import { FilmEffects } from './@shared/store/film.effects';


@NgModule({
  declarations: [
    AppComponent,
    AddOrEditFilmComponent,
    ListFilmComponent,
    DetailsFilmComponent,
    CardFilmComponent,
    RatingFilmComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({films: filmReducer}),
    EffectsModule.forRoot([FilmEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

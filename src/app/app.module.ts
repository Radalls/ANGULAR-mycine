import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { CardFilmComponent } from './card-film/card-film.component';

@NgModule({
  declarations: [
    AppComponent,
    AddOrEditFilmComponent,
    ListFilmComponent,
    DetailsFilmComponent,
    CardFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { ListFilmComponent } from './list-film/list-film.component';

const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: ListFilmComponent },
  { path: 'films/add', component: AddOrEditFilmComponent },
  { path: 'films/edit/:id', component: AddOrEditFilmComponent },
  { path: 'films/:id', component: DetailsFilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FavoritesComponent } from './favorites/favorites.component'
import { RemoveFavoritesComponent } from './remove-favorites/remove-favorites.component'

import { ViewBooksComponent } from './view-books/view-books.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: ViewBooksComponent },
   { path: 'home/:id/detail', component: FavoritesComponent },
   
  { path: 'home/favorites', component: RemoveFavoritesComponent },
 
  // { path: '**', component: NoPageFoundComponent }
 ];
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

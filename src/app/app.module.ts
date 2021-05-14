import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { FavoritesComponent } from './favorites/favorites.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { RemoveFavoritesComponent } from './remove-favorites/remove-favorites.component';
import { AddfavoritesComponent } from './addfavorites/addfavorites.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    ViewBooksComponent,
    RemoveFavoritesComponent,
    AddfavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

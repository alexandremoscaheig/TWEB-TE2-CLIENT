import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MovieService} from './services/movie.service';
import {HttpClientModule} from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import {RouterModule} from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import {AppRoutingModule} from './app-routing.module';
import { MovieUpcomingComponent } from './components/movie-upcoming/movie-upcoming.component';
import { MovieSuggestionComponent } from './components/movie-suggestion/movie-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieComponent,
    PublicComponent,
    MovieUpcomingComponent,
    MovieSuggestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

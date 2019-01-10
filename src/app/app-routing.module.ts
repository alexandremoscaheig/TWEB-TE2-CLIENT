
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {PublicComponent} from './components/public/public.component';
import {MovieUpcomingComponent} from './components/movie-upcoming/movie-upcoming.component';
import {MovieSuggestionComponent} from './components/movie-suggestion/movie-suggestion.component';


const PUBLIC_ROUTES = [
  { path: 'movies', component: MovieListComponent },
  { path: 'upcoming', component: MovieUpcomingComponent },
  { path: 'suggestions', component: MovieSuggestionComponent }
];


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {PreferenceService} from '../../services/preference.service';
import {Movie} from '../../../model/movie';

@Component({
  selector: 'app-movie-suggestion',
  templateUrl: './movie-suggestion.component.html',
  styleUrls: ['./movie-suggestion.component.css']
})
export class MovieSuggestionComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private preferenceService: PreferenceService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getUpcomingMovies(1).subscribe(result => {
      const selectedGenres = this.preferenceService.getSelectedGenres();
      // Filter based on same genre
      this.movies = result.results.filter(movie => this.hasMovieGenre(movie, selectedGenres));
    });
  }

  hasMovieGenre(movie: Movie, selectedGenres: number[]): boolean {
    for (let i = 0; i < movie.genre_ids.length; i++) {
      if (selectedGenres.indexOf(movie.genre_ids[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

}

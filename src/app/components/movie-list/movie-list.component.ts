import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../model/movie';
import {MovieService} from '../../services/movie.service';
import {logging} from 'selenium-webdriver';
import {PreferenceService} from '../../services/preference.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  currentPage: number;
  isLoading: boolean;
  end: boolean;

  constructor(
    private movieService: MovieService,
    private preferenceService: PreferenceService
  ) { }

  ngOnInit() {
    this.currentPage = 0;
    this.getMovies();
  }

  getMovies() {
    this.isLoading = true;
    this.movieService.getMovies(this.currentPage + 1).subscribe(result => {
      for (let i = 0; i < result.results.length; i++) {
        if (this.preferenceService.isSelected(result.results[i])) {
          result.results[i].selected = true;
        }
      }
      this.movies = this.movies.concat(result.results);
      this.currentPage++;
      this.end = this.currentPage >= result.total_pages;
      this.isLoading = false;
    });
  }

  movieSelected(movie: Movie) {
    this.preferenceService.movieSelected(movie);
  }

  movieUnselected(movie: Movie) {
    this.preferenceService.movieUnselected(movie);
  }
}

import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../model/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.css']
})
export class MovieUpcomingComponent implements OnInit {

  upcomingMovies: Movie[] = [];
  currentPage: number;
  isLoading: boolean;
  end: boolean;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.currentPage = 0;
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.isLoading = true;
    this.movieService.getUpcomingMovies(this.currentPage + 1).subscribe(result => {
      this.upcomingMovies = this.upcomingMovies.concat(result.results);
      this.currentPage++;
      this.end = this.currentPage >= result.total_pages;
      this.isLoading = false;
    });
  }

}

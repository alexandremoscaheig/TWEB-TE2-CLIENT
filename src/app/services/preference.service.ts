import { Injectable } from '@angular/core';
import {Movie} from '../../model/movie';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  selectedMovies: Movie[] = [];

  constructor() { }

  movieSelected(movie: Movie) {
    this.selectedMovies.push(movie);
  }

  movieUnselected(movie: Movie) {
    this.selectedMovies.splice(this.getIndexById(movie.id), 1);
  }

  getIndexById(movieId: number): number {
    for (let i = 0; i < this.selectedMovies.length; i++) {
      if (movieId === this.selectedMovies[i].id) {
        return i;
      }
    }
    return -1;
  }

  isSelected(movie: Movie): boolean {
    return this.getIndexById(movie.id) !== -1;
  }

  getSelectedGenres(): number[] {
    const result = [];
    for (let i = 0; i < this.selectedMovies.length; i++) {
      for (let j = 0; j < this.selectedMovies[i].genre_ids.length; j++) {
        if (result.indexOf(this.selectedMovies[i].genre_ids[j] === -1)) {
          result.push(this.selectedMovies[i].genre_ids[j]);
        }
      }
    }
    return result;
  }
}

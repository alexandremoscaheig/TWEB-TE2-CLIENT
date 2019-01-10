import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Config from '../../config/config';
import {Observable} from 'rxjs';
import {MovieResult} from '../../model/movie-result';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  BASE_URL = Config.BASE_URL;
  API_KEY = Config.API_KEY;

  constructor(private http: HttpClient) {
  }


  getMovies(page: number): Observable<MovieResult> {
    return this.http.get<MovieResult>(this.BASE_URL + '/popular?page=' + page + '&api_key=' + this.API_KEY);
  }

  getUpcomingMovies(page: number): Observable<MovieResult> {
    return this.http.get<MovieResult>(this.BASE_URL + '/upcoming?page=' + page + '&api_key=' + this.API_KEY);
  }




}

import {Movie} from './movie';


export class MovieResult {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

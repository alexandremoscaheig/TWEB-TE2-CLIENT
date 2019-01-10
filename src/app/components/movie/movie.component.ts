import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../../model/movie';
import Config from '../../../config/config';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Input() selectable = false;
  @Output() isSelected = new EventEmitter();
  @Output() isUnSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  imageUrl(): string {
    return Config.BASE_URL_IMAGES + this.movie.poster_path;
  }

  toggleSelect() {
    if (this.selectable) {
      if (this.movie.selected) {
        this.movie.selected = false;
        this.isUnSelected.emit(this.movie);
      } else {
        this.movie.selected = true;
        this.isSelected.emit(this.movie);
      }
    }
  }

}

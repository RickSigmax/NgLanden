import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class FavoriteService {
  
  favorites: Subject<string>;
  
  constructor() { 
    this.favorites = new Subject<string>();
  }

}

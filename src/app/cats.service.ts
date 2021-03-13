import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICat } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  favoriteCats: ICat[] = [];

  constructor(private http: HttpClient) {}

  getFavoriteCats() {
    return this.favoriteCats;
  }

  addToFavorites(cat: ICat) {
    this.favoriteCats.push(cat);
  }

  getRandomCat() {
    return this.http.get<ICat[]>('https://api.thecatapi.com/v1/images/search');
  }
}

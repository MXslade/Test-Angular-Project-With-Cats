import { Component, OnInit } from '@angular/core';
import { ICat } from 'src/utils/interfaces';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-random-cat-view',
  templateUrl: './random-cat-view.component.html',
  styleUrls: ['./random-cat-view.component.css'],
})
export class RandomCatViewComponent implements OnInit {
  cat: ICat | null = null;

  constructor(private catsService: CatsService) {}

  getNewCat() {
    this.catsService
      .getRandomCat()
      .toPromise()
      .then((response) => {
        this.cat = response[0];
      });
  }

  addToFavorite() {
    if (this.cat) {
      this.catsService.addToFavorites(this.cat);
      console.log('cat added to favorites');
    }
  }

  ngOnInit(): void {
    this.getNewCat();
  }
}

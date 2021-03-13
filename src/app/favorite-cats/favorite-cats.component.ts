import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-favorite-cats',
  templateUrl: './favorite-cats.component.html',
  styleUrls: ['./favorite-cats.component.css'],
})
export class FavoriteCatsComponent implements OnInit {
  cats = this.catsService.getFavoriteCats();

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {}
}

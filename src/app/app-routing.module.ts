import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteCatsComponent } from './favorite-cats/favorite-cats.component';
import { RandomCatViewComponent } from './random-cat-view/random-cat-view.component';

const routes: Routes = [
  { path: '', component: RandomCatViewComponent },
  { path: 'favorite-cats', component: FavoriteCatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

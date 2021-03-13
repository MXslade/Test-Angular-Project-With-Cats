import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RandomCatViewComponent } from './random-cat-view/random-cat-view.component';
import { FavoriteCatsComponent } from './favorite-cats/favorite-cats.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RandomCatViewComponent, FavoriteCatsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

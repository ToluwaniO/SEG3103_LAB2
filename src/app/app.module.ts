import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { BookCardItemComponent } from './book-card-item/book-card-item.component';
import { BookCardsComponent } from './book-cards/book-cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    CategoryItemsComponent,
    BookCardItemComponent,
    BookCardsComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

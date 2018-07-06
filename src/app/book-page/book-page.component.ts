import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../Book';
import {ActivatedRoute} from '@angular/router';
import {CATEGORY_BOOKS} from '../mock-data';
import { Location } from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  @Input() book: Book;
  private TAG: string = BookPageComponent.name;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const genre: string = this.route.snapshot.paramMap.get('genre');
    const id: number = +this.route.snapshot.paramMap.get('id');
    const book = CATEGORY_BOOKS[genre][id];
    console.log(`${this.TAG} -> ${book}`);
    this.book = book;
  }
  addToCart(book: Book) {
  }

}

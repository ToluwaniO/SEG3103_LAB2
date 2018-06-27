import {Component, Input, OnInit} from '@angular/core';
import { CATEGORY_BOOKS } from '../mock-data';
import {Book} from '../Book';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  @Input() category: string;
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = CATEGORY_BOOKS[this.category];
  }
  url(book: Book): string {
    return `url(${book.imageurl})`;
  }

}

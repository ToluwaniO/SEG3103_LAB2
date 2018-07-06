import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../Book';
import {description} from '../mock-data';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit, OnChanges {
  @Input() category: string;
  description: string;
  books: Book[];

  constructor(private bookService: BooksService) {this.description = description; }

  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this.books = this.bookService.getBookByCategory(this.category);
  }

  url(book: Book): string {
    return `url(assets/${book.imageLink})`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getBooks();
  }

}

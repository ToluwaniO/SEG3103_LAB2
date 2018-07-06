import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../Book';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {BooksService} from '../books.service';
import {description} from '../mock-data';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  @Input() book: Book;
  description: string;
  private TAG: string = BookPageComponent.name;

  constructor(private bookService: BooksService, private route: ActivatedRoute, private location: Location) {
    this.description = description;
  }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const genre: string = this.route.snapshot.paramMap.get('genre');
    const name: string = this.route.snapshot.paramMap.get('name');
    this.bookService.getBookByCategory(genre).forEach(b => {
      if (b.title === name) {
        this.book = b;
      }
    });
    console.log(`${this.TAG} -> ${this.book}`);
  }
  addToCart(book: Book) {
    this.bookService.addToCart(this.book);
  }

}

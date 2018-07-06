import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Book} from './Book';
import {CATEGORIES, getBooks} from './mock-data';
import {Books} from './Books';
import {CartItem} from './CartItem';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _cart: Array<CartItem> = [];
  private books: Books = getBooks();

  constructor() { }


  getPolitics() {
    return this.books.bookList.slice(0, 24);
  }

  getFiction() {
    return this.books.bookList.slice(25, 50);
  }

  getHistory() {
    return this.books.bookList.slice(50, 74);
  }

  getScience() {
    return this.books.bookList.slice(75, 99);
  }
  getBookByCategory(category: string) {
    if (category === 'Fiction') {
      return this.getFiction();
    } else if (category === 'History') {
      return this.getHistory();
    } else if (category === 'Biographies & Memoirs') {
      return this.getHistory();
    } else {
      return this.getPolitics();
    }
  }

  getCart() {
    return of(this._cart);
  }

  addToCart(book: Book) {
    console.log('Add to cart');
    let found = false;
    this._cart.forEach(c => {
      if (c.book.title === book.title) {
        c.quantity += 1;
        found = true;
      }
    });
    if (!found) {
      this._cart.push(new CartItem(book, 1));
    }
  }

  get cart(): Array<CartItem> {
    return this._cart;
  }

  set cart(value: Array<CartItem>) {
    this._cart = value;
  }
}

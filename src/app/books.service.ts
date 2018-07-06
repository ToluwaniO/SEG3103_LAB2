import { Injectable } from '@angular/core';
import { BooksComponent} from './books/books.component';
import {Book} from "./Book";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private books:BooksComponent) { }

  cart: Book[];


  getPolitics(){
    return this.books.books.bookList.slice(0,24);
  }

  getFriction(){
    return this.books.books.bookList.slice(25,50);
  }

  getHistory(){
    return this.books.books.bookList.slice(50,74);
  }

  getScience(){
    return this.books.books.bookList.slice(75,99);
  }

  getCart(){
    return this.cart;
  }

  addToCart(){
    this.cart.push(this.books.books.bookList[0]);
  }
}

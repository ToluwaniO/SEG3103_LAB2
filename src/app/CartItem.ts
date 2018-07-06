import {Book} from './Book';

export class CartItem {
  private _book: Book;
  private _quantity: number;


  constructor(book: Book, quantity: number) {
    this._book = book;
    this._quantity = quantity;
  }


  get book(): Book {
    return this._book;
  }

  set book(value: Book) {
    this._book = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}

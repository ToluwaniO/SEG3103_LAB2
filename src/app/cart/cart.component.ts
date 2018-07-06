import { Component, OnInit } from '@angular/core';
import {Book} from '../Book';
import {CartItem} from '../CartItem';
import {BooksService} from '../books.service';
import {description} from '../mock-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  description: string;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.description = description;
    this.getCart();
  }

  getCart() {
    this.bookService.getCart()
      .subscribe(c => {
        console.log('cart updated');
        this.cartItems = c;
      });
  }

  url(cart: CartItem): string {
    return `url(assets/${cart.book.imageLink})`;
  }

}

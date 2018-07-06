import {Component, Directive, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BooksService} from './books.service';
import {CartItem} from './CartItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  selectedCategory: string;
  cartItems: Array<CartItem>;
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.getCart();
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  getCart() {
    this.bookService.getCart()
      .subscribe(c => {
        console.log('cart updated');
        this.cartItems = c;
      });
  }
  getCartSize() {
    return this.cartItems.length;
  }
}

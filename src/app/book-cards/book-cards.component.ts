import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../Book';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {
  @Input() books: Book[];
  TAG = 'book-cards';

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log(`${this.TAG} -> ${this.books.length}`);
   this.books.forEach(book => {
     document.getElementById('grid').innerHTML = '<app-book-card-item [book]="book"></app-book-card-item>';
   });
  }

}

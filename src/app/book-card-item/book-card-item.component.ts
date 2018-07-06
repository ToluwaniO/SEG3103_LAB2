import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../Book';

@Component({
  selector: 'app-book-card-item',
  templateUrl: './book-card-item.component.html',
  styleUrls: ['./book-card-item.component.css']
})
export class BookCardItemComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}

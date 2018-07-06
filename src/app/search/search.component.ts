import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from '../mock-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categories: string[];

  constructor() { }

  ngOnInit() {
    this.categories = CATEGORIES;
  }
  isFirstRadio(i: number) {
    if (i === 1) {
      return true;
    }
    return false;
  }

}

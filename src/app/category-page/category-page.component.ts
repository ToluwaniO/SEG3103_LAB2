import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-data';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  TAG = 'category-page';
  categories = CATEGORIES;
  selectedCategory: string;

  constructor() { }

  ngOnInit() {
    console.log(`${this.TAG} -> ${this.selectedCategory}`);
    this.categories = CATEGORIES;
    this.selectedCategory = this.categories[0];
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    console.log(`${this.TAG} -> onCategorySelected= ${this.selectedCategory}`);
  }

}

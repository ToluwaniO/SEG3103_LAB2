import { Component } from '@angular/core';
import { CATEGORIES } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categories = CATEGORIES;
  selectedCategory: string;
  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}

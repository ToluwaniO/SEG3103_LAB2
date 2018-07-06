import {Component, OnInit} from '@angular/core';
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"
import {Books} from "./Books";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // categories = CATEGORIES;
  selectedCategory: string;
  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}

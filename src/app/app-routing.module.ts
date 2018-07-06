import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookPageComponent} from './book-page/book-page.component';
import {CategoryPageComponent} from './category-page/category-page.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: 'bookPage/:genre/:id', component: BookPageComponent },
  { path: '', component: CategoryPageComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

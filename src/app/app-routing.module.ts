import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookPageComponent} from './book-page/book-page.component';
import {CategoryPageComponent} from './category-page/category-page.component';
import {SearchComponent} from './search/search.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: 'bookPage/:genre/:name', component: BookPageComponent },
  { path: '', component: CategoryPageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

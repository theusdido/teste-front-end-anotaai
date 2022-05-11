import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'category',
    pathMatch: 'full'
  },
  {
    path:'category',
    component:CategoryListComponent
  },
  {
    path:'category/:index',
    component:ProductListComponent
  },
  {
    path:'product/:id',
    component:ProductDetailComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

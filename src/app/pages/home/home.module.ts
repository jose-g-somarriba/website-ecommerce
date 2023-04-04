import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ProductsRecomendedComponent } from './components/products-recomended/products-recomended.component';


@NgModule({
  declarations: [HomeComponent, MenuCategoryComponent, ProductListComponent, PromotionsComponent, ProductsRecomendedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

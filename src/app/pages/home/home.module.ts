import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuCategoryComponent } from './pages/menu-category/menu-category.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ProductsRecomendedComponent } from './pages/products-recomended/products-recomended.component';


@NgModule({
  declarations: [HomeComponent, MenuCategoryComponent, ProductListComponent, PromotionsComponent, ProductsRecomendedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

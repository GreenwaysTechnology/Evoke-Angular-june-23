import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './products-details.component';
import { ProductsViewComponent } from './products-view.component';
import { ProductImageComponent } from './product-image.component'


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailsComponent,
    ProductsViewComponent,
    ProductImageComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [ProductsComponent, ProductsDetailsComponent, ProductsViewComponent, ProductImageComponent]
})
export class ProductsModule { }

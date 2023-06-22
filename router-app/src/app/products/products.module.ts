import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsDetailsComponent } from './products-details.component';
import { ProductsViewComponent } from './products-view.component';
import { ProductImageComponent } from './product-image.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailsComponent,
    ProductsViewComponent,
    ProductImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  exports: [ProductsComponent, ProductsDetailsComponent, ProductsViewComponent, ProductImageComponent]})
export class ProductsModule { }

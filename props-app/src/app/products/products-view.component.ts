import { Component, Input } from '@angular/core';
import { Product } from './product.type';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  @Input()
  product!: Product
}

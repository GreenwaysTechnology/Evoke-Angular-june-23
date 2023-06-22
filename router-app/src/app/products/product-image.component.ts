import { Component, Input } from '@angular/core';
import { Product } from './product.type';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input()
  productImage!: Product
}

import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [`
    h3 {
      color:red;
    }
  `]
})
export class ProductsComponent {
  today: Date = new Date()
  products!: Observable<Product[]>

  constructor(private productService: ProductsService) { }
  ngOnInit() {
    this.products = this.productService.findAll()
  }
}

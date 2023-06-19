import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent {
  // products!: Array<Product>
  today: Date = new Date()

  products!: Observable<Product[]>
  
  constructor(private productService: ProductsService) { }
  ngOnInit() {
    // this.productService.findAll().subscribe({
    //   next: products => {
    //     console.log(products)
    //     this.products = products
    //   }
    // })
    this.products = this.productService.findAll()
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  //! - it is ts feature to avoid variable initalization
  products: Array<any> =[]
  constructor(private productService: ProductsService) {

  }
  ngOnInit() {
    // this.products = this.productService.findAll()
    this.productService.findAll().subscribe({
      //data event
      next: product => {
        console.log(product)
        //this.products = products
        this.products.push(product)

      }
    })
  }
}

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
  status: string = 'Loading....'
  loading: boolean = true;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    //just simulted code to show loading status
    // todo: remove after testing
    setTimeout(() => {
      this.products = this.productService.findAll()
      this.loading = !this.loading
    },5000)
  }
}

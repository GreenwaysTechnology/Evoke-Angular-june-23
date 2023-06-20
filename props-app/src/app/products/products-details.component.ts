import { Component,Input } from '@angular/core';
import { Product } from './product.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  @Input()
  today: Date = new Date()
  @Input()
  products!: Observable<Product[]>

}

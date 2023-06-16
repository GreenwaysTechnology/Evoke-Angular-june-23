import { Component } from '@angular/core';
import { PRODUCTS } from './products.mock-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    //list of products
    products:Array<any> = PRODUCTS
}

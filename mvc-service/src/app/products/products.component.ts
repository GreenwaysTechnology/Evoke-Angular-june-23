import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //variable to hold products data
  // products: Array<any> | undefined
  // products: Array<any> = []; //empty array default value

  //skip compiler errors from "uninitalization"
  products!: Array<any>;
  selectedProduct!: any
  selectedIndex = -1;

  constructor(private productService: ProductService) {
    // this.products = this.productService.findAll()
  }
  showProduct(product: any,index:any) {
    this.selectedIndex = index
    this.selectedProduct = product
  }
  ngOnInit(): void {
    this.products = this.productService.findAll()
  }
}

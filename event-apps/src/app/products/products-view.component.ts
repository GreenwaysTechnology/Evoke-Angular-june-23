import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product.type';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  @Input()
  product!: Product
  isHidden: boolean = true
  comments: string = ''

  selectedProduct!: Product
  
  //Send data to the parent
  @Output()
  onSendRequest = new EventEmitter<string>();

  showProduct(tmpProduct: Product) {
    this.isHidden = !this.isHidden
    this.selectedProduct = tmpProduct
  }
  onSubmit() {
    this.onSendRequest.emit(this.comments)
  }
}

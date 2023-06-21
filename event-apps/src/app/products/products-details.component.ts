import { Component, Input, EventEmitter, Output } from '@angular/core';
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

  @Output()
  onSendRequest = new EventEmitter<string>();

  getComment(e: any) {
    this.onSendRequest.emit(e)
  }

}

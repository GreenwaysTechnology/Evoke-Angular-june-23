import { Injectable } from '@angular/core';
import { PRODUCTS } from './products.mock-data';
import { Observable, map, of, from, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  //async api
  // findAll(): Observable<any> {
  //   //return products
  //   // return PRODUCTS  //Observable
  //   return new Observable(subscriber => {
  //     //emit data 
  //     subscriber.next(PRODUCTS)
  //     subscriber.complete()
  //   })
  // }
  // findAll(): Observable<any[]> {
  //   //of is operator which returns stream of data
  //   return of(PRODUCTS)
  // }
  //stream processing
  findAll(): Observable<any[]> {
    //of is operator which returns stream of data
    return from(PRODUCTS).pipe(
      //data processing/streaming logic
      filter(item => {
        return item.category === 'jewelery'
      })
    )
  }
}

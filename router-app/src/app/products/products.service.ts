import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './product.type'
import { Observable, catchError, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    //talk to back end service
    const url = 'https://fakestoreapi.com/products'
    return this.http.get<Product[]>(url).pipe(
      catchError(this.handleError<Product[]>('fetchProducts', [{ id: 0, title: 'title', price: 0.0 }]))
    )
  }

  getComment(comment:string){
     console.log('product service comment',comment)
  }


  //private method
  //handle error Api
  private handleError<T>(operation = 'operation', result?: T) {
    //return function
    return (error: any): Observable<T> => {
      console.log(error)
      return of(result as T)
    }
  }
}

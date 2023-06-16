import { Injectable } from "@angular/core";
import { PRODUCTS } from "./products.mock-data";

@Injectable({ providedIn: 'root' })
export class ProductService {

    //apis 
    public findAll(): Array<any> {
        return PRODUCTS
    }
}
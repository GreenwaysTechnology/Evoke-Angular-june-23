import { Injectable } from "@angular/core";
import { CUSTOMERS } from "./mock-customers";
import { Customer } from "./customer.type";


@Injectable({ providedIn: 'root' })
export class CustomerService {

    findAll(): Array<Customer> {
        return CUSTOMERS
    }
    findById(){
        
    }
}
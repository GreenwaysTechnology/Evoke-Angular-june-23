import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer.type';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers!: Customer[]
  constructor(private customerService: CustomerService) { }
  ngOnInit() {
    this.customers = this.customerService.findAll()
  }
}

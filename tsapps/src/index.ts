import { CustomerService } from './services/customer.service'

let customerService = new CustomerService()
console.log(customerService.findAll())
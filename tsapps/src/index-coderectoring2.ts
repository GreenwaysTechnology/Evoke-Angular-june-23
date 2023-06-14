class CustomerRepository {
    constructor() { }
    findAll() {
        return 'Customers Info'
    }
}
class CustomerService {
    constructor(private customerRepo: CustomerRepository) { }
    findAll() {
        return this.customerRepo.findAll()
    }
}
class CustomerController {
    //has-a
    constructor(private customerService: CustomerService) { }
    init() {
        console.log(this.customerService.findAll())
    }
}
let customerCtrl = new CustomerController(new CustomerService(new CustomerRepository()))
customerCtrl.init()
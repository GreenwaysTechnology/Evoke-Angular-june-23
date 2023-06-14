//repository,service,controller

class CustomerRepository {
    constructor() {

    }
    findAll() {
        return 'Customers Info'
    }
}
class CustomerService {
    private customerRepo: CustomerRepository
    constructor(customerRepo: CustomerRepository) {
        this.customerRepo = customerRepo
    }
    findAll() {
        return this.customerRepo.findAll()
    }
}
class CustomerController {
    //has-a
    private customerService: CustomerService
    constructor(customerService: CustomerService) {
        this.customerService = customerService
    }
    init() {
        console.log(this.customerService.findAll())
    }
}
let customerCtrl = new CustomerController(new CustomerService(new CustomerRepository()))
customerCtrl.init()
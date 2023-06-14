//has-a

class Address {
    street: string;
    city: string;
    state: string
    country: string;
    zipcode: string
    constructor(street: string = '', city: string = '', state: string = '', country: string = '', zipcode: string = '') {
        this.street = street
        this.city = city
        this.state = state
        this.country = country
        this.zipcode = zipcode
    }
}

class Customer {
    id: number;
    name: string;
    //has-a: depenency Injection
    address: Address //reference
    constructor(id: number = 0, name: string = '', address: Address = new Address()) {
        this.id = id
        this.name = name
        this.address = address
    }
}

let customer = new Customer(1, 'Subramanian', new Address('3rd street', 'Coimbatore', 'Tamil nadu', 'India', '641111'))
console.log(customer.id)
console.log(customer.name)
console.log(customer.address.street, customer.address.city, customer.address.state, customer.address.country, customer.address.zipcode)
// class Address {
//     street: string;
//     city: string;
//     state: string
//     country: string;
//     zipcode: string
//     constructor(street: string = '', city: string = '', state: string = '', country: string = '', zipcode: string = '') {
//         this.street = street
//         this.city = city
//         this.state = state
//         this.country = country
//         this.zipcode = zipcode
//     }
// }
//Level 1: code refactoring: just remove variable declarations
// class Address {
//     //all constructor args are local variables
//    constructor(street: string = '', city: string = '', state: string = '', country: string = '', zipcode: string = '') {
//         this.street = street
//         this.city = city
//         this.state = state
//         this.country = country
//         this.zipcode = zipcode
//     }
// }
//convert all constructor all local variables into instance variables
//just by adding either private or public keyword
// class Address {
//     //all constructor args are local variables
//     constructor(public street: string = '', public city: string = '', public state: string = '', public country: string = '', public zipcode: string = '') {
//         this.street = street
//         this.city = city
//         this.state = state
//         this.country = country
//         this.zipcode = zipcode
//     }
// }
//Level 3:
class Address {
    //all constructor args are local variables
    constructor(public street: string = '', public city: string = '', public state: string = '', public country: string = '', public zipcode: string = '') { }
}
class Customer {
    constructor(public id: number = 0, public name: string = '', public address: Address = new Address()) { }
}

let customer = new Customer(1, 'Subramanian', new Address('3rd street', 'Coimbatore', 'Tamil nadu', 'India', '641111'))
console.log(customer.id)
console.log(customer.name)
console.log(customer.address.street, customer.address.city, customer.address.state, customer.address.country, customer.address.zipcode)
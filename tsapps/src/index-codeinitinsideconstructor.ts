class Employee {
    id: number;
    firstName: string;
    lastName: string;
    status: boolean;
    //add constructor
    constructor() {
        this.id = 1;
        this.firstName = ''
        this.lastName = ''
        this.status = false
    }
}

//create instance/object 
//here let is keyword
//employee is just variable : reference variable
//new is operator to allocate memory
//Employee()- constructor call
let employee = new Employee();
console.log(employee)
console.log(employee.id, employee.firstName, employee.lastName, employee.status)
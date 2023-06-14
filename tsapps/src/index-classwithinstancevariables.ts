class Employee {
    id: number;
    firstName: string;
    lastName: string;
    status: boolean;
    //add constructor , add constructor args
    constructor(id: number = 0, firstName: string = '', lastName: string = '', status: boolean = false) {
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.status = status
    }
}


let employee = new Employee(1, 'Subramanian', 'Murugan', true);
console.log(employee)
console.log(employee.id, employee.firstName, employee.lastName, employee.status)
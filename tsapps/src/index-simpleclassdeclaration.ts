class Employee {
    //instance variables are declared inside class without any keyword
    id: number=1;
    firstName: string="";
    lastName: string="";
    status: boolean=false;
}

//create instance/object 
//here let is keyword
//employee is just variable : reference variable
//new is operator to allocate memory
//Employee()- constructor call
let employee = new Employee();
console.log(employee)
console.log(employee.id,employee.firstName,employee.lastName,employee.status)
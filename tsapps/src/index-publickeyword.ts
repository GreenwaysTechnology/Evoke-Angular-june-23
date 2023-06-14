class Employee {
    //here variables are by default public 
    public id: number=1;
    public firstName: string="";
    lastName: string="";
    status: boolean=false;
}

let employee = new Employee();
console.log(employee)
console.log(employee.id,employee.firstName,employee.lastName,employee.status)
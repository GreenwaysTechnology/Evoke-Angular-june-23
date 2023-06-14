
//How to enforce type safty for literal object properties

//class as type
// class Employee {
//     id: number
//     name: string
// }

//interface as Type
// interface Employee {
//     id: number
//     name: string
// }

//type keyword as type 
type Employee = {
    id: number
    name: string
}

let employee: Employee = {
    id: 2,
    name: 'Subramanian'
}
console.log(employee.id, employee.name)

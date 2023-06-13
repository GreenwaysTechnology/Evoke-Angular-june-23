//data types and variable declaration
//string literals are represented using "" or '' or ``(template literal noation)

let firstName: string = "Subramanian"

console.log("firstName :" + firstName)
console.log('firstName :', firstName)
//es 6 feature
console.log(`First Name ${firstName}`)

let lastName: string = 'Murugan'
let fullName: string = `${firstName} ${lastName}`
console.log(`Full Name : ${fullName}`)

//number: 64 bit by default every number is double only.
let salary: number = 10000
console.log(`Salary ${salary}`)

//boolean : 1 bit value stores either true or false
let isActive:boolean = true
console.log(`Active :${isActive}`)

//undefined: if variable is declared without any value

let myvariable
console.log(`My variable ${myvariable}`)


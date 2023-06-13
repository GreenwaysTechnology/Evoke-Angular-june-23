//arrow functions

//ES 5 style of anonmous function
let hello = function () {
    //logic
    console.log('Hello')
}
//ES 6 style of writing anonmous functions : arrow function

let hai = () => {
    console.log('hai')
}
hai()
//if function has only one line of logic, then you can remove {}
hai = () => console.log('hai')
hai()
//args and parameters

let sum = (a: number = 0, b: number = 0): number => {
    let c = a + b
    return c;
}
console.log(sum(12, 89))

sum = (a: number = 0, b: number = 0): number => {
    return a + b
}
console.log(sum(12, 89))

//if function has only return statement, we can remove {} and return statement too.
sum = (a: number = 0, b: number = 0): number => a + b
console.log(sum(12, 89))
console.log(sum)
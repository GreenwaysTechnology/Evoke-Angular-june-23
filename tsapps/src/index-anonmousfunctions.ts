//function as literal

//anonmous function: function without name
let hello = function () {
    //logic
    console.log('Hello')
}
//the variable holding function literal can be used to invoke that function 
hello()

//args and parameters and return in anonmous function
let sum = function (a: number = 0, b: number = 0): number {
    return a * b
}
console.log(sum(10, 10))

let a: number = 10
a = 100;
//a="hello"

let b = 100;
//b="hello"

//Explicit any
let c: any = 10
c = "hello"

//implicit any : type inference any
let d; // undefined
console.log(d)
d=100
console.log(d)
d="Hello"
console.log(d)

let e:undefined
e = undefined

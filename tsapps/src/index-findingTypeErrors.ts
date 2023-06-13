//type script is going to ensure that your variable must have that type value only.

let price:number =100
console.log(`Price ${price}`)

//src/index.ts:6:1 - error TS2322: Type 'string' is not assignable to type 'number'.
//price ="Hello"

price=900

let isActive:boolean = 100

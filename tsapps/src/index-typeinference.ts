//Type inference 

//here variable salary is declared with number data type,in future variable salary cant be initalized with other type values
let salary: number = 100
console.log(`Salary ${salary}`)

// Here we have declared variable but not explicitly mentioned type :Type inference
let isActive = true
console.log(`isActive ${isActive}`)

//src/index.ts:11:1 - error TS2322: Type 'number' is not assignable to type 'boolean'.
//11 isActive =90
isActive =90

//union type
//id now can take either string or number 
let id: number | string
id = 1
id = "abc"
//id=true

//union type and predefined constant values

let gender: "Male" | "Female" | "Third"

gender = "Male"
gender = "Female"
//gender = 2

let jobStatus: "Open" | "Pending" | "Closed" | "Wait List"

jobStatus = "Pending"
//How to pass parameters with union type

let mode = (varient: "Dark" | "Light") => {
    console.log(varient)
}
mode("Light")
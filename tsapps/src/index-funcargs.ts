//default args
function add(a: number = 0, b: number = 0) {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)
add();

//optional args a?
function multiply(a?: number, b?: number) {
    let c = a * b
    if (isNaN(c)) {
        console.log('Kindly provide numbers as parameter')
    } else {
        console.log(`Multiply Result ${c}`)
    }
}
multiply(10, 10)
multiply()


function divide(a?: number, b?: number) {
    let c = a / b
    console.log(`divide Result ${c}`)
}
//parameters are based on positions
divide(undefined, 10)
divide(null, 10)
divide(10)

function sum(a: number = 0, b?: number) {
    let c = a * b
    console.log(`Sum Result ${c}`)
}
sum(undefined, 10)

function calculate(a: number, b: number, c: number) {

}
calculate(20,10,8)
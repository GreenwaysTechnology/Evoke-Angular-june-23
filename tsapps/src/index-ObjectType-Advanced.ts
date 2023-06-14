// type 
class Product {
    //required Fields and optional Fields
    id: number
    name: string
    qty?: number
    category?: "Food" | "Electronics" | "Books" | "Vegtables"
    inStock?: boolean
}

//create object 
let product: Product = {
    id: 1,
    name: 'Iphone 15',
    qty: 1000,
    category:"Electronics",
    inStock: true
}
console.log(product)

let productNew: Product = {
    id: 1,
    name: 'Iphone 15',
    qty: 1000,
}
console.log(productNew)

//arrays without type

let list = [1, "hello", true]

//restrict type 

//Non Generic Syntax
let numList: number[] = [1, 2, 3]
//Generic syntax : <T>
let numList2: Array<number> = [1, 2, 4]

class Product {
    id: number
    name: string
    qty?: number
}
class ProductService {
    //return array of products
    findAll(): Array<Product> {
        return [{ id: 1, name: 'a', qty: 1 }, { id: 1, name: 'a', qty: 1 }]
    }
    list(): Product[] {
        return [{ id: 1, name: 'a', qty: 1 }, { id: 1, name: 'a', qty: 1 }]
    }
}
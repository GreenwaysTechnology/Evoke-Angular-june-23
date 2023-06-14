//class with methods

class ProductService {
    constructor() { }
    //methods
    findAll(): string {
        return 'List all products'
    }
    save(): string {
        return 'Product save method '
    }
    remove(): string {
        return 'Product remove method'
    }
    update(): string {
        return 'Product Update method'
    }
}
let productService = new ProductService()
console.log(productService.findAll())
console.log(productService.save())
console.log(productService.remove())
console.log(productService.update())
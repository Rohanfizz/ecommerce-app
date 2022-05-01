export class SingleCartProduct {
    price: number = 0;
    tax: number = 0;
    name: string = "";
    _id: string = "dummy";
    uuid: string ="dummy";
    productImage: string[] =["dummy"];
}
export class CartProduct {
    product: SingleCartProduct = new SingleCartProduct();
    quantity: number = 0;
}
class Cart {
    // products : [{ product: any }, { quantity: number }];
    products: CartProduct[];
    subtotal: number;
    constructor() {
        this.products = [];
        this.subtotal = 0;
    }
}
export default Cart;

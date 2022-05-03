import Cart from "./cartModel";

export class ShipmentInfo {
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone: string = "";
    zipCode: string = "";
    city: string = "";
    streetAddress: string = "";
}

export class OutOfStockItem{
    id:string="";
    name:string="";
    stock:number=0;
}

export class Order {
    shipmentInfo: ShipmentInfo = new ShipmentInfo();
    orderStatus: string = "placed";
    paymentDone: boolean = false;
    paymentMode: string = "COD";
    userId: string = "";
    orderCart: Cart = new Cart();
    tax: number = 0;
    delivery: number = 0;
    totalPrice: number = 0;
    invoice: string = "";
}

export class MyOrders {
    inProgress: any[] = [];
    completed: any[] = [];
}

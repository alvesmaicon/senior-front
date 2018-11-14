export class Item {
    name: string;
    quantity: string;
    perishable: boolean;
    price: string;
    expiration: Date;
    manufacture: Date;
    unit: string;
    uid:string;

    constructor(){
        this.uid = '';
        this.name = '';
        this.quantity = '';
        this.perishable = false;
        this.price = '';
        this.expiration = null;
        this.manufacture = null;
        this.unit = '';

    }
}
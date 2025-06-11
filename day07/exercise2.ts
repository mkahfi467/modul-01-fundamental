class Product {
    name: string;
    price: number;
}

class Transaction extends Product {
    totalHarga: number;
    constructor() {
        super();
    }

    addCart(_name: string, _price: number, _total: number) {
        this.name = _name;
        this.price = _price;
        this.totalHarga = _total;
    }

}

// addCart(_name: string, _price: number, _total: number) {
//     this.name = _name;
//     this.price = _price;
//     this.total = _total;
// }
const myTransaction = new Transaction();

const cart: any = [];
cart.push(myTransaction.addCart('sampo', 20000, 20));

console.log();

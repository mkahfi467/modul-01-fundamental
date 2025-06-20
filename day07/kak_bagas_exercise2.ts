interface IProduct {
    name: string,
    price: number,
}

interface ICartItem {
    product: Product,
    quantity: number,
}

class Product implements IProduct {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    private cart: ICartItem[] = [];

    // tambah produk ke keranjang
    public addToCart(product: Product, quantity: number) {
        const existingItem = this.cart.find((item) => item.product.name === product.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({ product, quantity });
        }
    }

    // show total
    public showTotal() {
        return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    // checkout dan kembalikan detail dari transaksi
    public checkout() {
        const total = this.showTotal();
        const items = [...this.cart];

        this.cart = [];
        return { items, total };
    }
}

const product1 = new Product('Laptop', 1500);
const product2 = new Product('Mouse', 50);
const product3 = new Product('Keyboard', 100);

const transaction = new Transaction;
transaction.addToCart(product1, 1);
transaction.addToCart(product2, 2);
transaction.addToCart(product3, 1);

console.log('Current Total : $' + transaction.showTotal());

const result = transaction.checkout();

console.log('Transaction Summary : ');

result.items.forEach((item) => {
    console.log(`${item.product.name} x ${item.quantity} = $${item.product.price * item.quantity}`);
})

console.log('Total : $' + result.total);


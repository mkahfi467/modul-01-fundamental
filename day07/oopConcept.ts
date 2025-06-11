
// Membuat Object secara langsung
// Contoh 1 : membuat sebuah objek hewan peliharaan
const pet = {
    name: 'Buddy',
    species: 'Dog',
    age: 4,
    vaccinated: true,
    favoriteToy: 'Ball',
}

// cara akses value property dari objek pet
// console.log("Ambil property name dari pet : " + pet.name);
// console.log("Ambil property favorite toy dari pet : " + pet.favoriteToy);

// Membuat Object dengan method new Object
const idCard: any = new Object();
idCard.name = 'Budi';
idCard.age = 30;
idCard.gender = 'Male';

// console.log(`Isi dari idCard : ${idCard}`);
console.log('Isi dari idCard : ', idCard);

// Membuat Object dalam bentuk function
function createStudent(name: string, grade: number) {
    return {
        name: name,
        grade: grade,
    }
}
const student = createStudent('Budi', 10);
console.log(student);

// Membuat Object dengan method Object.assign
const employee = Object.assign({}, { name: 'Bob', role: 'Supervisor' });
console.log('Informasi dari employee : ', employee);

// === Interface ===
// interface -> seperti cetak biru atau blueprint
interface IPerson {
    id: number,
    name: string,
    age: number,
    hobby?: string[], // optional chaining (artinya property tidak wajib diikutsertakan)
}

interface IAddress {
    street: string,
    zip_code: number,
}

interface IDetailInformation {
    detail: IPerson,
    address: IAddress,
}

const paket1: IDetailInformation = {
    detail: {
        id: 123,
        name: 'Bambang',
        age: 40,
    },
    address: {
        street: 'JL. Merdeka, Jakarta Pusat',
        zip_code: 456
    }
}

// untuk menggambil detail informasi
console.log('Ambil info dari paket 1 : ', paket1);

// const person1: IPerson = new Object();
// person1.id = 1;
// person1.name = 'Bob';
// person1.hobby = ['study', 'gaming'];

const person1: IPerson = {
    id: 1,
    name: 'Bob',
    age: 17,
    hobby: ['study', 'gamming'],
}
const person2: IPerson = {
    id: 2,
    name: 'John',
    age: 22,
    hobby: ['sport', 'singing'],
}

console.log('Info dari person 1 : ', person1);
console.log('Info dari person 2 : ', person2);

// === Types ===
type color = 'red' | 'blue' | 'green';
const favorite: color = 'blue';

type Coordinates = {
    x: number,
    y: number,
}

const point: Coordinates = { x: 5, y: 10 };

console.log('Hasil dari favorite color : ', favorite);
console.log('Hasil dari point : ', point);

type Vehicle = {
    brand: string,
    year: number,

}

type Car = Vehicle & {
    seat: number
}

const car: Car = {
    brand: 'Honda',
    year: 2015,
    seat: 6,
}

// === Properties & Methods ===
interface IWashingMachine {
    brand: string,
    loadCapacity: number,
    start: () => string,
    stop: () => string,
}

const washingMachine: IWashingMachine = {
    brand: 'LG',
    loadCapacity: 7,
    start() {
        // console.log('Washing started');
        return 'Washing started';
    },
    stop() {
        return 'Stopping machine ...';
    },
}

console.log('Menjalankan mesin cuci : ', washingMachine.start());
// console.log('Menjalankan mesin cuci : ', washingMachine);
console.log('sedang mencuci baju ... selesai');
console.log('Menjalankan mesin cuci : ', washingMachine.stop());

// === For in Loop ===
const fridge = {
    milks: 1,
    eggs: 12,
}

for (const key in fridge) {
    console.log(key); // untuk mengambil properties
    console.log(fridge[key]); // untuk mengambil value
    console.log(`${key} : ${fridge[key]}`); // untuk mengambil keseluruhan object
}

// === Destructuring Assigment ===
const { username, age } = {
    username: 'Bob',
    age: 20,
}

console.log('Username : ', username);
console.log('age : ', age);
console.log('---------------------------------');

interface IAnimal {
    species: string,
    nickname: string,
    animalAge: number,
}

const { species, nickname, animalAge }: IAnimal = {
    species: 'mamalia',
    nickname: 'elephant',
    animalAge: 10,
}

console.log('Species : ', species);
console.log('Nickname : ', nickname);
console.log('Animal age : ', animalAge);

// === Spread Operator ===
const basicInfo = { name: 'Tom' }
const fullInfo = {
    ...basicInfo,
    age: 35
}

fullInfo.name = 'test';

console.log('Full info : ', fullInfo);
console.log('Full info : ', basicInfo);

const a = {
    a: 1,
}

const b = {
    b: 2,
}

console.log(a);
console.log(b);
// {a: 1}, {b: 2}
const c = {
    ...a,
    ...b,
}
console.log(c);

// === CLASS ===
class BankAccount {
    balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }
}

const myBankAccount = new BankAccount();
console.log('Saldo saat ini : ', myBankAccount.balance);
console.log('menyimpan uang ...');
myBankAccount.deposit(50000);
console.log('Saldo setelah deposit : ', myBankAccount.balance);
console.log('Tarik tunai uang ...');
myBankAccount.withdraw(25000);
console.log('Saldo setelah ditarik tunai : ', myBankAccount.balance);

class Light {
    isOn: boolean = false;
    toggle() {
        this.isOn = !this.isOn;
    }
}

const light = new Light();
light.toggle();
console.log('Kondisi lampu : ', light.isOn);
light.toggle();
console.log('Kondisi lampu : ', light.isOn);

// === Constructor & Private/public Property ===
class Laptop {
    private brand: string; // proses encapsulation (menyembunyikan property agar tidak bisa diakses dari luar)
    public ram: number;

    constructor(brand: string, ram: number) {
        this.brand = brand;
        this.ram = ram;
    }

    getDisplay() {
        return {
            brand: this.brand,
            ram: this.ram,
        }
    }
}

const laptop1 = new Laptop('Apple Macbook Pro', 11);
const laptop2 = new Laptop('Asus Vivobook', 8);

console.log(laptop1.getDisplay());
console.log(laptop2.getDisplay());

// console.log(laptop1.brand); // tidak bisa dipanggil karena ada proses encapsulation

// contoh 2
class Motorcycle {
    private fuel = 50;
    public amount: number = 10;

    constructor(amount: number) {
        this.amount = amount;
    }

    ridding() {
        console.log('Riding the motorcycle ...');
        if (this.fuel > 0) {
            this.fuel -= 5;
        }
    }
    
    brake() {
        console.log('Brake the motorcycle ...');
    }

    // refillFuel(amount: number) {
    //     return this.fuel += amount;
    // }
    refillFuel() {
        return this.fuel += this.amount;
    }

    checkFuel() {
        return this.fuel;
    }
}

// const motorcycle = new Motorcycle();
const motorcycle = new Motorcycle(10);
console.log('Cek isi bensin : ', motorcycle.checkFuel());
motorcycle.ridding();
console.log('Cek isi bensin setelah motor berjalan : ', motorcycle.checkFuel());
console.log('mlipir ke pom bensin ...');
// motorcycle.refillFuel(10);
motorcycle.refillFuel();
console.log('Setelah isi bensin : ', motorcycle.checkFuel());


/**
 * 25 soal 4 pilihan jawaban yang harus dipilih
 * Kisi-kisi exam modul 01 :
 * - Introduction programming
 * - Data type (Primitive, Non-primitive)
 * - var, let dan const
 * - Introduction TS
 * - Looping statement
 * - Interface and Object declaration
 * - Function hoisting
 * - Encapsulation
 * - Data structure
 * - Big 0 Notation
 */

// Variable : penampung data

/**
 * Rumus penulisan variable ==> keywordVariable namaariabel = value;
 * keywordVariable : var, let, const
 * namaVariable : - Tidak boleh diawali dengan angka
 *                - Boleh diawali simbol _ atau $
 *                - Jika terdiri lebih dari satu suku kata harus digabung dengan menggunakan metode "camelCase"
 */

// Karakter keyword variable 
// keyword "var" : redeclare dan reassign, global variable
// Redeclare
var nama: string = "Abdi";
var nama: string = "Edo";

// Reassign
nama = "Aldo";

// Keyword let : non-redeclare dan reassign, block-scoped variable
// Non-redeclare
let usia: number = 19;
// let usia: number = 17;

// reassign
usia = 25;

// Contoh block-scoped variable
function introduce() {
    let usia: number = 15;
    return `Usiaku ${usia}`;
}

// keyword const : non-redeclare dan non-reassign, constant variable, biasanya yang menggunakan "const" yaitu array atau object
// Non-redeclare
const PI = Math.PI;
const angka: number[] = [2, 3, 4, 5, 2, 6, 3, 4];
interface IHuman {
    name: string,
    tglLahir: string,
    gender: "Pria" | "Wanita",
}
const human: IHuman = {
    name: "Kahfi",
    tglLahir: "2002-01-09",
    gender: "Pria",
}

// Looping statement : penulisan code yang ditujukan untuk mengulang eksekusi suatu code

/**
 * - WHILE LOOP : perulangan program yang akan selalu dijalankan selama kondisi masih terpenuhi
 * - Aturan penulisan : 
 * while (condition) {
 *      // CODE
 * }
 */
let count: number = 1;

while (count < 10) {
    console.log(`Loop ke-${count}`);
    count++;
}

// while (true) {
//     let random: number = Math.random();
//     console.log(random);

//     if (random < 0.25) {
//         break;
//     }
// }

/**
 * DO...WHILE
 * Aturan penulisan :
 * do {
 *      // CODE
 * } while (condition) {
 *      // CODE
 * }
 */

let counter: number = 2;

do {
    console.log(counter);
    counter++;
} while (counter < 10);

/**
 * FOR LOOP : digunakan ketika batas looping ditentukan sejak awal
 * Aturan penulisan :
 * for (counterDeclaration; counter_condition; counter) {
 *      // CODE
 * }
 */

for (let i: number = 1; i < 10; i++) {
    console.log(i);

}

// for...in : Looping yang berkaitan dengan tipe data objek
for (const property in human) {
    console.log(property);
    console.log(human[property]);

}

console.log(human.name);
console.log(human["name"]);

// for...of : Looping yang berhubungan dengan akses value data array
const listProduct: string[] = ["Kopi", "Teh", "Es Jeruk"];
for (const value of listProduct) {
    console.log(value);

}

// Array : tipe data yang mampu menampung berbagai macam tipe data lain
/**
 * Ciri-ciri : - Data yang disimpan kedalam array akan dibungkus kurung siku, contoh : [1, 2, 3]
 *             - Setiap data yang disimpan didalam array, akan memiliki alamat index yang dimulai dari 0
 * 
 */

const listNamaSiswa: string[] = ["Adi", "Budi", "Dontol"];
interface ISiswa {
    nis: string,
    name: string,
    kelas: "IPA" | "IPS",
}
const listSiswa: ISiswa[] = [
    {
        nis: "45837893",
        name: "Aldo",
        kelas: "IPA",
    },
    {
        nis: "47652728",
        name: "Aldo",
        kelas: "IPS",
    },
]

console.log(`${listSiswa[0]}`);

// JSON
const stringObject = JSON.stringify(listSiswa[0]);
console.log(typeof stringObject);
console.log(stringObject);
console.log(JSON.parse(stringObject));
console.log(typeof JSON.parse(stringObject));

// Function : cara untuk menyatukan sekumpulan program yang ditujukan untuk menyelesaikan tugas khusus
/**
 * Kategori : Built-in function dan User-defined function
 * Aturan penerapan function :
 * - Function harus tersedia lebih dulu
 * - Penamaan function mengikuti aturan penamaan variable
 * - Secara opsional bisa menerima parameter/argumen : penampung data dari function untuk menerima data dari luar function
 * - Function secara opsional bisa menghasilkan output melalui keyword return didalamnya
 * - Opsi penulisan function ada tiga : Declarative func, Func. Expression, dan Arrow Function
 */

/**
 * Declarative function : 
 * function namaFunc(param1?, param2?, ...) {
 *      // CODE
 * }
 */
// ini adalah contoh dari hoisting function dimana sebenarnya sistem dibalik layar memindahkan sebuah declarative function posisinya keatas
console.log(penjumlahan());

function penjumlahan(): number {
    let angkaA: number = 2;
    let angkaB: number = 3;

    const result: number = angkaA + angkaB;

    return result;
}

console.log(penjumlahan());

function penjumlahanB(angkaA: number, angkaB: number): number {
    const result: number = angkaA + angkaB;
    return result;
}

console.log(penjumlahanB(4, 3));
console.log(penjumlahanB(75, 24));

/**
 * Function expression :
 * const namaFunc = function(param1?, param2?, ...) {
 *      // CODE
 * }
 */
// Ini tidak bisa dilakukan karena hoisting function hanya bisa di declarative function
// console.log(pengurangan());

const pengurangan = function (): number {
    let angkaA: number = 2;
    let angkaB: number = 3;

    const result: number = angkaA + angkaB;

    return result;
}

console.log(pengurangan());

const penguranganB = function (angkaA: number, angkaB: number): number {
    const result: number = angkaA + angkaB;

    return result;
}

console.log(penguranganB(23, 76));

/**
 * Arrow function :
 * const namaFunc = (param1?, param2?, ...) => {
 *      // CODE
 * }
 */

const perkalian = (): number => {
    let angkaA: number = 10;
    let angkaB: number = 20;

    const result: number = angkaA * angkaB;

    return result;
}
console.log(perkalian());

const perkalianB = (angkaA: number, angkaB: number): number => {
    const result: number = angkaA * angkaB;

    return result;
}
console.log(perkalianB(33, 3));

const perkalianC = (angkaA: number, angkaB: number): number => angkaA * angkaB;
console.log(perkalianC(32, 4));


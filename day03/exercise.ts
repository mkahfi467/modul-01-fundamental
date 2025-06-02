/**
 * SOAL 1 
 * 
 * Write a code to check whether the number is odd or even
 * Example: 25 → odd number, 2 → even number
 */

let x: number = 25;
if (x % 2 === 0) {
    console.log(`${x} -> EVEN number`);
} else {
    console.log(`${x} -> ODD number`);
}

/**
 * SOAL 2
 * 
 * Write a code to check whether the number is prime number or not
 * Example: 7 → 7 is a prime number
 * Example: 6 → 6 is not a prime number
 */

let y: number = 9;
let statusAngka: string = "";
let hasilBagi = 0;

for (let i: number = 2; i <= y; i++) {
    if (y % i === 0) {
        hasilBagi++;
    }
}
if (hasilBagi > 1) {
    statusAngka = "is not a prime number";
} else if (hasilBagi === 1) {
    statusAngka = "is a prime number";
}
// console.log(hasilBagi);
console.log(`${y} ${statusAngka}`);

/**
 * SOAL 3
 * 
 * Write a code to find the sum of the numbers 1 to N
 * Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
 * Example: 3 → 1 + 2 + 3 = 6
 */

let z: number = 5;
let hasil: number = 0;
let perhitungan: string = "";

for (let i: number = 1; i <= z; i++) {
    hasil += i;
    if (i === z) {
        perhitungan += i;
    } else {
        perhitungan += i + " + ";
    }
}
console.log(`${z} -> ${perhitungan} = ${hasil}`);

/**
 * SOAL 4
 * 
 * Write a code to find factorial of a number
 * Example: 4! → 4 x 3 x 2 x 1 = 24
 * Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
 */

let inputFactorial: number = 4;
let hasilFactorial: number = 1;
let perhitunganFactorial: string = "";

for (let i: number = inputFactorial; i > 0; i--) {
    hasilFactorial *= i;
    if (i === 1) {
        perhitunganFactorial += i;
    } else {
        perhitunganFactorial += `${i} x `;
    }
}
console.log(`${inputFactorial}! -> ${perhitunganFactorial} = ${hasilFactorial}`);

/**
 * SOAL 5
 * 
 * Write a code to print the first N fibonacci numbers
 * Example: 15 → 610
 */

let jumlah: number = 15;
let nilai1: number = 0;
let nilai2: number = 1;
let hasilFibonacci: number = 0;

for (let i: number = 2; i < jumlah; i++) {
    hasilFibonacci = nilai1 + nilai2;
    nilai1 = nilai2;
    nilai2 = hasilFibonacci;
}
console.log(hasilFibonacci);

// Callback function :  - sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter
//                      - sebuah fungsi yang langsung dibuat didalam parameter fungsi lain

/**
 * Aturan penulisan :
 * function namaMainFunction(callbackFn) {
 *      callbackFn();
 * }
 * 
 * - callbackFn : parameter yang harus diisi dengan fungsi
 */

// mainFunction declaration
function printCalculation(callbackFn) {
    // menjalankan fungsi dari parameter callbackFn dan ditampung outputnya kedalam variable result
    const result = callbackFn();

    return `Hasil perhitungan dari callback adalah ${result}`;
}

console.log(printCalculation(function () {
    let angkaA: number = 10;
    let angkaB: number = 30;

    return angkaA + angkaB;
}));

console.log(printCalculation(function () {
    let numbA: number = 10;
    let numbB: number = 30;

    return numbA * numbB;
}));

console.log(printCalculation(() => {
    let numbA: number = 20;
    let numbB: number = 3;

    return numbA - numbB;
}));

// Contoh yang kurang baik buat callback function
// function pembagian() {
//         let numbA: number = 10;
//     let numbB: number = 30;

//     return numbA / numbB;
// }

// console.log(printCalculation(pembagian));

/**
 * CONTOH MAIN FUNCTION YANG MEMBERIKAN NILAI UNTUK CALLBACK FUCNTION PROSES
 */
function printCalculation2(callbackFn) {
    let angkaA: number = 10;
    let angkaB: number = 30;

    // menjalankan fungsi dari parameter callbackFn dan ditampung outputnya kedalam variable result
    const result = callbackFn(angkaA, angkaB);

    return `Hasil perhitungan dari callback adalah ${result}`;
}

console.log(printCalculation2(function (angkaA: number, angkaB: number) {
    console.log(angkaA);
    console.log(angkaB);

    return angkaA + angkaB;
}));

/**
 * Array function : forEach, map, filter
 * 
 * # forEach
 * array.forEach(callbackFn) : sebagai pilihan selain "for loop" untuk mengakses isi dari tiap data array
 * 
 * # map
 * array.map(callbackFn) : untuk merubah seluruh data array menjadi data array yang baru
 * [1, 2, 3] -> [2, 4, 6]
 * ["Abdi", "Edo", "Aldo"] -> ["1. Abdi", "2. Edo", "3. Aldo"]
 * ["Abdi", "Edo", "Aldo"] -> ["Nama saya Abdi", "Nama saya Edo", "Nama saya Aldo"]
 * [1, 2, 3] -> ["Ganjil", "Genap", "Ganjil"]
 * [1000, 2000, 3000] -> ["Rp. 1.000", "Rp. 2.000", "Rp. 3.000"]
 * 
 * # filter
 * array.filter(callbackFn) : untuk menghasilkan array baru sesuai acuan filter yang diberikan
 * [1, 2, 3, 7, 20, 12] -> [2, 20, 12] 
 */

// forEach
// array.forEach(callbackFn) : sebagai pilihan selain "for loop" untuk mengakses isi dari tiap data array

const students: string[] = ["Abdi", "Edi", "Aldo"];

// for loop : contoh biasa yang kita lalukan kalau pakai "for loop"
for (let i: number = 0; i < students.length; i++) {
    const value = students[i];

    console.log(`${i + 1}. ${value}`);
}

// forEach : bentuk dari "forEach"
students.forEach((value, index) => {
    console.log(`${index + 1}. ${value}`);
})


function duplicateForEach(arrayData: any[], callbackFn) {
    // let result = "";
    for (let i: number = 0; i < arrayData.length; i++) {
        // result += callbackFn(arrayData[i], i);
        callbackFn(arrayData[i], i);
    }
    // return result; 
}

duplicateForEach(students, (value: any, index: number) => {
    console.log(`${index + 1}. ${value}`);
})

// map
// array.map(callbackFn) : untuk merubah seluruh data array menjadi data array yang baru
// [1, 2, 3] -> [2, 4, 6]
// ["Abdi", "Edo", "Aldo"] -> ["1. Abdi", "2. Edo", "3. Aldo"]
// ["Abdi", "Edo", "Aldo"] -> ["Nama saya Abdi", "Nama saya Edo", "Nama saya Aldo"]
// [1, 2, 3] -> ["Ganjil", "Genap", "Ganjil"]
// [1000, 2000, 3000] -> ["Rp. 1.000", "Rp. 2.000", "Rp. 3.000"]

const dataArray: any[] = [1, 2, 3, 4, 5];
const newArray = dataArray.map((value, index) => {
    return value * 2;
})

console.log(newArray);

const uang: number[] = [2000, 5000, 10000];
const newUang = uang.map((value, index) => {
    return value.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
    })
})

console.log(newUang);

function duplicateMap(arrayData: any[], callbackFn) {
    const result: string[] = [];

    // console.log(callbackFn(arrayData[0]));
    // console.log(typeof(callbackFn(arrayData[0])));

    for (let i = 0; i < arrayData.length; i++) {
        result.push(callbackFn(arrayData[i]));
    }

    return result;
}

const numberToCurrency = duplicateMap(uang, function (value) {
    return value.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
    })
})

console.log(numberToCurrency);

// filter
// array.filter(callbackFn) : untuk menghasilkan array baru sesuai acuan filter yang diberikan
// [1, 2, 3, 7, 20, 12] -> [2, 20, 12] 
const angka: number[] = [1, 2, 3, 7, 20, 12];

const angkaGenap: number[] = angka.filter((value, index) => {
    return value % 2 === 0;
})
console.log(angkaGenap);

const angkaGanjil: number[] = angka.filter((value, index) => {
    return value % 2 !== 0;
})
console.log(angkaGanjil);



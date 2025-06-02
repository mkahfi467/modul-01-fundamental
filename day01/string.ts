// STRING : data yang berisi karakter huruf, angka, atau symbol dan ditandai dengan symbol quotes
let namaToko: string = "TOKO OLGA";
namaToko = "TOKO DONAT";

// Template literal
let alamatToko: string = `JL. Genteng Kali Surabaya`;

// Penggabungan data string
// Cara 1 : menggunakan penjumlahan +
let printInfo:string = namaToko + " " + alamatToko + " Telp. 082737238";
console.log(printInfo);

// Cara 2 : Template literal
printInfo = `${namaToko} ${alamatToko} Telp. 08123456789`;
console.log(printInfo);

// Fungsi bawaan tipe data string
// string.length : menghitung panjang data string atau menghitung jumlah karakter dalam 1 string
let message:string = 'Hello';
console.log(message.length);

// string.toLowerCase() : merubah semua karakter menjadi huruf kecil
console.log(message.toLowerCase());

// string.toUpperCase() : merubah semua karakter menjadi huruf besar
console.log(message.toUpperCase());

// string.include() : memastikan suatu kata atau karakter ada didalam data string
console.log(message.includes('a'));

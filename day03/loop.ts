// LOOPING STATEMENT : penulisan kode yang ditujukan untuk mengulang eksekusi suatu program hingga kondisi tertentu


/**
 * WHILE LOOP : perulangan program yang akan selalu berjalan selama kondisi masih terpenuhi
 * Aturan penulisan :
 * while(condition) {
 *      // CODE
 * };
 * condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 */

let count: number = 1;

while (count <= 10) {
    console.log(count);
    /**
     * count++ : postfix dimana dibaris dari kode tesebut angkanya belum ditambahkan
     * ++count : prefix dimana dibaris dari kode tersebut angkanya sudah ditambahkan
     */
    count++; // count = count + 1
}

let isBoolean: boolean = true;
while (isBoolean) {
    count++;

    if (count === 15) {
        console.log(count);
        isBoolean = false;
    }
}

while (true) {
    count++;

    if (count === 25) {
        console.log(count);
        break;
    }
}

/**
 * DO...WHILE 
 * Aturan penulisannya :
 * do{
 *      // CODE
 * }while(condition)
 */

let counter: number = 1;
do {
    console.log(counter);
    counter++;
} while (counter <= 5);

// FOR LOOP : digunakan ketika batas looping sudah ditentukan sejak awal
/**
 * for(counter_declaration; counter_condition; counter) {
 *      // CODE
 * }
 * 
 * - counter_declaration    : variable yang mendefinisikan nilai awal dari hitungan batas looping
 * - counter_condition      : kondisi untuk menentukan batas looping
 * - counter                : proses perhitungan increment atau decrement
 */

for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

const limit = 7;
let cetak: string = "";
for (let i: number = 0; i < limit; i++) {
    if (i % 2 === 0) {
        cetak += `${i} : GENAP | `;
    } else {
        cetak += `${i} : GANJIL | `;
    }
}

console.log(cetak);

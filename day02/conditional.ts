// CONDITIONAL STATEMENT

/**
 * - IF STATEMENT : untuk memeriksa satu buah kondisi
 * - IF...ELSE STATEMENT : untuk memeriksa dua kondisi
 * - IF...ELSE IF...ELSE STATEMENT : untuk memeriksa tiga kondisi atau lebih
 * - SWITCH CASE STATEMENT : untuk memeriksa data dalam pencocokan nilai
 */

// Contoh data
let nama: string = "Edo";
let usia: number = 10;

// IF
/**
 * Aturan penulisan : 
 * if (condition) {
 *      // code
 * }
 * 
 * note : 
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition didalam if terpenuhi (bernilai TRUE)
 */

// example : memvalidasi batas usia
if (usia > 16) {
    console.log(`${nama} sudah dewasa`);
}

// IF...ELSE
/**
 * Aturan penulisan : 
 * if (condition) {
 *      // code
 * } else {
 *      // code
 * }
 * 
 * note : 
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition didalam if terpenuhi (bernilai TRUE)
 */

if (usia > 16) {
    const print: string = `${nama} SUDAH dewasa`;
    console.log(print);
} else {
    const print: string = `${nama} BELUM dewasa`;
    console.log(print);
}

let isNgantuk: Boolean = true;
if (isNgantuk) {
    console.log("Beli Kopi");
} else {
    console.log("Beli Ice Cream")
}

// IF...ELSE IF...ELSE
/**
 * Aturan penulisan : 
 * if (condition) {
 *      // code
 * } else if (condition) {
 *      // code
 * } else {
 *      // code
 * }
 * 
 * note : 
 * - condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)
 * - code : baris program yang ingin dijalankan jika condition didalam if terpenuhi (bernilai TRUE)
 */

// Example : klasifikasi nilai ujian
// INPUT
const examGrade: number = 70;

// PROSES
let result: string;
if (examGrade >= 90) {
    result = "Grade A";
} else if (examGrade >= 80 && examGrade < 90) {
    result = "Grade B";
} else if (examGrade >= 70 && examGrade < 80) {
    result = "Grade C";
} else {
    result = "Grade F";
}

// OUTPUT
console.log(result);

// SWITCH...CASE
/**
 * Aturan penulisan :
 * swithc(data) {
 *      case value:
 *          // code
 *      default:
 *          // code
 * }
 */

const job: string = "Coder";

switch(job) {
    case "Coder": // prosesnya seperti comparasion job === "Coder"
        console.log("Membuat aplikasi");
        break;
    case "Driver":
        console.log("Mengemudi");
        break;
    default:
        console.log("Tidak ada yang cocok");
}

// VARIABLE : penampung data

/* 
- Rumus penulisan variable ==> keywordVariable namaVariable = data
- keywordVariable : var, let, const
- namaVarible : - harus diawali dengan huruf atau _ atau $
                - Jika terdiri dari dua suku kata atau lebih, maka tidak boleh dipisah dengan spasi
- data : tipe data yang ingin disimpan diantaranya string, number, boolean, undefined, array, object
*/

// Mendeklarasikan variable
var namaMurid;

// Meng-inisialisasi variable
var usiaMurid = 17;

// Karakter tiap keyword variable
// Keyword var : redeclare, reassign
// Redeclare
var alamat = "JL. Pemuda Surabaya";
var alamat = "Sukolilo Surabaya"; // membuat ulang variable yang sudah ada

// Reassign
alamat = "Rungkut Surabaya";

// Keyword let : non-redeclare, reassign
let program = "Web Development";
// let program = "Digital Marketing" // non-redeclare
program = "Data Science"; // reassign

// Keyword const : non-redeclare, non-reassign
// biasanya namaVariable dari keyword const diawali dengan huruf besar
const PI = 3.14;
const UrlDomain = "https://google.com";


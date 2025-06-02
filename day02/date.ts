// DATE : data yang berhubungan dengan waktu
let now: Date = new Date(); // ini disebut class constructor date
console.log(now.toUTCString());
console.log(now.toISOString());
console.log(now.toLocaleDateString("id"));
console.log(now.toLocaleTimeString("id"));
console.log(now.toLocaleString("id"));
console.log(now.getFullYear());
console.log(now.getMinutes());
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.getMonth()); // Karakternya month adalah yang diambil seperti index yang dimulai dari 0
console.log(now.getTime());

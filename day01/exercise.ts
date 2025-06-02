/*
1. Write a code to find area of rectangle.
- Example : length = 5, width = 3
- Output : 15
*/
let panjang: number = 5;
let lebar: number = 3;
const resultLuasPersegi: number = panjang * lebar;
console.log(resultLuasPersegi);

/*
2. Write a code to find perimeter of rectangle.
- Example : length = 5, width = 3
- Output : 16
*/
const resultKelilingPersegi: number = 2 * (panjang + lebar);
console.log(resultKelilingPersegi);

/*
3. Write a code to find diameter, circumference and area of a circle.
- Example : radius = 5
- Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
let radius: number = 5;
const resultDiameterLingkaran: number = 2 * radius;
console.log(resultDiameterLingkaran);

const resultKelilingLingkaran: number = Math.PI * resultDiameterLingkaran;
console.log(resultKelilingLingkaran);

const resultLuasLingkaran: number = Math.PI * Math.pow(radius, 2);
console.log(resultLuasLingkaran);

/*
4. Write a code to find angles of triangle if two angles are given.
- Example : a = 80, b = 65
- Output : 35
*/
let sudutA: number = 80;
let sudutB: number = 65;

const sudutC: number = 180 - (sudutA + sudutB);
console.log(sudutC);

// SOAL TAMBAHAN
/*
write a code to convert temperature from celcius to fahrenheit.
Example : celcius = 25
Output : 77
*/
let celcius: number = 25;
const resultFahrenheit: number = (celcius * 1.8) + 32;
console.log(resultFahrenheit);

/*
Write a code to swap two numbers
example : a = 4, b = 7
Output : a = 7, b = 4
*/
let a: number = 4;
let b: number = 7;
let shelter: number = a;
a = b;
b = shelter;
console.log(`a = ${a}, b = ${b}`);

/*
Write a code to get first and last character from a string.
Example : word = "Programming"
Output : P and g
*/
let word: string = "Programming";
console.log(`${word.charAt(0)} and ${word.charAt(word.length - 1)}`);

/*
Write a code to calculate the square and cube of a number.
Example : number = 4
Output : square = 16, cube = 64
*/
let number: number = 4;
let square: number = Math.pow(number, 2);
let cube: number = Math.pow(number, 3);
console.log(`square = ${square}, cube = ${cube}`);

/*
write a code to convert minutes to hours and minutes.
Example : totalMinutes = 135
Output : 2 hours and 15 minutes
*/
let totalMinutes: number = 135;
let menit: number = totalMinutes % 60;
let jam: number = (totalMinutes - menit) / 60;
console.log(`${jam} hours and ${menit} minutes`);
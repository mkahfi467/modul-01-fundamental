/**
 * 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
 * a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
 */

let arr: any[] = [12, 5, 23, 18, 4, 45, 32];
// let lowest: number = arr[0];
// let highest: number = arr[0];
// let average: number = 0;

function lowest(x: number[]) {
    return Math.min(...x)
}

function highest(x: number[]) {
    return Math.max(...x);
}

function average(x: number[]) {
    let average: number = 0;
    for (let i: number = 0; i < x.length; i++) {
        // if (arr[i] < lowest) {
        //     lowest = arr[i];
        // } else if (arr[i] > highest) {
        //     highest = arr[i];
        // }
        average += x[i];
    }
    return average /= x.length;
}

console.log(`lowest : ${lowest(arr)} - highest : ${highest(arr)} - average : ${average(arr)}`);


/**
 * 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * a. Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 */

arr = ["apple", "banana", "cherry", "date"];
function separated() {
    let result: string = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result += `and ${arr[i]}`;
        } else {
            result += `${arr[i]}, `;
        }
    }
    return result;
}

console.log(separated());

/**
 * 3. Write a function from a given array of numbers and return the second smallest number
 * a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 */

arr = [5, 3, 1, 7, 2, 6];
function getSecondSmallest() {
    arr = arr.sort();
    return arr[1];
}
console.log(getSecondSmallest());

/**
 * 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
 * a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
 */

const arrA: number[] = [1, 2, 3];
const arrB: number[] = [3, 2, 1];
let result: number[] = [];

function calculate2Array() {
    for (let i: number = 0; i < arrA.length; i++) {
        // result[i] = arrA[i] + arrB[i];
        result.push(arrA[i] + arrB[i]);
    }
    return result;
}

console.log(calculate2Array());

/**
 * 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
 * a. Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
 * b. Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]
 */

arr = [1, 2, 3, 4];

function addNewElement(newNumber: number) {
    if (!arr.includes(newNumber)) {
        arr.push(newNumber);
    }
    return arr;
}
console.log(addNewElement(4));

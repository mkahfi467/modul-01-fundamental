/**
 * 1. Write a function from a given array of mixed data types and return the sum of all the number
 * Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */
const mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2];

function cariAngka() {
    let jumlahNumber: number = 0;

    mixedArray.forEach((value, index) => {
        if (typeof (value) === "number") {
            console.log("TRUE");
            jumlahNumber++;
        } else {
            if (parseInt(value)) {
                console.log("TRUE");
                jumlahNumber++;
            } else {
                console.log("FALSE");
            }
        }
    });

    return jumlahNumber;
}

console.log(cariAngka());

/**
 * 1. Write a function that will combine 2 given array into one array
 * Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

function gabungkanArray() {
    return arr1.concat(arr2);
}

console.log(gabungkanArray());

/**
 * 2. Write a function to find duplicate values in an array
 * Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 */

const arr: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const duplicateNumber: number[] = [];

function cariAngkaKembar() {

    arr.forEach((value, index) => {
        for (let i: number = index + 1; i < arr.length; i++) {
            if (value === arr[i]) {
                if (!duplicateNumber.includes(value)) {
                    duplicateNumber.push(value);
                }
            }
        }
    })

    return duplicateNumber;
}

console.log(cariAngkaKembar());

/**
 * 3. Write a function to find the difference in 2 given array
 * Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 */
arr1 = [1, 2, 3, 4, 5];
arr2 = [3, 4, 5, 6, 7];
const differenceNumber: number[] = [];

function cariAngkaBeda() {
    arr1.forEach((value) => {
        if (!arr2.includes(value)) {
            differenceNumber.push(value);
        }
    })

    arr2.forEach((value) => {
        if (!arr1.includes(value)) {
            differenceNumber.push(value);
        }
    })

    return differenceNumber;
}

console.log(cariAngkaBeda());

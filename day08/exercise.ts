// Exercise 1
interface IStudent {
    name: string,
    email: string
}
const array1: IStudent[] = [
    { name: 'Student 4', email: 'student4@mail.com' },
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
]
const array2: IStudent[] = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' },
    { name: 'Student 4', email: 'student4@mail.com' }
]
const mergeArray = (array1: IStudent[], array2: IStudent[]) => {
    const combine = array1;

    array2.forEach((value) => {
        // const exists = combine.some((e) => Object.is(e.name, value.name));
        const exists = combine.some((e) => e.name === value.name && e.email === value.email);
        if (!exists) {
            combine.push(value);
        }
    })

    return combine;
};

console.log(mergeArray(array1, array2));

// Exercise 2
const array3 = [{ name: 'David', age: 20 }, { name: 'Adi', age: 17 }];

function ubah(array: any) {
    const ubah: any = [];

    array.forEach((val: any) => {
        const objekBaru: any = {};
        // console.log(val);
        
        for (const key in val) {
            const value = val[key];
            // console.log(typeof(value));
            
            objekBaru[value] = key;
        }
        ubah.push(objekBaru);
    });
    return ubah;
}
console.log(ubah(array3));


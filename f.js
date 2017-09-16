// const arr = new Array();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const numbers = [1, 3, 6, 2, 4, 9];

const people = [
    new Person('Teo Nguyen', 10),
    new Person('Ti Nguyen', 15),
    new Person('Tun Nguyen', 13),
];

function getBigArrNum(arrNumbers) {
    const arrOutput = [];
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 2) arrOutput.push(arrNumbers[i]);
    }
    return arrOutput;
}

function getOldPeople(arrPerson) {
    const arrOutput = [];
    for (let i = 0; i < arrPerson.length; i++) {
        if (arrPerson[i].age > 12) arrOutput.push(arrPerson[i]);
    }
    return arrOutput;
}

function myFilter(arr, checkElement) {
    const arrOutput = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkElement(arr[i])) arrOutput.push(arr[i]);
    }
    return arrOutput;
}

console.log(myFilter(numbers, e => e > 2));
console.log(myFilter(people, person => person.age > 12));

// console.log(getBigArrNum(numbers))

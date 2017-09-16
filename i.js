class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const people = [
    new Person('Teo Nguyen', 10),
    new Person('Ti Nguyen', 15),
    new Person('Tun Nguyen', 13),
];

const numbers = [1, 3, 6, 2, 4, 9];

// const arrElder = people.filter(person => console.log(person.age > 12));
// console.log(arrElder);

const arrSqr = numbers.map(e => e * e);
const arrAge = people.map(person => person.age);
console.log(arrAge);
// people.forEach(e => console.log(e.name));

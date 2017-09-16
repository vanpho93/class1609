class School {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Person {
    constructor(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }
}

const abcSchool = new School('Tieu hoc ABC', '92 LTR');
const teo = new Person('Teo Nguyen', 10, abcSchool);

console.log(teo.school.name);

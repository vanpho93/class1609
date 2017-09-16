
class Person {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    sayHello() {
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi.`);
    }

    topUp(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const teo = new Person('Pho', 10, 100);
console.log(teo);
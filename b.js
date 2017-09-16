function Person(ten, tuoi, soDu) {
    this.name = ten;
    this.age = tuoi;
    this.balance = soDu;
    this.sayHello = function() {
        console.log(`Xin chao, toi la ${this.name}, ${this.age} tuoi.`);
    }
    this.topUp = function(amount) {
        this.balance += amount;
    }
    this.withdraw = function(amount) {
        this.balance -= amount;
    }
}

const teo = new Person('Teo Nguyen', 10, 100);
// const ti = new Person('Ti Nguyen', 10);
// const tun = new Person('Tun Nguyen', 10);

console.log(teo);
// console.log(teo.name);
// teo.sayHello();
teo.topUp(200);
console.log(teo);

// class Point x y
// class Line pointA pointB, getLength()
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const l1 = new Line(this.pointA, this.pointB);
        const l2 = new Line(this.pointB, this.pointC);
        const l3 = new Line(this.pointA, this.pointC);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const pA = new Point(0, 0);
const pB = new Point(0, 1);
const pC = new Point(1, 0);
// const l1 = new Line(pA, pB);
// console.log(l1.getLength());
const t1 = new Triangle(pA, pB, pC);
console.log(t1.getPerimeter());

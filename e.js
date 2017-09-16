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
    constructor() {

    }

    getPerimeter() {
        
    }
}

const pA = new Point(0, 0);
const pB = new Point(0, 10);
const l1 = new Line(pA, pB);
console.log(l1.getLength());
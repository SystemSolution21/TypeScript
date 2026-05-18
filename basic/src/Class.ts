// Class
class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

}

const person = new Person('Alice');
console.log(person.getName()); // Output: Alice
// console.log(person.name); // Property 'name' is private and only accessible within class 'Person'.

// Class inheritance from interface using keyword `implements`
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {

    public constructor(protected readonly width: number, protected readonly height: number) {
        this.width = width;
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle with width ${this.width} and height ${this.height}`;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // Output: 50
console.log(rectangle.toString()); // Output: Rectangle with width 5 and height 10

// Class inheritance from parent class using keyword `extends`
class Square extends Rectangle {

    public constructor(width: number) {
        super(width, width);
    }
    // Override
    public override getArea(): number {
        return this.width ** 2;
    }
    // Override
    public override toString(): string {
        return `Square with side length ${this.width}`;
    }
}

const square = new Square(7);
console.log(square.getArea()); // Output: 49
console.log(square.toString()); // Output: Square with side length 7

// Abstract Class do not implement all the members
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `This is a polygon with area: ${this.getArea()}`;
    }

}

class Triangle extends Polygon {
    public constructor(protected readonly base: number, protected readonly height: number) {
        super();
    }
    public getArea(): number {
        return 0.5 * this.base * this.height;
    }
}

const triangle = new Triangle(4, 6);
console.log(triangle.getArea()); // Output: 12
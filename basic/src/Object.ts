// objects initialize
const car: { brand: string, model: string, year: number } = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
}
console.log(car);
console.log(car.brand);
console.log(car.model);
console.log(car.year);


// Object create using interface
interface Person {
    name: string;
    age?: number; // Optional property
}
const person1: Person = { name: 'Alice' };
const person2: Person = { name: 'Bob', age: 30 };
console.log(person1);
console.log(person2);

// Object create using type
type Circle = {
    radius: number;
    getArea: () => number;
};

const circle: Circle = {
    radius: 5,
    getArea: function () {
        let area: number = Math.PI * this.radius ** 2;
        return Number(area.toFixed(2));
    }
};
console.log("Radius of the circle:", circle.radius);
console.log("Area of the circle:", circle.getArea());

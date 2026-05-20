// Partial
interface Todo {
    title: string;
    description: string;
}
let todo1: Partial<Todo> = {
    title: 'Check email'
    // Partial allow optional
};
console.log(todo1);

// Required
interface Car {
    brand: string;
    model: string;
    milage?: number;
}
let car1: Required<Car> = {
    brand: 'Toyota',
    model: 'Camry',
    milage: 20000 // Required to define
};
console.log(car1);

// Readonly
interface Point {
    x: number;
    y: number;
}
let point: Readonly<Point> = {
    x: 10,
    y: 20
}
// point.x = 30; // Cannot assign to 'x' because it is a read-only property.
console.log(point);

// Record
interface CatInfo {
    breed: string;
    age: number;
}
type CatName = 'miffy' | 'boris' | 'mordred';
const cats: Record<CatName, CatInfo> = {
    miffy: { breed: 'Persian', age: 10 },
    boris: { breed: 'Maine Coon', age: 5 },
    mordred: { breed: 'British Shorthair', age: 16 },
};
console.log(cats);


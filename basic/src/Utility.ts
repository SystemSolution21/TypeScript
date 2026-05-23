// Partial enable all properties as optional
interface Todo {
    title: string;
    description: string;
}
let todo1: Partial<Todo> = {
    title: 'Check email'
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

// Omit
interface Person {
    name: string;
    age: number;
    email?: string;
}
type PersonNameOnly = Omit<Person, 'age' | 'email'>;
const person: PersonNameOnly = {
    name: 'Alice',
};
console.log(person);

// Pick choose only specified key
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
type TodoPreview = Pick<Todo, 'title'>;
const todo: TodoPreview = {
    title: 'Clean room',
};
console.log(todo);

// Exclude type from union
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true;
console.log(value);
type T = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
const t: T = 'b';
console.log(t);

// ReturnType
type VerticesGenerator = () => { x: number, y: number };
const vertices: ReturnType<VerticesGenerator> = {
    x: 10,
    y: 20
};
console.log(vertices);

// Parameters
type PointPrinter = (p: { x: number, y: number }) => void;
const pointPrinter: Parameters<PointPrinter>[0] = { x: 10, y: 20 };
console.log(pointPrinter);



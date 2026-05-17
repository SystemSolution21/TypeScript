// Type Alias and Interface
interface Circle {
    kind: 'circle';
    radius: number;
};
interface Square {
    kind: 'square';
    length: number;
};
interface Triangle {
    kind: 'triangle';
    base: number;
    height: number;
};

// type Shape = Circle | Square | Triangle;
type Shape = Circle | Square;
function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.length * shape.length;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        // case 'triangle':
        //     return 0.5 * shape.base * shape.height;
        default:
            // Exhaustiveness checking
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({ kind: 'square', length: 5 }));
console.log(getArea({ kind: 'circle', radius: 3 }));
// console.log(getArea({ kind: 'triangle', base: 4, height: 6 }));

// Optional property in interface
interface Person {
    name: string;
    age?: number; // Optional property
}
const person1: Person = { name: 'Alice' };
const person2: Person = { name: 'Bob', age: 30 };
console.log(person1);
console.log(person2);

// Using reduce method to group objects
interface User {
    id: number;
    role: string;
    name: string;
    address: {
        street?: string; // Optional property
        city?: string;
        state?: string;
        zip?: number;
    }
}
const users: User[] = [
    { id: 1, role: 'admin', name: 'Alice', address: {} },
    {
        id: 2, role: 'user', name: 'Bob', address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: 10001
        }
    },
    { id: 3, role: 'admin', name: 'Charlie', address: {} },
];
const groupedByRole = users.reduce((acc, user) => {
    (acc[user.role] = acc[user.role] || []).push(user);
    return acc;
}, {} as Record<string, User[]>);
console.log(groupedByRole);

// Optional chaining (?.) - safely access nested properties
// Accessing street for Bob (user at index 1)
const bobStreet = users[1]?.address?.street;
console.log('Bob\'s street (with optional chaining):', bobStreet); // Expected: '123 Main St'
// Accessing street for Alice (user at index 0), where address.street is undefined
const aliceStreet = users[0]?.address?.street;
console.log('Alice\'s street (with optional chaining):', aliceStreet); // Expected: undefined

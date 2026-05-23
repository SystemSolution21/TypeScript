// Keyof with explicit key
interface Person {
    name: string;
    age: number;
    city: string;
}
function getProperty(person: Person, property: keyof Person) {
    return person[property];
}
let person: Person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
console.log("The person name is", getProperty(person, 'name'));
console.log("The person age is", getProperty(person, 'age'));
console.log(`The person is from ${getProperty(person, 'city')} city`);

// Keyof with index signature
type StringMap = { [key: string]: unknown };
function createStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value };
}
console.log(JSON.stringify(createStringPair('name', 'Alice')));
console.log(JSON.stringify(createStringPair('age', '30')));
console.log(JSON.stringify(createStringPair('city', 'New York')));

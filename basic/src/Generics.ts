// Generics Function
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity('Hello World'))
console.log(identity(42))
console.log(identity(true))

function createPair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}
console.log(createPair<string, number>('id', 42));
console.log(createPair<number, string>(200, 'Success'));
console.log(createPair<string, string>('color', 'red'));

// Generic Type Alias

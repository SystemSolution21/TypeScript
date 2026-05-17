// Type Any
let value: any = true
value = "string"
Math.round(value) // no error as it can be "any" type. But  it should be avoided at "any" cost...

// Type Unknown
function processValue(value: unknown) {
    if (typeof value === 'number') {
        console.log(`The typeof value is a number: ${value}`);
    } else if (typeof value === 'string') {
        console.log(`The typeof value is a string: ${value}`);
    } else if (Array.isArray(value)) {
        console.log(`The typeof value is an Array: ${value}`);
    } else if (typeof value === 'boolean') {
        console.log(`The typeof value is a boolean: ${value}`);
    } else {
        console.log(`The typeof value is of an unknown type.`);
    }
}
processValue(42);
processValue('Hello');
processValue([1, 2, 3]);
processValue(true);
processValue(null);

// Type undefined null
let x: undefined = undefined;
let y: null = null;
console.log(x);
console.log(y);

// Nullish coalescing (??) - only uses default if value is null or undefined
let inputNull = null;
let valueNull = inputNull ?? 'default for null';
console.log('Nullish coalescing with null:', valueNull); // Output: default for null

let inputUndefined = undefined;
let valueUndefined = inputUndefined ?? 'default for undefined';
console.log('Nullish coalescing with undefined:', valueUndefined); // Output: default for undefined

let inputZero = 0;
let valueZero = inputZero ?? 'default for zero';
console.log('Nullish coalescing with 0:', valueZero); // Output: 0 (0 is not null/undefined)


// Type never
function throwError(message: string): never {
    throw new Error(message);
}
let errMessage: string;
errMessage = throwError('An error occurred using type never.');
console.log(errMessage);

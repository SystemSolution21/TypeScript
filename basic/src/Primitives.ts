// Boolean
let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type
console.log(isActive);
console.log(hasPermission);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point
const hugeNumber: bigint = BigInt(9007199254740991);
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(float);
console.log(hugeNumber);

// String
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
console.log(sentence);

// Symbol
const uniqueKey: symbol = Symbol(`description`);
const obj = {
    [uniqueKey]: `This is a unique property using Symbol.`
};
console.log(obj[uniqueKey]);
console.log(obj);
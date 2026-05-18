// void function
function logMessage(message: string): void {
    console.log(message);
}
logMessage('This is a log message from a void function which do not return anything.');

// Default parameter
function pow(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}
console.log(pow(3));
console.log(pow(3, 3));

// Rest(...) parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
let result: number = sum(1, 2, 3, 4, 5);
console.log('Sum of numbers using ... rest parameter:', result);

// Optional parameter (implicitly `string | undefined`)
function greet(name?: string): string {
    return `Hello, ${name || 'Guest'}!`;
}
console.log(greet());
console.log(greet('Alice'));

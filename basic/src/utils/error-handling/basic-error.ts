// Basic Error Handling
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}
try {
    let resultA = divide(10, 2);
    let resultB = divide(10, 0);
    console.log('Result:', resultA);
    console.log('Result:', resultB);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error('Error:', error.message);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}

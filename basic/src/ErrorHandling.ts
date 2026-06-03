// try/catch
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}
try {
    let result = divide(10, 0);
    // let result = divide(10, 2);
    console.log('Result:', result);
} catch (error) {
    if (error instanceof Error) {
        console.error('Error:', error.message);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}


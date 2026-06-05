// Type Assertion Error Handling
function assertIsError(error: unknown): asserts error is Error {
    if (!(error instanceof Error)) {
        throw new Error('Not an error');
    }
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

try {
    let resultA = divide(10, 0);
    console.log('Result:', resultA);
} catch (error: unknown) {
    assertIsError(error);
    // From this point onwards, 'error' is typed as 'Error'
    console.error('Error:', error.message);
}
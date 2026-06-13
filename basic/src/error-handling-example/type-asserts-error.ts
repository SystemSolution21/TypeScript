/**
 * Type assertion error handling example
 * Demonstrates using type assertion functions for error narrowing
 */

import { logger } from '../utils/logger.js';
import { assertIsError } from '../errors/error-guards.js';

/**
 * Divides two numbers
 */
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

/**
 * Example: Using assertion functions to narrow error types
 */
function typeAssertionExample(): void {
    logger.info('=== Type Assertion Error Handling Example ===');

    try {
        const result = divide(10, 0);
        logger.info(`Result: ${result}`);
    } catch (error) {
        assertIsError(error);
        logger.error(`Division error: ${error.message}`);
    }
}

typeAssertionExample();
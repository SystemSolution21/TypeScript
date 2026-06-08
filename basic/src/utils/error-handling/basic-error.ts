/**
 * Basic error handling example
 * Demonstrates simple try/catch pattern for synchronous operations
 */

import { logger } from '../logger.js';

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
 * Example: Basic error handling with try/catch
 */
function basicErrorHandlingExample(): void {
    logger.info('=== Basic Error Handling Example ===');

    try {
        const resultA = divide(10, 2);
        logger.info(`10 / 2 = ${resultA}`);

        const resultB = divide(10, 0);
        logger.info(`10 / 0 = ${resultB}`);
    } catch (error) {
        if (error instanceof Error) {
            logger.error(`Division error: ${error.message}`);
        } else {
            logger.error('An unexpected error occurred', error);
        }
    }
}

basicErrorHandlingExample();

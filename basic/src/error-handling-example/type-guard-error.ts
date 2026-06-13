/**
 * Type guards error handling example
 * Demonstrates using type guards to safely narrow error types and values
 */

import { logger } from '../utils/logger.js';
import { isValidationError, isDatabaseError, isErrorWithMessage } from '../errors/error-guards.js';
import { validateUser } from '../validators/user.validator.js';
import type { User } from '../types/user.js';

// ===== Primitive Type Guards =====

/**
 * Type guard to check if value is a string
 */
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

/**
 * Type guard to check if value is a number
 */
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

/**
 * Type guard to check if value is a boolean
 */
function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}

/**
 * Processes a value based on its type using type guards
 */
function processValue(value: unknown): string {
    if (isString(value)) {
        return value.toUpperCase();
    } else if (isNumber(value)) {
        return value.toFixed(2);
    } else if (isBoolean(value)) {
        return String(!value);
    } else {
        return 'Unknown type';
    }
}

/**
 * Example: Primitive type guards
 */
function primitiveTypeGuardsExample(): void {
    logger.info('=== Primitive Type Guards Example ===');
    logger.info(`processValue('Hello') = ${processValue('Hello')}`);
    logger.info(`processValue(42) = ${processValue(42)}`);
    logger.info(`processValue(true) = ${processValue(true)}`);
    logger.info(`processValue(null) = ${processValue(null)}`);
}

// ===== Error Type Guards =====

/**
 * Example: Error type guards for custom errors
 */
function errorTypeGuardsExample(): void {
    logger.info('=== Error Type Guards Example ===');

    const user: User = { name: '', email: '' };

    try {
        validateUser(user);
    } catch (error) {
        if (isValidationError(error)) {
            logger.error(`Validation Error [Field: ${error.field}]: ${error.message}`);
        } else if (isDatabaseError(error)) {
            logger.error(`Database Error [Code: ${error.errorCode}]: ${error.message}`);
        } else if (isErrorWithMessage(error)) {
            logger.error(`Error: ${error.message}`);
        } else {
            logger.error(`Unexpected error: ${error}`);
        }
    }
}

primitiveTypeGuardsExample();
errorTypeGuardsExample();
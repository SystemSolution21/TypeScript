/**
 * Type guards and assertions for error handling
 * @module utils/error-guards
 */

import { ValidationError, DatabaseError, NetworkError, AppError } from '../errors/core.js';

/**
 * Type guard to check if value is a standard Error
 */
export function isError(error: unknown): error is Error {
    return error instanceof Error;
}

/**
 * Type guard to check if error is a ValidationError
 */
export function isValidationError(error: unknown): error is ValidationError {
    return error instanceof ValidationError;
}

/**
 * Type guard to check if error is a DatabaseError
 */
export function isDatabaseError(error: unknown): error is DatabaseError {
    return error instanceof DatabaseError;
}

/**
 * Type guard to check if error is a NetworkError
 */
export function isNetworkError(error: unknown): error is NetworkError {
    return error instanceof NetworkError;
}

/**
 * Type guard to check if error has a message property
 */
export function isErrorWithMessage(error: unknown): error is { message: string } {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as Record<string, unknown>).message === 'string'
    );
}

/**
 * Assertion function to ensure value is an Error
 * Provides type narrowing after the assertion
 */
export function assertIsError(error: unknown): asserts error is Error {
    if (!isError(error)) {
        throw new Error(`Expected Error, got ${typeof error}`);
    }
}

/**
 * Assertion function to ensure error is an AppError
 */
export function assertIsAppError(error: unknown): asserts error is AppError {
    if (!(error instanceof AppError)) {
        throw new Error('Expected AppError');
    }
}

/**
 * Extract error message safely from any error type
 */
export function getErrorMessage(error: unknown): string {
    if (isError(error)) {
        return error.message;
    }
    if (isErrorWithMessage(error)) {
        return error.message;
    }
    return 'An unknown error occurred';
}

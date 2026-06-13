/**
 * Custom error classes for application-specific error handling
 * @module errors/core
 */

import { HttpStatus, DatabaseErrorCode } from '../constants/http-status.js';

/**
 * Base application error with consistent structure
 */
export abstract class AppError extends Error {
    abstract readonly statusCode: number;
    abstract readonly code: string;

    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, AppError.prototype);
    }

    /**
     * Serialize error to JSON for logging or API responses
     */
    toJSON() {
        return {
            code: this.code,
            message: this.message,
            statusCode: this.statusCode,
        };
    }
}

/**
 * Validation error for input/data validation failures
 */
export class ValidationError extends AppError {
    readonly statusCode = HttpStatus.BadRequest;
    readonly code = 'VALIDATION_ERROR';

    constructor(
        message: string,
        public readonly field?: string,
    ) {
        super(message);
        Object.setPrototypeOf(this, ValidationError.prototype);
        this.name = 'ValidationError';
    }

    toJSON() {
        return {
            ...super.toJSON(),
            field: this.field,
        };
    }
}

/**
 * Database error for database operation failures
 */
export class DatabaseError extends AppError {
    readonly statusCode = HttpStatus.InternalServerError;
    readonly code = 'DATABASE_ERROR';

    constructor(
        message: string,
        public readonly errorCode: DatabaseErrorCode,
    ) {
        super(message);
        Object.setPrototypeOf(this, DatabaseError.prototype);
        this.name = 'DatabaseError';
    }

    toJSON() {
        return {
            ...super.toJSON(),
            errorCode: this.errorCode,
        };
    }
}

/**
 * Network error for HTTP/network failures
 */
export class NetworkError extends AppError {
    readonly code = 'NETWORK_ERROR';

    constructor(
        public readonly status: HttpStatus,
        message: string,
    ) {
        super(message);
        Object.setPrototypeOf(this, NetworkError.prototype);
        this.name = 'NetworkError';
    }

    get statusCode(): number {
        return this.status;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            httpStatus: this.status,
        };
    }
}

/**
 * Type guard to check if an error is an AppError
 */
export function isAppError(error: unknown): error is AppError {
    return error instanceof AppError;
}

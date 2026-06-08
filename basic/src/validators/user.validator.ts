/**
 * User validation logic
 * @module validators/user.validator
 */

import type { User } from '../types/user.js';
import { ValidationError } from '../errors/core.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 100;

/**
 * Validates that user name is provided and within acceptable length
 * @throws {ValidationError} if name validation fails
 */
function validateUserName(name: string): void {
    if (!name || name.trim().length === 0) {
        throw new ValidationError('Name is required', 'name');
    }

    if (name.length > MAX_NAME_LENGTH) {
        throw new ValidationError(
            `Name must be less than ${MAX_NAME_LENGTH} characters`,
            'name',
        );
    }
}

/**
 * Validates that email is in valid format
 * @throws {ValidationError} if email validation fails
 */
function validateUserEmail(email: string): void {
    if (!email || email.trim().length === 0) {
        throw new ValidationError('Email is required', 'email');
    }

    if (!EMAIL_REGEX.test(email)) {
        throw new ValidationError('Invalid email format', 'email');
    }
}

/**
 * Validates complete user object
 * @param user - User object to validate
 * @throws {ValidationError} if validation fails
 */
export function validateUser(user: User): void {
    validateUserName(user.name);
    validateUserEmail(user.email);
}

/**
 * Validates user safely without throwing, returns validation result
 */
export function validateUserSafe(user: User): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    try {
        validateUserName(user.name);
    } catch (error) {
        if (error instanceof ValidationError) {
            errors.push(`${error.field}: ${error.message}`);
        }
    }

    try {
        validateUserEmail(user.email);
    } catch (error) {
        if (error instanceof ValidationError) {
            errors.push(`${error.field}: ${error.message}`);
        }
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}

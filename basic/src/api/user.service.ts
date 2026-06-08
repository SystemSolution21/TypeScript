/**
 * User API service for backend communication
 * @module api/user.service
 */

import type { User, UserResponse } from '../types/user.js';
import { NetworkError, DatabaseError } from '../errors/core.js';
import { HttpStatus, DatabaseErrorCode, DB_PROTOCOLS } from '../constants/http-status.js';
import { logger } from '../utils/logger.js';

/**
 * Validates database connection URI format
 * @throws {DatabaseError} if URI format is invalid
 */
function validateDatabaseUri(uri: string): boolean {
    const isValid =
        uri.startsWith(DB_PROTOCOLS.MONGODB) ||
        uri.startsWith(DB_PROTOCOLS.MYSQL) ||
        uri.startsWith(DB_PROTOCOLS.POSTGRESQL);

    if (!isValid) {
        throw new DatabaseError(
            `Invalid database connection URI protocol. Supported: ${Object.values(DB_PROTOCOLS).join(', ')}`,
            DatabaseErrorCode.InvalidProtocol,
        );
    }

    return true;
}

/**
 * Fetches a user from the API by ID
 * @param userId - The user ID to fetch
 * @returns Promise resolving to the User object
 * @throws {NetworkError} if the API request fails
 * @example
 * const user = await getUser(1);
 */
export async function getUser(userId: number): Promise<User> {
    try {
        logger.debug(`Fetching user with ID: ${userId}`);
        const response = await fetch(`/api/users/${userId}`);

        if (!response.ok) {
            logger.error(`Failed to fetch user: ${response.status}`);
            throw new NetworkError(
                response.status as HttpStatus,
                `HTTP error! Status: ${response.status}`,
            );
        }

        const data = (await response.json()) as User;
        logger.info(`User ${userId} fetched successfully`);
        return data;
    } catch (error) {
        if (error instanceof NetworkError) {
            throw error;
        }

        logger.error('Error fetching user', error);
        throw new NetworkError(
            HttpStatus.InternalServerError,
            'Failed to fetch user from API',
        );
    }
}

/**
 * Fetches a user's posts from the API
 * @param userId - The user ID to fetch posts for
 * @returns Promise resolving to array of posts, or empty array on error
 * @example
 * const posts = await getUserPosts(1);
 */
export async function getUserPosts(userId: number): Promise<unknown[]> {
    try {
        logger.debug(`Fetching posts for user: ${userId}`);
        const response = await fetch(`/api/users/${userId}/posts`);

        if (!response.ok) {
            logger.warn(`Failed to fetch posts: ${response.status}`);
            throw new NetworkError(
                response.status as HttpStatus,
                `HTTP error! Status: ${response.status}`,
            );
        }

        const data = await response.json();
        logger.info(`Posts for user ${userId} fetched successfully`);
        return data as unknown[];
    } catch (error) {
        if (error instanceof NetworkError) {
            logger.warn(`Network error fetching posts: ${error.message}`);
            // Return empty array as fallback for non-critical data
            return [];
        }

        logger.error('Unexpected error fetching posts', error);
        return [];
    }
}

/**
 * Registers a new user in the system
 * @param user - User object to register
 * @param databaseUri - Database connection URI
 * @throws {DatabaseError} if database connection is invalid
 * @example
 * await registerUser({ name: "John Doe", email: "john@example.com" }, "mongodb://localhost:27017");
 */
export async function registerUser(user: User, databaseUri: string): Promise<void> {
    try {
        logger.info(`Registering user: ${user.name}`);

        // Validate database connection
        validateDatabaseUri(databaseUri);

        // Simulate API call
        logger.debug(`Database connection validated: ${databaseUri}`);
        logger.info(`User registered successfully: ${user.name} (${user.email})`);
    } catch (error) {
        if (error instanceof DatabaseError) {
            logger.error('Database connection error', error);
            throw error;
        }

        logger.error('Error registering user', error);
        throw new DatabaseError(
            'Failed to register user',
            DatabaseErrorCode.InvalidProtocol,
        );
    }
}

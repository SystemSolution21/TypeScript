/**
 * Async error handling example
 * Demonstrates error handling in asynchronous operations (async/await and promises)
 */

import { logger } from '../logger.js';
import { getErrorMessage, isNetworkError } from '../error-guards.js';
import type { User } from '../../types/user.js';

/**
 * Fetches a user from the API using async/await
 */
async function getUser(userId: number): Promise<User> {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return (await response.json()) as User;
    } catch (error) {
        logger.error('Failed to fetch user', error);
        throw error;
    }
}

/**
 * Fetches a user's posts using Promise chain pattern
 */
function fetchUserPosts(userId: number): Promise<unknown[]> {
    return fetch(`/api/users/${userId}/posts`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json() as Promise<unknown[]>;
        })
        .catch((error) => {
            if (isNetworkError(error)) {
                logger.warn(`Failed to fetch user posts: ${error.message}`);
                return [];
            }
            logger.error('Unexpected error fetching posts', error);
            return [];
        });
}

/**
 * Example: Async/await error handling
 */
async function asyncAwaitExample(): Promise<void> {
    logger.info('=== Async/Await Error Handling Example ===');

    try {
        const user = await getUser(1);
        logger.info(`User fetched: ${user.name} (${user.email})`);
    } catch (error) {
        logger.error(`Error in async/await: ${getErrorMessage(error)}`);
    }
}

/**
 * Example: Promise chain error handling
 */
async function promiseChainExample(): Promise<void> {
    logger.info('=== Promise Chain Error Handling Example ===');

    const posts = await fetchUserPosts(1);
    logger.info(`Fetched ${posts.length} posts`);
}

asyncAwaitExample();
promiseChainExample();


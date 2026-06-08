/**
 * User domain types
 * @module types/user
 */

/**
 * Represents a user in the system
 */
export interface User {
    id?: number;
    name: string;
    email: string;
}

/**
 * API response wrapper for user data
 */
export interface UserResponse {
    success: boolean;
    data?: User;
    error?: string;
}

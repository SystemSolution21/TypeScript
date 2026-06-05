// Error Custom Class

// Define Validation Error
class ValidationError extends Error {
    field?: string | undefined;

    constructor(message: string, field?: string) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

// Database Error Code
enum DbErrCode {
    Protocol = 5001
}

// Define Database Error
class DatabaseError extends Error {
    code: number;

    constructor(message: string, code: number) {
        super(message);
        this.name = 'DatabaseError';
        this.code = code;
    }
}

// Define User
interface User {
    name: string;
    email: string;
};

// User Validation
function validateUser(user: User): void {
    if (!user.name) {
        throw new ValidationError('Name is required', 'name');
    }
    if (!user.email) {
        throw new ValidationError('Email is required', 'email');
    }
    if (!user.email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
}

// Database Connection Validation
async function ValidateDatabaseConnection(dburi: string): Promise<boolean> {
    if (!dburi.startsWith('mongodb://') && !dburi.startsWith('mysql://')) {
        throw new DatabaseError('Invalid database connection URI protocol', DbErrCode.Protocol);
    }
    return true
}

// User Registration
async function registerUser(user: User, dburi: string): Promise<void> {
    try {
        // Validate User
        validateUser(user);
        // Validate Database Connection
        await ValidateDatabaseConnection(dburi);
        // log
        console.log(`Database connection is valid`);
        console.log(`User is registered: ${user.name}, ${user.email}`);
        // Register User
    } catch (error: unknown) {
        if (error instanceof ValidationError) {
            console.error(`Validation Error [Field: ${error.field}]: ${error.message}`);
        } else if (error instanceof DatabaseError) {
            console.error(`Database Error [Code: ${error.code}]: ${error.message}`);
        } else {
            console.error('An unexpected error occurred:', error);
        }
    }
}

async function userRegistration(): Promise<void> {
    await registerUser({ name: "John Doe", email: "john.doe@example.com" }, 'mongodb://localhost:27017');
    await registerUser({ name: "", email: "john.doe@example.com" }, 'mongodb://localhost:27017');
    await registerUser({ name: "John Doe", email: "john.doeexample.com" }, 'mongodb://localhost:27017');
    await registerUser({ name: "John Doe", email: "john.doe@example.com" }, 'mysql://localhost:3306');
    await registerUser({ name: "John Doe", email: "john.doe@example.com" }, 'postgresql://localhost:5432');

}

// Type Guards for Error
function isValidationError(error: unknown): error is ValidationError {
    return error instanceof ValidationError;
}
function isDatabaseError(error: unknown): error is DatabaseError {
    return error instanceof DatabaseError;
}
function isErrorWithMessage(error: unknown): error is { message: string } {
    return typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as { message: string }).message === 'string';
}

function userValidation(user: User) {
    try {
        validateUser(user);
    } catch (error: unknown) {
        if (isValidationError(error)) {
            console.error(`Validation Error [Field: ${error.field}]: ${error.message}`);
        } else if (isDatabaseError(error)) {
            console.error(`Database Error [Code: ${error.code}]: ${error.message}`);
        } else if (isErrorWithMessage(error)) {
            console.error(`An error occurred: ${error.message}`);
        } else {
            console.error(`An unexpected error occurred: ${error}`);
        }

    }
}

// Usage
userValidation({ name: "", email: "" });
userRegistration();



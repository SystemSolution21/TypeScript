// try/catch
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}
try {
    let result = divide(10, 0);
    // let result = divide(10, 2);
    console.log('Result:', result);
} catch (error) {
    if (error instanceof Error) {
        console.error('Error:', error.message);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}

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
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(`Validation Error [Field: ${error.field}]: ${error.message}`);
        } else if (error instanceof DatabaseError) {
            console.error(`Database Error [Code: ${error.code}]: ${error.message}`);
        } else {
            console.error('An unexpected error occurred:', error);
        }
    }
}

// Usage
async function runUserRegistration(): Promise<void> {
    await registerUser({ name: "John Doe", email: "john.doe@example.com" }, 'mongodb://localhost:27017');
    await registerUser({ name: "", email: "john.doe@example.com" }, 'mongodb://localhost:27017');
    await registerUser({ name: "John Doe", email: "john.doeexample.com" }, 'mongodb://localhost:27017');
    await registerUser({ name: "John Doe", email: "john.doe@example.com" }, 'mysql://localhost:3306');
    await registerUser({ name: "John Doe", email: "john.doe@example.com" }, 'postgresql://localhost:5432');

}
runUserRegistration();

// Type Guards
function isString(value: unknown): value is string {
    return typeof value === 'string';
}
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}
function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}
function processValue(value: unknown) {
    if (isString(value)) {
        return value.toUpperCase();
    } else if (isNumber(value)) {
        return value.toFixed(2);
    } else if (isBoolean(value)) {
        return !value;
    } else {
        return 'Unknown type';
    }
}
console.log(processValue('Hello'));
console.log(processValue(42));
console.log(processValue(true));
console.log(processValue(null));
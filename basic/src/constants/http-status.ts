/**
 * HTTP and database constants
 * @module constants/http-status
 */

export enum HttpStatus {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    MovedPermanently = 301,
    Found = 302,
    TemporaryRedirect = 307,
    PermanentRedirect = 308,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
}

export enum DatabaseErrorCode {
    InvalidProtocol = 5001,
}

export const DB_PROTOCOLS = {
    MONGODB: 'mongodb://',
    MYSQL: 'mysql://',
    POSTGRESQL: 'postgresql://',
} as const;

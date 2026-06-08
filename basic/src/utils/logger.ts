/**
 * Simple logger utility for application logging
 * @module utils/logger
 */

export enum LogLevel {
    Debug = 'DEBUG',
    Info = 'INFO',
    Warn = 'WARN',
    Error = 'ERROR',
}

/**
 * Logger utility for consistent logging across the application
 */
export class Logger {
    private prefix: string;

    constructor(prefix: string = 'App') {
        this.prefix = prefix;
    }

    private formatMessage(level: LogLevel, message: string): string {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level}] [${this.prefix}] ${message}`;
    }

    /**
     * Log debug message
     */
    debug(message: string): void {
        console.debug(this.formatMessage(LogLevel.Debug, message));
    }

    /**
     * Log info message
     */
    info(message: string): void {
        console.info(this.formatMessage(LogLevel.Info, message));
    }

    /**
     * Log warning message
     */
    warn(message: string): void {
        console.warn(this.formatMessage(LogLevel.Warn, message));
    }

    /**
     * Log error message
     */
    error(message: string, error?: unknown): void {
        const errorDetails = error instanceof Error ? error.message : String(error);
        const fullMessage = errorDetails ? `${message} - ${errorDetails}` : message;
        console.error(this.formatMessage(LogLevel.Error, fullMessage));
    }
}

export const logger = new Logger('TypeScript');

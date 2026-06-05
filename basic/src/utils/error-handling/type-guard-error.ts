// Primitives Type Guards Error Handling
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
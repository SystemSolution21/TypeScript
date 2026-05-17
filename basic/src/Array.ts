// Array
let numbers: number[] = [1, 2, 3, 4, 5];
const names: readonly string[] = ['Alice', 'Bob', 'Charlie'];
let mixed: (number | string)[] = [1, 'two', 3, 'four'];
console.log(numbers);
console.log(names);
console.log(mixed);
console.log(numbers.push(6));
// console.log(names.push('Dave')); // Property 'push' does not exist on type 'readonly string[]'.

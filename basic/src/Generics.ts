// Generics Function
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity('Hello World'))
console.log(identity(42))
console.log(identity(true))

function createPair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}
console.log(createPair<string, number>('id', 42));
console.log(createPair<number, string>(200, 'Success'));
console.log(createPair<string, string>('color', 'red'));

// Generic Class
class namedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T): void {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value = new namedValue<number>('myNumber');
value.setValue(42);
console.log(value.toString());

// Generics Type Alias
type Wrapped<T> = { value: T };
let wrappedValue: Wrapped<number> = { value: 42 };
console.log(wrappedValue);
let wrappedString: Wrapped<string> = { value: 'Hello' };
console.log(wrappedString);

// Generic Template Literal Type
type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;
let red: HexColor<"red"> = "#ff0000";
let green: HexColor<"green"> = "#00ff00";
let blue: HexColor<"blue"> = "#0000ff";
console.log(`red: ${red}`);
console.log(`green: ${green}`);
console.log(`blue: ${blue}`);

// Constraint is add to Generic with keyword `extends`
function createLoggedPair<S extends string | number, T extends string | number>(value1: S, value2: T): [S, T] {
    console.log(`Creating pair: ${value1}, ${value2}`);
    return [value1, value2];
}
let logPair = createLoggedPair(10, 20);
console.log(logPair);
let logPair2 = createLoggedPair('hello', 'world');
console.log(logPair2);
let logPair3 = createLoggedPair('Alice', 42);
console.log(logPair3);
// let logPair4 = createLoggedPair(true, false); // boolean are not assignable


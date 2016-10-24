// Concatenation
const foo = 'hello';
const bar = 'world';

console.log(foo + ' ' + bar); // => hello world
// Multiplication and division
2 * 3;
2 / 3;
/**
 * Incrementing and decrementing
 * The pre-increment operator increments the operand before any further processing.
 * pre-increment:
 */

let i = 1;

console.log(++i); // 2
console.log(i);   // 2

/**
 * The post-increment operator increments the operand after processing it.
 * post-increment:
 */

let i = 1;

console.log(i++); // 1 - because i was 1
console.log(i);   // 2 - incremented after using it

// Addition vs. Concatenation
const foo = 1;
const bar = '2';

console.log(foo + bar); // 12
// Coercing a string to act as a number:
const foo = 1;
const bar = '2';

console.log(foo + Number(bar)); // 3
console.log(foo + (+bar)); // also 3. +bar => numeric representation of object ba

// Forcing a string to act as a number (using the unary plus operator):
console.log(foo + +bar); // 3

const foo = 1;
const bar = '2';
console.log(foo + bar);
const foo = 1;
const bar = '2';
console.log(foo + Number(bar));

console.log(foo + +bar);

// Logical AND and OR operators
const foo = 1;
const bar = 0;
const baz = 2;

// returns 1, which is true
console.log(foo || bar);

// returns 1, which is true
console.log(bar || foo);

// returns 0, which is false
console.log(foo && bar);

// returns 2, which is true
console.log(foo && baz);

// returns 1, which is true
console.log(baz && foo);

// do something with foo if foo is truthy
foo && doSomething(foo);

/**
 * set bar to baz if baz is truthy;
 * otherwise, set it to the return
 * value of createBar()
 */
const bar = baz || createBar();

// Comparison operators
const foo = 1;
const bar = 0;
const baz = '1';
const bim = 2;

foo == bar;   // false
foo != bar;   // true
foo == baz;   // true; Because == operator performs type coercion on different types

foo === baz;  // false
foo !== baz;  // true
foo === parseInt(baz); // true

foo > bim;  // false
bim > baz;  // true
foo <= baz;  // true

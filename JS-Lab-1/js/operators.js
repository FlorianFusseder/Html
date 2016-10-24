function createBar() {
  return 44;
}

function doSomething(foo) {
  console.log(foo);
}

// Comparison operators
const foo = 1;
let bar = 0;
let baz = '1';
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

// Logical AND and OR operators
baz = 2;

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

bar = baz || createBar();
foo && doSomething(foo);

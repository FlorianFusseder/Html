/**
 * Created by Florian on 24.10.2016.
 */

arr = [];
let counter = 0;

for (let i = 0; i < 8; i++)
  arr.push(Math.floor((Math.random() * 100) + 1) - 50);

arr.forEach(function (m) {
  console.log(m);
});

console.log('');

arr.forEach(function (m) {
  if (m > 0) {
    counter++;
    console.log(m);
  }
});

console.log(counter + ' numbers over 0');

let sum = arr.reduce(function (sum, current) {
  return sum + current;
});

console.log(sum / arr.length);

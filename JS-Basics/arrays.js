/**
 * Created by Florian on 24.10.2016.
 */

toDoList = ['brush teeth', 'shower', 'make hair', 'get clothed', 'put shoes on'];

toDoList.forEach(function (m) {
  console.log(m);
});

console.log('');

console.log(toDoList);

//native forEach
function printElement(elem) {
  console.log(elem);
}

function printElementAndIndex(elem, index) {
  console.log('Index ' + index + ': ' + elem);
}

function negateElement(elem, index, array) {
  array[index] = -elem;
}

myArray22 = [1, 2, 3, 4, 5];

// prints all elements to the console
myArray22.forEach(printElement);

// prints 'Index 0: 1' 'Index 1: 2' 'Index 2: 3' ...
myArray22.forEach(printElementAndIndex);

// myArray is now [ -1, -2, -3, -4, -5 ]
myArray22.forEach(negateElement);

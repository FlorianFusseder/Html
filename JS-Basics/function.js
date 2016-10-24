/**
 * Created by Florian on 24.10.2016.
 */

// A simple function
function greet(person, greeting)  {
  const text = greeting + ', ' + person;
  console.log(text);
}

const greeting = function (person, greeting) {

  return greeting + ', ' + person;
};

greet('Rebbecca', 'Hello');
greet('Florian', 'Yo');
console.log(greeting('Sonja', 'Hi'));

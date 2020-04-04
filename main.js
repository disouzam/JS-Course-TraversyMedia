// var, let and const

// var 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

// let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

// const 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

 // Strings, numbers, boolean, null, undefined, symbol

// const name = 'John';
// const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;

// // Concatenation
// console.log("Concatenation")
// console.log('My name is ' + name + ' and I am ' + age + '.');
// console.log('')

// // Template string

// const hello = `My name is ${name} and I am ${age}.`;

// console.log("Template string")
// console.log(hello);
// console.log('')

// String manipulation

// const s = 'Hello World!';
// console.log(s.toUpperCase());
// console.log(s.substring(0,5));

// console.log(s.split(''));

// Arrays

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangoes');
// fruits.unshift('strawberries');
// console.log(fruits);


// Manipulating objects

// const person = {
//   firstName:'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music','movies', 'sports'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state:'MA'
//   }
// }

// // console.log(person);
// console.log(person.firstName, person.lastName);

// console.log(person.hobbies.pop());
// console.log(person.hobbies.pop());
// console.log(person.hobbies.pop());

// Arrays of objects

const todos = [
  {
    id: 1,
    text:'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text:'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text:'Dentist appointment',
    isCompleted: false
  }
];

// console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

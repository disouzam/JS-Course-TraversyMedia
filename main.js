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

// const todos = [
//   {
//     id: 1,
//     text:'Take out trash',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text:'Meeting with boss',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text:'Dentist appointment',
//     isCompleted: false
//   }
// ];

// console.log(todos[2].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// for 

// for(let i = 0; i<=10; i++){
//   console.log(`For Loop Number: ${i}`);
// }

// While
// let i = 0;
// while(i<=10){
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }

// for(let i = 0; i<todos.length; i++){
//   console.log(todos[i].text);
// }

// for(let todo of todos){
//   console.log(todo.text);
// }

// forEach, map, filter
// console.log('foreach');
// todos.forEach(function(s) {
//   console.log(s.text);
// });

// map 
// console.log('map');
// const todoText = todos.map(function(todo){
//   return todo.text;
// });
// console.log(todoText);

 // filter
// console.log('filter');
// const todoCompleted = todos.filter(function(todo){
//   return todo.id === 1;
// }).map(function(todo){
//   return todo.isCompleted;
// });
// console.log(todoCompleted);


// Conditionals  

// const x = 4;
// const y = 10;

// if (x === 10){
//   console.log('x is 10');
// }else if (x>10){
//   console.log('x is greater than 10')
// }else{
//   console.log('x is less than 10');
// }

// Or
// if(x > 5 || y > 10){
//   console.log('x is more than 5 or y is more than 10')
// }

// And
// if (x > 5 && y > 10) {
//   console.log('x is more than 5 and y is more than 10')
// }

// const x = 11;

// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// const x = 5;

// const color = x > 10 ? 'red' : 'blue';

// switch(color){
//   case 'red':
//     console.log('color is red');
//     break;
//   case  'blue':
//     console.log('color is blue');
//     break;
//   default: 
//     console.log('color is NOT red or blue');
//     break;
// }

// functions

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }

// console.log(addNums(5,7));

// Constructor function
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2);
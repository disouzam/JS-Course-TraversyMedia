// console.log(window);
// Single element selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element selector
// console.log(document.querySelectorAll('div'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove(); 
ul.firstElementChild.textContent = 'Hello';
ul.children[1].textContent = 'Brad';
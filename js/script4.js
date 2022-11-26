// document.getElementsByClassName()
// mencari elements berdasarkan className
// outputnya adalah HTMLcollection

const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';

const listItems = document.querySelector('ul').getElementsByClassName('list-group-item');
// HTML collection
console.log(listItems);

// document.getElementsByTagName()
// HTML collection
const lis = document.getElementsByTagName('li');
console.log(lis);
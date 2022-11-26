// replace element

// create element
const newHeading = document.createElement('h5');
newHeading.id = 'task-title';
newHeading.className = 'card-title';

newHeading.appendChild(document.createTextNode('Task List'));


// get old element
const oldHeading = document.querySelector('.card-title');
const cardHeader = oldHeading.parentElement;

// replace
cardHeader.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll('li.list-group-item');
const ul = lis[0].parentElement;

// remove node
// lis[0].remove();

// remove child node
// ul.removeChild(lis[1]);

// val = button.className;

console.log(val);
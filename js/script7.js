// create element
const li = document.createElement('li');

// add class
li.className = 'list-group-item';

// add id
li.id = 'new-item';

// add atribute
li.setAttribute('title', 'New Item');

// add element inside

li.innerHTML = "<button class='btn btn-danger btn-sm delete-item float-end'>x</button>"

// append text node
li.appendChild(document.createTextNode('Retica Ayu'));

// append child
document.querySelector('ul.list-group').appendChild(li);

console.log(li);
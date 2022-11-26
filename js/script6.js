// menjelajah node

let val

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

val = list;
val = listItem;

// get child nodes, nodes lebih lengkap termasuk commentar dan div kosong, breakline
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - element html
// 2 - attribute
// 3 - Text node
// 8 - comment
// 9 - document
// 10 - doctype

// get child element, hanyalah element html collection
val = list.children;
val = list.children[2];
val = list.children[2].children;
// val = list.children[2].id = 'retica';

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// parent node
val = listItem.parentNode; // disini akan menampilkan #text karena nodeList mengampilkan semuanya termasuk div kosong dan komentar. #text artinya breakline
val = listItem.parentElement;

// next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// prev sibling
val = listItem.previousSibling; // hasilnya #text atay breakline
val = listItem.previousElementSibling; // null karena tidak ada
console.log(val);
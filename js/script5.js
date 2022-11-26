// document.querySelectorAll();
// oputpunya adalah nodelist
// node list bisa dilakukan sebagai tipe data array lgsg, misal looping atau reverse

const items = document.querySelectorAll('ul.list-group li.list-group-item');
console.log(items);

// list ganjil
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
    li.style.background = '#ccc';
})

// liEven.forEach(function (li, index) {
//     li.style.background = '#eee';
// })

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#eee';

}
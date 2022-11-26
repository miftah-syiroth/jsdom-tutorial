// document.querySelector()
// keluarannya juga single node atau single element, misal ada banyak maka muncul yg paling awal saja
// bedanya adalah ini lebih flexibel dari pada getById. bisa pakai class bahkan tag, bisa nested

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('.btn-danger'));
console.log(document.querySelector('button'));

// styling sama seperti pada getElementById
document.querySelector('ul li').style.color = 'blue';

// pseudo class by css 3
document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(2)').textContent = 'Retica';
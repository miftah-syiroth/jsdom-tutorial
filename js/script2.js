// document.getElementById()
/* keluarannya adalah sebuah node atau element */
let val;

val = document.getElementById('task-title');

// styling
document.getElementById('task-title').style.backgroundColor = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '';


// change content
document.getElementById('task-title').textContent = 'harus text';
document.getElementById('task-title').innerText = 'harus text juga';
document.getElementById('task-title').innerHTML = '<h1>bisa tag html</h1>';

console.log(val);
// document.querySelector('.clear-task').addEventListener('click', function (e) {
//     console.log('Hello world');

//     e.preventDefault(); //hapus event default
// })

// document.querySelector('.clear-task').addEventListener('click', onClick);

// function onClick(e) {
//     let val;

//     val = e;

//     // event target element
//     val = e.target;
//     val = e.target.type;
//     val = e.target.className;

//     e.target.innerText = 'Rizka';

//     console.log(val);
// }

// MOUSE EVENT HANDLER
const clearButton = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// one click
// clearButton.addEventListener('click', runEvent);

// double click
// clearButton.addEventListener('dblclick', runEvent);

// mouse down, klik dan tahan atau hold
// clearButton.addEventListener('mousedown', runEvent);

// mouse up, klik dan lepas. JIka tidak lepas makan tidak ada mouseup
// clearButton.addEventListener('mouseup', runEvent);

// mouse enter, jika masuk ke element card
// card.addEventListener('mouseenter', runEvent);

// mouse leave, perlu keluar dari element card untuk aktif
// card.addEventListener('mouseleave', runEvent);

// mouse over
// card.addEventListener('mouseover', runEvent);

// mouse out
// card.addEventListener('mouseout', runEvent);

// mouse move
card.addEventListener('mousemove', runEvent);



// event handler
function runEvent(e) {
    console.log(`Event type ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetY}, ${e.offsetX}, 50)`;
}
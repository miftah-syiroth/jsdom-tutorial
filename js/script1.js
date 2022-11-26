// ini catatan untuk tutorial pertama materi document

let val;

// val = document;
// val = document.all;
// val = document.all[3];
// val = document.all.length; // berisi 35 element

val = document.head; //
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;

val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0].className;

val = document.images;

val = document.scripts;

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
    console.log(script.getAttribute('src'));
});

console.log(val);

// catatan start
/*
documen.all() mengembalikan HTML collection dan dapat diakses index arraynya misal [3] adalah tag <meta>content</meta>

dapat dipanggil nama elementnya.accordion

htmlCollection tidak bisa dilooping langsung menjadi array. harus diconvert melalui Array.from()
*/
// catatan end
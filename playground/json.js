// make string
// var obj = {
// 	name: 'Aigul'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// make object
// var personString = '{"name": "Aigul", "age": 31}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
// create object
var originalNote ={
	title: 'Some title',
	body: 'Some body'
}
// save object in file
originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// read file
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString); 
console.log(typeof note);
console.log(note.title);

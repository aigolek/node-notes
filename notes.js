// console.log('Start notes.js');
const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0 ){
		notes.push(note);
		saveNotes(notes);
		return note;
	};
};
var getAll = () =>{
	return fetchNotes();
}
var getNote = (title) =>{
	var notes = fetchNotes();
	var matchedNotes = notes.filter((note) => note.title === title);
	return matchedNotes[0];
}
var remove = (title) =>{
	// fetch notes
	var notes = fetchNotes();
	//  filter notes, remove if title  matches
	var filteredNotes = notes.filter((note) => note.title !== title);
	// save new notes array
	saveNotes(filteredNotes);
	return notes.length !== filteredNotes.length;
}
var logNote = (note) =>{
	debugger;
	console.log('--');
	console.log('Title ' + note.title);
	console.log(`Body ${note.body}`);
}
module.exports = {
	addNote,
	getAll,
	getNote, 
	remove,
	logNote
}
// console.log(module);
// module.exports.age = 31;
// module.exports.addNote = () => {
// 	console.log('addNote');
// 	return "New note";
// };
// module.exports.add = (a,b) => {
// 	return a+b;
// };
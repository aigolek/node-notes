// console.log('Starting app.js');

// const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
var titleOption = {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		};
var bodyOption = {
			describe: 'Body of note',
			demand: true,
			alias: 'b'
		};
const argv = yargs
	.command('add','add a new note',{
		title: titleOption,
		body:bodyOption
	})
	.command('list', 'list all notes')
	.command('read', 'read a note',{
		title: titleOption
	})
	.command('remove', 'remove a note',{
		title: titleOption
	})
	.help()
	.argv;

const notes = require('./notes.js');

var command = argv._[0];
// console.log('Command: '+command);
// console.log('Process: '+process.argv);
// console.log('Yargs', argv);

if(command === 'add')
{
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log("Notes were added");
		notes.logNote(note);
	}
	else {
		console.log("Notes already exist");
	}
}
else if(command === 'list'){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read'){
	var foundNote = notes.getNote(argv.title);
	if(foundNote) {
		console.log(`Note found`);
		notes.logNote(foundNote);
	}
	else{
		console.log('Note not found');
	}
	
}
else if(command === 'remove'){
	var noteRemoved = notes.remove(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
}
else {
	console.log('not recognized');
}



// 

// console.log(_.isString(true));
// console.log(_.isString('Aigul'));
// console.log(_.uniq(["Aigul", "Aigul",2,3,1,2]));

// var res = notes.addNote();
// console.log(res);

// console.log('Result: '+ notes.add(1,2));
// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', ` Hello ${user.username}! You are ${notes.age}`, function(err){
// 	if(err){
// 		console.log('Unable to write file');
// 	}
// }); 

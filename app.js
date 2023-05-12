// script_functions has all the functions in it
var script_functions = require('./script');
var events = require('events');
var util = require('util');
var fs = require('fs'); //file system module

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(){
    console.log("emitter even called once");
})

emitter.emit('someEvent');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var elon = new Person('Elon');
var satya = new Person('Satya')
var people = [elon, satya];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ':', msg);
    });
});

elon.emit('speak', 'occupy Mars! lets make it the second earth.');
satya.emit('speak', 'Azure is cool!');


var arr = [1,2,3,4,5,6,7,8,9,0];
// we can access the functions like this
console.log(script_functions.counter(arr));
console.log(script_functions.circle_area(34));


/*
//  ----------------------------- Synchronous method ---------------------------------------
// reading a file
var readme = fs.readFileSync('readme.txt', 'utf8'); // file location, encoding
console.log(readme);

// writing a file
fs.writeFileSync('hare_krishna.txt', readme); // location to write the file, data 

// appending new data to a file
fs.appendFileSync('readme.txt', '\nHare Krishna'); //locatoin, data


//  ----------------------------- Asynchronous method ---------------------------------------
fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('write.txt', data, function(err, res){
        if(err) console.log(err);
    });
    console.log('-------------------------------------------------------')
    console.log('data:', data);
    console.log('-------------------------------------------------------')
});
*/
// deleting a file Asynchronous
// fs.unlink('write.txt', function(err){
//     if (err) console.log(err);
// });

// deleting a file Synchronous
// try {
//     fs.unlinkSync('write.txt')
//   } catch(err) {
//     console.error(err)
//   }

//  ----------------------------- Synchronous method ---------------------------------------
// fs.mkdirSync('newDir');
// fs.rmdirSync('newDir');

//  ----------------------------- Asynchronous method ---------------------------------------
//making directory 
// fs.mkdir('newDir', function(){console.log('directory created.')});

//removing a directory
// fs.rmdir('newDir', function(){console.log('directory removed.')});


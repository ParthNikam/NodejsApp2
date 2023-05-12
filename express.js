var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false }); // parse the posted data


app.set('view engine', 'ejs');
app.use('/assets', express.static('css'));


app.get('/heyjude/html', function(req, res){ // gets the request
    res.sendFile(__dirname + '/index.html');
});

app.get('/heyjude/ejs', function(req, res){
    res.render('partials/index');
});


app.get('/', function(req, res){
    res.send('this is some text...');
})


app.get('/contact/html', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/contact/ejs', function(req, res){
    res.render('partials/contact', {person: req.query});
});

app.post('/contact/ejs', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('partials/contact-success', {person: req.body});
});


app.get('/profile/:name', function(req, res){
    var info = {age: req.query.age, height: req.query.height, work: req.query.work, 
        education: req.query.education, languages: req.query.languages};
    res.render('profile', {person: req.params.name, info: info});
});



app.listen(8080); // setting a port


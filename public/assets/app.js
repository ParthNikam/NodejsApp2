var express = require('expres');
var todoController = require('./controllers/todoController');

var app = express();
app.set('view engine', 'ejs'); //setting up template engine
app.use(express.static('./public'));//static files

todoController(app); //fire controllers


app.listen(8080);

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(){
  console.log('Req received for "/"');
})

app.get('/cars', function(req, res){
  res.render('cars');
})

app.get('/cats', function(req, res){
  res.render('cats');
})

app.get('/form', function(req, res){
  res.render('form');
})

app.listen(7777, function() {
  console.log('Express app listening on port 7777');
})
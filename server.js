var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var videoPostSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{body: String, date: {type: Date, default: Date.now}}],
  date: {type: Date, default: Date.now}
});

app.get('/', function (req, res) {
  res.send("HelloWorld");
});
app.get('/wines/:id', function (req, res) {
  res.send({id: req.params.id, name: "The Name", description: "description"});
});
app.listen(3000);
console.log('Express Listening on port 3000...');

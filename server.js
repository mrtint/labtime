var express = require('express'),
  app = express(),
  mongoUri = 'mongodb://localhost/videos',
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  autoinc = require('mongoose-id-autoinc');

// "c:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath=d:\mongo\data

// Connect DB and add event handlers.
mongoose.connect(mongoUri);

var dbConnection = mongoose.connection;
dbConnection.on('error', function (err) {
  console.log('Error : ' + err);
});
dbConnection.once('open', function () {
  console.log('Connected');
});

// Init auto increment plug-in
autoinc.init(dbConnection);

// Schema definition
var videoPostSchema = new Schema({
  _id: Number,
  title: String,
  type: String,
  author: String,
  url: String,
  date: {type: Date, default: Date.now},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  likes: [{type: Schema.Types.ObjectId, ref: 'Like'}]
});

var commentSchema = new Schema({
  _id: Number,
  post_id: {type: Number, ref: 'VideoPost'},
  name: String,
  text: String,
  date: {type: Date, default: Date.now},
  ip: String
});

var likeSchema = new Schema({});

var commentLikeSchema = new Schema({});

var reportSchema = new Schema({});

videoPostSchema.plugin(autoinc.plugin, {
  model: 'VideoPost',
  field: '_id',   // field 정보 안주면 기본 _id 를 Number의 sequence field로 사용한다
  start: 1,
  step: 1
});

// Create models
var VideoPost = mongoose.model('VideoPost', videoPostSchema);
var Comment = mongoose.model('Comment', commentSchema);
var Like = mongoose.model('Like', likeSchema);

// Add video
app.get('/add', function (req, res) {
  //var videoPost = new VideoPost({
  //  title: req.body.title,
  //  type: req.body.type,
  //  author: req.body.username,
  //  url: req.body.url
  //});
  var videoPost = new VideoPost({
    title: '테스트',
    type: 'NORMAL',
    author: 'Hansan',
    url: 'http://www.naver.com'
  });
  videoPost.save(function (err) {
    if (err) return console.log(err);
    res.send(videoPost);
  });
});

// get video list
app.get('/list/:type', function (req, res) {

});

// get video
app.get('/get/:id', function (req, res) {

});

// add comment
app.put('/comment/add', function (req, res) {

});

// update comment
app.post('/comment/update', function (req, res) {

});

// delete comment
app.delete('/comment/delete', function (req, res) {

});

app.post('/add', function (req, res) {

  v.save(function (err) {
    if (err) return handleError(err);
    res.send(v);
  });
});
app.get('/wines/:id', function (req, res) {
  res.send({id: req.params.id, name: "The Name", description: "description"});
});
app.listen(3000);
console.log('Express Listening on port 3000...');

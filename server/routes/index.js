var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var router = express.Router();

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name: String});

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
  console.log('GET request received');
});

router.post('/add', function(req, res, next){
  var kitty = new Cat({name: req.body.name});
  kitty.save(function(err){
    if (err) console.log('meow %s', err);
    res.send(kitty.toJSON());
    next();
  });
});

router.get('/cats', function(req, res, next){
  return Cat.find({}).exec(function(err, cats){
    if (err) throw new Error(err);
    res.send(JSON.stringify(cats));
    next();
  });
});

module.exports = router;

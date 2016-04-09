var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('Router routing');
  console.log('GET request received');
});

module.exports = router;

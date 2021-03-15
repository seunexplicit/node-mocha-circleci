var express = require('express');
var router = express.Router();
const { fib } = require('../module/fib');
const fibSequence = require('../module/fibSequence');

/* GET home page. */

router.get('/', function(req, res, next){
  res.status(401).send('requires a value');
});

router.get('/:len', function(req, res){
	let fibValue = fib(req.params.len);
	res.status(200).send({fib:fibValue}); 
});

router.get('/sequence/:seq', function(req, res){
	let sequence = fibSequence(req.params.seq);
	res.status(200).send(sequence);
})

module.exports = router;

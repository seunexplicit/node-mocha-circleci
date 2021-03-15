var express = require('express');
var router = express.Router();
const { sorter } = require('../module/sorter');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(401).send('require a value');
});

router.get('/sorter1', function(req, res, next){
	let sortedArray = sorter(req.query.numbers);
	if(sortedArray.errorMessage){
		res.status(401).send(sortedArray.errorMessage)
	}
	else{
		res.status(200).send(sortedArray);
	}
})

module.exports = router;

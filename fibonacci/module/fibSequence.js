const { fib } = require('./fib.js');


function fib_sequence(){

	let sequence = [];

	if(!arguments.length){
		throw new Error('expected an arguments');
	}

	if(arguments[0]>100){
		throw new Error('sequence too long');
	}

	for(let j = 0; j<=arguments[0]; j++){
		console.log(fib(j), ': fib ', j);
		sequence.push(fib(j));
	}

	return sequence;
}

module.exports = fib_sequence;
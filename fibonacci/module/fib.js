function fib(x){
	if(x == 0){
		return fib0();
	}
	else if(x == 1){
		return fib1();
	}

	return arguments.callee(arguments[0]-1)+arguments.callee(arguments[0]-2);
}

function fib0(){
	return 0;
}

function fib1(){
	return 1;
}


module.exports = {
	fib
}
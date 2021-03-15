function sorter(arrayToSort){
	let startTime = new Date().getTime();
	let errorMessage

	if(!Array.isArray(arrayToSort)){
		return { errorMessage:'please pass in an array'};
	}

	if(!arrayToSort){
		return {errorMessage:'require non empty array'};
	}

	let sortedArray = [Number(arrayToSort[0])];

	arrayToSort.forEach(function(value, index, array){
		if(isNaN(value)){
				errorMessage = 'Expect number filled array';
				arrayToSort.length = 0;
		}

		//[3, 10, 4, 1, 2, 7, 8, 3, 2]
		for(let j = index - 1; j>=0; j--){

			if(sortedArray[j] <= value){
				const _truncArray  = truncArray(sortedArray, j+1);
				sortedArray = [..._truncArray[0], Number(value), ..._truncArray[1] ];
				break;
			}

			else if(j===0&&sortedArray[j]>value) sortedArray.unshift(Number(value));

		}
	});

	console.log(startTime, new Date().getTime())
	return { 
		sortedArray:sortedArray, 
		processTime:(new Date().getTime() - startTime)/1000, 
		errorMessage:errorMessage
	};
}

function truncArray(arrayToTrunc){

 const start = arguments[1]?arguments[1]:Math.floor((arrayToTrunc.length-1)/2);
 const end = arguments[2]|arrayToTrunc.length -  start;

 let reducedArray = start<arrayToTrunc.length?arrayToTrunc.splice(start, end) : [];

 return [arrayToTrunc, reducedArray];	
}


module.exports = {
	sorter
}
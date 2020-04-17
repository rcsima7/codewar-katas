// const numbers = ('1 2 3 4 5');

function highAndLow(numbers){
	//Thought process:
	// Split string
	// Map strings to numbers array
	// Apply max & min on array
	// const parsedNum = [];

	const numArray = numbers.split(' ').map(Number);
	console.log(numArray);

	// for (i = 0; i < splitNum.length; i++) {
	// 	parsedNum.push(parseInt(splitNum[i]));
	// };
	
	const max = Math.max.apply(null, numArray);
	console.log(max);

	const min = Math.min.apply(null, numArray);
	console.log(min);

	return max + ' ' + min;
  };
const numbers = ('1 2 3 4 5');

function highAndLow(numbers){
	//Thought process:
	// Split string
	// Loop through array to parseInt
	// Push parsed values into an array
	// Apply max & min on array
	const parsedNum = [];

	const splitNum = numbers.split(' ');

	for (i = 0; i < splitNum.length; i++) {
		parsedNum.push(parseInt(splitNum[i]));
	};
	
	// When Math.min refers to a variable, it needs
	// to use '...'
	// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
	const min = Math.min(...parsedNum);
	const max = Math.max(...parsedNum);

	return max + ' ' + min;
  };
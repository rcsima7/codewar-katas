const walk = ['w','e','w','e','w','e','w','e','w','e','w','e'];

function isValidWalk(walk) {

// Starter values for counting each direction. Need to have the same amount N/S
// E/W to get back to starting point.
let countS = 0;
let countN = 0;
let countE = 0;
let countW = 0;

// Looping through array to check number of instances.
// Update direction counts.
// Count loop source: https://stackoverflow.com/questions/6120931/how-to-count-the-number-of-certain-element-in-an-array
for (i = 0; i < walk.length; i++) {
	if (walk[i] === 's') {
		countS ++;
	}
	if (walk[i] === 'n') {
		countN ++;
	}
	if (walk[i] === 'e') {
		countE ++;
	}
	if (walk[i] === 'w') {
		countW ++;
	}
}

// Check direction counts.
console.log(countS + ' South');
console.log(countN + ' North');
console.log(countE + ' East');
console.log(countW + ' West');

// Evaluate all conditions.
if (countS === countN && countE === countW && walk.length === 10) {
	console.log('true');
}
else {
	console.log('false');
}
};
function isDivisible(n, x, y) {
	return n % x === 0 && n % y === 0 ? true :
	n % x != 0 && n % y === 0 ? false :
	n % x === 0 && n % y != 0 ? false :
	false
};
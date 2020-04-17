// let peopleInLine = [25, 25, 50, 100];
// Is there an easier way to express: bill25 = bill25 - 3; ?

function tickets(peopleInLine) {

	let bill25 = 0;
	let bill50 = 0;
	let bill100 = 0;
	let status = [];


	for (i = 0; i < peopleInLine.length; i++) {

		let payment = peopleInLine[i];
		
		// Cash In
		if (payment === 25) {
			bill25 ++
		}
		else if (payment === 50) {
			bill50 ++
		}
		else if (payment === 100) {
			bill100 ++
		};
		
		// Cash Out
		let change = payment - 25;
		
		if (change === 0) {
			// return 'YES';
			console.log('YES');
			status.push('YES');
		}
		else if (change === 25 && bill25 > 0) {
			bill25 --;
			// return 'YES';
			console.log('YES');
			status.push('YES');
		}
		else if (change === 50 && bill25 >= 2 && bill50 === 0) {
			bill25 = bill25 - 2;
			// return 'YES';
			console.log('YES');
			status.push('YES');
		}
		else if (change === 50 && bill25 === 0 && bill50 >= 0) {
			bill50 --;
			// return 'YES';
			console.log('YES');
			status.push('YES');
		}
		else if (change === 75 && bill25 >= 3 && bill50 === 0) {
			bill25 = bill25 - 3;
			// return 'YES';
			console.log('YES');
			status.push('YES');
		}
		else if (change === 75 && bill25 >= 1 && bill50 >= 1) {
			bill25 --;
			bill50 --;
			// return 'YES';
			console.log('YES');
			status.push('YES');
		}
		else {
			// return 'NO';
			console.log('NO');
			status.push('NO');
		};
		console.log(bill25, bill50, bill100);

	}; 
	
	return status.includes('NO') ? 'NO' : 'YES';

};

// let cashRegister = (billA + billB + billC);
	// console.log(cashRegister)
	// return collectBills === 'NO' ? 'NO' : 'YES';

// if peopleInLine[i] is bigger than 25
		// check if billA + billB + billC is bigger or equal to peopleInLine[i] - 25
			

// peopleInLine[i] === 50 && bill25 > 0 ? bill25 -- && bill50 ++ :
			// peopleInLine[i] === 100 && bill50 > 0 && bill25 > 0 ? bill100 ++ && bill50 -- && bill25 -- :
			// peopleInLine[i] === 100 && bill50 === 0 && bill25 >= 3 ? bill100 ++ && bill25 -3 :
			// 'NO'


// function tickets(peopleInLine) { 
// 	let cashRegister = [];
// 	for (i = 0; i < peopleInLine.length; i++) {
		
// 		peopleInLine[i] === 25 ? cashRegister.push(peopleInLine[i]) :
// 			peopleInLine[i] - 25 === cashRegister.reduce((a, b) => a + b, 0) ? 
// 	}
// }


// function tickets(peopleInLine){
// let cashier = 0;
// const ticket = 25;
// let results = [];

// for (i = 0; i < peopleInLine.length; i++) {
	
// 	let payment = peopleInLine[i];
// 	// console.log(payment);

// 	let change = payment - ticket;
	
// let valuePerPayment = payment === 25 ? cashier = cashier + payment :
// 	cashier = cashier + payment - change;

// results.push(cashier);

//  }

// return results.some(i => i < 0) ? 'NO' : 'YES';
// };

// Thought process:
// Need a variable for cashier's amount
// It's amount is set to 0 at the beginning.
// Needs to increase by every index of the input array.
// 1. Check if index is 25, if yes, increase cashier by 25.
// 2. If no, subtract 25 from index amount. Check if remainder equals cashier amount.

// let peopleInLine = [25, 25, 50, 100];

// IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Cashier only works when declared as a global variable.
// When declared inside the for loop, it does not return the correct value.

// const income = peopleInLine.length * 25;
// console.log(income);

// const sum = peopleInLine => peopleInLine.reduce((a,b) => a + b, 0);
// const allPayments = sum(peopleInLine);

// console.log(allPayments);
// let cashierBalance;
// let changeBalance;

// const change = allPayments - allTickets;
// console.log(cashier)
// return income < change ? 'NO' : 'YES';

// let changeBalance = payment - 25;
// console.log('changeBalance' + changeBalance);

// 	console.log('changeBalance' + changeBalance);

// 	// let cashierBalance = payment === 25 ? cashier = cashier + 25 :
// 	// 	cashier = cashier - changeBalance;
// 	// 	console.log('cashierBalance' + cashierBalance);

//  // IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  // Return statement needs to be put outside of the loop, otherwise it
//  // will return values from the first index of the loop, instead of the last.
//  // Variables cashierBalance and changeBalance need to be declared globally.
 
//  // if cashierbalance is bigger or equal to changebalance ? YES : NO
//  return cashier >= 0 ? 'YES' : 'NO';
// return cashier < change ? 'NO' : 'YES';


// cashier balance big enough?
// if cashierbalance > paymentbalance ? YES : NO
// what happens to cashierbalance if payment is bigger:
// cashier + 25

// If I'm the cashier: I have changeBalance, payment, and ticketPrice
// When getting payment, check if payment is not bigger then ticket price
// If true, increase changeBalance by payment amount
// If false, decrease changeBalance by payment amount minus ticket price
// When changeBalance is below 0, we have a problem.


function list(names){

	let nameList = names.map(item => item.name);
	console.log(nameList);

	if (nameList.length > 1 ) {
		nameList[nameList.length-1] = '& ' + nameList[nameList.length-1];
		console.log(nameList);
		};

	let stringMerge = nameList.join(', ');

	return stringMerge.replace(', &', ' &');

  };
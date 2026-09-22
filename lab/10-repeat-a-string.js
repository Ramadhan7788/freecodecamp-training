const repeatStringNumTimes = function (str, num) {
	let output = '';
	
	for (let i = 0; i < num; i++) {
		output += str;
	}
	return output;
};

console.log(repeatStringNumTimes('*', -3));
// repeatStringNumTimes('*', 3);
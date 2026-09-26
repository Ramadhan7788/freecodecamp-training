const numbers = [
	[17, 23, 25, 12],
	[25, 7, 34, 48],
	[4, -10, 18, 21],
	[-72, -3, -17, -10],
];

const largestOfAll = function (arrays) {
	const result = [];
	for (let i = 0; i < arrays.length; i++) {
		let tempNumber;
		for (let j = 0; j < arrays[i].length; j++) {
			if (tempNumber === undefined) {
				tempNumber = arrays[i][j];
			}
			if (arrays[i][j] > tempNumber) {
				tempNumber = arrays[i][j];
			}
		}
		result.push(tempNumber);
	}
	return result;
};

const coba = largestOfAll(numbers);
console.log(coba);

const findMaxInSubArrays = (arrays) => {
	return arrays.map(subArr => Math.max(...subArr));
};

const improvment = findMaxInSubArrays(numbers);
console.log(improvment);
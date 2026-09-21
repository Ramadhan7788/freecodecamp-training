const chunkArrayInGroups = function (arr, num) {
	let newArr = [];

	for (let i = 0; i < arr.length; i += num) {
		newArr.push(arr.slice(i, i + num));
	}

	return newArr;
};

const coba = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(coba);
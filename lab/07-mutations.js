const mutation = function (arr) {
	const str1 = arr[0].toLowerCase();
	const str2 = arr[1].toLowerCase();

	if (str1 === str2) {
		return str1 === str2;
	}

	if (str1 !== str2) {
		for (let i = 0; i < str2.length; i++) {
			if (!str1.includes(str2[i])) {
				return false;
			}
		}
	}
	return true;
};

const kata = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
console.log(mutation(kata));

// console.log("zyxwvutsrqponmlkjihgfedcba".includes('q'))
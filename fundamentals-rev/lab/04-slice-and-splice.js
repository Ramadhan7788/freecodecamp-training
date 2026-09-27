
function frankenSplice(arr1, arr2, index) {
	const result = [...arr2];
	result.splice(index, 0, arr1);
	return result.flat();
}

const arraySiji = [1, 2, 3];
const arrayDuo = [4, 5];

console.log(frankenSplice(arraySiji, arrayDuo, 1))
console.log(arraySiji);
console.log(arrayDuo);
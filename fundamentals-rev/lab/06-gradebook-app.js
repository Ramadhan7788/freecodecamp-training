function getAverage (arrNumb) {
	let sum = 0;
	for (let i = 0; i < arrNumb.length; i++) {
		sum += arrNumb[i];
	}
	return  sum / arrNumb.length;
}

const numbers = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
// console.log(getAverage(numbers));
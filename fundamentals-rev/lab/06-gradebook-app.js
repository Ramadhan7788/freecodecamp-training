function getAverage (arrNumb) {
	let sum = 0;
	for (let i = 0; i < arrNumb.length; i++) {
		sum += arrNumb[i];
	}
	return  sum / arrNumb.length;
}

const numbers = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
const average = getAverage(numbers);

function getGrade (num) {
	if (num === 100) {
		return 'A+';
	} else if (num <= 99 && num >= 90) {
		return 'A';
	} else if (num <= 89 && num >= 80) {
		return 'B';
	} else if (num <= 79 && num >= 70) {
		return 'C';
	} else if (num <= 69 && num >= 60) {
		return 'D';
	} else {
		return 'F';
	}
}

const grade = getGrade(average);
// console.log(grade);

function hasPassingGrade (num) {
	return getGrade(num) !== 'F';
}

const passingGrade = hasPassingGrade(78);
console.log(passingGrade);
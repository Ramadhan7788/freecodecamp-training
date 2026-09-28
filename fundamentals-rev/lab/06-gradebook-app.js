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
  const grade = getGrade(num);
  if (grade === 'F') {
    return false;
  }
  return true;
}

const passingGrade = hasPassingGrade(100);
// console.log(passingGrade);

function studentMsg (arr, num) {
	const average = getAverage(arr);
	const grade = getGrade(num);
	const passingGrade = hasPassingGrade(num);

	if (!passingGrade) {
		return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
	} else if (passingGrade)
		return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
}
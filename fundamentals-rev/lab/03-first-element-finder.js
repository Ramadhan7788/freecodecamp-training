const findElement = (array, fungsi) => {
	return array.find(fungsi);
}

const test1 = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
const test2 = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
const test3 = findElement([1, 2, 3, 4], function(num) { return num > 2; });
const test4 = findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; });

console.log(`test 1:`);
console.log(test1);
console.log(`test 2:`);
console.log(test2);
console.log(`test 3:`);
console.log(test3);
console.log(`test 4:`);
console.log(test4);
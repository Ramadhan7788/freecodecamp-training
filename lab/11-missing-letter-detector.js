const fearNotLetter = function (str) {
	let expectedCharCode = str.charCodeAt(0);
	for (const char of str) {
		
		if (char.charCodeAt(0) !== expectedCharCode) {
		return String.fromCharCode(expectedCharCode);
		}
	expectedCharCode++;
	}
	return;
}

console.log(fearNotLetter('abcdefhijkln'));
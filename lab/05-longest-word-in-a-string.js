const findLongestWordLength = function (sentence) {
	const arrString = sentence.split(' ');
	let wordLength = 0
	for (let i = 0; i < arrString.length; i++) {
		if (arrString[i].length > wordLength) {
			wordLength = arrString[i].length;
		}
	}
	return wordLength;
};

const sentence = "The quick brown fox jumped over the lazy dog";
const coba = findLongestWordLength(sentence);
console.log(coba);
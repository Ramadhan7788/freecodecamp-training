const isPalindrome = function (word) {
	const originalWord  = word.toLowerCase();
	const reverseWord = word.split('').reverse().join('').toLowerCase();
	if (originalWord === reverseWord) {
		return true;
	} else 
		return false;
};

const coba = isPalindrome('');
console.log(coba);
const isPalindrome = function (word) {
	const originalWord  = word.toLowerCase();
	const reverseWord = word.split('').reverse().join('').toLowerCase();
	if (originalWord === reverseWord) {
		return true;
	} else 
		return false;
};

const findPalindromeBreaks = function (words) {
	const notPalindrome = []
	if (words.length === 0) {
		return notPalindrome;
	}
	for (let i = 0; i < words.length; i++) {
		if (!isPalindrome(words[i])) {
			notPalindrome.push(i);
		}
	}
	return notPalindrome;
};

const daftarKata = ['ramal', 'apa', 'lamar']
const cobaFind = findPalindromeBreaks(daftarKata);
console.log(cobaFind);
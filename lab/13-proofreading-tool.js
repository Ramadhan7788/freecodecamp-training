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

const findRepeatedPhrases = function (words, phraseLength) {
	if (phraseLength <= 0 || phraseLength > words.length) {
        return [];
    }

	const phraseIndicesMap = new Map();
	const maxStartIndex = words.length - phraseLength;

	for (let i = 0; i <= maxStartIndex; i++) {
		const phrase = words.slice(i, i + phraseLength).join(' ');

		let indices = phraseIndicesMap.get(phrase);
		if (!indices) {
			indices = [];
			phraseIndicesMap.set(phrase, indices);
		}
		indices.push(i);
	}
	const repeatedIndices = [];
	for (const indices of phraseIndicesMap.values()) {
		if (indices.length > 1) {
			repeatedIndices.push(...indices)
		}
	}
	return repeatedIndices;
};

const analyzeTexts = function (texts, phraseLength) {
	if (texts.length === 0) {
        return [];
    }
	const result = [];
	for (const words of texts) {
		const phrase = findRepeatedPhrases(words, phraseLength);
		const palindrome = findPalindromeBreaks(words);
		const mapping = {
			repeatedPhrases: phrase,
			palindromeBreaks: palindrome,
		}
		result.push(mapping)
	}
	return result;
};
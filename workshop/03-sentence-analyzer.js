const vowels = "aeiou";
const consonant = 'bcdfghjklmnpqrstvwxyz';
const punctuation = ".,!?;:-()[]{}\"'–";

const getVowelCount = function (sentence) {
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

const getConsonantCount = function (sentence) {
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (consonant.includes(char)) {
            count++;
        }
    }
    return count;
}

const getPunctuationCount = function (sentence) {
    let count = 0;

    for (const char of sentence.toLowerCase()) {
        if (punctuation.includes(char)) {
            count++;
        }
    }
    return count;
}

const getWordCount = function (sentence) {
    let count = 0;
    const words = sentence.trim().split(" ");

    for (const word of words) {
        if (word !== '') {
            count++;
        }
    }
    return count;
}   

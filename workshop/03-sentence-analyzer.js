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

const vowelCount = getVowelCount("Apples are tasty fruits");
const consonantCount = getConsonantCount("Coding is fun");
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Vowel Count: ${vowelCount}`);
console.log(`Consonant Count: ${consonantCount}`);
console.log(`Punctuation Count: ${punctuationCount}`);


const kalimat = 'ada apa dengan dunia'

console.log(kalimat.split(' '))
const vowels = "aeiou";
const consonant = 'bcdfghjklmnpqrstvwxyz';

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
        if (!vowels.includes(char) && character.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(getVowelCount("Apples are tasty fruits"));
console.log(getConsonantCount("Apples are tasty fruits"));
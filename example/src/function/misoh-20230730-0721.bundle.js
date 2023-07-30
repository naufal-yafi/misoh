'use strict';

const badWordList = [
    "celeng",
    "leng",
    "asu",
    "4su",
    "su",
    "bajingan",
    "memek",
    "kontol",
    "segawon",
    "kenthu",
    "kentu",
    "ngewe",
    "ng3ws",
    "ngews",
    "babi",
    "b4b1",
    "b4bi",
    "bab1"
];

function estimated(length) {
    if (length % 2 == 0) {
        return length / 2;
    }
    else {
        return Math.floor(length / 3);
    }
}

function remove(word, length) {
    return word.slice(0, word.length - length);
}

function misoh(messages) {
    const pattern = new RegExp(`\\b(${badWordList.join('|')})\\b`, 'gi');
    return messages.replace(pattern, (message) => {
        const wordLength = message.length;
        if (wordLength > 3 && wordLength != 5) {
            const estimate = estimated(wordLength);
            const noCensor = remove(message, estimate);
            const censor = "*".repeat(wordLength - estimate);
            return noCensor + censor;
        }
        else {
            const censor = "*".repeat(wordLength - 1);
            return message.charAt(0) + censor;
        }
    });
}

// module.exports = misoh;
export default misoh;

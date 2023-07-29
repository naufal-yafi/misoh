import badWordList from "./datas";
import estimated from "./estimated";
import remove from "./remove";

function misoh(messages: string): string {
    const pattern: RegExp = new RegExp(`\\b(${badWordList.join('|')})\\b`, 'gi');

    return messages.replace(pattern, (message) => {
        const wordLength: number = message.length;

        if ( wordLength > 3 && wordLength != 5) {
            const estimate: number = estimated(wordLength);
            const noCensor: string = remove(message, estimate);
            const censor = "*".repeat(wordLength - estimate);
            return noCensor + censor;
        }
        else {
            const censor = "*".repeat(wordLength - 1);
            return message.charAt(0) + censor;
        }
    });
}

export default misoh;
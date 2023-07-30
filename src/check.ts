import badWordList from "./datas";

function checkWord(word: string): boolean {
    return badWordList.includes(word);
}

export default checkWord;
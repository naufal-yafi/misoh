function remove(word: string, length: number): string {
    return word.slice(0, word.length - length);
}

export default remove;
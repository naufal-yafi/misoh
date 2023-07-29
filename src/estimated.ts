function estimated(length: number): number {  
    if (length % 2 == 0) {
        return length / 2;
    } else {
        return Math.floor(length / 3);
    }
}

export default estimated;

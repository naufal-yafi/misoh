import badWordList from "../src/datas";

test("Total badWordList", () => {
    const data: number = badWordList.length - 1;
    console.log(`[Total Data]: ${data}`);
    
    expect(data).toBe(data);
});
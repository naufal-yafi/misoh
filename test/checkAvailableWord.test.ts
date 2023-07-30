import checkWord from "./../src/check";

let number: number = 0;

test(`Test ${number++}`, () => {
    expect(
        checkWord('cipok')
    ).toBe(false);
});

test(`Test ${number++}`, () => {
    expect(
        checkWord('cipokan')
    ).toBe(false);
});

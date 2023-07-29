import misoh from "../src/main";
import estimated from "../src/estimated";

let number: number = 0;

test(`Test ${number++}`, () => {
    expect(
        misoh("raimu kyo celeng")
    ).toBe("raimu kyo cel***");
});

test(`Test ${number++}`, () => {
    expect(
        misoh("kelakuanmu kui asu bajingan")
    ).toBe("kelakuanmu kui a** baji****");
});

test(`Test ${number++}`, () => {
    expect(
        misoh("kontol su asu kowe pancen oo ko kui bajingan")
    ).toBe("kon*** s* a** kowe pancen oo ko kui baji****");
});

test(`Test ${number++}`, () => {
    expect(
        misoh("babi")
    ).toBe("ba**");
});

test(`Test ${number++}`, () => { 
    expect(estimated(6)).toBe(3);
});

test(`Test ${number++}`, () => { 
    expect(estimated(8)).toBe(4);
});

test(`Test ${number++}`, () => { 
    expect(estimated(7)).toBe(2);
});

test(`Test ${number++}`, () => { 
    expect(estimated(5)).toBe(1);
});

test(`Test ${number++}`, () => { 
    expect(estimated(4)).toBe(2);
});
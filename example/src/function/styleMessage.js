const template = (word) => {
    return `<span class="bg-green-500 text-black">${word}</span>`;
}

const styleMessage = (input) => {
    const split = input.split(" ");
    const pattern = [
        /\d/,
        /@gmail\b/,
        /[\p{S}\p{P}]+/u,
    ];
    let result = ''; 

    for (let i = 0; i < split.length; i++) {
        if (split[i].includes('*')) {
            result += template(split[i]);
        } else if (pattern[0].test(split[i])) {
            result += template(split[i]);
        } else if (pattern[1].test(split[i])) {
            result += template(split[i]);
        } else if (pattern[2].test(split[i])) {
            result += template(split[i]);
        } else {
            result += split[i];
        }

        if (i !== split.length - 1) {
            result += ' ';
        }
    }

    return result;
}

export default styleMessage;
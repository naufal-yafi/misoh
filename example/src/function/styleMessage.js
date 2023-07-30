const styleMessage = (input) => {
    const split = input.split(" ");
    let result = ''; 

    for (let i = 0; i < split.length; i++) {
        if (split[i].includes('*')) {
            result += `<span class="bg-green-500 text-black">${split[i]}</span>`;
        } else if (!isNaN(parseFloat(split[i]))) {
            result += `<span class="bg-green-500 text-black">${split[i]}</span>`;
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
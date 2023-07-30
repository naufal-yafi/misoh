const styleMessage = (input) => {
    const split = input.split(" ");
    let result = ''; // Change result to be a string instead of an array

    for (let i = 0; i < split.length; i++) {
        if (split[i].includes('*')) {
            result += `<span class="bg-green-500 text-black">${split[i]}</span>`;
        } else {
            result += split[i];
        }

        if (i !== split.length - 1) {
            result += ' '; // Add space between words
        }
    }

    return result;
}

export default styleMessage;
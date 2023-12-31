import misoh from "./../tools/misoh-20230801-1129.bundle.minify.js"
import dateFormat from "./DateFormat";
import styleMessage from "./styleMessage";

const inputRule = (message) => {
    if (message != "") {
        const patternJS = /<script\b[^>]*>|<\/script>/i;

        if (patternJS.test(message)) {
          return {
            text: "Not Allowed !",
            date: "ERROR",
            color: 'black',
            error: true
          };
        } else {
            const input = misoh(message);
            return {
                text: styleMessage(input),
                date: dateFormat(),
                color: 'green-500',
                error: false
            };
        }
    } else {
      return {
        text: "Please type your message !",
        date: "EMPTY",
        color: 'black',
        error: true
      };
    }
}

export default inputRule;

import fs from "fs";

const checkFolder = (path) => {
    try {
        return fs.existsSync(path);
    } catch (error) {
        return false;
    }
}

const orange = (text) => {
    return `\u001b[33m${text}\u001b[0m`;
}

const green = (text) => {
    return `\u001b[32m${text}\u001b[0m`;
}

const red = (text) => {
    return `\u001b[31m${text}\u001b[0m`;
}

const ruleInput = (file) => {
    const rule = /<script\b[^>]*>|<\/script>/i;
    return `${file}
import dateFormat from "./DateFormat";
import styleMessage from "./styleMessage";

const inputRule = (message) => {
    if (message != "") {
        const patternJS = ${rule};

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
`;
}

const replaceCode = (file) => {
    fs.readFile('./inputRule.js', 'utf8', (err, data) => {
        if (err) {
          console.error(`\n[${red('✕')}] Err: `, err);
          return;
        }

        data = ruleInput(file);
      
        fs.writeFile('./inputRule.js', data, 'utf8', (err) => {
          if (err) {
            console.error(`\n[${red('✕')}] Err: `, err);
            return;
          }
      
          console.log(`[${green('✓')}] Update success ${green("./example/src/function/inputRule.js")}`);
        });
      });
}

(() => {
    const folderPath = './../tools';
    
    if (checkFolder(folderPath)) {
        const patternFilename = new RegExp('misoh-.*\\.bundle\\.minify\\.js');
        const result = fs.readdirSync(folderPath).filter((file) => patternFilename.test(file));
    
        console.log('Available Files: ', result);
    
        if (result.length > 0) {
            const file = result[result.length - 1];
            console.log(`\n[${green('✓')}] Choose file ${green(file)}`);
            replaceCode(`import misoh from "./../tools/${file}"`);
        } else {
            console.log(`\n[${red('✕')}] Not Available File`);
            console.log(`Type: ${orange('npm run prod')}`);
        }
    } else {
        console.log(`\n[${red('✕')}] Not Available File`);
        console.log(`Type: ${orange('npm run prod')}`);
    }
})();
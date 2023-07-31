import fs from "fs";

const checkFolder = (path) => {
    try {
        return fs.existsSync(path);
    } catch (error) {
        return false;
    }
}

const recolor = (text) => {
    return `\u001b[33m${text}\u001b[0m`;
}

(() => {
    const folderPath = './../tools';
    
    if (checkFolder(folderPath)) {
        const patternFilename = new RegExp('misoh-.*\\.bundle\\.minify\\.js');
        const result = fs.readdirSync(folderPath).filter((file) => patternFilename.test(file));
    
        console.log('Available Files: ',result);
    
        if (result.length > 0) {
            console.log(`\nCopy:\n${recolor(`import misoh from "./../tools/${result[result.length - 1]}";`)}\n\nPaste: \n/example/src/function/inputRule.js`);
        } else {
            console.log("Not Available File");
            console.log("npm run prod");
        }
    } else {
        console.log("Not Available File");
        console.log(recolor("npm run prod"));
    }
})();
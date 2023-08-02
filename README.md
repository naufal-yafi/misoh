![totalDownloads](https://img.shields.io/github/downloads/naufal-yafi/misoh/total?color=blue&style=flat-square) ![size](https://img.shields.io/github/repo-size/naufal-yafi/misoh?color=blue&style=flat-square) ![contributor](https://img.shields.io/github/contributors/naufal-yafi/misoh?color=blue&style=flat-square)

# Misoh

This is simple JavaScript logic to censor certain words in certain text using Regular Expressions (RegEx). The logic allows you to specify the word you want to censor and the replacement word for it.

[![Download Latest Version](https://img.shields.io/badge/Download%20Latest%20Version-blue?style=for-the-badge&logo=javascript&logoColor=fafafa)](https://github.com/naufal-yafi/misoh/releases/download/misoh-20230731/misoh-20230731-1305.bundle.minify.js)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-black?style=for-the-badge)](https://naufal-yafi.github.io/misoh/)

### Table of Contents

- [Misoh](#misoh)
    - [Table of Contents](#table-of-contents)
    - [1. Why I Make this Repo?](#1-why-i-make-this-repo)
    - [2. Installation Tool](#2-installation-tool)
      - [2.1 Instant Download](#21-instant-download)
      - [2.2 Requirement](#22-requirement)
      - [2.3 Manual Installation](#23-manual-installation)
        - [1) Download this repo](#1-download-this-repo)
        - [2) Go to /misoh folder and download all dependencies](#2-go-to-misoh-folder-and-download-all-dependencies)
        - [3) Build and Minify code](#3-build-and-minify-code)
        - [4) Result](#4-result)
    - [3. How to Use this Tool?](#3-how-to-use-this-tool)
    - [4. Feature Tool?](#4-feature-tool)
    - [5. How the System Works?](#5-how-the-system-works)
    - [6. Development Commands](#6-development-commands)
      - [6.1 Usage](#61-usage)
      - [6.2 Example](#62-example)
      - [6.3 Available Commands](#63-available-commands)
    - [7. Installation Example App](#7-installation-example-app)
      - [7.1 Download all dependencies](#71-download-all-dependencies)
      - [7.2 Checks if misoh-\[date\]-\[time\].bundle.minify.js is available](#72-checks-if-misoh-date-timebundleminifyjs-is-available)
      - [7.3 Running example app](#73-running-example-app)
    - [8. Feature Example App](#8-feature-example-app)
      - [8.1 Clear all chat](#81-clear-all-chat)
      - [8.2 Mark @gmail, number, symbol and badword](#82-mark-gmail-number-symbol-and-badword)
      - [8.3 Error empty message](#83-error-empty-message)
      - [8.4 Error not allowed message](#84-error-not-allowed-message)
    - [9. How do I Contribute?](#9-how-do-i-contribute)
      - [9.1 Adding Bad Word](#91-adding-bad-word)
      - [9.2 Validate Your New Bad Word](#92-validate-your-new-bad-word)
      - [9.3 Running Unit Testing](#93-running-unit-testing)
      - [9.4 Result Unit Testing](#94-result-unit-testing)
      - [9.5 See Total Bad Words](#95-see-total-bad-words)

### 1. Why I Make this Repo?

I hope this repo is useful, both for you and for my next project, like a chat app that can be used to censor profanities from users. And also with me creating this project I learned to use RegEx.

To make this project I used several technologies, such as

|      Tech      |                   I Use To                     |
| ---------------| ---------------------------------------------- |
| Typescript     | Create logic censored bad words                |
| RegEx TS       | Filter and replace word                        |
| Babel TS       | Convert code to compatible all browser version |
| Jest TS        | Unit testing                                   |
| RollupJS       | Bundling and minify javascript code            |
| Vite + ReactJS | To create an example application that is a simple chat app |


[[Back to Table of Contents]](#table-of-contents)

### 2. Installation Tool

#### 2.1 Instant Download

You can see all the versions of the [release notes](https://github.com/naufal-yafi/misoh/releases) that you want to download. Or you can [download the latest version](https://github.com/naufal-yafi/misoh/releases/download/misoh-20230731/misoh-20230731-1305.bundle.minify.js).

#### 2.2 Requirement

If you want to do a manual installation, there are several things that must be prepared.

- [GIT](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en)

#### 2.3 Manual Installation

Even though the manual steps are quite complicated, there are benefits that you can get. You can see how the system works to process raw data into build results and can be used.

##### 1) Download this repo

```
git clone https://github.com/naufal-yafi/misoh.git
```

##### 2) Go to /misoh folder and download all dependencies

```
cd misoh && npm i
```

##### 3) Build and Minify code

```
npm run prod
```

##### 4) Result

You can use the output file from /dist/bundle&minify/misoh-[date]-[time].bundle.minify.js

```
misoh
├── build               # the compile results from the ts file to js
│   ├── datas.js          
│   ├── estimated.js    
│   ├── main.js    
│   └── remove    
│
├── dist                # result file can you use    
│   └── bundle&minify
│       └── misoh-[date]-[time].bundle.minify.js     
│
├── example             # result file can run example app
│   └── src
│       └── tools
│           └── misoh-[date]-[time].bundle.minify.js 
│
└── ...
```

[[Back to Table of Contents]](#table-of-contents)

### 3. How to Use this Tool?

```js
import misoh from "./misoh-[date]-[time].bundle.minify.js"

const result = misoh("fuck");
console.log(result);

// Output
// fu**
```

[[Back to Table of Contents]](#table-of-contents)

### 4. Feature Tool?

For the time being misoh can only censor bad words.

Example 

```
fuck => fu**
bitch => b****.
```

[[Back to Table of Contents]](#table-of-contents)

### 5. How the System Works?
```
misoh
├── build                             # result compile from /src/*.ts
│   ├── datas.js          
│   ├── estimated.js    
│   ├── main.js    
│   └── remove.js
│
├── dist
│   ├── bundle    
│   │   └── misoh-[date]-[time].bundle.js           # result bundling js code
│   │
│   └── bundle&minify
│       └── misoh-[date]-[time].bundle.minify.js    # result bundling and minify js code
│
├── example                          # react project / example app
│
├── ...
│
├── src                              # the folder that holds the raw code
│   ├── check.ts                     # the file used for testing whether the bad word is not in badWordList datas.ts 
│   ├── datas.ts                     # file that holds all the bad words
│   ├── estimated.ts                 # a file that specifies how many letters to censor with the * symbol
│   ├── main.ts                      # file yang menjalankan fungsi dari file - file lain dan melakukan seleksi kata buruk
│   └── remove.ts                    # file that specifies how many letters will not be censored with the * symbol
│
├── test                             
│   ├── checkAvailableWord.test.ts   # to know the bad word does not yet exist     
│   ├── main.test.ts                 # to find out if the word sensor is working properly
│   └── sumData.test.ts              # to know how many bad words
│
├── ...
│
├── babel.config.json                # configuration ts babel
│
├── jest.config.mjs                  # configuration running unit testing
│
├── ...
│
├── package.json                     # manage dependencies and dev command
│
├── rollup.config.dev.js             # configuration bundling js code
│
├── rollup.config.prod.js            # configuration bundling and minify js code
│
└── tsconfig.json                    # configuration compile ts to js
```

[[Back to Table of Contents]](#table-of-contents)

### 6. Development Commands

#### 6.1 Usage

```sh
npm run [command]
```

#### 6.2 Example

```sh
npm run start
```

#### 6.3 Available Commands

You can see all available command on file [package.json](./package.json).

| Command |       Explanation     |
| ------- | --------------------- |
| start   | Run example app       |
| test    | Run all test code     |
| sum     | See total bad word    |
| dev     | Build bundle only     |
| prod    | Build bundle&minify   |
| clear   | Remove result build   |
| setup   | Downloads everything the example app needs |
| check   | See available file misoh on example app    |

[[Back to Table of Contents]](#table-of-contents)

### 7. Installation Example App

#### 7.1 Download all dependencies

```sh
npm run setup
```

#### 7.2 Checks if misoh-[date]-[time].bundle.minify.js is available

```sh
npm run check
```

If the output is like this you can directly run the apk with `npm start`

```sh
> misoh@1.0.0 check
> cd ./example/src/function && node getFile.js && cd .. && cd .. && cd ..

Available Files:  [
  'misoh-20230801-1035.bundle.minify.js',
  'misoh-20230801-1112.bundle.minify.js'
]

[✓] Choose file misoh-20230801-1112.bundle.minify.js
[✓] Update success ./example/src/function/inputRule.js
```

If the output message is "Not Available File" type `npm run prod` and type the command `npm run check` again.

```sh
> misoh@1.0.0 check
> cd ./example/src/function && node getFile.js && cd .. && cd .. && cd ..


[✕] Not Available File
Type: npm run prod
```

#### 7.3 Running example app

```sh
npm start
```

[[Back to Table of Contents]](#table-of-contents)

### 8. Feature Example App

#### 8.1 Clear all chat

```sh
clear
```

#### 8.2 Mark @gmail, number, symbol and badword

![mark feature](https://github.com/naufal-yafi/misoh/assets/87789251/bfa722da-7b84-4ac9-a429-0e3e685a4e38)

#### 8.3 Error empty message

![image](https://github.com/naufal-yafi/misoh/assets/87789251/6b5456c8-fb98-4339-96e1-98e16ecd6205)

#### 8.4 Error not allowed message

Example if you type `<script></script>`.

![image](https://github.com/naufal-yafi/misoh/assets/87789251/e3fa8316-a7b0-4310-bcaf-01651dfc6a48)

[[Back to Table of Contents]](#table-of-contents)

### 9. How do I Contribute?

#### 9.1 Adding Bad Word

If you want to contribute in adding bad words. You can add it in [/src/datas.ts](./src/datas.ts) file. 

```ts
const badWordList: ReadonlyArray<String> = [
    ...
    ...
    "zipperheads",
    "zoophile",
    "zoophilia",
    "🖕",
    "shit",
    "type your bad word here"
];

export default badWordList;
```

**[ !!! ] But before that, first check the word you want to add whether it already exists or not by testing it in the [/test/checkAvailableWord.test.ts](./test/checkAvailableWord.test.ts) file. [ !!! ]**

#### 9.2 Validate Your New Bad Word

```js
// ./test/checkAvailableWord.test.ts

test(`Test ${number++}`, () => {
    expect(
        checkWord('fuck')
    ).toBe(false);
});
```

#### 9.3 Running Unit Testing

```sh
npm run test
```

#### 9.4 Result Unit Testing

If the result fails as below. Then the bad word is already there, try to find another bad word.

```sh
 FAIL  test/checkAvailableWord.test.ts
  × Test 0 (5 ms)
                                                            
  ● Test 0                                                  
                                                            
    expect(received).toBe(expected) // Object.is equality   

    Expected: false
    Received: true

       6 |     expect(
       7 |         checkWord('fuck')
    >  8 |     ).toBe(false);
         |       ^
       9 | });
      10 |
```

#### 9.5 See Total Bad Words

```sh
npm run sum
```

Output:

```sh
console.log
    [Total Data]: 2861
```

[[Back to Table of Contents]](#table-of-contents)

<small>01/08/2023</small>

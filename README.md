![totalDownloads](https://img.shields.io/github/downloads/naufal-yafi/misoh/total?color=orange&style=flat-square) ![size](https://img.shields.io/github/repo-size/naufal-yafi/misoh?color=orange&style=flat-square) ![contributor](https://img.shields.io/github/contributors/naufal-yafi/misoh?color=orange&style=flat-square)

# Misoh

This is simple JavaScript logic to censor certain words in certain text using Regular Expressions (RegEx). The logic allows you to specify the word you want to censor and the replacement word for it.

[![Download Latest Version](https://img.shields.io/badge/Download%20Latest%20Version-orange?style=for-the-badge&logo=javascript&logoColor=fafafa)](https://github.com/naufal-yafi/misoh/releases/download/misoh-20230731/misoh-20230731-1305.bundle.minify.js)

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
    - [8. How to Run Example App?](#8-how-to-run-example-app)
    - [9. Feature Example App](#9-feature-example-app)
    - [10. How do I Contribute](#10-how-do-i-contribute)
      - [10.1 Adding Bad Word](#101-adding-bad-word)
      - [10.2 Validate Your New Bad Word](#102-validate-your-new-bad-word)
      - [10.3 Running Unit Testing](#103-running-unit-testing)
      - [10.4 Result Unit Testing](#104-result-unit-testing)
      - [10.5 See Total Bad Words](#105-see-total-bad-words)

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
├── build                   # result compile from ts file to js
│   ├── datas.js          
│   ├── estimated.js    
│   ├── main.js    
│   └── remove.js
│
├── dist
│   ├── bundle    
│   │   └── misoh-[date]-[time].bundle.js
│   │
│   └── bundle&minify
│       └── misoh-[date]-[time].bundle.minify.js
│
├── example
│
├── ...
│
├── src                     # the folder that holds the raw code
│   ├── check.ts            # the file used for testing whether the bad word is not in badWordList datas.ts 
│   ├── datas.ts            # file that holds all the bad words
│   ├── estimated.ts        # a file that specifies how many letters to censor with the * symbol
│   ├── main.ts             # file yang menjalankan fungsi dari file - file lain dan melakukan seleksi kata buruk
│   └── remove.ts           # file that specifies how many letters will not be censored with the * symbol
│
├── test                             #
│   ├── checkAvailableWord.test.ts   #      
│   ├── main.test.ts                 #
│   └── sumData.test.ts              #
│
├── ...
│
├── babel.config.json       #
│
├── jest.config.mjs         #  
│
├── ...
│
├── package.json            #
│
├── rollup.config.dev.js    #
│
├── rollup.config.prod.js   #
│
└── tsconfig.json           #
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

### 8. How to Run Example App?

### 9. Feature Example App

### 10. How do I Contribute

#### 10.1 Adding Bad Word

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

#### 10.2 Validate Your New Bad Word

```js
// ./test/checkAvailableWord.test.ts

test(`Test ${number++}`, () => {
    expect(
        checkWord('fuck')
    ).toBe(false);
});
```

#### 10.3 Running Unit Testing

```sh
npm run test
```

#### 10.4 Result Unit Testing

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

#### 10.5 See Total Bad Words

```sh
npm run sum
```

Output:

```sh
console.log
    [Total Data]: 2861
```

[[Back to Table of Contents]](#table-of-contents)

<small>31/06/2023</small>

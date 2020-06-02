<h1 align="center">Path To FullStack</h1>

<p align="center">This is my personal repository used to learn new technologies related to NodeJS web development.</p>

### What is this README.md?

This file was various things, now it turned in a tutorial on how to use some of the best technologies in your NodeJS web application.

## Table of contents

* **[EXTENSIONS](#EXTENSIONS)**
* **[DONE](#DONE)**
    * [NodeJS and npm](#NodeJS)
    * [Yarn](#Yarn)
    * [Git and GitHub](#Git-and-GitHub)
    * [Express](#Express)
    * [TypeScript](#TypeScript)
    * [ESLint](#ESLint)
    * [Prettier](#Prettier)

* **[DOING](#DOING)**
    * [dotenv](#dotenv)
    * [TypeORM](#TypeORM)
    * [Jest](#Jest)

# EXTENSIONS

Extensions for Visual Studio Code.

* [EditorConfig for VS Code](#EditorConfig)
* [ESLint]
* [Material Icon Theme](#Material-Icon-Theme)

<h2 align="center">EditorConfig</h2>

> This plugin attempts to override user/workspace settings with settings found in .editorconfig files.

Makes it possible to share editor settings via a file (`.editorconfig`) located in the root directory of your project.

<h2 align="center">ESLint</h2>

> Integrates ESLint into VS Code.

Just the extension part of ESLint, The entire configuration is described in its section.

<h2 align="center">Material Icon Theme</h2>

Greatly improves file icons.

<h1 align="center">DONE</h1>

<p align="center">Technologies that I've somewhat learned and that I'm already using.</p.>


<h2 align="center">NodeJS</h2>

> [Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.](https://nodejs.org/en/)

NodeJS is your runtime, npm your package manager.
Follow through the [installation](https://nodejs.org/en/) and both will be installed and ready to use.

### Using NodeJS and npm

`npm init` - Creates a package.json file.

`npm install` - Adds dependencies to the package.json file and install them at the node_modules folder.

`node index.js` - Runs the index.js file in NodeJS.

`package.json` is your project configuration file, edit the `scripts` part and create customizable Node commands.


<h2 align="center">Yarn</h2>

> Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

Well, I just think Yarn is easier to use.

`npm install -g yarn` - Install Yarn globally.

Run `Get-ExecutionPolicy` on PowerShell, if the result is `Restricted` then run `Set-ExecutionPolicy RemoteSigned` so you can use Yarn.

If you ever use npm in your repo you can delete the package-lock.json file and run `yarn`.


<h2 align="center">Git and GitHub</h2>

> [Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.](https://git-scm.com/)

Git and GitHub are used to keep your code safe by allowing you to create multiple versions of your repo and backing it up to the cloud.

### Setup

* [Git can be downloaded here.](https://git-scm.com/download)
* [GitHub home page can be accessed here.](https://github.com/)

### Using Git

`.gitignore` is a file that you can create in the root folder of your project that tells Git the files that should be ignored

`git config credential.helper store` - This command will save your credential in plain text.

`git config --global credential.helper cache` - Will save your credential for 15 minutes by default, you can define the timeout.

`git config --global credential.helper 'cache --timeout=3600'` - Sets the timeout to 1 hour.

`git init` - Initializes a git repository locally.

`git add .` - Stores snapshot temporary in the index.

`git commit` - Permanently stores index contents.

`git log` - Logs commits.

`git branch feature/name` - Creates a branch named **feature/name**.

`git checkout feature/name` - Switchs to hte branch named **feature/name**.

`git merge feature/name` - Merges the branch named **featue/name** to the master.

`git branch -D feature/name` - Deletes the branch named **featue/name**.

`git remote add origin https://github.com/eLucis198/path-to-fullstack.git` - Syncs to your GitHub repo.

`git push -u origin master` - Pushes master branch to GitHub.

`git pull origin master` - Pulls from GitHub to the master branch .

### GitHub Desktop

So I can focus more in coding I'm using GitHub Desktop 'cause it's way easier :stuck_out_tongue_closed_eyes:.

### How I learned

* https://git-scm.com/docs/gittutorial

* https://www.youtube.com/watch?v=MW7hrQe6aYo

* https://www.youtube.com/watch?v=2T2l2rGRzXs&t


<h2 align="center">Express</h2>

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Best thing ever for HTTP requests and routing.

`yarn add express` - Installs the express dependency.


<h2 align="center">TypeScript</h2>

>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

This may be the best thing I found out here haha, makes your code much more clear, looks like OOP :laughing:

### Setting up

`yarn global add typescript` - Installs typescript globally in your machine.
`yarn add typescript --d` - Installs typescript as a development dependency.

### Transpile - tsc + ts-node-dev

You'll use `ts-node-dev` to transpile the code automatically for you while you develop and you'll use `tsc` to generate a ./dist.

Run `yarn tsc --init` to init a tsconfig.json file. (Only works with typescript installed globally)

Add this line to the tsconfig.json file
```json
{
    "compilerOptions": {
      "outDir": "./build/"
    }
}
```

You can transpile your code just by running `yarn tsc` and the files should be in the dist directory.

For automated transpiles I'll use __ts-node-dev__.
Install it by running `yarn add ts-node-dev --d`.

Add this line to your packge.json file.
```json
  "scripts": {
    "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
  },
```
Now run `yarn dev:server`. Your project is running, it transpiles automatically at every code update.

### Transpile - sucrase + nodemon

**Sucrase doesn't support decorators (Like the ones in TypeORM)**

`yarn add sucrase nodemon -D` - Installs sucrase and nodemon as a dev dependencies.

Create a nodemon.json file for configurations.
```json
{
  "watch": ["src"],
  "ext": "ts",
  "execMap": {
    "ts:": "sucrase-node src/server.ts"
  }
}
```
Alter package.json
```json
"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "sucrase ./src -d ./dist --transforms typescript,imports"
},
```
`yarn dev` - Runs app.
`yarn buid` - Builds app.

### Types

You need to install the "types" of your dependencies for the IntelliSense to work.

`npm install @types/express -D` - Install the types of express as a development dependency.

### How I learned

* https://www.youtube.com/watch?v=0mYq5LrQN1s
* https://www.youtube.com/watch?v=aTf8QTjw4RE


<h2 align="center">ESLint</h2>

> A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

Points out error in TS code and corrects then.

### Setup

Install the extension ESLint.

Run `yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin` to install.

To initialize run `yarn eslint --init` and configure it.

Respond the following questions:

  **How would you like to use ESLint?**
  To check syntax, find problems, and enforce code style

  **What type of modules does your project use?**
  JavaScript modules (import/export)

  **Which framework does your project use?**
  None of these

  **Does your project use TypeScript?**
  Yes

  **Where does your code run?**
  Node

  **How would you like to define a style for your project?**
  Use a popular style guide

  **Which style guide do you want to follow?**
  Standard: https://github.com/standard/standard

  **What format do you want your config file to be in?**
  JavaScript

  Select **Yes**

Now you can delete package-lock.json and run `yarn`

Add line to .eslintrc.js
```js
extends: [
  'plugin:@typescript-eslint/recommended',
  'standard'
],
```

Now open your vsCode preferences {{ Ctrl - Shift + P  ==>>  preferences: open settings (json) }}

Add the following lines
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
```
All done, now TypeScript is running with ESLint :ok_hand:

### How I learned

* https://www.youtube.com/watch?v=aTf8QTjw4RE


<h2 align="center">Prettier</h2>

 **I don't know if it's a new update but ESLint is already correcting the code, so I won't use Prettier.**

> Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Setup

Run `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`.

Add line to .eslintrc.js
```js
extends: [
  'plugin:@typescript-eslint/recommended',
  'prettier/@typescript-eslint',
  'standard'
],
```
<h1 align="center">DOING</h1>

<p align="center"><bold>Technologies that I'm tryng to learn right now.</bold></p.>

<h2 align="center">dotenv</h2>

> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

### Setup

`yarn add dotenv`

Import and call it as soon as possible in your project

```ts
import dotenv from 'dotenv'

dotenv.config()
```

### How I learned

* https://www.youtube.com/watch?v=2G_mWfG0DZE

<h2 align="center">Jest</h2>

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### Setup

Run `yarn add jest @types/jest ts-jest -D` to install it.

Now add jest to the .eslintrc.js file, it should look like this now:

```javascript
env: {
    es6: true,
    node: true,
    jest: true
  },
```

Now for the configuration run `yarn jest --init`.

  **Would you like to use Jest when running "test" script in "package.json"?**
  Y

  **Choose the test environment that will be used for testing**
  node

  **Do you want Jest to add coverage reports?**
  y

  **Automatically clear mock calls and instances between every test?**
  y

It creates the `jest.config.js` file.

You'll have to make some changes to the file.

```js
  collectCoverageFrom: [
      'src/**/*.ts'
    ],
```

```js
  coverageDirectory: '__tests__/coverage',
```

```js
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
```

Now you can create a folder `__test__` at the root of the project and place all the tests inside it.

I'll put one example here.

exaple.spec.ts
```js
test('sum two numbers', () => {
  expect(1 + 1).toBe(2)
})
```

Now you can simply run with `yarn test`.

<h2 align="center">TypeORM</h2>

> TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8).

### Setup

Things to install:

For the ORM
`yarn add typeorm`
`yarn add reflect-metadata`
`yarn add @types/node -D`

Database driver
`yarn add sqlite3 -D`
`yarn add pg

Files configuration:

Your tsconfig.json should have this lines.
```json
  "compilerOptions": {
    "lib": [
        "es5",
        "es6"
    ],
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./build",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true
  }
```

Create a file named `ormconfig.json`
```json
{
   "type": "sqlite",
   "database": "database.sqlite",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
```
This is a basic configuration.
Create a folder named `entity` and other named `migration` inside the src/ folder.

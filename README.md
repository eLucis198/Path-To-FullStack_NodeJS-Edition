<h1 align="center">Path To FullStack</h1>

<p align="center">This is my personal repository used to learn new technologies related to NodeJS web development.</p>

### What is this README.md?

This file was various things, now it turned in a tutorial on how to use some of the best technologies in your NodeJS web application.

## Table of contents

* **[EXTENSIONS](#EXTENSIONS)**
* **[DONE](#DONE)**
* **[DOING](#DOING)**

# EXTENSIONS

Extensions for Visual Studio Code.

* [EditorConfig for VS Code](#EditorConfig)
* [ESLint Extension](#Eslint-Extension)
* [Material Icon Theme](#Material-Icon-Theme)
* [SQLite](#SQLite)

<h2 align="center">EditorConfig</h2>

> This plugin attempts to override user/workspace settings with settings found in .editorconfig files.

Makes it possible to share editor settings via a file (`.editorconfig`) located in the root directory of your project.

<h2 align="center">ESLint Extension</h2>

> Integrates ESLint into VS Code.

Just the extension part of ESLint, the entire configuration is described in the [ESLint](#ESLint) section.

<h2 align="center">Material Icon Theme</h2>

Greatly improves the icons for your files.

<h2 align="center">SQLite</h2>

> VSCode extension to explore and query SQLite databases.

You can navigate SQLite databases via Visual Studio Code.

# DONE

**Technologies that I have already learned in some way and already integrated into the project.**

* [NodeJS and npm](#NodeJS)
* [Yarn](#Yarn)
* [Git and GitHub](#Git-and-GitHub)
* [Express](#Express)
* [TypeScript](#TypeScript)
* [ESLint](#ESLint)
* [Prettier](#Prettier) (Not Using)

<h2 align="center">NodeJS</h2>

> [Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.](https://nodejs.org/en/)

NodeJS is your runtime, npm your package manager.

### Setup

Follow through the [installation](https://nodejs.org/en/) and both will be installed and ready to use.
For more control over the verions installed download via chocolatey.

### Using NodeJS and npm

You can run these commands in the command line:

  `npm init` - Creates a package.json file in the current folder.

  `npm install` - Adds dependencies to the package.json file and install them at the node_modules folder.

  `node index.js` - Runs the index.js file in NodeJS.

The `package.json` file is where your project settings are, you can create custom Node commands by editing the `scripts` part.

<h2 align="center">Yarn</h2>

> Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

Well, I just think Yarn is easier to use.

`npm install -g yarn` - Installs Yarn globally.

`yarn init` - Creates the package.json file.

Run `Get-ExecutionPolicy` on PowerShell, if the result is `Restricted` then run `Set-ExecutionPolicy RemoteSigned` so you can use Yarn.

If you ever use npm in your repo you can delete the package-lock.json file and run `yarn` to install everything again.

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

HTTP requests and routing.

### Setup

`yarn add express` - Installs the express dependency.

<h2 align="center">TypeScript</h2>

>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

This may be the best thing I found out here haha, makes your code much clearer, looks like OOP :laughing:

### Setup

`yarn global add typescript` - Installs typescript globally in your machine.

`yarn add typescript -D` - Installs typescript locally as a development dependency.

### Typescript Compiling

NodeJS doesn't understand TypeScript, that's why we need to use a tool to convert TypeScript into JavaScript.

### ts-node-dev + tsc

`ts-node-dev` - Executes your TypeScript code and restarts at every update.

`tsc` - Converts the TypeScrit code to JavaScript to the specified folder.

### How to use

For automated transpiles I'll be using **ts-node-dev**.
Install it by running `yarn add ts-node-dev -D`.

Add this line to your packge.json file.
```json
  "scripts": {
    "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
  },
```
Now run `yarn dev:server`. Your project will run and it transpiles automatically at every code update.

Run `yarn tsc --init` to init a tsconfig.json file. (Only works with typescript installed globally)

Add this line to the tsconfig.json file
```json
{
    "compilerOptions": {
      "outDir": "./build/"
    }
}
```

You can convert your code just by running `yarn tsc` and the files should be in the build directory.

### Transpile - sucrase + nodemon

**Sucrase doesn't support decorators (@ Like the ones in TypeORM)**

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

`yarn add @types/express -D` - Install the types of express as a development dependency.

### How I learned

* https://www.youtube.com/watch?v=0mYq5LrQN1s
* https://www.youtube.com/watch?v=aTf8QTjw4RE


<h2 align="center">ESLint</h2>

> A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

Points out error in TS code and corrects then.

### Setup

Install the extension ESLint.

Run `yarn add eslint -D` to install eslint.

Run `yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D` to install the parser and the plugin for TypeScript.

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

Now you can delete package-lock.json that was created and run `yarn`.

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
# DOING

**Technologies that I'm tryng to learn right now.**

* [dotenv](#dotenv)
* [knex.js](#knex.js)
* [TypeORM](#TypeORM)(Not Using)
* [Jest](#Jest)

<h2 align="center">dotenv</h2>

> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

Basically dotenv's purpose is for you to be able to use environment variables inside your code.

This environment variables are saved in a file at the project root folder caller `.env`.

### Setup and Use

Run `yarn add dotenv` to install it.

Now you'll create a new `.env` file at the root off your project.
This is the file syntax:
```
PORT=3333

# DATABASE
CLIENT=postgres
USER=user
MY_VARIABLE=variableText
```

***

To use dotenv you'll need to call it as soon as possible in your project
```ts
require('dotenv').config()
```
Or pass some options for multiple `.env` files
```ts
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.dev'
})
```
If you're using `import`, **dotenv recommends** that you use preload.

Edit your package.json file:
```json
"scripts": {
  "dev:server": "ts-node-dev --require dotenv/config --respawn --transpileOnly src/server.ts",
  "dev:serverOld": "ts-node-dev --respawn --transpileOnly src/server.ts",
}
```
The require of dotenv is done in the script `--require dotenv/config`.

You also can call the `.env` file of your choice by adding `dotenv_config_path=.env` to your script:
```json
{
  "scripts":{
    "dev:server": "ts-node-dev --require dotenv/config --respawn --transpileOnly src/server.ts dotenv_config_path=.env",
    "dev:serverOld": "ts-node-dev --respawn --transpileOnly src/server.ts",
  }
}
```
I just want to remember that you should always put your `.env` files inside `.gitignore`.

Although dotenv doesn't recommend using multiple files, I reckon that it makes some things easier, but you still should avoid it as much as possible.

### How I learned

* https://github.com/motdotla/dotenv
* https://www.youtube.com/watch?v=2G_mWfG0DZE
* https://medium.com/@lusbuab/using-dotenv-with-jest-7e735b34e55f

<h2 align="center">knex.js</h2>

> A batteries-included, multi-dialect query builder for Node.js.

What you'll use to manipulate your databases.

### Setup

Run `yarn add knex` to install.

Run `yarn add pg` to add database drivers.

```ts
// DATABASE_URL env should follow this format:
// postgres://user_name:password@ipaddress:port/table
// Example: postgres://jimmy:password@localhost:5432/pg_database
```

Create a file named `knexfile.ts` in the root folder.

Example:
```ts
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URL,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  }
}
```

Create a file named `connection.ts` inside `src/database`.

Example:
```ts
import knex from 'knex'

const connection = knex({
  client: process.env.DB_CLIENT,
  connection: process.env.DB_URL
})

export default connection
```

Knex ready for use :thumbsup:

You can run `yarn knex migrate:make migration_name -x ts` to create migrations.

### Migrations



### How I learned

* http://knexjs.org/
* https://github.com/knex/knex
* https://www.youtube.com/watch?v=U7GjS3FuSkA&t

### Setup

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

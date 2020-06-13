**I'm moving this file contents to the repository [wiki](https://github.com/eLucis198/Path-To-FullStack_NodeJS-Edition/wiki)**

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

### Migrations

You can run `yarn knex migrate:make migration_name` to create migration files.

Example:
```ts
import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return knex.schema.createTable('champion', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  return knex.schema.dropTable('champion')
}
```

To run the migrations create the script.
```json
{
  "scripts": {
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest"
  }
}
```

You can run it like this `yarn knex:migrate` or set the environment `yarn knex:migrate --env staging`.

### Seeds



### How I learned

* http://knexjs.org/
* http://knexjs.org/#esm-module-interop
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

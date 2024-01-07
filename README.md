# dotenv-flow-cli

This is a cli executable for [dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow). 

## Installing

Either install it globally:

```bash
$ npm install -g dotenv-flow-cli
```

or add to your project:

Yarn
```bash
$ yarn add dotenv-flow-cli
```

NPM
```bash
$ npm install dotenv-flow-cli
```

## Usage

```bash
$ dotenv-flow <command with arguments>
```

This will load the variables from the `.env*` files in the current working directory and then run the command (using the new set of environment variables).

For more information about how the `.env*` files are loaded, please refer to [dotenv-flow docs](https://github.com/kerimdzhanov/dotenv-flow).

### Custom path
You may specify a path where your `.env*` files are located with the `-p` option:
```bash
$ dotenv-flow -p path/to/project <command with arguments>
```

### Arguments to the underlying command
Put `--` separator before the command if it takes additional arguments, otherwise they might get lost. 

```bash
$ dotenv-flow -- my-command -p something
```

### Variable expansion
To allow it to be a drop-in replacement for [dotenv-cli](https://github.com/motdotla/dotenv-cli) variable interpolation (expanding) is automatically enabled using [dotenv-expand](https://github.com/motdotla/dotenv-expand) under the hood.

For example:
```
IP=127.0.0.1
PORT=1234
APP_URL=http://${IP}:${PORT}
```
Using the above example `.env` file, `process.env.APP_URL` will be resolved to `http://127.0.0.1:1234`.

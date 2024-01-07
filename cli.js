#!/usr/bin/env node
const spawn = require('cross-spawn');
const argv = require('minimist')(process.argv.slice(2));
const dotenv = require('dotenv-flow');
const dotenvExpand = require('dotenv-expand');

function printHelp() {
  console.log(
    [
      'Usage: dotenv-flow [-p <path>] [-- command]',
      '  -p <path>     Path where `dotenv-flow` should read `.env*` files from. Defaults to current working directory.',
      '  command       Command to run with ENV vars. Put `--` before the command if it takes additional arguments, otherwise they might get lost.',
    ].join('\n')
  );
}

if (argv.help) {
  printHelp();
  process.exit();
}

const path = argv.p;
dotenvExpand.expand(dotenv.config({ path }));

const command = argv._[0];
if (!command) {
  printHelp();
  process.exit(1);
}

spawn(command, argv._.slice(1), { stdio: 'inherit' })
  .on('exit', function (exitCode) {
    process.exit(exitCode)
  });

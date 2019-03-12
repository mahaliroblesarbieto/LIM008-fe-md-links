#!/usr/bin/env node
"use strict";

const mdLinks = require('./index.js');

const showInCli = require('./Models/optionsCli.js');

const path = process.argv[2];
let options;

if (process.argv.includes('--validate') && process.argv.includes('--stats')) {
  options = {
    validate: true,
    stats: true
  };
} else if (process.argv.includes('--validate')) {
  options = {
    validate: true,
    stats: false
  };
} else if (process.argv.includes('--stats')) {
  options = {
    validate: false,
    stats: true
  };
}

mdLinks(path, options).then(result => showInCli(result, options)).then(result => console.log(result));
module.exports = showInCli;
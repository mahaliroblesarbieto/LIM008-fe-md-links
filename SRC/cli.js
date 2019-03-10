#!/usr/bin/env node
const mdLinks = require('./index.js');
const showInCli = require('./Models/optionsCli.js');

const path = process.argv[2];
let options;
if (process.argv.includes('--validate') && process.argv.includes('--stats')) {
  options = {validate: true, stats: true};
} else if (process.argv.includes('--validate')) {
  options = {validate: true, stats: false};
} else if (process.argv.includes('--stats')) {
  options = {validate: false, stats: true};
};

mdLinks(path, options).then(result => console.log(showInCli(result)));

module.exports = showInCli;
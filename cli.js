#!/usr/bin/env node
const mdLinks = require('./lib/index.js');

const showInCli = (argv) => {
  if (argv.length === 3) {
    mdLinks(argv[2])
      .then(response1 => {
        response1.forEach(element => {
          console.log(`${element.file}, ${element.href}, ${element.text}`);
        });
      });
  } else if (argv.includes('--validate') && argv.includes('--stats')) {
    mdLinks(argv[2], {validate: true, stats: true})
      .then(response1 => {
        console.log(`Total:${response1.total} \nUnique:${response1.unique} \nBroken:${response1.broken}`);
      });
  } else if (argv.includes('--validate')) {
    mdLinks(argv[2], {validate: true, stats: false})
      .then(response1 => {
        response1.forEach(element => {
          console.log(`${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value}`);
        });
      });
  } else if (argv.includes('--stats')) {
    mdLinks(argv[2], {validate: false, stats: true})
      .then(response1 => {
        console.log(`Total:${response1.total} \nUnique:${response1.unique}`);
      });
  }; 
};

showInCli(process.argv);

module.exports = {showInCli};
#!/usr/bin/env node
const mdLinks = require('./lib/index.js');

const path = process.argv[2];

if (process.argv.length === 3) {
  mdLinks(path)
    .then(response1 => {
      response1.forEach(element => {
        console.log(`${element.file}, ${element.href}, ${element.text} `);
      });
    });
} else if (process.argv.includes('--validate')) {
  mdLinks(path, {validate: true, stats: false})
    .then(response1 => {
      response1.forEach(element => {
        console.log(`${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value} `);
      });
    });
} else if (process.argv.includes('--stats')) {
  mdLinks(path, {validate: false, stats: true})
    .then(response1 => {
      console.log(`Total:${response1.total} \nUnique:${response1.unique}`);
    });
} else if (process.argv.includes('--validate') && process.argv.includes('--stats')) {
  mdLinks(path, {validate: true, stats: true})
    .then(response1 => {
      console.log(`Total:${response1.total} \nUnique:${response1.unique} \nBroken:${response1.broken}`);
    });
};


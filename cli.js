#!/usr/bin/env node
const mdLinks = require('./lib/index.js');

const showInCli = (response) => {
  if ((JSON.stringify(response))[0] === '{') {
    if (response.broken) {
      const firstResult = `Total:${response.total} \nUnique:${response.unique} \nBroken:${response.broken}`;
      return firstResult;
    } else {
      const secondResult = `Total:${response.total} \nUnique:${response.unique}`;
      return secondResult; 
    }
  } else {
    if (response[0].status) {
      let thirdResult = '';
      response.forEach(element => 
        thirdResult += `${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value}`);
      return thirdResult;
    } else {
      let fourthResult = '';
      response.forEach(element => 
        fourthResult += `${element.file}, ${element.href}, ${element.text}`);
      return fourthResult;
    }
  }
};

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
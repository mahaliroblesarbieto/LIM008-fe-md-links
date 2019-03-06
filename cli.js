#!/usr/bin/env node
const mdLinks = require('./lib/index.js');
const [,, ... parameters] = process.argv;
const [path, ...opts] = parameters;

const options = {
  validate: false,
  stats: false,
};

opts.forEach((option) => {
  if (option === '--validate') {
    options.validate = true;
  }
  if (option === '--stats') {
    options.stats = true;
  }
});

if (options === undefined) {
  mdLinks(path, options)
    .then(response1 => {
      response1.forEach(element => {
        console.log(`${element.file}, ${element.href}, ${element.text} `);
      });
    });
} else if (options.validate && !options.stats) {
  mdLinks(path, options)
    .then(response1 => {
      response1.forEach(element => {
        console.log(`${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value} `);
      });
    });
} else if (!options.validate && options.stats) {
  mdLinks(path, options)
    .then(response1 => {
      console.log(`Total:${response1.total} \nUnique:${response1.unique}`);
    });
} else if (options.validate && options.stats) {
  mdLinks(ruta, options)
    .then(response1 => {
      console.log(`Total:${response1.total} \nUnique:${response1.unique} \nBroken:${response1.broken}`);
    });
}
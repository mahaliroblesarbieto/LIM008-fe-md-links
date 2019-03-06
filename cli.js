#!/usr/bin/env node
const mdLinks = require('.lib/index.js');
const [,, ... parameters] = process.argv;
const [path] = parameters;

console.log(parameters);
mdLinks(path)
.then(response1 => {
  response1.forEach(element => {
    console.log(`${element.file}, ${element.href}, ${element.text} `);
  });
// console.log(options);


// console.log(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', {validate: false, stats: false}));
#!/usr/bin/env node
"use strict";

const {
  mdLinks
} = require('./index.js');

const [,, ...args] = process.argv;
console.log(`Hello World ${args}`);
console.log(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', {
  validate: false,
  stats: false
}));
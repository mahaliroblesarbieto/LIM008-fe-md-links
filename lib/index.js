"use strict";

var _links = require("./Models/links.js");

var _validate = require("./Models/validate.js");

var _stats = require("./Models/stats");

const mdLinks = (path, options) => {
  let pathAbs;

  if ((0, _links.evaluatePath)(path)) {
    pathAbs = path;
  } else {
    pathAbs = (0, _links.transformToAbsPath)(path);
  }

  ;
  return new Promise((resolve, reject) => {
    if (options === undefined) {
      (0, _links.getLinks)(pathAbs).then(response => resolve(response)).catch(console.error);
    } else if (options.validate && !options.stats) {
      (0, _links.getLinks)(pathAbs).then(arr => (0, _validate.validateLink)(arr)).then(response => resolve(response)).catch(console.error);
    } else if (!options.validate && options.stats) {
      (0, _links.getLinks)(pathAbs).then(arr => (0, _stats.calculateStats)(arr)).then(response => resolve(response)).catch(console.error);
    } else if (options.validate && options.stats) {
      (0, _links.getLinks)(pathAbs).then(arr => (0, _validate.validateLink)(arr)).then(arr => (0, _stats.calculateStats)(arr)).then(response => resolve(response)).catch(console.error);
    }
  });
};

module.exports = mdLinks;
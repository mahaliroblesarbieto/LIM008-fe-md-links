const getLinks = require('./Models/links.js');
const validateLink = require('./Models/validate.js');
const calculateStats = require('./Models/stats');
const paths = require('path');

const evaluatePath = (path) => {
  const typePath = paths.isAbsolute(path);
  return typePath;
};

const transformToAbsPath = (path) => {
  const pathAbsolute = paths.resolve(path);
  return pathAbsolute;
};

const mdLinks = (path, options) => {
  let pathAbs;
  if (evaluatePath(path)) {
    pathAbs = path;
  } else {
    pathAbs = transformToAbsPath(path);
  };
  return new Promise((resolve, reject) => {
    if (options === undefined) {
      getLinks(pathAbs)
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.validate && !options.stats) {
      getLinks(pathAbs)
        .then((arr) => validateLink(arr))
        .then(response => resolve(response))
        .catch(console.error);
    } else if (!options.validate && options.stats) {
      getLinks(pathAbs)
        .then((arr) => calculateStats(arr))
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.validate && options.stats) {
      getLinks(pathAbs)
        .then((arr) => validateLink(arr))
        .then((arr) => calculateStats(arr))
        .then(response => resolve(response))
        .catch(console.error);
    }
  });   
};

module.exports = mdLinks;

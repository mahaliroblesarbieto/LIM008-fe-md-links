const getLinks = require('./Models/links.js');
const validateLink = require('./Models/validate.js');
const paths = require('path');

const evaluatePath = (path) => {
  const typePath = paths.isAbsolute(path);
  return typePath;
};

const transformToAbsPath = (path) => {
  const pathAbsolute = paths.resolve(path);
  return pathAbsolute;
};

const mdLinks = (path, options = {}) => {
  let pathAbs;
  if (evaluatePath(path)) {
    pathAbs = path;
  } else {
    pathAbs = transformToAbsPath(path);
  };
  return new Promise((resolve, reject) => {
    if (options.validate) {
      getLinks(pathAbs)
        .then((arr) => validateLink(arr))
        .then(response => resolve(response))
        .catch(console.error);
    } else {
      getLinks(pathAbs)
        .then(response => resolve(response))
        .catch(console.error);
    }
  });   
};

module.exports = mdLinks;
 
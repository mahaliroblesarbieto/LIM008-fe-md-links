import {getLinks, evaluatePath, transformToAbsPath} from './Models/links.js';
import {validateLink} from './Models/validate.js';
import {calculateStats} from './Models/stats';

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

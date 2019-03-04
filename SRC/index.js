import {evaluatePath, transformToAbsPath, recognizeIfIsFile, getFiles, getMDContent, convertMDToHtml, extractATagAttr} from './Models/links.js';
import {getStatus} from './Models/validate.js';
const paths = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

export const mdLinks = (path, options) => {
  let pathAbs;
  if (evaluatePath(path)) {
    pathAbs = path;
  } else {
    pathAbs = transformToAbsPath(path);
  };
  return new Promise((resolve, reject) => {
    if (!options.validate && !options.stats) {
      getLinks(pathAbs)
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.validate && !options.stats) {
      getLinks(pathAbs)
        .then((arr) => arr.map((elemento => getStatus(elemento))))
        .then(response => resolve(response))
        .catch(console.error);
    } else if (!options.validate && options.stats) {
      getLinks(pathAbs)
        .then((arr) => calculateStats(arr))
        .then(response => resolve(response[0]))
        .catch(console.error);
    } else if (options.validate && options.stats) {
      getLinks(pathAbs)
        .then((arr) => arr.map((elemento => getStatus(elemento))))
        .then((arr) => calculateStats(arr))
        .then(response => resolve(response[0]))
        .catch(console.error);
    }
  });   
};


// arrLinks.map((elemento => getStatus(elemento)));

const getLinks = (pathAbsolute) => new Promise((resolve, reject) => {
  if (recognizeIfIsFile(pathAbsolute) === false) {
    let arrLinks = [];
    const arrPath = getFiles(pathAbsolute);
    for (let i = 0; i < arrPath.length; i++) {
      const content = getMDContent(arrPath[i]);
      if (content !== '') {
        const contenthtml = convertMDToHtml(content);
        const dom = new JSDOM(contenthtml);
        if (dom.window.document.querySelector('a')) {
          dom.window.document.querySelectorAll('a').forEach((archivo) => {
            arrLinks.push(extractATagAttr(archivo, pathAbsolute));
          });
        }
      }
    }
    resolve(arrLinks);
  } else {
    let extension = paths.extname(pathAbsolute);
    let arrLinks = [];
    if (extension === '.md') {
      const content = getMDContent(pathAbsolute);
      if (content !== '') {
        const contenthtml = convertMDToHtml(content);
        const dom = new JSDOM(contenthtml);
        if (dom.window.document.querySelector('a')) {
          dom.window.document.querySelectorAll('a').forEach((archivo) => {
            arrLinks.push(extractATagAttr(archivo, pathAbsolute));
          });
        }
      }
    }
    resolve(arrLinks);
  }
});
import {evaluatePath, transformToAbsPath, recognizeIfIsFile, getFiles, getMDContent, convertMDToHtml, extractATagAttr} from './Models/links.js';
import {getStatus} from './Models/validate.js';
const paths = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

export const mdLinks = (path) => {
  let pathAbsolute;
  if (evaluatePath(path)) {
    pathAbsolute = path;
  } else {
    pathAbsolute = transformToAbsPath(path);
  };
  return new Promise((resolve, reject) => {
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
      return resolve(arrLinks);
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
      return resolve(arrLinks);
    }
  });   
};


// arrLink.map((elemento => getStatus(elemento)));
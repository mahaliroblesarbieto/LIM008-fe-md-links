import {evaluatePath, transformToAbsPath, recognizeIfIsFile, getFiles, getMDContent, convertMDToHtml, extractATagAttr} from './Models/links.js';
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
    return arrLinks;
  }    
};


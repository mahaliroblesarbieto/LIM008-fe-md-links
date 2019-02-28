import {evaluatePath, recognizeIfIsFile, getFiles, getMDContent, convertMDToHtml, extractATagAttr, createArrLinkObj} from './Models/links.js';
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
  } else {
    let arrLink = [];
    let extension = paths.extname(pathAbsolute);
    if (extension === '.md') {
      const content = getMDContent(pathAbsolute);
      if (content !== '') {
        const contenthtml = convertMDToHtml(content);
        const dom = new JSDOM(contenthtml);
        if (dom.window.document.querySelector('a')) {
          const link = extractATagAttr(contenthtml, pathAbsolute);
          arrLink.push(link);
          return arrLink;
        }
      }  
    }
  }   
};


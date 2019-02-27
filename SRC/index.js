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
    console.log(arrPath);
    for (let i = 0; i < arrPath.length; i++) {
      let content = getMDContent(arrPath[i]);
      console.log(content);
      if (content !== '') {
        let contenthtml = convertMDToHtml(content);
        console.log(contenthtml);
        const dom = new JSDOM(contenthtml);
        if (dom.window.document.querySelector('a')) {
          let link = extractATagAttr(contenthtml, pathAbsolute);
          console.log(link);
          arrLinks.push(link);
        }
      }
    }
    return arrLinks;
  } else {
    let extension = paths.extname(pathAbsolute);
    if (extension === '.md') {
      const content = getMDContent(pathAbsolute);
      const contenthtml = convertMDToHtml(content);
      const link = extractATagAttr(contenthtml, pathAbsolute);
      const arrLink = createArrLinkObj(link);
      return arrLink;   
    }
  }   
};


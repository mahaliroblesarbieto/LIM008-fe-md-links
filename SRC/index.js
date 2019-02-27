import {evaluatePath, recognizeIfIsFile, getFiles, getMDContent, convertMDToHtml, extractATagAttr, createArrLinkObj} from './Models/links.js';
const paths = require('path');
export const mdLinks = (path) => {
  let pathAbsolute;
  if (evaluatePath(path)) {
    pathAbsolute = path;
  } else {
    pathAbsolute = transformToAbsPath(path);
  };
//  return new Promise((resolve, reject) => {
    if (recognizeIfIsFile(pathAbsolute) === false) {
      getFiles(pathAbsolute).forEach((archivo) => {
        const content = getMDContent(archivo);
        console.log(content);
        const contenthtml = convertMDToHtml(content);
        console.log(contenthtml);
        const link = extractATagAttr(contenthtml, pathAbsolute);
        console.log(link);
        const arrLink = createArrLinkObj(link);
        console.log(arrLink);
        return arrLink;
      });
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
//  });
// return arrLink;
};


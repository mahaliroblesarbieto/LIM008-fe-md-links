import {evaluatePath, recognizeIfIsFile, getFiles, getMDContent, convertMDToHtml, extractATagAttr, createArrLinkObj} from './Models/links.js';
const paths = require('path');
const mdLinks = (path, options) => {
  let pathAbsolute;
  let arrLink;
  if (evaluatePath(path) === true) {
    pathAbsolute = path;
  } else {
    pathAbsolute = transformToAbsPath(path);
  };

  if (recognizeIfIsFile(pathAbsolute) === false) {
    getFiles(pathAbsolute).forEach((archivo) => {
      getMDContent(archivo);
    });
  } else {
    let extension = paths.extname(pathAbsolute);
    if (extension === '.md') {
      const content = getMDContent(pathAbsolute);
      const contenthtml = convertMDToHtml(content);
      const link = extractATagAttr(contenthtml);
      arrLink = createArrLinkObj(link);
    }
  }
  return arrLink;
};

console.log(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/readme.md'));

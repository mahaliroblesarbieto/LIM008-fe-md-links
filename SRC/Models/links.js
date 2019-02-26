const paths = require('path');
const fs = require('fs');
const marked = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom; 
let arrObj = [];
let filesMD = [];

/**
 * Chequea si una ruta es absoluta o relativa
 * 
 * @param {la ruta en formato string} path
 * @returns true si absoluta
 * @returns false si es relativa 
 */
export const evaluatePath = (path) => {
  const typePath = paths.isAbsolute(path);
  return typePath;
};

export const transformToAbsPath = (path) => {
  const pathAbsolute = paths.resolve(path);
  return pathAbsolute;
};

export const recognizeIfIsFile = (pathAbs) => {
  const typeFile = fs.statSync(pathAbs).isFile();
  return typeFile;
};

export const getFiles = (pathAbs) => {
  let files = fs.readdirSync(pathAbs);
  files.forEach((element) => {
    let currentFile = paths.join(pathAbs, element);
    if (fs.statSync(currentFile).isFile() && paths.extname(currentFile) === '.md') {
      filesMD.push(currentFile);
    } else if (fs.statSync(currentFile).isDirectory()) {
      getFiles(currentFile);
    }
  });
  return filesMD;
};

console.log(getFiles('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'));

export const getMDContent = (pathAbsMD) => {
  let content = fs.readFileSync(pathAbsMD, 'utf8');
  return content;
};

/* ejemplo de getMDContent en versión asincrona
export const getMDContent = (pathAbsMD, callback) => {
  let content;
  fs.readFile(pathAbsMD, 'utf8', (err, data) => {
    if (err) throw err;
    content = data;
    callback(content);
  });
};*/


export const convertMDToHtml = (content) => {
  const contentHtml = marked(content);
  return contentHtml;
};

export const extractATagAttr = (htmlstring) => {
  const dom = new JSDOM(htmlstring);
  const contentHref = dom.window.document.querySelector('a').href;
  const contentText = dom.window.document.querySelector('a').textContent;
  const route = 'route';
  const attrLink = {href: contentHref, text: contentText, file: route};
  return attrLink;
};

export const createArrLinkObj = (obj) => {
  arrObj.push(obj);
  return arrObj;
};


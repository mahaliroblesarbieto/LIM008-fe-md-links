let paths = require('path');
let fs = require('fs');
let marked = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom; 

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
  let filesMD = [];
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

export const getMDContent = (pathAbsMD) => {
  let content = fs.readFile(pathAbsMD, 'utf8', (err, data) => {
    if (err) throw err;
    data;
  });
  return content;
};


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
  const arrObj = [obj];
  return arrObj;
};


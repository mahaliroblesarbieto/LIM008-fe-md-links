let paths = require('path');
let fs = require('fs');
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
  const content = '';
  return content;
};

export const convertMDToHtml = (content) => {
  const contentHtml = '';
  return contentHtml;
};

export const extractATagAttr = (htmlstring) => {
  const attrLink = {href: '', text: '', file: ''};
  return attrLink;
};

export const createArrLinkObj = (obj) => {
  const arrObj = [obj];
  return arrObj;
};
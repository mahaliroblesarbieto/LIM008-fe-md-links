const paths = require('path');
const fs = require('fs');
const marked = require('marked');

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
  let filesMD = [];
  let files = fs.readdirSync(pathAbs);
  files.forEach((element) => {
    let currentFile = paths.join(pathAbs, element);
    if (fs.statSync(currentFile).isFile() && paths.extname(currentFile) === '.md') {
      filesMD.push(currentFile);
    } else if (fs.statSync(currentFile).isDirectory()) {
      filesMD = filesMD.concat(getFiles(currentFile));
    }
  });
  return filesMD;
};

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

export const extractATagAttr = (aElement, path) => {
  const contentHref = aElement.href;
  const contentText = aElement.textContent;
  const route = path;
  const attrLink = {href: contentHref, text: contentText, file: route};
  return attrLink;
};



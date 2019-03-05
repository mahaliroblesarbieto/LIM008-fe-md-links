const paths = require('path');
const fs = require('fs');
const marked = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

export const getLinks = (pathAbsolute) => new Promise((resolve, reject) => {
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
    resolve(arrLinks);
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
    resolve(arrLinks);
  }
});

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
  const contentText = (String(aElement.textContent)).substring(0, 50);
  const route = path;
  const attrLink = {href: contentHref, text: contentText, file: route};
  return attrLink;
};



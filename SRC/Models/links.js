const paths = require('path');
const fs = require('fs');
const marked = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getLinks = (pathAbsolute) => new Promise((resolve, reject) => {
  if (!recognizeIfIsFile(pathAbsolute)) {
    const arrPath = getFiles(pathAbsolute);
    resolve(arrAttLink(arrPath, pathAbsolute));
  } else {
    let extension = paths.extname(pathAbsolute);
    if (extension === '.md') {
      const path = [pathAbsolute];
      resolve(arrAttLink(path, pathAbsolute));
    }
  }
});

const arrAttLink = (arrPaths, path) => {
  let arrLinks = [];
  for (let i = 0; i < arrPaths.length; i++) {
    const content = getMDContent(arrPaths[i]);
    if (content !== '') {
      const contenthtml = convertMDToHtml(content);
      const dom = new JSDOM(contenthtml);
      if (dom.window.document.querySelector('a')) {
        dom.window.document.querySelectorAll('a').forEach((archivo) => {
          arrLinks.push(extractATagAttr(archivo, path));
        });
      }
    }
  }
  return arrLinks; 
};

const recognizeIfIsFile = (pathAbs) => {
  const typeFile = fs.statSync(pathAbs).isFile();
  return typeFile;
};

const getFiles = (pathAbs) => {
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

const getMDContent = (pathAbsMD) => {
  let content = fs.readFileSync(pathAbsMD, 'utf8');
  return content;
};

const convertMDToHtml = (content) => {
  const contentHtml = marked(content);
  return contentHtml;
};

const extractATagAttr = (aElement, path) => {
  const contentHref = aElement.href;
  const contentText = (String(aElement.textContent)).substring(0, 50);
  const route = path;
  const attrLink = {href: contentHref, text: contentText, file: route};
  return attrLink;
};

module.exports = getLinks;

/* ejemplo de getMDContent en versión asincrona
export const getMDContent = (pathAbsMD, callback) => {
  let content;
  fs.readFile(pathAbsMD, 'utf8', (err, data) => {
    if (err) throw err;
    content = data;
    callback(content);
  });
};*/



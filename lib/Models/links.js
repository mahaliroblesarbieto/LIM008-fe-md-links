"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractATagAttr = exports.convertMDToHtml = exports.getMDContent = exports.getFiles = exports.recognizeIfIsFile = exports.transformToAbsPath = exports.evaluatePath = exports.getLinks = void 0;

const paths = require('path');

const fs = require('fs');

const marked = require('marked');

const jsdom = require('jsdom');

const {
  JSDOM
} = jsdom;

const getLinks = pathAbsolute => new Promise((resolve, reject) => {
  if (!recognizeIfIsFile(pathAbsolute)) {
    let arrLinks = [];
    const arrPath = getFiles(pathAbsolute);

    for (let i = 0; i < arrPath.length; i++) {
      const content = getMDContent(arrPath[i]);

      if (content !== '') {
        const contenthtml = convertMDToHtml(content);
        const dom = new JSDOM(contenthtml);

        if (dom.window.document.querySelector('a')) {
          dom.window.document.querySelectorAll('a').forEach(archivo => {
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
          dom.window.document.querySelectorAll('a').forEach(archivo => {
            arrLinks.push(extractATagAttr(archivo, pathAbsolute));
          });
        }
      }
    }

    resolve(arrLinks);
  }
});

exports.getLinks = getLinks;

const evaluatePath = path => {
  const typePath = paths.isAbsolute(path);
  return typePath;
};

exports.evaluatePath = evaluatePath;

const transformToAbsPath = path => {
  const pathAbsolute = paths.resolve(path);
  return pathAbsolute;
};

exports.transformToAbsPath = transformToAbsPath;

const recognizeIfIsFile = pathAbs => {
  const typeFile = fs.statSync(pathAbs).isFile();
  return typeFile;
};

exports.recognizeIfIsFile = recognizeIfIsFile;

const getFiles = pathAbs => {
  let filesMD = [];
  let files = fs.readdirSync(pathAbs);
  files.forEach(element => {
    let currentFile = paths.join(pathAbs, element);

    if (fs.statSync(currentFile).isFile() && paths.extname(currentFile) === '.md') {
      filesMD.push(currentFile);
    } else if (fs.statSync(currentFile).isDirectory()) {
      filesMD = filesMD.concat(getFiles(currentFile));
    }
  });
  return filesMD;
};

exports.getFiles = getFiles;

const getMDContent = pathAbsMD => {
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


exports.getMDContent = getMDContent;

const convertMDToHtml = content => {
  const contentHtml = marked(content);
  return contentHtml;
};

exports.convertMDToHtml = convertMDToHtml;

const extractATagAttr = (aElement, path) => {
  const contentHref = aElement.href;
  const contentText = String(aElement.textContent).substring(0, 50);
  const route = path;
  const attrLink = {
    href: contentHref,
    text: contentText,
    file: route
  };
  return attrLink;
};

exports.extractATagAttr = extractATagAttr;
const paths = require('path');


export const evaluatePath = (path) => {
const typePath = paths.isAbsolute(path);
return typePath;
}

export const transformToAbsPath = (path) => {
    const pathRelative = path;
    const pathAbsolute = "newPath";
return pathAbsolute;
}

export const recognizeIfIsFile = (pathAbs) => {
if (pathAbs) return true;
else return false;
}

export const getFiles = (pathAbs) => {
const files = [];
return files;
}


export const getMDContent = (pathAbsMD) => {
const content = '';
return content;
}

export const convertMDToHtml = (content) => {
    const contentHtml = '';
    return contentHtml;
}

export const extractATagAttr = (htmlstring) => {
    const attrLink = {href:'', text:'', file:''};
    return attrLink;
}

export const createArrLinkObj = (obj) => {
 const arrObj = [obj];
 return arrObj;
}
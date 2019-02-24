import {evaluatePath, recognizeIfIsFile, getFiles, getMDContent} from './Models/links.js';
const mdLinks = (path, options) => {
  if (evaluatePath(path) === true) {
    if (recognizeIfIsFile(path) === false) {
      getFiles(path);
    } else {
      let extension = path.extname(path);
      if (extension === '.md') {
        getMDContent(path);
      }
    }
  } else {
    const newPath = transformToAbsPath(path);
    if (recognizeIfIsFile(newPath) === false) {
      getFiles(path);
    } else {
      let extension = path.extname(path);
    };
  };
};

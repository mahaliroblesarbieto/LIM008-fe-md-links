import {evaluatePath, recognizeIfIsFile} from './Models/links.js';
const mdLinks = (path, options) => {
    if (evaluatePath(path) === true){
        recognizeIfIsFile()
    }else{
        transformToAbsPath()
    }
}

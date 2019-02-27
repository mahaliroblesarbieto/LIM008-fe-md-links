import { evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  getFiles,
  getMDContent,
  convertMDToHtml,
  extractATagAttr,
  createArrLinkObj} from '../SRC/Models/links.js';

import {extractHref,
  verifyLink,
  addVerification} from '../SRC/Models/validate.js';

import {calculateStats} from '../SRC/Models/stats.js';

import {mdLinks} from '../SRC/index.js';

import {probando} from '../SRC/cli.js';

const path = require('path');

const input3 = [];
const ouput = `<p>Hola Mundo</p>
`;

describe('evaluatePath', () => {
  it('debería ser una función', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('Debería retornar true al ingresar una ruta absoluta', () => {
    expect(evaluatePath('C:\\mi-ruta-absoluta')).toEqual(true);
  });
  it('Debería retornar false al ingresar una ruta relativa', () => {
    expect(evaluatePath('.\\mi-ruta-relativa')).toEqual(false);
  });
});

describe('transformToAbsPath', () => {
  it('debería ser una función', () => {
    expect(typeof transformToAbsPath).toBe('function');
  });
  it('Debería retornar un dato de tipo string', () => {
    expect(typeof transformToAbsPath('.\\mi-ruta-relativa')).toBe('string');
  });
  it('Debería retornar una ruta absoluta al ingresar una ruta relativa', () => {
    expect(transformToAbsPath('TEST/carpetapadre/carpetahijo2')).toEqual(path.normalize('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'));
  });
});

describe('recognizeIfIsFile', () => {
  it('debería ser una función', () => {
    expect(typeof recognizeIfIsFile).toBe('function');
  });
  it('Debería retornar un dato de tipo booleano', () => {
    expect(recognizeIfIsFile('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2')).toEqual(false);
  });
});

describe('getFiles', () => {
  it('debería ser una función', () => {
    expect(typeof getFiles).toBe('function');
  });
  it('Debería retornar un array con las rutas absolutas de los archivos markdown que se encuentren en la carpeta', () => {
    expect(getFiles('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre')).toEqual(['C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre\\carpetahijo1\\3.md', 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre\\carpetahijo2\\A.md', 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre\\carpetahijo2\\readme.md']);
  });
});

describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });
  it('Debería retornar un dato de tipo string', () => {
    expect(typeof getMDContent('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/readme.md')).toBe('string');
  });
  it('Debería retornar contenido del archivo markdown en dato de tipo string', () => {
    expect(getMDContent('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/readme.md')).toEqual('Hola Mundo');
  });
});

describe('convertMDToHtml', () => {
  it('debería ser una función', () => {
    expect(typeof convertMDToHtml).toBe('function');
  });
  it('Debería retornar un dato de tipo string', () => {
    expect(typeof convertMDToHtml('Hola Mundo')).toBe('string');
  });
  it('Debería retornar html en string', () => {
    expect(convertMDToHtml('Hola Mundo')).toBe(ouput);
  });
});

describe('extractATagAttr', () => {
  it('debería ser una función', () => {
    expect(typeof extractATagAttr).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof extractATagAttr('<a id="post-all" href="javascript:void(0)">Hola Mundo</a>')).toBe('object');
  });
  it('Debería retornar un objeto con href, text y ruta de archivo', () => {
    expect(extractATagAttr('<a id="post-all" href="javascript:void(0)">Hola Mundo</a>', 'ruta')).toEqual({href: 'javascript:void(0)', text: 'Hola Mundo', file: 'ruta'});
  });
});

describe('createArrLinkObj', () => {
  it('debería ser una función', () => {
    expect(typeof createArrLinkObj).toBe('function');
  });
  it('Debería retornar un objeto dentro de un array', () => {
    expect(createArrLinkObj({href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'})).toEqual([{href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'}]);
  });
});

describe('extractHref', () => {
  it('debería ser una función', () => {
    expect(typeof extractHref).toBe('function');
  });
  it('Debería retornar la propiedad hrefquese encuntradentro de cada objeto del array de links', () => {
    expect(extractHref([{href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'}, {href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'}])).toEqual(['javascript:void(0)', 'javascript:void(0)']);
  });
});

describe('verifyLink', () => {
  it('debería ser una función', () => {
    expect(typeof verifyLink).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof verifyLink(input3)).toBe('object');
  });
});

describe('addVerification', () => {
  it('debería ser una función', () => {
    expect(typeof addVerification).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof addVerification(input3)).toBe('object');
  });
});

describe('calculateStats', () => {
  it('debería ser una función', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof calculateStats(input3)).toBe('object');
  });
});

describe('mdLinks', () => {
  it('Debería retornar un array que contenga unobjetocon los atribtos de los links encontrados dentro de la ruta', () => {
    expect(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/A.md')).toEqual([{href: 'javascript:void(0)', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/A.md'}]);
  });
  fit('Debería retornar un array que contenga unobjetocon los atribtos de los links encontrados dentro de la ruta', () => {
    expect(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2')).toEqual([{href: 'javascript:void(0)', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'}]);
  });
});
  


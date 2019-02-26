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

const path = require('path');

const input3 = [];
const ouput = `<p>Hola Mundo</p>
`;
const ouput2 = [{href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'}, {href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'}];

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
  it('Debería retornar un dato de tipo array', () => {
    expect(typeof getFiles('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre')).toBe('object');
  });
  it('Debería retornar un array con las rutas absolutas de los archivos markdown que se encuentren en la carpeta', () => {
    expect(getFiles('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre')).toEqual([]);
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
    expect(extractATagAttr('<a id="post-all" href="javascript:void(0)">Hola Mundo</a>')).toEqual({href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'});
  });
});

describe('createArrLinkObj', () => {
  it('debería ser una función', () => {
    expect(typeof createArrLinkObj).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof createArrLinkObj({href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'})).toBe('object');
  });
  it('Debería retornar un objeto dentro de un array', () => {
    expect(createArrLinkObj({href: 'javascript:void(0)', text: 'Hola Mundo', file: 'route'})).toEqual(ouput2);
  });
});

describe('extractHref', () => {
  it('debería ser una función', () => {
    expect(typeof extractHref).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof extractHref(input3)).toBe('object');
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
  


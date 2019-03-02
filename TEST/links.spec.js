import { evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  getFiles,
  getMDContent,
  convertMDToHtml,
  extractATagAttr} from '../SRC/Models/links.js';

import {calculateStats} from '../SRC/Models/stats.js';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const path = require('path');

const input = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre';
const input2 = new JSDOM('<a id="post-all" href="javascript:void(0)">Hola Mundo</a>').window.document.querySelector('a');
const input3 = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/segundo.md';
const input4 = new JSDOM('<a id="post-all" href="javascript:void(0)">Hola Mundo, mi hobbie es la programacion y hacer deporte</a>').window.document.querySelector('a');
const ouput = ['C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre\\carpetahijo1\\primero.md', 
  'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre\\carpetahijo2\\readme.md', 
  'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre\\carpetahijo2\\segundo.md'];
const ouput1 = 'Hola estoy probando';

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
    expect(transformToAbsPath('TEST/carpetapadre')).toEqual(path.normalize(input));
  });
});

describe('recognizeIfIsFile', () => {
  it('debería ser una función', () => {
    expect(typeof recognizeIfIsFile).toBe('function');
  });
  it('Debería retornar un dato de tipo booleano', () => {
    expect(recognizeIfIsFile(input)).toEqual(false);
  });
});

describe('getFiles', () => {
  it('debería ser una función', () => {
    expect(typeof getFiles).toBe('function');
  });
  it('Debería retornar un array con las rutas absolutas de los archivos markdown que se encuentren en la carpeta', () => {
    expect(getFiles(input)).toEqual(ouput);
  });
});

describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });
  it('Debería retornar un dato de tipo string', () => {
    expect(typeof getMDContent(input3)).toBe('string');
  });
  it('Debería retornar contenido del archivo markdown en dato de tipo string', () => {
    expect(getMDContent(input3)).toBe(ouput1);
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
    expect(convertMDToHtml('Hola Mundo')).toEqual('<p>Hola Mundo</p>' + '\n');
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
    expect(extractATagAttr(input2, 'ruta')).toEqual({href: 'javascript:void(0)', text: 'Hola Mundo', file: 'ruta'});
  });
  it('Debería retornar un objeto con href, text recortado a 50 caracteres y ruta de archivo', () => {
    expect(extractATagAttr(input4, 'ruta')).toEqual({href: 'javascript:void(0)', text: 'Hola Mundo, mi hobbie es la programacion y hacer d', file: 'ruta'});
  });
});

// describe('calculateStats', () => {
//   it('debería ser una función', () => {
//     expect(typeof calculateStats).toBe('function');
//   });
//   it('Debería retornar un dato de tipo objeto', () => {
//     expect(typeof calculateStats(input3)).toBe('object');
//   });
// });
  


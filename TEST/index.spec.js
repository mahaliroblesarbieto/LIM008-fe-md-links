import { evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  getFiles,
  getMDContent,
  getMDContentSync,
  convertMDToHtml,
  extractATagAttr,
  createArrLinkObj} from '../SRC/Models/links.js';

import {extractHref,
  verifyLink,
  addVerification} from '../SRC/Models/validate.js';

import {calculateStats} from '../SRC/Models/stats.js';

const input = 'C:\\test\\demo_path.js';
const input4 = 'test/demo_path.js';
const input2 = {};
const input3 = [];
const input5 = 'D:\lim-2018-11-bc-core-am-data-lovers';
const input6 = 'D:/lim-2018-11-bc-core-am-data-lovers/README.md';
const input7 = 'Marked Example Code renderer for marked that converts HTML code blocks into examples with rendered HTML and highlighted code using highlight.js';
const input8 = 'hola';
const input9 = `<a id="post-all"  class = "width container" href="javascript:void(0)">Todas las publicaciones</a>
`;
const ouput = `<p>hola</p>
`;
const ouput2 = {href: 'javascript:void(0)', text: 'Todas las publicaciones', file: 'route'};
const ouput3 = [{href: 'javascript:void(0)', text: 'Todas las publicaciones', file: 'route'}, {href: 'javascript:void(0)', text: 'Todas las publicaciones', file: 'route'}];
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
    expect(typeof transformToAbsPath(input4)).toBe('string');
  });
});


describe('recognizeIfIsFile', () => {
  it('debería ser una función', () => {
    expect(typeof recognizeIfIsFile).toBe('function');
  });
  it('Debería retornar un dato de tipo booleano', () => {
    expect(recognizeIfIsFile(input5)).toEqual(false);
  });
});

describe('getFiles', () => {
  it('debería ser una función', () => {
    expect(typeof getFiles).toBe('function');
  });
  it('Debería retornar un dato de tipo array', () => {
    expect(typeof getFiles(input5)).toBe('object');
  });
});

describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });
  it('Debería retornar un dato de tipo string', () => {
    expect(typeof getMDContent(input6)).toBe('string');
  });
});

describe('convertMDToHtml', () => {
  it('debería ser una función', () => {
    expect(typeof convertMDToHtml).toBe('function');
  });
  it('Debería retornar un dato de tipo string', () => {
    expect(typeof convertMDToHtml(input7)).toBe('string');
  });
  it('Debería retornar html en string', () => {
    expect(convertMDToHtml(input8)).toBe(ouput);
  });
});

describe('extractATagAttr', () => {
  it('debería ser una función', () => {
    expect(typeof extractATagAttr).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof extractATagAttr(input9)).toBe('object');
  });
  it('Debería retornar un objeto con href, text y ruta de archivo', () => {
    expect(extractATagAttr(input9)).toEqual(ouput2);
  });
});

describe('createArrLinkObj', () => {
  it('debería ser una función', () => {
    expect(typeof createArrLinkObj).toBe('function');
  });
  it('Debería retornar un dato de tipo objeto', () => {
    expect(typeof createArrLinkObj(ouput2)).toBe('object');
  });
  it('Debería retornar un objeto dentro de un array', () => {
    expect(createArrLinkObj(ouput2)).toEqual(ouput3);
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
  


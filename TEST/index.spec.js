import {mdLinks} from '../SRC/index.js';

const ouput = [{ href: 'javascript:void(0)', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'},
  { href: 'javascript:void(0)', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'}];
const ouput2 = [{ href: 'javascript:void(0)', text: 'primero', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'},
  { href: 'javascript:void(0)', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'},
  { href: 'javascript:void(0)', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'}];
const ouput3 = [{ href: 'javascript:void(0)', text: 'primero', file: 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre'},
  { href: 'javascript:void(0)', text: 'Hola Mundo', file: 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre'},
  { href: 'javascript:void(0)', text: 'chau', file: 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre'}];

describe('mdLinks', () => {
  it('Al ingresar la ruta absoluta de una carpeta que contiene archivos debería retornar un array que contenga un objeto con los atributos de los links encontrados dentro de la ruta', () => {
    expect(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2')).toEqual(ouput);
  });
  it('Al ingresar la ruta absoluta de una carpeta que contiene archivos y carpetas debería retornar un array que contenga un objeto con los atributos de los links encontrados dentro de la ruta', () => {
    expect(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre')).toEqual(ouput2);
  });
  it('Al ingresar la ruta relativa de una carpeta que contiene archivos y carpetas debería retornar un array que contenga un objeto con los atributos de los links encontrados dentro de la ruta', () => {
    expect(JSON.stringify(mdLinks('TEST/carpetapadre'), null, 4)).toEqual(JSON.stringify(ouput3, null, 4));
  });
//   it('Debería retornar un array que contenga un objeto con los atribtos de los links encontrados dentro de la ruta', () => {
//     expect(mdLinks('C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/A.md')).toEqual([{href: 'javascript:void(0)', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/A.md'}]);
//   });
});
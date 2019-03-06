// import {mdLinks} from '../SRC/index.js';
const mdLinks = require('../SRC/index.js')

const input = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'; 
const input2 = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'; 
const input4 = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/readme.md';
const ouput = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'}];
const ouput2 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'primero', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'},
  { href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre'}];
const ouput3 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'primero', file: 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre'},
  { href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:\\Users\\Henry\\Documents\\javascript-proyecto-laboratoria\\PROYECTO-PORTAFOLIO\\LIM008-fe-md-links\\TEST\\carpetapadre'}];
const ouput4 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/readme.md'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2/readme.md'}];
const ouput5 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 200, value: 'OK'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 404, value: 'Fail'}];
const ouput6 = {total: 2, unique: 2};
const ouput7 = {total: 2, unique: 2, broken: 1};

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
});

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y carpetas debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input2).then((respuesta) => {
    expect(respuesta).toEqual(ouput2);
    done();
  });
});


test('Al ingresar la ruta relativa de una carpeta que contiene archivos y carpetas debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks('TEST/carpetapadre').then((respuesta) => {
    expect(JSON.stringify(respuesta, null, 4)).toEqual(JSON.stringify(ouput3, null, 4));
    done();
  });
});

test('Al ingresar la ruta absoluta de un archivo debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input4).then((respuesta) => {
    expect(respuesta).toEqual(ouput4);
    done();
  });
});

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un array con los links encontrados dentro de la ruta junto con las propiedades status y value', (done) => {
  mdLinks(input, {validate: true, stats: false}).then((respuesta) => {
    expect(respuesta).toEqual(ouput5);
    done();
  });
});

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar el total de links y cuantos son unicos', (done) => {
  mdLinks(input, {validate: false, stats: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput6);
    done();
  });
});

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar el total de links, cuantos son unicos y cuantos son broken', (done) => {
  mdLinks(input, {validate: true, stats: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput7);
    done();
  });
});

const mdLinks = require('../SRC/index.js');
const path = require('path');
// './TEST/carpetapadre/carpetahijo2'

const input = path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2')); 
const input2 = path.normalize(path.join(__dirname, './carpetapadre'));
const input4 = path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2/readme.md'));
const ouput = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2'))},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2'))}];
const ouput2 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'primero', file: path.normalize(path.join(__dirname, './carpetapadre'))},
  { href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: path.normalize(path.join(__dirname, './carpetapadre'))},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: path.normalize(path.join(__dirname, './carpetapadre'))}];
const ouput3 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'primero', file: path.normalize(path.join(__dirname, './carpetapadre'))},
  { href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: path.normalize(path.join(__dirname, './carpetapadre'))},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: path.normalize(path.join(__dirname, './carpetapadre'))}];
const ouput4 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2/readme.md'))},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2/readme.md'))}];
const ouput5 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2')), status: 200, value: 'OK'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: path.normalize(path.join(__dirname, './carpetapadre/carpetahijo2')), status: 404, value: 'Fail'}];
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

test('Al ingresar la ruta absoluta de un archivo debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input4).then((respuesta) => {
    expect(respuesta).toEqual(ouput4);
    done();
  });
});

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un array con los links encontrados dentro de la ruta junto con las propiedades status y value', (done) => {
  mdLinks(input, {validate: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput5);
    done();
  });
});

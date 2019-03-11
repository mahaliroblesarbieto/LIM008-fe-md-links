const getLinks = require('../SRC/Models/links.js');
const path = require('path');

const input = path.normalize(path.join(__dirname, './carpetapadre'));
const input2 = path.normalize(path.join(__dirname, './carpetapadre/carpetahijo1/primero.md'));
const ouput = [{file: path.normalize(path.join(__dirname, './carpetapadre')), href: 'https://www.npmjs.com/package/link-check', text: 'primero'},
  {file: path.normalize(path.join(__dirname, './carpetapadre')), href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo'},
  {file: path.normalize(path.join(__dirname, './carpetapadre')), href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau'}];
const ouput2 = [{file: path.normalize(path.join(__dirname, './carpetapadre/carpetahijo1/primero.md')), href: 'https://www.npmjs.com/package/link-check', text: 'primero'}];
test('Al ingresar la ruta absoluta de una carpeta que contiene archivos debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  getLinks(input).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
});

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos y carpetas debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  getLinks(input2).then((respuesta) => {
    expect(respuesta).toEqual(ouput2);
    done();
  });
});


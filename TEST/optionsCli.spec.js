const showInCli = require('../SRC/Models/optionsCli.js');
const path = require('path');

const input = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2'}];
const input2 = [{ href: 'https://www.npmjs.com/package/link-check', text: 'Hola Mundo', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 200, value: 'OK'},
  { href: 'https://github.com/Laboratoria/LIM008-fe-md-links/src', text: 'chau', file: 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2', status: 404, value: 'Fail'}];

const ouput = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://www.npmjs.com/package/link-check, Hola Mundo\nC:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://github.com/Laboratoria/LIM008-fe-md-links/src, chau\n';
const ouput2 = 'C:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://www.npmjs.com/package/link-check, Hola Mundo, 200, OK\nC:/Users/Henry/Documents/javascript-proyecto-laboratoria/PROYECTO-PORTAFOLIO/LIM008-fe-md-links/TEST/carpetapadre/carpetahijo2, https://github.com/Laboratoria/LIM008-fe-md-links/src, chau, 404, Fail\n';
const ouput3 =
'Total:2 \nUnique:2';
const ouput4 =
'Total:2 \nUnique:2 \nBroken:1';

test('Debería retornar los links encontrados dentro de la ruta', (done) => {
  showInCli(input).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
});

test('Debería retornar los links encontrados dentro de la ruta con su respectivo status y el valor si es ok o fail', (done) => {
  showInCli(input2, {validate: true, stats: false}).then((respuesta) => {
    expect(respuesta).toEqual(ouput2);
    done();
  });
});

test('Debería retornar el total de links y cuantos son unicos o no se repiten', (done) => {
  showInCli(input, {validate: false, stats: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput3);
    done();
  });
});

test('Debería retornar el total de links y cuantos son unicos o no se repiten', (done) => {
  showInCli(input, {validate: false, stats: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput3);
    done();
  });
});

test('Debería retornar el total de links, cuantos son unicos y cuantos estan rotos', (done) => {
  showInCli(input2, {validate: false, stats: true}).then((respuesta) => {
    expect(respuesta).toEqual(ouput4);
    done();
  });
});
